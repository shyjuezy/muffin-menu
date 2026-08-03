import { createHash } from "node:crypto";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  SANDBOX_SAAS_BILLING_TERMS_TEXT,
  SANDBOX_SAAS_BILLING_TERMS_VERSION,
} from "@/content/saas-billing-terms-2026-08-sandbox";

export const metadata: Metadata = {
  title: "SaaS Billing Sandbox Test Agreement - Muffin Menu",
  description:
    "Versioned sandbox-only agreement used to validate Add4x SaaS billing enrollment.",
  robots: {
    index: false,
    follow: false,
  },
};

const textHash = createHash("sha256")
  .update(SANDBOX_SAAS_BILLING_TERMS_TEXT, "utf8")
  .digest("hex");

export default function SandboxSaasBillingTermsPage() {
  return (
    <>
      <Nav />
      <main className="mm-policy">
        <section className="mm-policy-hero">
          <div className="mm-hero-bg" />
          <div className="mm-wrap">
            <span className="mm-kicker">Sandbox only</span>
            <h1>SaaS Billing Sandbox Test Agreement</h1>
            <p>
              This versioned document validates the subscription enrollment
              and acceptance-evidence flow in Stripe sandbox. It is not the
              production merchant agreement and cannot authorize live charges.
            </p>
            <p className="mm-policy-date">
              Version: {SANDBOX_SAAS_BILLING_TERMS_VERSION}
            </p>
          </div>
        </section>

        <section className="mm-policy-body">
          <div className="mm-wrap">
            <div className="mm-policy-card">
              <section className="mm-policy-section">
                <h2>Canonical agreement text</h2>
                <p>
                  The text below is the exact content represented by the
                  acceptance hash. It is intentionally immutable for this
                  version.
                </p>
                <dl className="mm-policy-evidence">
                  <div>
                    <dt>SHA-256</dt>
                    <dd>{textHash}</dd>
                  </div>
                  <div>
                    <dt>Plain-text source</dt>
                    <dd>
                      <a href="/legal/saas-billing-terms/f026-sandbox-2026-08-02-v1/text">
                        Open the exact text used for hashing
                      </a>
                    </dd>
                  </div>
                </dl>
                <pre className="mm-policy-terms-text">
                  {SANDBOX_SAAS_BILLING_TERMS_TEXT}
                </pre>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
