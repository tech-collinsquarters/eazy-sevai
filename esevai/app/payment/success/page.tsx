import { Suspense } from 'react';
import Link from 'next/link';
import { CheckCircle2, Home, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function SuccessContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Payment Successful!
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Your payment has been received and confirmed
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Order Details */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
              <ol className="space-y-3 text-sm text-blue-800">
                <li className="flex gap-2">
                  <span className="font-semibold">1.</span>
                  <span>You'll receive an email confirmation with your order details</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">2.</span>
                  <span>Our team will review your documents within 24 hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">3.</span>
                  <span>We'll process and submit your application to the relevant authority</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">4.</span>
                  <span>You'll receive updates via email and SMS at every step</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">5.</span>
                  <span>Your document will be delivered once ready (typically 7-15 days)</span>
                </li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is available to assist you:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  📧 Email: <a href="mailto:support@eazysevai.com" className="text-blue-600 hover:underline">support@eazysevai.com</a>
                </p>
                <p className="text-gray-700">
                  📞 Phone: <a href="tel:+919944633029" className="text-blue-600 hover:underline">+91 99446 33029</a>
                </p>
                <p className="text-gray-700">
                  🕐 Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full" size="lg">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/services" className="flex-1">
                <Button className="w-full" size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Browse More Services
                </Button>
              </Link>
            </div>

            {/* Track Application */}
            <div className="text-center pt-6 border-t">
              <p className="text-sm text-gray-600 mb-3">
                Want to check your application status?
              </p>
              <Link href="/track">
                <Button variant="link" className="text-blue-600">
                  Track Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-yellow-600" />
            Important Reminders
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Keep your order ID safe for future reference</li>
            <li>• Check your email (including spam folder) for confirmation</li>
            <li>• Ensure your contact details are correct for delivery updates</li>
            <li>• Processing time may vary based on government department workload</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}