export interface NRIService {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // lucide icon name
  prices: {
    USD: number;
    GBP: number;
    AED: number;
    INR: number;
  };
  processingTime: string;
  requiredDocuments: string[];
  benefits: string[];
}

export const nriServices: NRIService[] = [
  {
    id: "document-apostille",
    slug: "document-apostille",
    name: "Document Apostille & Attestation",
    shortDescription: "MEA Apostille and Embassy Attestation for all Tamil Nadu issued documents.",
    longDescription: "Get your educational, personal, and commercial documents legally authenticated for use abroad. We handle complete MEA Apostille and Embassy attestation with secure worldwide courier delivery, saving you the hassle of traveling to India.",
    icon: "Stamp",
    prices: {
      USD: 149,
      GBP: 119,
      AED: 549,
      INR: 11999
    },
    processingTime: "7-14 Working Days",
    requiredDocuments: [
      "Original Document",
      "Passport Copy",
      "Authorization Letter"
    ],
    benefits: [
      "No physical presence required",
      "Secure International DHL routing",
      "100% Guaranteed MEA compliance",
      "Real-time WhatsApp tracking"
    ]
  },
  {
    id: "nabc",
    slug: "non-availability-birth-certificate",
    name: "Non-Availability of Birth Certificate (NABC)",
    shortDescription: "Essential for Green Card processing when the original birth certificate is missing.",
    longDescription: "A crucial document for US Green Card (I-485) and visa processing. We scour municipal records across Tamil Nadu and legally obtain the NABC on your behalf, accompanied by the required secondary evidence affidavits.",
    icon: "FileSearch",
    prices: {
      USD: 199,
      GBP: 159,
      AED: 729,
      INR: 15999
    },
    processingTime: "15-30 Working Days",
    requiredDocuments: [
      "Class 10th Certificate",
      "Passport Copy",
      "Parents' ID Proof",
      "Hospital Letter (if available)"
    ],
    benefits: [
      "USCIS compliant formats",
      "Dedicated field agent per case",
      "Includes Affidavit drafting",
      "Digital scan prior to dispatch"
    ]
  },
  {
    id: "property-khata",
    slug: "property-title-search-khata",
    name: "Property Title Search & Khata Transfer",
    shortDescription: "Secure your ancestral or newly acquired property in Tamil Nadu from abroad.",
    longDescription: "Ensure your real estate investments in Tamil Nadu are legally sound. We conduct comprehensive 30-year Encumbrance Certificate (EC) searches, verify title deeds, and process Patta/Khata name transfers without you needing to visit the registrar office.",
    icon: "Home",
    prices: {
      USD: 249,
      GBP: 199,
      AED: 919,
      INR: 19999
    },
    processingTime: "20-45 Working Days",
    requiredDocuments: [
      "Registered Sale Deed Copy",
      "Previous Patta (if available)",
      "Identity Proof",
      "Property Tax Receipt"
    ],
    benefits: [
      "Legal vetting by expert advocates",
      "Fraud prevention checks",
      "End-to-end municipal liaising",
      "Official certified copies delivered"
    ]
  },
  {
    id: "legal-heir",
    slug: "legal-heir-certificate",
    name: "Legal Heir Certificate Assistance",
    shortDescription: "Navigate complex inheritance and succession laws with expert local representation.",
    longDescription: "Claiming inherited property or bank accounts requires a valid Legal Heir Certificate from the Tahsildar or Civil Court. We provide complete representation, file necessary affidavits, and coordinate the tedious verification process.",
    icon: "Users",
    prices: {
      USD: 299,
      GBP: 239,
      AED: 1099,
      INR: 23999
    },
    processingTime: "45-90 Working Days",
    requiredDocuments: [
      "Death Certificate of Deceased",
      "Family Tree Affidavit",
      "Identity Proof of all Heirs",
      "Address Proof"
    ],
    benefits: [
      "Expert legal drafting",
      "Minimal family involvement locally",
      "Clear timelines and updates",
      "Assistance with translation"
    ]
  },
  {
    id: "marriage-certificate",
    slug: "marriage-certificate-registration",
    name: "Marriage Certificate Registration",
    shortDescription: "Register your past marriage legally for visa and spouse immigration purposes.",
    longDescription: "Back-dated marriage registration under the Hindu Marriage Act or Special Marriage Act. Essential for spouse visas and dependent immigration limits. We prepare the file, book the registrar slot, and coordinate so your physical presence is only required for the final 10-minute signature.",
    icon: "HeartHandshake",
    prices: {
      USD: 179,
      GBP: 139,
      AED: 659,
      INR: 14999
    },
    processingTime: "10-20 Working Days",
    requiredDocuments: [
      "Wedding Invitation",
      "Wedding Photos (Specific poses)",
      "Passport copies of Bride & Groom",
      "Address Proof (Tamil Nadu)"
    ],
    benefits: [
      "Pre-approved file preparation",
      "VIP Registrar slot booking",
      "Same-day certificate issuance",
      "Witness arrangements (if needed)"
    ]
  }
];
