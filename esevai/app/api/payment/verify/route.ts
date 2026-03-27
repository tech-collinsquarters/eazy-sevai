import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import Razorpay from 'razorpay';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user ? (session.user as { id: string }).id : null;

    if (!userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { orderId, paymentId, signature, serviceSlug } = body;

    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!razorpayKeySecret || !razorpayKeyId) {
      return NextResponse.json({ success: false, message: 'Gateway not configured' }, { status: 500 });
    }

    // 1. Verify Signature
    const shasum = crypto.createHmac('sha256', razorpayKeySecret);
    shasum.update(`${orderId}|${paymentId}`);
    const expectedSignature = shasum.digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
    }

    // 2. Fetch order details to get amount and currency and applicationId
    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    });

    const order = await razorpay.orders.fetch(orderId);
    
    // The previously passed applicationId was passed as receipt
    const passedApplicationId = order.receipt;
    const applicationId = passedApplicationId === "TEMP-APP-ID" ? undefined : passedApplicationId;

    // 3. Save to Prisma DB
    await prisma.payment.create({
      data: {
        userId,
        applicationId: applicationId as any,
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        razorpaySignature: signature,
        amount: Number(order.amount) / 100, // back to normal format
        currency: order.currency,
        status: 'succeeded',
        paymentMethod: 'Razorpay'
      }
    });

    // 4. Notify n8n for WhatsApp / Internal Dashboard updates
    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK;
    if (n8nWebhookUrl) {
      fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: "payment.captured",
          paymentId,
          orderId,
          serviceSlug,
          amount: Number(order.amount) / 100,
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.error("Failed to notify n8n:", err));
    }

    return NextResponse.json({ success: true, message: 'Payment verified successfully' });

  } catch (error: unknown) {
    console.error('❌ Payment verification error:', error);
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}