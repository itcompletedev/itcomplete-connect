import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Input validation schema
const ContactRecordSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  company: z.string().max(200).nullable().optional(),
  phone: z.string().max(30).nullable().optional(),
  service: z.string().max(100).nullable().optional(),
  message: z.string().max(2000).nullable().optional(),
  created_at: z.string(),
});

const WebhookPayloadSchema = z.object({
  type: z.enum(["INSERT", "UPDATE", "DELETE"]),
  table: z.string(),
  record: ContactRecordSchema,
  schema: z.string(),
  old_record: z.unknown().nullable(),
});

// HTML escape function to prevent XSS
function escapeHtml(unsafe: string | null | undefined): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication - webhook should include service role key
    const authHeader = req.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`) {
      console.error("Unauthorized request - missing or invalid authorization header");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Parse and validate the webhook payload
    const rawPayload = await req.json();
    const parseResult = WebhookPayloadSchema.safeParse(rawPayload);

    if (!parseResult.success) {
      console.error("Invalid webhook payload:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Invalid payload format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const payload = parseResult.data;

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

    const { name, email, company, phone, service, message, created_at } = payload.record;

    console.log(`Sending confirmation email to ${escapeHtml(email)}`);

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
            name: escapeHtml(name),
            company: escapeHtml(company) || "Não informada",
            service: escapeHtml(service) || "Não especificado",
            message: escapeHtml(message) || "Sem mensagem adicional",
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
        subject: `Nova solicitação de contato: ${escapeHtml(name)}`,
        html: `
          <h2>Nova solicitação de contato recebida</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(phone) || "Não informado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(company) || "Não informada"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Serviço:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(service) || "Não especificado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mensagem:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(message) || "Sem mensagem"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666;">
            Recebido em: ${new Date(created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
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
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
