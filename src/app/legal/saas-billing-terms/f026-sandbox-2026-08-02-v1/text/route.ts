import { SANDBOX_SAAS_BILLING_TERMS_TEXT } from "@/content/saas-billing-terms-2026-08-sandbox";

export const dynamic = "force-static";

export function GET() {
  return new Response(SANDBOX_SAAS_BILLING_TERMS_TEXT, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
