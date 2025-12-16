// app/api/payment/verify/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    console.log('✅ Payment verification called:', {
      payment_id: body.razorpay_payment_id,
      order_id: body.razorpay_order_id,
    });
    
    // For now, just return success
    // Add crypto signature verification later if needed
    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
    });

  } catch (error: any) {
    console.error('❌ Payment verification error:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}