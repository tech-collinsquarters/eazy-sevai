import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { services } from '@/lib/services';
import { nriServices } from '@/lib/nri-services';
import ApplyForm from './ApplyForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/login');
  }

  const { service: slug } = await searchParams;

  if (!slug) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl text-navy-900 font-serif mb-4">No Service Selected</h1>
        <p className="text-navy-600 mb-8">Please select a service from our catalog first.</p>
        <Link href="/nri-services" className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700">
          <ArrowLeft className="w-4 h-4 mr-2" /> Browse Services
        </Link>
      </div>
    );
  }

  // Find the service across both generic and NRI arrays
  const nriService = nriServices.find((s) => s.slug === slug);
  const genericService = services.find((s) => s.slug === slug);

  const serviceData = nriService || genericService;
  const isNRI = !!nriService;

  if (!serviceData) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl text-navy-900 font-serif mb-4">Service Not Found</h1>
        <p className="text-navy-600 mb-8">The service you're looking for doesn't exist.</p>
        <Link href="/nri-services" className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700">
          <ArrowLeft className="w-4 h-4 mr-2" /> Browse Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gold-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href={isNRI ? `/nri-services/${slug}` : `/services/${slug}`} className="inline-flex items-center text-navy-500 hover:text-navy-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to {serviceData.name} details
        </Link>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-serif text-navy-900 mb-2">Apply for {serviceData.name}</h1>
            <p className="text-navy-600 mb-8">Please provide the details below to start your application securely.</p>
            
            <ApplyForm 
              serviceSlug={slug}
              serviceName={serviceData.name}
              user={session.user}
              isNRI={isNRI}
              prices={isNRI ? (serviceData as any).prices : null}
              baseAmount={!isNRI ? (serviceData as any).totalPayable : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
