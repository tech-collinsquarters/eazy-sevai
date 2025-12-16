import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import ApplicationForm from '@/components/ApplicationForm';
import Link from 'next/link';

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link 
          href={`/services/${slug}`}
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6"
        >
          ← Back to Service Details
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Apply for {service.name}</h1>
          <p className="text-gray-600">{service.description}</p>
        </div>

        {/* Fee Summary */}
        <div className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] text-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between opacity-90">
              <span>Government Fee:</span>
              <span>₹{service.statutoryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between opacity-90">
              <span>Professional Fee:</span>
              <span>₹{service.professionalFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between opacity-90">
              <span>GST (18%):</span>
              <span>₹{service.gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-white/30 pt-2 mt-2">
              <span>Total Payable:</span>
              <span>₹{service.totalPayable.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-xs mt-4 opacity-75">
            Processing Time: {service.processingTime}
          </p>
        </div>

        {/* Application Form - NOW WITH ONLY service PROP */}
        <ApplicationForm service={service} />

        {/* Help Section */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Need assistance?</strong> Our team is here to help you complete your application. 
            <Link href="/contact" className="text-teal-600 hover:underline ml-1">
              Contact us →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}