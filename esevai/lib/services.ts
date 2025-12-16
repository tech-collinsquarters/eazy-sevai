// Service type definition
export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  categoryGroup: string;
  
  // Pricing (all in ₹)
  statutoryFee: number;
  professionalFee: number;
  gst: number;
  totalPayable: number;
  
  processingTime: string;
  requiredDocuments: string[];
  popular?: boolean;
  
  // Feasibility flags
  isFullyOnline?: boolean;
  requiresPhysicalPresence?: boolean;
  requiresSiteInspection?: boolean;
  isStatutoryFeeVariable?: boolean;
  statutoryFeeNote?: string;
  operationalComplexity?: 'low' | 'medium' | 'high';
  
  // Sub-services
  hasSubServices: boolean;
  subServices?: Array<{
    value: string;
    label: string;
    description: string;
    additionalDocs: string[];
  }>;
}

export const services: Service[] = [
  // ========================================
  // IDENTITY & CARDS (14 Services)
  // ========================================
  {
    id: 'aadhaar-enrollment-support',
    slug: 'aadhaar-enrollment-support',
    name: 'Aadhaar Enrollment Support',
    description: 'Professional assistance for Aadhaar enrollment, updates, or corrections',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 299,
    gst: 54,
    totalPayable: 353,
    processingTime: '15-30 days',
    requiredDocuments: ['Proof of Identity', 'Proof of Address', 'Date of Birth Proof', 'Photograph'],
    popular: true,
    requiresPhysicalPresence: true,
    isFullyOnline: false,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'aadhaar-update',
    slug: 'aadhaar-update',
    name: 'Aadhaar Update Services',
    description: 'Update demographic or biometric information in Aadhaar',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 399,
    gst: 72,
    totalPayable: 471,
    processingTime: '5-7 working days',
    requiredDocuments: ['Aadhaar Card', 'Proof of Update Required'],
    popular: true,
    isFullyOnline: false,
    requiresPhysicalPresence: true,
    operationalComplexity: 'low',
    hasSubServices: true,
    subServices: [
      { value: 'address-change', label: 'Address Change', description: 'Update address in Aadhaar', additionalDocs: ['Proof of new address (utility bill/ration card)'] },
      { value: 'mobile-update', label: 'Mobile Number Update', description: 'Update mobile number linked to Aadhaar', additionalDocs: ['Registered mobile number for OTP verification'] },
      { value: 'name-correction', label: 'Name Correction', description: 'Correct name in Aadhaar', additionalDocs: ['Proof of Name (passport, PAN card)'] },
      { value: 'dob-correction', label: 'Date of Birth Correction', description: 'Correct date of birth in Aadhaar', additionalDocs: ['Birth Certificate or Passport'] },
      { value: 'gender-correction', label: 'Gender Correction', description: 'Correct gender in Aadhaar', additionalDocs: ['Valid ID with correct gender'] },
      { value: 'biometric-update', label: 'Biometric Update', description: 'Update fingerprint/iris in Aadhaar', additionalDocs: [] },
      { value: 'photo-update', label: 'Photo Update', description: 'Update photograph in Aadhaar', additionalDocs: [] },
      { value: 'email-update', label: 'Email Update', description: 'Update email address in Aadhaar', additionalDocs: ['Registered mobile number for OTP'] }
    ]
  },

  {
    id: 'pan-card',
    slug: 'pan-card',
    name: 'PAN Card Application',
    description: 'Fast PAN card application with instant e-PAN',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 110,
    professionalFee: 399,
    gst: 72,
    totalPayable: 581,
    processingTime: '7-15 days',
    requiredDocuments: ['Aadhaar Card', 'Photograph', 'Signature', 'Date of Birth Proof'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'passport-application-support',
    slug: 'passport-application-support',
    name: 'Passport Application Support',
    description: 'Complete assistance for new passport, renewal, or re-issue',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 1500,
    professionalFee: 799,
    gst: 144,
    totalPayable: 2443,
    processingTime: '30-45 days',
    requiredDocuments: ['Birth Certificate', 'Address Proof', 'Identity Proof', 'Passport Photos'],
    popular: true,
    requiresPhysicalPresence: true,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: true,
    subServices: [
      { value: 'new-normal', label: 'New Passport - 36 Pages', description: 'Standard 36-page passport', additionalDocs: ['Address Proof', 'Birth Certificate', 'Photos'] },
      { value: 'new-jumbo', label: 'New Passport - 60 Pages', description: '60-page passport for frequent travelers', additionalDocs: ['Address Proof', 'Birth Certificate', 'Photos', 'Justification Letter'] },
      { value: 'new-minor', label: 'Minor Passport', description: 'Passport for children under 18 years', additionalDocs: ['Birth Certificate', 'Parents Passport Copy', 'Photos', 'Annexure D'] },
      { value: 'renewal', label: 'Passport Renewal', description: 'Renew existing passport', additionalDocs: ['Old Passport', 'Address Proof'] },
      { value: 'reissue-address', label: 'Reissue - Address Change', description: 'Reissue for address change', additionalDocs: ['Proof of Address', 'Old Passport'] },
      { value: 'reissue-name', label: 'Reissue - Name Change', description: 'Reissue for name change', additionalDocs: ['Marriage Certificate or Gazette Notification', 'Old Passport'] },
      { value: 'reissue-spouse', label: 'Reissue - Spouse Addition', description: 'Add or remove spouse name', additionalDocs: ['Marriage Certificate', 'Spouse ID', 'Old Passport'] },
      { value: 'reissue-lost', label: 'Reissue - Lost/Damaged', description: 'Reissue lost or damaged passport', additionalDocs: ['FIR Copy', 'Affidavit of Loss'] }
    ]
  },

  {
    id: 'voter-id-card',
    slug: 'voter-id-card',
    name: 'Voter ID Card',
    description: 'New voter ID enrollment, corrections, and address updates',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 500,
    gst: 90,
    totalPayable: 590,
    processingTime: '30-60 days',
    requiredDocuments: [
      'Address Proof (Aadhaar/Ration Card/Utility Bill)',
      'Age Proof (Birth Certificate/School Certificate)',
      'Passport Size Photos (2 recent)',
      'Aadhaar Card',
    ],
    popular: true,
    requiresPhysicalPresence: true,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: true,
    subServices: [
      { value: 'new', label: 'New Voter ID Enrollment', description: 'First-time voter registration', additionalDocs: [] },
      { value: 'correction', label: 'Correction in Existing Card', description: 'Fix name, photo, or other details', additionalDocs: ['Existing Voter ID'] },
      { value: 'address_change', label: 'Address Change (Same Constituency)', description: 'Update address within constituency', additionalDocs: ['New Address Proof', 'Old Voter ID'] },
      { value: 'address_transfer', label: 'Address Change (Different Constituency)', description: 'Transfer to different constituency', additionalDocs: ['New Address Proof', 'Old Voter ID'] },
      { value: 'duplicate', label: 'Duplicate Voter ID (Lost/Damaged)', description: 'Reissue lost or damaged card', additionalDocs: ['FIR Copy (if lost)', 'Application'] },
      { value: 'deletion', label: 'Delete Duplicate/Wrong Entry', description: 'Remove incorrect voter entry', additionalDocs: ['Proof of Correction', 'Identity Proof'] }
    ]
  },

  {
    id: 'driving-license',
    slug: 'driving-license',
    name: 'Driving License',
    description: 'Learner license, permanent DL, renewal, and duplicate',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 200,
    professionalFee: 1300,
    gst: 234,
    totalPayable: 1734,
    processingTime: '30-45 days',
    requiredDocuments: [
      'Aadhaar Card',
      'Address Proof (Recent - within 3 months)',
      'Age Proof (Birth Certificate/School Certificate)',
      'Passport Size Photos (4 recent)',
      'Medical Certificate (for commercial licenses)',
      'Learner License (for permanent DL)',
    ],
    popular: true,
    requiresPhysicalPresence: true,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: true,
    subServices: [
      { value: 'learner', label: "Learner's License (LL) - New", description: 'First step for learning to drive', additionalDocs: ['Age Proof', 'Address Proof'] },
      { value: 'permanent_mcwg', label: 'Permanent DL - Two Wheeler (MCWG)', description: 'Motorcycle/scooter license', additionalDocs: ['Learner License', 'Driving Test Certificate'] },
      { value: 'permanent_lmv', label: 'Permanent DL - Light Motor Vehicle (Car)', description: 'Car/jeep driving license', additionalDocs: ['Learner License', 'Driving Test Certificate'] },
      { value: 'permanent_transport', label: 'Permanent DL - Transport Vehicle', description: 'Commercial vehicle license', additionalDocs: ['Learner License', 'Medical Certificate', 'Badge Test'] },
      { value: 'add_vehicle_class', label: 'Add New Vehicle Class', description: 'Add two-wheeler to existing car license (or vice versa)', additionalDocs: ['Existing DL', 'Test Certificate'] },
      { value: 'renewal', label: 'License Renewal (Expired)', description: 'Renew expired driving license', additionalDocs: ['Old License', 'Medical Certificate (if 40+)'] },
      { value: 'duplicate', label: 'Duplicate License (Lost/Damaged)', description: 'Reissue DL', additionalDocs: ['FIR Copy', 'Affidavit'] },
      { value: 'address_change', label: 'Address Change in Existing DL', description: 'Update address on license', additionalDocs: ['New Address Proof', 'Existing DL'] },
      { value: 'international', label: 'International Driving Permit', description: 'IDP for driving abroad', additionalDocs: ['Valid DL', 'Passport', 'Travel Documents'] }
    ]
  },

  {
    id: 'ration-card',
    slug: 'ration-card',
    name: 'Ration Card',
    description: 'New ration card, add/delete members, address change, card type conversion',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 600,
    gst: 108,
    totalPayable: 708,
    processingTime: '45-60 days',
    requiredDocuments: [
      'Aadhaar Cards (All family members)',
      'Address Proof (Electricity Bill/Property Tax)',
      'Income Proof (Salary Slip/IT Returns)',
      'Passport Size Photos (All members)',
      'Gas Connection Proof (if available)',
      'Bank Passbook',
    ],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: true,
    subServices: [
      { value: 'new', label: 'New Ration Card', description: 'First-time ration card application', additionalDocs: ['Family Details', 'Income Certificate'] },
      { value: 'add_member', label: 'Add Family Member', description: 'Add new member to existing card', additionalDocs: ['Member Aadhaar', 'Relationship Proof', 'Existing Card'] },
      { value: 'delete_member', label: 'Delete Member', description: 'Remove member from card', additionalDocs: ['Reason Documentation', 'Existing Card'] },
      { value: 'address_change', label: 'Change Address (Same Taluk)', description: 'Update address within taluk', additionalDocs: ['New Address Proof', 'Existing Card'] },
      { value: 'transfer', label: 'Transfer Card (Different Taluk)', description: 'Transfer to different taluk/district', additionalDocs: ['New Address Proof', 'Surrender Certificate'] },
      { value: 'duplicate', label: 'Duplicate Card (Lost/Damaged)', description: 'Reissue ration card', additionalDocs: ['FIR (if lost)', 'Application'] },
      { value: 'surrender', label: 'Surrender Card', description: 'Voluntary surrender', additionalDocs: ['Reason Statement', 'Card to Surrender'] },
      { value: 'correction', label: 'Correction in Name/Details', description: 'Fix errors on card', additionalDocs: ['Proof of Correction', 'Existing Card'] },
      { value: 'conversion', label: 'Card Type Conversion (APL/BPL/AAY)', description: 'Change card category', additionalDocs: ['Income Certificate', 'Eligibility Proof'] }
    ]
  },

  {
    id: 'birth-certificate',
    slug: 'birth-certificate',
    name: 'Birth Certificate',
    description: 'Birth certificate application or correction',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 50,
    professionalFee: 399,
    gst: 72,
    totalPayable: 521,
    processingTime: '15-30 days',
    requiredDocuments: ['Hospital Birth Certificate', 'Parents ID', 'Address Proof'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'death-certificate',
    slug: 'death-certificate',
    name: 'Death Certificate',
    description: 'Death certificate application',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 50,
    professionalFee: 399,
    gst: 72,
    totalPayable: 521,
    processingTime: '15-30 days',
    requiredDocuments: ['Hospital Death Certificate', 'Deceased ID', 'Applicant ID'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'caste-certificate',
    slug: 'caste-certificate',
    name: 'Caste Certificate',
    description: 'Official caste certificate for SC/ST/OBC categories',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 20,
    professionalFee: 499,
    gst: 90,
    totalPayable: 609,
    processingTime: '30-45 days',
    requiredDocuments: ['Aadhaar', 'Community Proof', 'School Certificate', 'Address Proof'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'income-certificate',
    slug: 'income-certificate',
    name: 'Income Certificate',
    description: 'Annual income certificate for scholarships and schemes',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 20,
    professionalFee: 340,
    gst: 61,
    totalPayable: 421,
    processingTime: '15-30 days',
    requiredDocuments: ['Aadhaar', 'Salary Slips/Income Proof', 'Address Proof', 'Bank Statement'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'residence-certificate',
    slug: 'residence-certificate',
    name: 'Residence/Domicile Certificate',
    description: 'Proof of residence certificate',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 20,
    professionalFee: 340,
    gst: 61,
    totalPayable: 421,
    processingTime: '15-30 days',
    requiredDocuments: ['Aadhaar', 'Address Proof (10+ years)', 'School Certificate', 'Property Documents'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'disability-certificate',
    slug: 'disability-certificate',
    name: 'Disability Certificate',
    description: 'Differently abled certificate with medical board',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 799,
    gst: 144,
    totalPayable: 943,
    processingTime: '30-60 days',
    requiredDocuments: ['Medical Reports', 'Aadhaar', 'Photographs', 'Medical Board Appointment'],
    popular: false,
    requiresPhysicalPresence: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'senior-citizen-card',
    slug: 'senior-citizen-card',
    name: 'Senior Citizen Card',
    description: 'Senior citizen identification card',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 0,
    professionalFee: 299,
    gst: 54,
    totalPayable: 353,
    processingTime: '15-30 days',
    requiredDocuments: ['Age Proof (60+ years)', 'Aadhaar', 'Photograph', 'Address Proof'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'name-change-gazette',
    slug: 'name-change-gazette',
    name: 'Name Change Gazette',
    description: 'Legal name change through government gazette',
    category: 'identity',
    categoryGroup: 'Identity & Cards',
    statutoryFee: 500,
    professionalFee: 2999,
    gst: 540,
    totalPayable: 4039,
    processingTime: '45-60 days',
    requiredDocuments: ['Affidavit', 'Newspaper Advertisement', 'Aadhaar', 'Gazette Application'],
    popular: false,
    isFullyOnline: false,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  // ========================================
  // REVENUE CERTIFICATES (10 Services)
  // ========================================
  {
    id: 'community-certificate',
    slug: 'community-certificate',
    name: 'Community Certificate',
    description: 'Official community/caste certificate from Tahsildar',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 20,
    professionalFee: 340,
    gst: 61,
    totalPayable: 421,
    processingTime: '30-45 days',
    requiredDocuments: ['Aadhaar', 'Community Proof', 'School Certificate', 'Address Proof'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: true,
    subServices: [
      { value: 'bc', label: 'Backward Class (BC)', description: 'Certificate for BC community members', additionalDocs: ['School Certificate', 'Parent Community Certificate'] },
      { value: 'mbc', label: 'Most Backward Class (MBC)', description: 'Certificate for MBC community members', additionalDocs: ['School Certificate', 'Parent Community Certificate'] },
      { value: 'sc', label: 'Scheduled Caste (SC)', description: 'Certificate for SC community members', additionalDocs: ['School Certificate', 'Parent Community Certificate'] },
      { value: 'st', label: 'Scheduled Tribe (ST)', description: 'Certificate for ST community members', additionalDocs: ['School Certificate', 'Parent Community Certificate'] }
    ]
  },

  {
    id: 'nativity-certificate',
    slug: 'nativity-certificate',
    name: 'Nativity Certificate',
    description: 'Birth place certificate from Tahsildar office',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 20,
    professionalFee: 340,
    gst: 61,
    totalPayable: 421,
    processingTime: '15-30 days',
    requiredDocuments: ['Birth Certificate', 'School Certificate', 'Address Proof', 'Aadhaar'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'first-graduate-certificate',
    slug: 'first-graduate-certificate',
    name: 'First Graduate Certificate',
    description: 'Certificate for first in family to pursue higher education',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 60,
    professionalFee: 590,
    gst: 106,
    totalPayable: 756,
    processingTime: '30-45 days',
    requiredDocuments: ['Educational Certificates of Parents', 'Family Details', 'Ration Card', 'Self-Declaration'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'legal-heir-certificate',
    slug: 'legal-heir-certificate',
    name: 'Legal Heir Certificate',
    description: 'Official legal heir certificate from revenue department',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 50,
    professionalFee: 1999,
    gst: 360,
    totalPayable: 2409,
    processingTime: '30-60 days',
    requiredDocuments: ['Death Certificate', 'Family Details', 'Ration Card', 'Property Details'],
    popular: false,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'widow-certificate',
    slug: 'widow-certificate',
    name: 'Widow Certificate',
    description: 'Widow certificate for pension schemes',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 60,
    professionalFee: 390,
    gst: 70,
    totalPayable: 520,
    processingTime: '30-45 days',
    requiredDocuments: ['Death Certificate (Husband)', 'Marriage Certificate', 'Identity Proof', 'Income Certificate'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'deserted-woman-certificate',
    slug: 'deserted-woman-certificate',
    name: 'Deserted Woman Certificate',
    description: 'Certificate for deserted women',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 60,
    professionalFee: 540,
    gst: 97,
    totalPayable: 697,
    processingTime: '45-60 days',
    requiredDocuments: ['Marriage Certificate', 'Proof of Desertion', 'Identity Proof', 'Income Certificate'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'marriage-certificate',
    slug: 'marriage-certificate',
    name: 'Marriage Certificate',
    description: 'Official marriage registration certificate',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 100,
    professionalFee: 799,
    gst: 144,
    totalPayable: 1043,
    processingTime: '15-30 days',
    requiredDocuments: ['Marriage Invitation', 'Photos', 'IDs of Couple', 'Witness Details'],
    popular: true,
    requiresPhysicalPresence: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'inter-caste-marriage-certificate',
    slug: 'inter-caste-marriage-certificate',
    name: 'Inter-Caste Marriage Certificate',
    description: 'Certificate for inter-caste marriage benefits',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 0,
    professionalFee: 999,
    gst: 180,
    totalPayable: 1179,
    processingTime: '30-60 days',
    requiredDocuments: ['Marriage Certificate', 'Caste Certificates', 'Joint Affidavit', 'Photos'],
    popular: false,
    requiresPhysicalPresence: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'family-card',
    slug: 'family-card',
    name: 'Family Card',
    description: 'Family identity card from local body',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 0,
    professionalFee: 399,
    gst: 72,
    totalPayable: 471,
    processingTime: '15-30 days',
    requiredDocuments: ['Aadhaar (All members)', 'Address Proof', 'Family Details'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'no-objection-certificate',
    slug: 'no-objection-certificate',
    name: 'No Objection Certificate',
    description: 'General purpose NOC from authorities',
    category: 'certificates',
    categoryGroup: 'Revenue Certificates',
    statutoryFee: 100,
    professionalFee: 799,
    gst: 144,
    totalPayable: 1043,
    processingTime: '15-30 days',
    requiredDocuments: ['Purpose Details', 'Supporting Documents', 'ID Proof'],
    popular: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  // ========================================
  // PROPERTY & ASSETS (11 Services)
  // ========================================
  {
    id: 'patta-services',
    slug: 'patta-services',
    name: 'Patta Services',
    description: 'Patta transfer and land record services',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 60,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 1829,
    processingTime: '60-90 days',
    requiredDocuments: ['Registered Sale Deed', 'Old Patta', 'Survey Documents', 'Encumbrance Certificate'],
    popular: true,
    operationalComplexity: 'high',
    hasSubServices: true,
    subServices: [
      { value: 'transfer-full', label: 'Patta Transfer - Full Field', description: 'Complete property transfer', additionalDocs: ['Sale Deed', 'Previous Patta', 'Tax Receipts'] },
      { value: 'transfer-joint', label: 'Patta Transfer - Joint/Partiable', description: 'Joint ownership transfer', additionalDocs: ['Sale Deed', 'Previous Patta', 'Tax Receipts', 'Partition Deed'] },
      { value: 'subdivision', label: 'Patta Subdivision', description: 'Divide property into smaller portions', additionalDocs: ['Subdivision Plan', 'Survey Documents', 'Previous Patta'] },
      { value: 'name-correction', label: 'Patta Name Correction', description: 'Fix name errors in patta', additionalDocs: ['ID Proof with Correct Name', 'Patta Copy'] },
      { value: 'consolidation', label: 'Patta Consolidation', description: 'Merge multiple pattas', additionalDocs: ['All Patta Copies', 'Survey Documents'] }
    ]
  },

  {
    id: 'encumbrance-certificate',
    slug: 'encumbrance-certificate',
    name: 'Encumbrance Certificate',
    description: 'Property legal status verification certificate',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 50,
    professionalFee: 499,
    gst: 90,
    totalPayable: 639,
    processingTime: '7-15 days',
    requiredDocuments: ['Property Details', 'Survey Number', 'Village Details', 'Time Period'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'property-tax-payment',
    slug: 'property-tax-payment',
    name: 'Property Tax Payment',
    description: 'Municipal property tax payment',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 0,
    professionalFee: 199,
    gst: 36,
    totalPayable: 235,
    processingTime: '1-3 days',
    requiredDocuments: ['Property Details', 'Previous Tax Receipt', 'Owner ID'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'building-permit',
    slug: 'building-permit',
    name: 'Building Construction Permit',
    description: 'Construction approval from local authority',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 5000,
    professionalFee: 14999,
    gst: 2700,
    totalPayable: 22699,
    processingTime: '60-90 days',
    requiredDocuments: ['Plot Details', 'Building Plan', 'Architect Certificate', 'Ownership Proof'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'occupancy-certificate',
    slug: 'occupancy-certificate',
    name: 'Occupancy Certificate',
    description: 'Post-construction occupancy approval',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 2000,
    professionalFee: 9999,
    gst: 1800,
    totalPayable: 13799,
    processingTime: '30-60 days',
    requiredDocuments: ['Building Permit', 'Completion Certificate', 'Site Photos', 'Compliance Report'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'land-conversion',
    slug: 'land-conversion',
    name: 'Land Use Conversion',
    description: 'Agricultural to non-agricultural conversion',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 10000,
    professionalFee: 24999,
    gst: 4500,
    totalPayable: 39499,
    processingTime: '90-180 days',
    requiredDocuments: ['Patta Copy', 'Survey Map', 'FMB Sketch', 'Land Use Purpose'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'property-registration',
    slug: 'property-registration',
    name: 'Property Document Registration',
    description: 'Sale deed and property document registration',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 0,
    professionalFee: 2999,
    gst: 540,
    totalPayable: 3539,
    processingTime: '7-15 days',
    requiredDocuments: ['Sale Agreement', 'Encumbrance Certificate', 'Property Tax Receipt', 'IDs'],
    popular: true,
    isStatutoryFeeVariable: true,
    statutoryFeeNote: 'Registration fee varies (7% of property value)',
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'khata-extract',
    slug: 'khata-extract',
    name: 'Khata Extract',
    description: 'Property khata details from municipal records',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 20,
    professionalFee: 299,
    gst: 54,
    totalPayable: 373,
    processingTime: '3-7 days',
    requiredDocuments: ['Property Details', 'Owner ID', 'Tax Receipt'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'mutation-certificate',
    slug: 'mutation-certificate',
    name: 'Mutation Certificate',
    description: 'Update land records after ownership change',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 100,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 1869,
    processingTime: '30-60 days',
    requiredDocuments: ['Registered Sale Deed', 'Previous Records', 'Tax Receipts', 'Survey Map'],
    popular: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'subdivision-certificate',
    slug: 'subdivision-certificate',
    name: 'Land Subdivision Certificate',
    description: 'Divide single land parcel into multiple plots',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 500,
    professionalFee: 4999,
    gst: 900,
    totalPayable: 6399,
    processingTime: '60-90 days',
    requiredDocuments: ['Patta Copy', 'Survey Map', 'Subdivision Plan', 'NOC from Authority'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'land-survey',
    slug: 'land-survey',
    name: 'Land Survey & Demarcation',
    description: 'Professional land survey and boundary marking',
    category: 'property',
    categoryGroup: 'Property & Assets',
    statutoryFee: 0,
    professionalFee: 7999,
    gst: 1440,
    totalPayable: 9439,
    processingTime: '15-30 days',
    requiredDocuments: ['Patta Copy', 'FMB Sketch', 'Adjacent Owner Details'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  // ========================================
  // WELFARE SCHEMES (17 Services)
  // ========================================
  {
    id: 'old-age-pension',
    slug: 'old-age-pension',
    name: 'Old Age Pension Scheme',
    description: 'Monthly pension for senior citizens',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 599,
    gst: 108,
    totalPayable: 707,
    processingTime: '30-60 days',
    requiredDocuments: ['Age Proof (60+ years)', 'Income Certificate', 'Bank Details', 'Aadhaar'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'widow-pension',
    slug: 'widow-pension',
    name: 'Widow Pension Scheme',
    description: 'Financial assistance for widows',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 599,
    gst: 108,
    totalPayable: 707,
    processingTime: '30-60 days',
    requiredDocuments: ['Widow Certificate', 'Death Certificate', 'Income Certificate', 'Bank Details'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'disability-pension',
    slug: 'disability-pension',
    name: 'Disability Pension Scheme',
    description: 'Pension for differently abled persons',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 799,
    gst: 144,
    totalPayable: 943,
    processingTime: '30-60 days',
    requiredDocuments: ['Disability Certificate', 'Income Certificate', 'Bank Details', 'Medical Reports'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'deserted-woman-pension',
    slug: 'deserted-woman-pension',
    name: 'Deserted Woman Pension',
    description: 'Financial support for deserted women',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 799,
    gst: 144,
    totalPayable: 943,
    processingTime: '30-60 days',
    requiredDocuments: ['Deserted Woman Certificate', 'Income Certificate', 'Bank Details', 'Aadhaar'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'scholarship-sc-st',
    slug: 'scholarship-sc-st',
    name: 'SC/ST Scholarship',
    description: 'Educational scholarship for SC/ST students',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 499,
    gst: 90,
    totalPayable: 589,
    processingTime: '30-60 days',
    requiredDocuments: ['Caste Certificate', 'Income Certificate', 'Mark Sheets', 'Bank Details', 'College ID'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'scholarship-bc-mbc',
    slug: 'scholarship-bc-mbc',
    name: 'BC/MBC Scholarship',
    description: 'Educational scholarship for BC/MBC students',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 499,
    gst: 90,
    totalPayable: 589,
    processingTime: '30-60 days',
    requiredDocuments: ['Community Certificate', 'Income Certificate', 'Mark Sheets', 'Bank Details', 'College ID'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'scholarship-minority',
    slug: 'scholarship-minority',
    name: 'Minority Community Scholarship',
    description: 'Educational scholarship for minority students',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 499,
    gst: 90,
    totalPayable: 589,
    processingTime: '30-60 days',
    requiredDocuments: ['Community Certificate', 'Income Certificate', 'Mark Sheets', 'Bank Details', 'College ID'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'maternity-benefit',
    slug: 'maternity-benefit',
    name: 'Maternity Benefit Scheme',
    description: 'Financial assistance for pregnant women',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 599,
    gst: 108,
    totalPayable: 707,
    processingTime: '30-60 days',
    requiredDocuments: ['Pregnancy Certificate', 'Aadhaar', 'Bank Details', 'Hospital Records'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'marriage-assistance',
    slug: 'marriage-assistance',
    name: 'Marriage Assistance Scheme',
    description: 'Financial aid for marriages',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 799,
    gst: 144,
    totalPayable: 943,
    processingTime: '30-60 days',
    requiredDocuments: ['Marriage Certificate', 'Income Certificate', 'Bank Details', 'Community Certificate'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'funeral-assistance',
    slug: 'funeral-assistance',
    name: 'Funeral Assistance Scheme',
    description: 'Financial support for last rites',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 399,
    gst: 72,
    totalPayable: 471,
    processingTime: '15-30 days',
    requiredDocuments: ['Death Certificate', 'Income Certificate', 'Bank Details', 'Applicant ID'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'housing-scheme',
    slug: 'housing-scheme',
    name: 'Housing Scheme',
    description: 'Government housing scheme application',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 1769,
    processingTime: '90-180 days',
    requiredDocuments: ['Income Certificate', 'Caste Certificate', 'Bank Details', 'Property Documents'],
    popular: false,
    isFullyOnline: false,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'unemployment-allowance',
    slug: 'unemployment-allowance',
    name: 'Unemployment Allowance',
    description: 'Monthly allowance for unemployed youth',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 599,
    gst: 108,
    totalPayable: 707,
    processingTime: '30-60 days',
    requiredDocuments: ['Educational Certificates', 'Income Certificate', 'Employment Office Registration', 'Bank Details'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'farmer-welfare',
    slug: 'farmer-welfare',
    name: 'Farmer Welfare Scheme',
    description: 'Various schemes for farmers',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 799,
    gst: 144,
    totalPayable: 943,
    processingTime: '30-60 days',
    requiredDocuments: ['Land Records', 'Income Certificate', 'Bank Details', 'Aadhaar'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'free-laptop-scheme',
    slug: 'free-laptop-scheme',
    name: 'Free Laptop Scheme',
    description: 'Laptop distribution for students',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 399,
    gst: 72,
    totalPayable: 471,
    processingTime: '60-90 days',
    requiredDocuments: ['Mark Sheets', 'College ID', 'Income Certificate', 'Bank Details'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'ration-card-subsidy',
    slug: 'ration-card-subsidy',
    name: 'Ration Card Subsidy',
    description: 'Food security card and subsidies',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 599,
    gst: 108,
    totalPayable: 707,
    processingTime: '30-60 days',
    requiredDocuments: ['Family Details', 'Income Certificate', 'Address Proof', 'Aadhaar (All members)'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'health-insurance-scheme',
    slug: 'health-insurance-scheme',
    name: 'Health Insurance Scheme',
    description: 'Government health insurance enrollment',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 399,
    gst: 72,
    totalPayable: 471,
    processingTime: '15-30 days',
    requiredDocuments: ['Family Details', 'Income Certificate', 'Aadhaar (All members)', 'Bank Details'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'skill-development-scheme',
    slug: 'skill-development-scheme',
    name: 'Skill Development Scheme',
    description: 'Free skill training programs',
    category: 'welfare',
    categoryGroup: 'Welfare Schemes',
    statutoryFee: 0,
    professionalFee: 299,
    gst: 54,
    totalPayable: 353,
    processingTime: '15-30 days',
    requiredDocuments: ['Educational Certificates', 'Aadhaar', 'Bank Details'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  // ========================================
  // BUSINESS & LICENSES (17 Services)
  // ========================================
  {
    id: 'gst-registration',
    slug: 'gst-registration',
    name: 'GST Registration',
    description: 'Goods and Services Tax registration',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 0,
    professionalFee: 2999,
    gst: 540,
    totalPayable: 3539,
    processingTime: '7-15 days',
    requiredDocuments: ['Business Address Proof', 'PAN Card', 'Bank Details', 'Owner ID'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'trade-license',
    slug: 'trade-license',
    name: 'Trade License',
    description: 'Municipal trade license for business',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 500,
    professionalFee: 1999,
    gst: 360,
    totalPayable: 2859,
    processingTime: '15-30 days',
    requiredDocuments: ['Shop/Office Address Proof', 'Owner ID', 'Business Details', 'Layout Plan'],
    popular: true,
    requiresSiteInspection: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'shops-establishment-license',
    slug: 'shops-establishment-license',
    name: 'Shops & Establishment License',
    description: 'Registration under Shops Act',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 200,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 1969,
    processingTime: '15-30 days',
    requiredDocuments: ['Shop Address Proof', 'Owner ID', 'Employee Details', 'Layout Plan'],
    popular: true,
    isFullyOnline: false,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'food-license-fssai',
    slug: 'food-license-fssai',
    name: 'FSSAI Food License',
    description: 'Food Safety and Standards Authority license',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 2000,
    professionalFee: 4999,
    gst: 900,
    totalPayable: 7899,
    processingTime: '30-60 days',
    requiredDocuments: ['Business Address Proof', 'Food Safety Plan', 'Layout Plan', 'Owner ID'],
    popular: true,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'msme-udyam-registration',
    slug: 'msme-udyam-registration',
    name: 'MSME/Udyam Registration',
    description: 'Micro, Small & Medium Enterprise registration',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 0,
    professionalFee: 1999,
    gst: 360,
    totalPayable: 2359,
    processingTime: '7-15 days',
    requiredDocuments: ['Aadhaar', 'PAN', 'Business Details', 'Investment Details'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'import-export-code',
    slug: 'import-export-code',
    name: 'Import Export Code (IEC)',
    description: 'DGFT IEC for international trade',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 500,
    professionalFee: 2999,
    gst: 540,
    totalPayable: 4039,
    processingTime: '7-15 days',
    requiredDocuments: ['PAN Card', 'Business Address Proof', 'Bank Certificate', 'Cancelled Cheque'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'professional-tax-registration',
    slug: 'professional-tax-registration',
    name: 'Professional Tax Registration',
    description: 'State professional tax enrollment',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 100,
    professionalFee: 999,
    gst: 180,
    totalPayable: 1279,
    processingTime: '7-15 days',
    requiredDocuments: ['PAN Card', 'Business Registration', 'Employee Details', 'Address Proof'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'factory-license',
    slug: 'factory-license',
    name: 'Factory License',
    description: 'Manufacturing unit license under Factories Act',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 2000,
    professionalFee: 9999,
    gst: 1800,
    totalPayable: 13799,
    processingTime: '45-60 days',
    requiredDocuments: ['Land Documents', 'Building Plan', 'Machinery Details', 'Safety Measures'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'fire-noc',
    slug: 'fire-noc',
    name: 'Fire NOC',
    description: 'Fire safety NOC from fire department',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 1000,
    professionalFee: 4999,
    gst: 900,
    totalPayable: 6899,
    processingTime: '30-45 days',
    requiredDocuments: ['Building Plan', 'Fire Safety Equipment Details', 'Layout Plan', 'Owner ID'],
    popular: true,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'liquor-license',
    slug: 'liquor-license',
    name: 'Liquor License',
    description: 'License for sale of alcoholic beverages',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 50000,
    professionalFee: 29999,
    gst: 5400,
    totalPayable: 85399,
    processingTime: '90-180 days',
    requiredDocuments: ['Shop Details', 'Police Verification', 'Character Certificate', 'Financials'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'pharmacy-license',
    slug: 'pharmacy-license',
    name: 'Pharmacy License',
    description: 'Drug license for medical shop',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 2000,
    professionalFee: 7999,
    gst: 1440,
    totalPayable: 11439,
    processingTime: '45-60 days',
    requiredDocuments: ['Pharmacy Degree', 'Shop Details', 'Layout Plan', 'Equipment List'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'hotel-restaurant-license',
    slug: 'hotel-restaurant-license',
    name: 'Hotel/Restaurant License',
    description: 'Hospitality business license',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 5000,
    professionalFee: 9999,
    gst: 1800,
    totalPayable: 16799,
    processingTime: '45-60 days',
    requiredDocuments: ['Property Documents', 'FSSAI License', 'Fire NOC', 'Health Certificate'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'cinema-theater-license',
    slug: 'cinema-theater-license',
    name: 'Cinema Theater License',
    description: 'License for cinema operations',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 10000,
    professionalFee: 19999,
    gst: 3600,
    totalPayable: 33599,
    processingTime: '90-180 days',
    requiredDocuments: ['Building Plan', 'Fire Safety Certificate', 'Seating Plan', 'Sound System Details'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'contractor-license',
    slug: 'contractor-license',
    name: 'Contractor License',
    description: 'Building contractor registration',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 1000,
    professionalFee: 4999,
    gst: 900,
    totalPayable: 6899,
    processingTime: '30-45 days',
    requiredDocuments: ['Technical Qualifications', 'Work Experience', 'PAN Card', 'Business Address'],
    popular: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'petrol-pump-license',
    slug: 'petrol-pump-license',
    name: 'Petrol Pump License',
    description: 'Fuel station authorization',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 25000,
    professionalFee: 49999,
    gst: 9000,
    totalPayable: 83999,
    processingTime: '180-365 days',
    requiredDocuments: ['Land Documents', 'NOC from Petroleum Ministry', 'Pollution NOC', 'Financial Proof'],
    popular: false,
    requiresSiteInspection: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'gaming-license',
    slug: 'gaming-license',
    name: 'Gaming License',
    description: 'Gaming parlor or arcade license',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 5000,
    professionalFee: 9999,
    gst: 1800,
    totalPayable: 16799,
    processingTime: '60-90 days',
    requiredDocuments: ['Shop Details', 'Police Clearance', 'Equipment List', 'Layout Plan'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'pawn-broker-license',
    slug: 'pawn-broker-license',
    name: 'Pawn Broker License',
    description: 'Money lending against pledged items',
    category: 'business',
    categoryGroup: 'Business & Licenses',
    statutoryFee: 2000,
    professionalFee: 7999,
    gst: 1440,
    totalPayable: 11439,
    processingTime: '60-90 days',
    requiredDocuments: ['Shop Details', 'Police Verification', 'Character Certificate', 'Storage Facility'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  // ========================================
  // VEHICLE SERVICES (12 Services)
  // ========================================
  {
    id: 'vehicle-registration',
    slug: 'vehicle-registration',
    name: 'New Vehicle Registration',
    description: 'First-time vehicle registration with RTO',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 300,
    professionalFee: 1299,
    gst: 234,
    totalPayable: 1833,
    processingTime: '7-15 days',
    requiredDocuments: ['Invoice', 'Insurance', 'Pollution Certificate', 'ID Proof', 'Address Proof'],
    popular: true,
    requiresPhysicalPresence: true,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'rc-transfer',
    slug: 'rc-transfer',
    name: 'RC Transfer (Ownership Change)',
    description: 'Transfer vehicle ownership',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 300,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 2069,
    processingTime: '15-30 days',
    requiredDocuments: ['Original RC', 'Sale Agreement', 'Insurance', 'IDs of Both Parties', 'Form 29 & 30'],
    popular: true,
    requiresPhysicalPresence: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'duplicate-rc',
    slug: 'duplicate-rc',
    name: 'Duplicate RC',
    description: 'Reissue lost or damaged RC',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 100,
    professionalFee: 699,
    gst: 126,
    totalPayable: 925,
    processingTime: '7-15 days',
    requiredDocuments: ['FIR Copy (if lost)', 'Owner ID', 'Vehicle Photos', 'Insurance Copy'],
    popular: true,
    isFullyOnline: false,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'vehicle-fitness-certificate',
    slug: 'vehicle-fitness-certificate',
    name: 'Vehicle Fitness Certificate',
    description: 'Fitness certificate for commercial vehicles',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 200,
    professionalFee: 999,
    gst: 180,
    totalPayable: 1379,
    processingTime: '3-7 days',
    requiredDocuments: ['RC Copy', 'Insurance', 'Pollution Certificate', 'Vehicle Inspection'],
    popular: false,
    requiresPhysicalPresence: true,
    requiresSiteInspection: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'rc-address-change',
    slug: 'rc-address-change',
    name: 'RC Address Change',
    description: 'Update address in vehicle registration',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 100,
    professionalFee: 799,
    gst: 144,
    totalPayable: 1043,
    processingTime: '7-15 days',
    requiredDocuments: ['Original RC', 'New Address Proof', 'Owner ID', 'Form 28'],
    popular: true,
    isFullyOnline: false,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'theft-intimation',
    slug: 'theft-intimation',
    name: 'Vehicle Theft Intimation',
    description: 'Report vehicle theft to RTO',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 0,
    professionalFee: 499,
    gst: 90,
    totalPayable: 589,
    processingTime: '3-7 days',
    requiredDocuments: ['Vehicle Details', 'Owner ID', 'FIR Copy (if stolen)'],
    popular: false,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'hypothecation-removal',
    slug: 'hypothecation-removal',
    name: 'Hypothecation Removal',
    description: 'Remove loan lien from vehicle RC',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 100,
    professionalFee: 999,
    gst: 180,
    totalPayable: 1279,
    processingTime: '15-30 days',
    requiredDocuments: ['Original RC', 'NOC from Bank', 'Form 35', 'Owner ID'],
    popular: true,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'noc-vehicle-transfer',
    slug: 'noc-vehicle-transfer',
    name: 'Vehicle NOC (Interstate Transfer)',
    description: 'NOC for interstate vehicle transfer',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 200,
    professionalFee: 1299,
    gst: 234,
    totalPayable: 1733,
    processingTime: '15-30 days',
    requiredDocuments: ['Original RC', 'Insurance', 'Pollution Certificate', 'Tax Payment'],
    popular: false,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'road-tax-payment',
    slug: 'road-tax-payment',
    name: 'Road Tax Payment',
    description: 'Annual road tax payment',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 0,
    professionalFee: 299,
    gst: 54,
    totalPayable: 353,
    processingTime: '3-7 days',
    requiredDocuments: ['RC Copy', 'Previous Tax Receipt', 'Vehicle Details'],
    popular: true,
    isFullyOnline: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'learner-license',
    slug: 'learner-license',
    name: 'Learner License',
    description: 'Learner license application',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 150,
    professionalFee: 699,
    gst: 126,
    totalPayable: 975,
    processingTime: '7-15 days',
    requiredDocuments: ['Age Proof', 'Address Proof', 'Medical Certificate', 'Photographs'],
    popular: true,
    requiresPhysicalPresence: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'permanent-driving-license',
    slug: 'permanent-driving-license',
    name: 'Permanent Driving License',
    description: 'Permanent DL after learner license',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 200,
    professionalFee: 999,
    gst: 180,
    totalPayable: 1379,
    processingTime: '15-30 days',
    requiredDocuments: ['Learner License', 'Address Proof', 'Medical Certificate'],
    popular: true,
    requiresPhysicalPresence: true,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'international-driving-permit',
    slug: 'international-driving-permit',
    name: 'International Driving Permit',
    description: 'IDP for driving abroad',
    category: 'vehicle',
    categoryGroup: 'Vehicle Services',
    statutoryFee: 1000,
    professionalFee: 1499,
    gst: 270,
    totalPayable: 2769,
    processingTime: '7-15 days',
    requiredDocuments: ['Valid DL', 'Passport', 'Photographs', 'Travel Documents'],
    popular: false,
    requiresPhysicalPresence: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  // ========================================
  // LEGAL SERVICES (5 Services)
  // ========================================
  {
    id: 'affidavit-drafting',
    slug: 'affidavit-drafting',
    name: 'Affidavit Drafting',
    description: 'Legal affidavit preparation',
    category: 'legal',
    categoryGroup: 'Legal Services',
    statutoryFee: 50,
    professionalFee: 499,
    gst: 90,
    totalPayable: 639,
    processingTime: '1-3 days',
    requiredDocuments: ['Purpose Details', 'Supporting Documents', 'ID Proof'],
    popular: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'notary-services',
    slug: 'notary-services',
    name: 'Notary Services',
    description: 'Document notarization and attestation',
    category: 'legal',
    categoryGroup: 'Legal Services',
    statutoryFee: 100,
    professionalFee: 299,
    gst: 54,
    totalPayable: 453,
    processingTime: '1-2 days',
    requiredDocuments: ['Original Documents', 'ID Proof', 'Photographs'],
    popular: true,
    operationalComplexity: 'low',
    hasSubServices: false
  },

  {
    id: 'power-of-attorney',
    slug: 'power-of-attorney',
    name: 'Power of Attorney',
    description: 'POA preparation and registration',
    category: 'legal',
    categoryGroup: 'Legal Services',
    statutoryFee: 500,
    professionalFee: 1999,
    gst: 360,
    totalPayable: 2859,
    processingTime: '7-15 days',
    requiredDocuments: ['Grantor & Grantee IDs', 'Purpose Details', 'Witnesses'],
    popular: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  {
    id: 'succession-certificate',
    slug: 'succession-certificate',
    name: 'Succession Certificate',
    description: 'Court succession certificate for movable property',
    category: 'legal',
    categoryGroup: 'Legal Services',
    statutoryFee: 5000,
    professionalFee: 14999,
    gst: 2700,
    totalPayable: 22699,
    processingTime: '180-365 days',
    requiredDocuments: ['Death Certificate', 'Legal Heir Certificate', 'Property Details'],
    popular: false,
    isStatutoryFeeVariable: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'degree-certificate-verification',
    slug: 'degree-certificate-verification',
    name: 'Degree Certificate Verification',
    description: 'University degree certificate verification',
    category: 'education',
    categoryGroup: 'Education',
    statutoryFee: 100,
    professionalFee: 799,
    gst: 144,
    totalPayable: 1043,
    processingTime: '15-30 days',
    requiredDocuments: ['Original Degree', 'Mark Sheets', 'ID Proof'],
    popular: false,
    isFullyOnline: false,
    operationalComplexity: 'medium',
    hasSubServices: false
  },

  // ========================================
  // SAFETY & COMPLIANCE (2 Services)
  // ========================================
  {
    id: 'pollution-control-noc',
    slug: 'pollution-control-noc',
    name: 'Pollution Control NOC',
    description: 'Pollution board clearance',
    category: 'safety',
    categoryGroup: 'Safety & Compliance',
    statutoryFee: 5000,
    professionalFee: 9999,
    gst: 1800,
    totalPayable: 16799,
    processingTime: '60-90 days',
    requiredDocuments: ['Industry Details', 'Waste Management Plan', 'Emission Details'],
    popular: false,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  },

  {
    id: 'environmental-clearance',
    slug: 'environmental-clearance',
    name: 'Environmental Clearance',
    description: 'MoEF clearance for large projects',
    category: 'safety',
    categoryGroup: 'Safety & Compliance',
    statutoryFee: 0,
    professionalFee: 49999,
    gst: 9000,
    totalPayable: 58999,
    processingTime: '180-365 days',
    requiredDocuments: ['Project Report', 'EIA Study', 'Public Hearing Details'],
    popular: false,
    isStatutoryFeeVariable: true,
    requiresSiteInspection: true,
    operationalComplexity: 'high',
    hasSubServices: false
  }
];

// SERVICE CATEGORIES
export const serviceCategories = [
  { id: 'identity', name: 'Identity & Cards', icon: '🪪', description: 'Aadhaar, PAN, Passport, Voter ID' },
  { id: 'certificates', name: 'Revenue Certificates', icon: '📄', description: 'Community, Income, Nativity certificates' },
  { id: 'property', name: 'Property & Assets', icon: '🏠', description: 'Patta, Land records, Property services' },
  { id: 'vehicle', name: 'Vehicle Services', icon: '🚗', description: 'Driving License, Vehicle Registration' },
  { id: 'business', name: 'Business & Licenses', icon: '💼', description: 'GST, Trade License, FSSAI' },
  { id: 'welfare', name: 'Welfare Schemes', icon: '🤝', description: 'Pensions, Scholarships, Social welfare' },
  { id: 'legal', name: 'Legal Services', icon: '⚖️', description: 'Affidavits, Legal heir, POA' },
  { id: 'education', name: 'Education', icon: '🎓', description: 'Educational certificates and services' },
  { id: 'safety', name: 'Safety & Compliance', icon: '🛡️', description: 'Fire NOC, Pollution certificates' },
  { id: 'other', name: 'Other Services', icon: '📋', description: 'Additional government services' }
];

// HELPER FUNCTIONS
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(services.map(service => service.category)));
}

export function getAllServices(): Service[] {
  return services;
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.popular === true);
}

export function searchServices(query: string): Service[] {
  const lowerQuery = query.toLowerCase();
  return services.filter(
    service =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.category.toLowerCase().includes(lowerQuery)
  );
}

export function getCategoryInfo(categoryId: string) {
  return serviceCategories.find(cat => cat.id === categoryId);
}

export default services;