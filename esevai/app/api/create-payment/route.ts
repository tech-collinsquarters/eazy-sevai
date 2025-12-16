// app/api/create-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, serviceName, serviceSlug, applicationId, userData } = body;

    // Validate inputs
    if (!amount || !serviceName || !applicationId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Razorpay credentials
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!razorpayKeyId || !razorpayKeySecret) {
      console.error('❌ Razorpay credentials missing');
      return NextResponse.json(
        { success: false, error: 'Payment gateway not configured' },
        { status: 500 }
      );
    }

    // ✅ FIX 1: Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    });

    // ✅ FIX 2: Convert amount to paise (integer)
    const amountInPaise = Math.round(amount * 100);

    // ✅ FIX 3: Create proper Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,  // Amount in paise
      currency: 'INR',
      receipt: applicationId,
      notes: {
        serviceName: serviceName,
        serviceSlug: serviceSlug,
        applicationId: applicationId,
        userName: userData?.name || '',
        userEmail: userData?.email || '',
      },
    });

    console.log('✅ Razorpay order created:', razorpayOrder.id);

    // Return proper order details
    return NextResponse.json({
      success: true,
      razorpayKeyId: razorpayKeyId,
      orderId: razorpayOrder.id,  // ✅ Use Razorpay's order ID
      amount: amountInPaise,
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