"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createApplicationDraft } from './actions';
import { useCurrency } from '@/components/providers/CurrencyProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2, CreditCard } from 'lucide-react';
import Script from 'next/script';

const applicantSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  identityNumber: z.string().optional(),
});

type ApplicantData = z.infer<typeof applicantSchema>;

export default function ApplyForm({
  serviceSlug,
  serviceName,
  user,
  isNRI,
  prices,
  baseAmount
}: {
  serviceSlug: string;
  serviceName: string;
  user: any;
  isNRI: boolean;
  prices: any;
  baseAmount: any;
}) {
  const [step, setStep] = useState(1);
  const [applicantData, setApplicantData] = useState<ApplicantData | null>(null);
  const [serviceData, setServiceData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { currency, formatPrice } = useCurrency();

  // Basic Form
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicantData>({
    resolver: zodResolver(applicantSchema),
    defaultValues: {
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ').slice(1).join(' ') || '',
      email: user?.email || '',
      phone: (user?.mobile || '').replace(/^0=/, ''),
      identityNumber: '',
    }
  });

  const onNextStep1 = (data: ApplicantData) => {
    setApplicantData(data);
    setStep(2);
  };

  const getAmount = () => {
    if (isNRI && prices) {
      return prices[currency];
    }
    return baseAmount; // fallback generic domestic amount
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const amount = getAmount();

      // 1. Save Application Draft to Database
      const formData = {
        applicant: applicantData,
        serviceSpecifics: serviceData
      };

      const res = await createApplicationDraft({
        serviceSlug,
        serviceName,
        formData,
        amount,
        currency
      });

      if (!res.success || !res.applicationId) {
        throw new Error(res.error || "Failed to create application");
      }

      // 2. Fetch Razorpay Order
      const paymentRes = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency,
          serviceName,
          serviceSlug,
          applicationId: res.applicationId,
          userData: applicantData
        })
      });

      const paymentData = await paymentRes.json();

      if (!paymentData.success) {
        throw new Error(paymentData.error || "Failed to initiate payment gateway");
      }

      // 3. Open Razorpay Checkout popup
      const options = {
        key: paymentData.razorpayKeyId,
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: "Eazy Sevai",
        description: `Application for ${serviceName}`,
        order_id: paymentData.orderId,
        handler: async function (response: any) {
          // Success Callback
          window.location.href = `/payment/success?reference=${response.razorpay_payment_id}&order=${paymentData.orderId}`;
        },
        prefill: {
          name: `${applicantData?.firstName} ${applicantData?.lastName}`,
          email: applicantData?.email,
          contact: applicantData?.phone
        },
        theme: {
          color: "#0066b3" // Eazy Sevai Brand Blue
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        setError(response.error.description);
      });
      rzp.open();

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic Fields Render
  const renderDynamicFields = () => {
    const inputClasses = "bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6]";
    
    switch (serviceSlug) {
      case 'document-apostille':
        return (
          <>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Document Type</Label>
              <Select onValueChange={(v) => setServiceData({ ...serviceData, docType: v })}>
                <SelectTrigger className={inputClasses}><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent className="bg-[#0f1f3d] border-white/10 text-white z-50">
                  <SelectItem value="educational" className="hover:bg-white/10 cursor-pointer">Educational Document</SelectItem>
                  <SelectItem value="non-educational" className="hover:bg-white/10 cursor-pointer">Non-Educational / Personal</SelectItem>
                  <SelectItem value="commercial" className="hover:bg-white/10 cursor-pointer">Commercial Document</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Issuing State / Authority</Label>
              <Input placeholder="e.g. Tamil Nadu Board" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, issuingAuthority: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Destination Country</Label>
              <Input placeholder="Country where document will be used" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, destinationCountry: e.target.value })} />
            </div>
          </>
        );
      case 'non-availability-birth-certificate':
        return (
          <>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Full Name of Person</Label>
              <Input placeholder="Name as per existing records" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, personName: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Date of Birth</Label>
              <Input type="date" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, dob: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Father's Name</Label>
                <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, fatherName: e.target.value })} />
              </div>
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Mother's Name</Label>
                <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, motherName: e.target.value })} />
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Place of Birth (City / Hospital)</Label>
              <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, pob: e.target.value })} />
            </div>
          </>
        );
      case 'property-title-search-khata':
        return (
          <>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Property Full Address</Label>
              <Textarea placeholder="Include street, city, pin code" className={`${inputClasses} min-h-[100px]`} onChange={(e) => setServiceData({ ...serviceData, propertyAddress: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Survey / Plot Number</Label>
              <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, surveyNumber: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Registration District / Sub-Registrar</Label>
              <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, registrarOffice: e.target.value })} />
            </div>
          </>
        );
      case 'legal-heir-certificate':
        return (
          <>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Deceased Person's Full Name</Label>
              <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, deceasedName: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Date of Death</Label>
              <Input type="date" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, dateOfDeath: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Address at time of death</Label>
              <Textarea className={`${inputClasses} min-h-[100px]`} onChange={(e) => setServiceData({ ...serviceData, deathAddress: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Surviving Members List</Label>
              <Textarea placeholder="Please list names and relations" className={`${inputClasses} min-h-[100px]`} onChange={(e) => setServiceData({ ...serviceData, survivingMembers: e.target.value })} />
            </div>
          </>
        );
      case 'marriage-certificate-registration':
        return (
          <>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Date of Marriage</Label>
              <Input type="date" className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, dateOfMarriage: e.target.value })} />
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Place / Hall of Marriage</Label>
              <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, placeOfMarriage: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Groom's Name</Label>
                <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, groomName: e.target.value })} />
              </div>
              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Bride's Name</Label>
                <Input className={inputClasses} onChange={(e) => setServiceData({ ...serviceData, brideName: e.target.value })} />
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="space-y-3">
            <Label className="text-white text-sm font-medium">Additional Details & Specific Requirements</Label>
            <Textarea 
              placeholder="Any specific requests, file numbers, or previous application details?"
              rows={4}
              className={`${inputClasses} min-h-[120px]`}
              onChange={(e) => setServiceData({ ...serviceData, notes: e.target.value })}
            />
          </div>
        );
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Progress Steps */}
      <div className="relative mb-12 mt-4 px-2 sm:px-8 max-w-3xl mx-auto">
        <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-white/10 -z-10"></div>
        <div className="absolute left-[10%] top-4 h-0.5 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] -z-10 transition-all duration-300" style={{ width: step === 1 ? '0%' : step === 2 ? '40%' : '80%' }}></div>
        
        <div className="flex justify-between relative z-10 w-full">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex flex-col items-center gap-3 ${step >= s ? 'text-[#14b8a6]' : 'text-white/30'} flex-1`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${step >= s ? 'bg-gradient-to-r from-[#0066b3] to-[#14b8a6] text-white shadow-md shadow-teal-900/50' : 'bg-[#0f1f3d] border-2 border-white/10 text-white/40'}`}>
                {step > s ? <CheckCircle2 className="w-5 h-5 text-white" /> : s}
              </div>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-center">{s === 1 ? 'Applicant' : s === 2 ? 'Service details' : 'Review'}</span>
            </div>
          ))}
        </div>
      </div>


      {error && (
        <div className="p-4 mb-6 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Step 1: Applicant Details */}
      {step === 1 && (
        <form onSubmit={handleSubmit(onNextStep1)} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">First Name <span className="text-red-400">*</span></Label>

              <Input {...register('firstName')} className={`bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6] ${errors.firstName ? 'border-red-500' : ''}`} />
              {errors.firstName && <span className="text-xs text-red-400">{errors.firstName.message}</span>}
            </div>
            <div className="space-y-3">
              <Label className="text-white text-sm font-medium">Last Name <span className="text-red-400">*</span></Label>

              <Input {...register('lastName')} className={`bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6] ${errors.lastName ? 'border-red-500' : ''}`} />
              {errors.lastName && <span className="text-xs text-red-400">{errors.lastName.message}</span>}
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-white text-sm font-medium">Email <span className="text-red-400">*</span></Label>

            <Input type="email" {...register('email')} className={`bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6] ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
          </div>

          <div className="space-y-3">
            <Label className="text-white text-sm font-medium">Mobile Number (WhatsApp) <span className="text-red-400">*</span></Label>

            <Input type="tel" {...register('phone')} className={`bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6] ${errors.phone ? 'border-red-500' : ''}`} />
            {errors.phone && <span className="text-xs text-red-400">{errors.phone.message}</span>}
          </div>

          <div className="space-y-3">
            <Label className="text-white text-sm font-medium">Passport / Aadhaar / Identity Number <span className="text-white/40 font-normal text-xs ml-1">(Optional for now)</span></Label>

            <Input {...register('identityNumber')} className="bg-[#0f1f3d]/50 border-white/10 text-white placeholder:text-white/30 h-12 focus-visible:ring-[#14b8a6]" />
          </div>

          <div className="pt-6 flex justify-end">
            <Button type="submit" className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white px-8 h-12">
              Proceed <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

        </form>
      )}

      {/* Step 2: Service Specific Details */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl space-y-8">
            <h3 className="font-semibold font-serif text-xl text-white pb-2 border-b border-white/10">Information required for {serviceName}</h3>
            <div className="text-white space-y-6">
              {renderDynamicFields()}
            </div>
          </div>


          <div className="pt-4 flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)} className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white h-12 px-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button onClick={() => setStep(3)} className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white px-8 h-12">
              Save & Review <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

          </div>
        </div>
      )}

      {/* Step 3: Review & Payment */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <h3 className="font-semibold font-serif text-2xl text-white pb-2 mb-6">Application Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-sm mt-4">
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Service</span>
                <span className="font-medium font-serif text-lg text-white">{serviceName}</span>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Applicant</span>
                <span className="font-medium font-serif text-lg text-white">{applicantData?.firstName} {applicantData?.lastName}</span>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Email</span>
                <span className="font-medium text-base text-white">{applicantData?.email}</span>
              </div>
              <div>
                <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Phone</span>
                <span className="font-medium text-base text-white">{applicantData?.phone}</span>
              </div>
            </div>
          </div>


          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-4">
            <span className="text-white/40 font-medium uppercase tracking-widest text-sm">Total Professional Fee</span>
            <div className="text-5xl md:text-6xl font-serif text-[#14b8a6]">
              {formatPrice({ USD: getAmount(), GBP: getAmount(), AED: getAmount(), INR: getAmount() })}
            </div>
            <p className="text-xs text-white/40 max-w-md pt-2">
              Includes all secure transaction charges. After payment, you'll be redirected to upload any mandatory documents in your vault.
            </p>


            <Button 
              onClick={handleCheckout} 
              disabled={isLoading}
              className="w-full max-w-sm h-14 mt-4 bg-green-600 hover:bg-green-700 text-white text-lg transition-colors shadow-lg shadow-green-200"
            >
              {isLoading ? (
                <><Loader2 className="w-5 h-5 mr-3 animate-spin"/> Processing Securely...</>
              ) : (
                <><CreditCard className="w-5 h-5 mr-3" /> Pay Securely via Razorpay</>
              )}
            </Button>
          </div>

          <div className="flex justify-start pt-2">
            <Button variant="ghost" onClick={() => setStep(2)} className="text-white/60 hover:text-white" disabled={isLoading}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Modify details
            </Button>
          </div>

        </div>
      )}
    </>
  );
}
