export const SANDBOX_SAAS_BILLING_TERMS_VERSION =
  "f026-sandbox-2026-08-02-v1";

export const SANDBOX_SAAS_BILLING_TERMS_TEXT = `Add4x SaaS Billing Sandbox Test Agreement
Version: f026-sandbox-2026-08-02-v1
Effective for sandbox testing: August 2, 2026

SANDBOX-ONLY NOTICE

This document exists only to test the Add4x SaaS subscription enrollment flow with Stripe sandbox data. It is not offered for production use, does not authorize live charges, and is not the production merchant SaaS agreement. No real money is collected under this document.

By accepting this document in the sandbox, the tester confirms the following test behavior:

1. The billing quote shown immediately before acceptance identifies the assigned plan, monthly base price, included and additional locations, applicable tax treatment, any approved free period, and the separate per-order platform fee.

2. The tester authorizes Add4x to use the test payment method provided during enrollment for recurring Stripe sandbox subscription charges after any displayed free period ends.

3. A free or discounted subscription period does not waive the separately disclosed per-order platform fee unless the billing quote expressly says otherwise.

4. Subscription cancellation is scheduled for the end of the current test billing term. The sandbox flow does not issue a partial-period subscription refund unless Add4x explicitly records a different test disposition.

5. Failed sandbox payments can move the test subscription through retry, past-due, unpaid, paused, or canceled states according to the behavior shown in the Add4x billing interface.

6. This acceptance records only that the sandbox enrollment, disclosure, authorization, and audit-evidence paths were exercised. It creates no production service commitment and must not be reused to enable live merchant enrollment.

Questions about this sandbox test document can be sent to developer@muffinmenu.com.`;
