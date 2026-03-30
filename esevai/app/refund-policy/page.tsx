// app/refund-policy/page.tsx
export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#1e3a5f' }}>
            Refund Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: December 2, 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                Overview
              </h2>
              <p>
                At Eazy Sevai, we strive to provide excellent service. However, we understand that circumstances may require cancellation or refund requests. This policy outlines our refund terms clearly and transparently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                1. Refund Eligibility
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-2">✅ FULL REFUND (100%)</h3>
                  <p className="mb-2">You are eligible for a full refund of professional service fee if:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Application has NOT been submitted to government</li>
                    <li>Request made within 24 hours of payment</li>
                    <li>No processing work has been initiated</li>
                    <li>Service cancellation requested before document verification begins</li>
                  </ul>
                  <p className="mt-2 text-sm font-semibold">
                    Refund processing time: 5-7 business days
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-lg mb-2">⚠️ PARTIAL REFUND (50%)</h3>
                  <p className="mb-2">You may be eligible for a partial refund if:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Document verification has started but application not submitted</li>
                    <li>Cancellation requested after 24 hours but before 72 hours</li>
                    <li>Substantial processing work has been completed</li>
                  </ul>
                  <p className="mt-2 text-sm font-semibold">
                    Decision at Eazy Sevai's discretion based on work completed
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500">
                  <h3 className="font-semibold text-lg mb-2">❌ NO REFUND (0%)</h3>
                  <p className="mb-2">No refund will be provided if:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Application has been submitted to government authorities</li>
                    <li>Application is rejected due to your ineligibility or incorrect information</li>
                    <li>You fail to provide required documents within specified timeframe</li>
                    <li>You fail to attend required government appointments or inspections</li>
                    <li>Application is rejected due to government policy changes</li>
                    <li>Cancellation requested after 72 hours of payment</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                2. Government Statutory Fees
              </h2>
              <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <p className="font-semibold mb-2">⚠️ IMPORTANT: Government fees are NON-REFUNDABLE in ALL cases.</p>
                <p>
                  Government statutory fees, once paid to authorities, cannot be refunded by Eazy Sevai under any circumstances. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Application fees</li>
                  <li>Processing charges</li>
                  <li>Stamp duty</li>
                  <li>Registration fees</li>
                  <li>Any other government levies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                3. Refund Process
              </h2>
              <p className="mb-3">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Submit Request:</strong> Email sevai@vysegroup.com with:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Order ID / Transaction ID</li>
                    <li>Reason for refund</li>
                    <li>Original payment proof</li>
                    <li>Contact details</li>
                  </ul>
                </li>
                <li>
                  <strong>Review:</strong> We will review your request within 2 business days
                </li>
                <li>
                  <strong>Approval:</strong> If approved, refund will be processed to original payment method
                </li>
                <li>
                  <strong>Processing Time:</strong> 
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Online payments (UPI/Card): 5-7 business days</li>
                    <li>Bank transfers: 7-10 business days</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                4. Service-Specific Refund Terms
              </h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-1">🟢 Fully Online Services</h3>
                  <p className="text-sm">Full refund if application not submitted. No refund after submission.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">🟡 Physical Presence Required Services</h3>
                  <p className="text-sm">
                    Full refund before appointment booking. No refund if you miss scheduled appointments without valid reason.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">🟠 Site Inspection Required Services</h3>
                  <p className="text-sm">
                    Full refund before inspection coordination begins. No refund if inspection is scheduled and you're unavailable.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">🔴 Variable Fee Services</h3>
                  <p className="text-sm">
                    Professional fee refundable before submission. Government fees calculated at actuals are non-refundable.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                5. Non-Refundable Scenarios
              </h2>
              <p className="mb-3">No refunds will be provided in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Customer-Caused Delays:</strong> If you don't provide documents within the specified timeframe</li>
                <li><strong>Ineligibility:</strong> If you're found ineligible for the service after application submission</li>
                <li><strong>Government Rejection:</strong> If government rejects application due to policy, verification failure, or any other reason</li>
                <li><strong>Incorrect Information:</strong> If you provided false or misleading information</li>
                <li><strong>Change of Mind:</strong> Once work has commenced (after 72 hours of payment)</li>
                <li><strong>Third-Party Issues:</strong> Payment gateway charges, bank charges, or processing fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                6. Exceptions & Special Cases
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Technical Issues</p>
                  <p className="text-sm">
                    If payment is debited but service not confirmed due to technical error, full refund will be processed within 7 days.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Duplicate Payments</p>
                  <p className="text-sm">
                    If you accidentally made duplicate payment for same service, duplicate amount will be refunded within 5 days.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Service Unavailability</p>
                  <p className="text-sm">
                    If we're unable to provide the service due to operational reasons, full refund will be issued.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                7. Refund Deductions
              </h2>
              <p className="mb-3">The following may be deducted from refund amount:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment gateway charges (2-3% of transaction)</li>
                <li>Bank processing fees (if applicable)</li>
                <li>Actual work completed (for partial refunds)</li>
                <li>Government fees already paid (non-refundable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                8. Dispute Resolution
              </h2>
              <p className="mb-3">
                If you're not satisfied with our refund decision:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Email detailed complaint to sevai@vysegroup.com</li>
                <li>We will review and respond within 5 business days</li>
                <li>If dispute remains unresolved, you may escalate to consumer forum</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                9. Contact for Refunds
              </h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">For refund requests or queries:</p>
                <p>Email: sevai@vysegroup.com</p>
                <p>Phone: +91 99446 33029</p>
                <p>Subject Line: "Refund Request - [Order ID]"</p>
                <p className="mt-3 text-sm text-gray-600">
                  Please include your order ID, payment proof, and reason for refund request.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> This refund policy is subject to our Terms & Conditions. By using Eazy Sevai services, you agree to this refund policy. We reserve the right to modify this policy. Changes will be effective immediately upon posting on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}