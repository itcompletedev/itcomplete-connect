import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  record: {
    id: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    created_at: string;
  };
  schema: string;
  old_record: null | Record<string, unknown>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const payload: WebhookPayload = await req.json();

    // Validate this is an INSERT event
    if (payload.type !== "INSERT") {
      return new Response(
        JSON.stringify({ message: "Not an INSERT event, skipping" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, service, message } = payload.record;

    // Validate required fields
    if (!email || !name) {
      throw new Error("Missing required fields: email or name");
    }

    console.log(`Sending confirmation email to ${email}`);

    // Send confirmation email to customer using Resend API with template
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "IT Complete <comercial@itcomplete.com.br>",
        to: [email],
        subject: "Recebemos sua mensagem - IT Complete",
        template: {
          id: "be56005c-6881-4fa8-8783-4e972c0bfcd6",
          variables: {
            name: name,
            company: company || "Não informada",
            service: service || "Não especificado",
            message: message || "Sem mensagem adicional",
          },
        },
      }),
    });

    const customerEmailData = await customerEmailResponse.json();

    if (!customerEmailResponse.ok) {
      throw new Error(`Resend API error (customer) [${customerEmailResponse.status}]: ${JSON.stringify(customerEmailData)}`);
    }

    console.log("Customer email sent successfully:", customerEmailData);

    // Send notification email to IT Complete team
    console.log("Sending notification email to comercial@itcomplete.com.br");

    const notificationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "IT Complete <comercial@itcomplete.com.br>",
        to: ["comercial@itcomplete.com.br"],
        subject: `Nova solicitação de contato: ${name}`,
        html: `
          <h2>Nova solicitação de contato recebida</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${payload.record.phone || "Não informado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company || "Não informada"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Serviço:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${service || "Não especificado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mensagem:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message || "Sem mensagem"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666;">
            Recebido em: ${new Date(payload.record.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        `,
      }),
    });

    const notificationEmailData = await notificationEmailResponse.json();

    if (!notificationEmailResponse.ok) {
      console.error(`Notification email failed [${notificationEmailResponse.status}]:`, notificationEmailData);
      // Don't throw - customer email was already sent successfully
    } else {
      console.log("Notification email sent successfully:", notificationEmailData);
    }

    return new Response(JSON.stringify({ success: true, customerEmailData, notificationEmailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
