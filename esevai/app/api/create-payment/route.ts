// app/api/create-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, serviceName, serviceSlug, applicationId, userData } = body;

    // Validate required fields
    if (!amount || !serviceName || !applicationId) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    // Get Razorpay Key from environment
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!razorpayKeyId || !razorpayKeySecret) {
      console.error('❌ Razorpay credentials missing in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Payment gateway not configured. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Generate order ID
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    console.log('✅ Payment order created:', {
      orderId,
      amount,
      serviceName,
      applicationId,
    });

    // Return payment order details
    return NextResponse.json({
      success: true,
      razorpayKeyId: razorpayKeyId,
      orderId: orderId,
      amount: Math.round(amount * 100), // Convert to paise
      currency: 'INR',
      serviceSlug,
      serviceName,
      applicationId,
    });

  } catch (error: any) {
    console.error('❌ Create payment error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create payment order' 
      },
      { status: 500 }
    );
  }
}