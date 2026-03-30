// app/terms/page.tsx
export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#1e3a5f' }}>
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: December 2, 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                1. Service Scope
              </h2>
              <p className="mb-3">
                Eazy Sevai is a professional documentation consultancy service. We provide assistance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Form filling and application preparation</li>
                <li>Document verification and quality checks</li>
                <li>Application submission to government departments</li>
                <li>Follow-up coordination with authorities</li>
                <li>Status tracking and updates</li>
              </ul>
              <p className="mt-3 font-semibold text-red-600">
                Important: We are NOT a government agency. We are an authorized documentation service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                2. Customer Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Physical Presence:</strong> Certain services require your physical presence at government offices for biometrics, verification, or testing. This will be clearly indicated on the service page.</li>
                <li><strong>Site Inspections:</strong> Some services require government officials to inspect your premises. You must facilitate such inspections.</li>
                <li><strong>Document Accuracy:</strong> You must provide accurate, complete, and genuine documents. Any misrepresentation may result in application rejection.</li>
                <li><strong>Government Fees:</strong> For services with variable statutory fees, you agree to pay government fees directly at actuals as determined by authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                3. Fees & Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Professional Fee:</strong> Our professional service fee as displayed on each service page</li>
                <li><strong>Statutory Fee:</strong> Government fees (where applicable) - paid to government authorities</li>
                <li><strong>GST:</strong> 18% GST applicable only on professional fee, not on government statutory fee</li>
                <li><strong>Variable Fees:</strong> Services marked with "At Actuals" have variable government fees based on property size, location, or business type</li>
                <li><strong>Payment Terms:</strong> Full payment required before application submission unless otherwise agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                4. Processing Time
              </h2>
              <p>
                Processing times indicated on service pages are estimates based on typical government processing schedules. Actual processing time may vary due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Document completeness and accuracy</li>
                <li>Government department workload</li>
                <li>Inspection or verification requirements</li>
                <li>Public holidays and administrative delays</li>
              </ul>
              <p className="mt-3 font-semibold">
                Eazy Sevai is not responsible for delays caused by government processing or third-party agencies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                5. Refund Policy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before Submission:</strong> Full refund of professional fee if application not submitted to government</li>
                <li><strong>After Submission:</strong> No refund once application is submitted to government authorities</li>
                <li><strong>Statutory Fees:</strong> Government fees are non-refundable in all cases</li>
                <li><strong>Rejection:</strong> If application is rejected due to ineligibility or document issues, professional fee is non-refundable</li>
              </ul>
              <p className="mt-3">
                For detailed refund terms, please see our <a href="/refund-policy" className="text-blue-600 underline">Refund Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                6. Application Approval
              </h2>
              <p className="mb-3">
                <strong>We do NOT guarantee approval</strong> of your application. Final approval depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government verification and eligibility criteria</li>
                <li>Accuracy and completeness of submitted documents</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Site inspection outcomes (where applicable)</li>
              </ul>
              <p className="mt-3">
                Our role is to ensure your application is complete, accurate, and properly submitted. We cannot influence government decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                7. Confidentiality & Data Protection
              </h2>
              <p>
                We maintain strict confidentiality of your personal information and documents. Your data will only be used for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Processing your service request</li>
                <li>Communication regarding your application</li>
                <li>Compliance with legal requirements</li>
              </ul>
              <p className="mt-3">
                We do not sell or share your personal information with third parties except as required by law or for service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                8. Customer Support
              </h2>
              <p>
                We provide support through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Email: sevai@vysegroup.com</li>
                <li>Phone: +91 99446 33029</li>
                <li>WhatsApp Business: +91 99446 33029</li>
              </ul>
              <p className="mt-3">
                Support hours: Monday to Saturday, 9:00 AM to 6:00 PM IST (excluding public holidays)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                9. Limitation of Liability
              </h2>
              <p>
                Eazy Sevai's liability is limited to the professional service fee paid. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Government rejection or delays</li>
                <li>Changes in government policies or fees</li>
                <li>Indirect, consequential, or special damages</li>
                <li>Loss of business or opportunity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                10. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: '#0066b3' }}>
                12. Contact Information
              </h2>
              <p>
                For questions about these terms, please contact us:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p><strong>Eazy Sevai</strong></p>
                <p>Email: sevai@vysegroup.com</p>
                <p>Phone: +91 99446 33029</p>
                <p>Location: Chennai, Tamil Nadu, India</p>
              </div>
            </section>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>By using Eazy Sevai services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}