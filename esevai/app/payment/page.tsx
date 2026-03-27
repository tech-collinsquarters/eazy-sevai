'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

// 1. We move the main logic into a separate component
function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const amount = parseFloat(searchParams.get('amount') || '0');
  const currency = searchParams.get('currency') || 'INR';
  const serviceName = searchParams.get('service') || 'Service';
  const serviceSlug = searchParams.get('slug') || '';
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle');

  // Validate amount
  const isValidAmount = amount > 0;

  const handlePayment = async () => {
    if (!isValidAmount) {
      alert('Invalid amount. Please return to the service page.');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create order on backend
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount, // Send actual amount, API translates to subunits
          currency,
          serviceName,
          serviceSlug,
          applicationId: searchParams.get('appId') || 'TEMP-APP-ID', // Provide dummy if not exists
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }

      const { orderId, razorpayKeyId } = await orderResponse.json();

      // Step 2: Initialize Razorpay
      const options = {
        key: razorpayKeyId,
        amount: amount * 100, // Subunits
        currency: currency,
        name: 'Eazy Sevai',
        description: serviceName,
        order_id: orderId,
        handler: async function (response: any) {
          // Step 3: Verify payment on backend
          try {
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                serviceSlug,
              }),
            });

            if (verifyResponse.ok) {
              setPaymentStatus('success');
              // Redirect to success page after 2 seconds
              setTimeout(() => {
                router.push(`/payment/success?orderId=${orderId}`);
              }, 2000);
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Verification error:', error);
            setPaymentStatus('failed');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#2563eb',
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      // @ts-ignore - Razorpay is loaded via script
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      setIsProcessing(false);
    }
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Service
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Payment Confirmation</CardTitle>
            <CardDescription>
              Review your payment details before proceeding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Service Details */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-semibold">{serviceName}</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency === 'AED' ? 'د.إ ' : '₹'}
                    {amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Inclusive of all applicable taxes
                </p>
              </div>
            </div>

            {/* Payment Status Messages */}
            {paymentStatus === 'success' && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-800">Payment successful! Redirecting...</p>
              </div>
            )}

            {paymentStatus === 'failed' && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-sm text-red-800">Payment failed. Please try again.</p>
              </div>
            )}

            {/* Payment Button */}
            {isValidAmount ? (
              <Button
                onClick={handlePayment}
                disabled={isProcessing || paymentStatus === 'success'}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : paymentStatus === 'success' ? (
                  'Payment Successful'
                ) : (
                  <>Proceed to Payment</>
                )}
              </Button>
            ) : (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  Invalid amount. Please return to the service page.
                </p>
              </div>
            )}

            {/* Security Notice */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure payment powered by Razorpay
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">Accepted Payment Methods</p>
          <div className="flex justify-center gap-4 items-center">
            <span className="text-xs text-gray-500">Credit/Debit Cards</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">UPI</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">Net Banking</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">Wallets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. We export the main Page component wrapped in Suspense
export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}