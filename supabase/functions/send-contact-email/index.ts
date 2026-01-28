import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Send email using Resend template
    // Replace 'YOUR_TEMPLATE_ID' with your actual Resend template ID
    const emailResponse = await resend.emails.send({
      from: "IT Complete <noreply@itcomplete.com.br>", // Replace with your verified domain
      to: [email],
      subject: "Recebemos sua mensagem - IT Complete",
      // Option 1: Use a template (uncomment and add your template ID)
      // react: undefined,
      // html: undefined,
      // template_id: "YOUR_TEMPLATE_ID",
      // data: {
      //   name: name,
      //   company: company,
      //   service: service || "Não especificado",
      // },
      
      // Option 2: Inline HTML (remove this if using template)
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">IT Complete</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333;">Olá, ${name}! 👋</h2>
            
            <p>Recebemos sua mensagem e agradecemos pelo contato!</p>
            
            <p>Nossa equipe analisará sua solicitação e retornará em breve.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <p style="margin: 0 0 10px 0;"><strong>Resumo do seu contato:</strong></p>
              <p style="margin: 5px 0;">📧 <strong>Empresa:</strong> ${company}</p>
              <p style="margin: 5px 0;">🔧 <strong>Serviço:</strong> ${service || "Não especificado"}</p>
              <p style="margin: 5px 0;">💬 <strong>Mensagem:</strong> ${message || "Sem mensagem adicional"}</p>
            </div>
            
            <p>Se você tiver alguma dúvida urgente, entre em contato conosco pelo telefone <strong>(11) 3000-0000</strong>.</p>
            
            <p style="margin-top: 30px;">
              Atenciosamente,<br>
              <strong>Equipe IT Complete</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} IT Complete. Todos os direitos reservados.</p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
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
