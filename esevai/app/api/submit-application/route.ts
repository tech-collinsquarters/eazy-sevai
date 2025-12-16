// ========================================
// COMPLETE FIXED VERSION
// File: app/api/submit-application/route.ts
// ========================================

import { NextRequest, NextResponse } from 'next/server';
import { getServiceBySlug } from '@/lib/services'; // ✅ Import function

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      applicationId, 
      orderId, 
      serviceSlug, 
      serviceName,  // ✅ Include serviceName
      paymentId, 
      userData, 
      formData,
      pricing,  // ✅ Add pricing info
      serviceFeasibility  // ✅ Add feasibility info
    } = body;

    // Validate required fields
    if (!applicationId || !orderId || !serviceSlug || !userData) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ✅ FIX: Fetch actual service details
    const service = getServiceBySlug(serviceSlug);
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }

    // Prepare comprehensive application data for N8N
    const applicationData = {
      // ========================================
      // APPLICATION METADATA
      // ========================================
      applicationId,
      orderId,
      paymentId,
      submittedAt: new Date().toISOString(),
      status: 'payment_verified',
      
      // ========================================
      // SERVICE DETAILS (from services.ts)
      // ========================================
      service: {
        slug: service.slug,
        name: service.name,
        category: service.category,
        categoryGroup: service.categoryGroup,
        processingTime: service.processingTime,
        
        // ✅ FIX: Use actual service data
        isFullyOnline: service.isFullyOnline || false,
        requiresPhysicalPresence: service.requiresPhysicalPresence || false,
        requiresSiteInspection: service.requiresSiteInspection || false,
        isStatutoryFeeVariable: service.isStatutoryFeeVariable || false,
        statutoryFeeNote: service.statutoryFeeNote || null,
        operationalComplexity: service.operationalComplexity || 'medium',
        
        requiredDocuments: service.requiredDocuments,
        popular: service.popular || false,
      },
      
      // ========================================
      // PRICING BREAKDOWN
      // ========================================
      pricing: {
        statutoryFee: service.statutoryFee,
        professionalFee: service.professionalFee,
        gst: service.gst,
        totalPayable: service.totalPayable,
        currency: 'INR'
      },
      
      // ========================================
      // USER DATA
      // ========================================
      customer: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address || '',
        aadhaar: formData?.aadhaar || '',
      },
      
      // ========================================
      // FORM DATA & DOCUMENTS
      // ========================================
      formData: formData || {},
      
      // ========================================
      // OPERATIONAL FLAGS FOR N8N WORKFLOW
      // ========================================
      workflow: {
        needsPhysicalPresence: service.requiresPhysicalPresence || false,
        needsSiteInspection: service.requiresSiteInspection || false,
        isUrgent: false,  // Can be determined by user selection
        priority: service.popular ? 'high' : 'normal',
      },
      
      // ========================================
      // NOTIFICATIONS
      // ========================================
      notifications: {
        sendSMS: true,
        sendEmail: true,
        sendWhatsApp: true,
      }
    };

    // ========================================
    // SEND TO N8N WEBHOOK
    // ========================================
    const n8nWebhook = process.env.N8N_WEBHOOK_URL;
    
    if (!n8nWebhook) {
      console.error('❌ N8N_WEBHOOK_URL not configured in environment');
      return NextResponse.json(
        { success: false, error: 'Webhook configuration missing' },
        { status: 500 }
      );
    }

    console.log('📤 Sending application to N8N:', {
      applicationId,
      serviceSlug,
      totalPayable: service.totalPayable
    });

    const n8nResponse = await fetch(n8nWebhook, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Application-ID': applicationId,
        'X-Service-Slug': serviceSlug,
      },
      body: JSON.stringify(applicationData),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('❌ N8N webhook failed:', {
        status: n8nResponse.status,
        error: errorText
      });
      throw new Error(`N8N webhook failed: ${n8nResponse.status}`);
    }

    const n8nData = await n8nResponse.json().catch(() => ({}));
    
    console.log('✅ Application submitted successfully:', {
      applicationId,
      n8nResponse: n8nData
    });

    // ========================================
    // SEND SUCCESS NOTIFICATION (Optional)
    // ========================================
    // You can trigger SMS/WhatsApp here
    
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId,
      orderId,
      service: {
        name: service.name,
        processingTime: service.processingTime,
      },
      nextSteps: [
        'You will receive a confirmation email shortly',
        'We will review your documents within 24 hours',
        'Updates will be sent via SMS and WhatsApp',
        `Expected completion: ${service.processingTime}`
      ],
      n8nResponse: n8nData,
    });

  } catch (error: any) {
    console.error('❌ Application submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit application',
        details: error.message || 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// ========================================
// BONUS: GET APPLICATION STATUS
// ========================================
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const applicationId = searchParams.get('applicationId');

  if (!applicationId) {
    return NextResponse.json(
      { error: 'Application ID required' },
      { status: 400 }
    );
  }

  // TODO: Fetch from database
  // For now, return placeholder
  return NextResponse.json({
    applicationId,
    status: 'processing',
    message: 'Application is being processed'
  });
}