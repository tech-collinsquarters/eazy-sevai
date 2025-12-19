import { RequiredDocument } from '@/types/document';

export const SERVICE_DOCUMENTS: Record<string, RequiredDocument[]> = {
  // ==========================================
  // 1. IDENTITY & CARDS
  // ==========================================
  "aadhaar-update": [
    {
      "name": "Proof of Identity",
      "description": "Passport, PAN Card, Voter ID, or Driving License",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Scanned copy of ID proof",
      "notes": "Required for Name/Gender/DOB correction"
    },
    {
      "name": "Proof of Address",
      "description": "Passport, Bank Statement, Ration Card, or Voter ID",
      "mandatory": false,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Recent Utility Bill",
      "notes": "Required specifically for Address Change"
    },
    {
      "name": "Aadhaar Card",
      "description": "Current Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Front and back of current card",
      "notes": "Mandatory"
    }
  ],
  "pan-card": [
    {
      "name": "Aadhaar Card",
      "description": "Aadhaar is mandatory for PAN linkage",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card copy",
      "notes": "Ensure mobile number is linked"
    },
    {
      "name": "Passport Size Photo",
      "description": "Digital scan of photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Studio taken photo",
      "notes": "White background preferred"
    },
    {
      "name": "Signature Scan",
      "description": "Signature on white paper with black ink",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Clear signature scan",
      "notes": "Do not sign across the photo"
    }
  ],
  "voter-id-card": [
    {
      "name": "Passport Size Photo",
      "description": "Recent color photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Standard passport photo",
      "notes": "Face should cover 70% of area"
    },
    {
      "name": "Address Proof",
      "description": "Ration Card, Aadhaar, or Utility Bill",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Smart Card copy",
      "notes": "Must show current residence"
    },
    {
      "name": "Age Proof",
      "description": "Birth Certificate, Pan Card or School Cert",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Birth Certificate",
      "notes": "Required for new applicants"
    }
  ],
  "driving-license": [
    {
      "name": "Learner's License",
      "description": "Valid LLR Document (if applying for Permanent)",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LLR generated 30 days prior",
      "notes": "For Permanent DL only"
    },
    {
      "name": "Address Proof",
      "description": "Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar copy",
      "notes": "Same address as in application"
    },
    {
      "name": "Age Proof",
      "description": "School Certificate or Birth Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "SSLC Marksheet",
      "notes": "Proof of DOB"
    }
  ],
  "birth-certificate": [
    {
      "name": "Discharge Summary",
      "description": "Hospital Discharge Summary",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Hospital document",
      "notes": "Contains Date and Time of birth"
    },
    {
      "name": "Parents' ID Proof",
      "description": "Aadhaar of Mother and Father",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Both parents' Aadhaar cards",
      "notes": "Names must match hospital records"
    }
  ],
  "death-certificate": [
    {
      "name": "Form 2 (Medical Certification)",
      "description": "Cause of death certificate from Doctor/Hospital",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Hospital issued death report",
      "notes": "Required if death occurred in hospital"
    },
    {
      "name": "Deceased ID Proof",
      "description": "Aadhaar or Ration card of deceased",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Deceased's Aadhaar",
      "notes": "For name verification"
    }
  ],
  "income-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "200KB",
      "example": "Aadhaar card",
      "notes": "Both sides"
    },
    {
      "name": "Income Proof",
      "description": "Salary Slip, VAO Report or Self Declaration",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Pay slip or Employer letter",
      "notes": "Proof of income source"
    },
    {
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Family card"
    }
  ],
  "caste-certificate": [
    {
      "name": "Community Certificate of Father/Relative",
      "description": "Proof of community",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Father's certificate",
      "notes": "Critical for verification"
    },
    {
      "name": "School Transfer Certificate",
      "description": "TC mentioning community",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "School TC",
      "notes": "Must state the caste"
    },
    {
      "name": "Aadhaar Card",
      "description": "ID Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Applicant ID"
    }
  ],
  "residence-certificate": [
    {
      "name": "Address Proof",
      "description": "Ration Card, Passport, or Voter ID",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Showing 5+ years residence if possible"
    },
    {
      "name": "School Certificate",
      "description": "Proof of study in the location",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Bonafide Certificate",
      "notes": "For students"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID Proof"
    }
  ],
  "senior-citizen-card": [
    {
      "name": "Age Proof",
      "description": "Birth Cert, Aadhaar, or Voter ID showing DOB",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar Card",
      "notes": "Must be 60+ years"
    },
    {
      "name": "Blood Group Report",
      "description": "Report from lab",
      "mandatory": false,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Lab Report",
      "notes": "For emergency details on card"
    },
    {
      "name": "Photo",
      "description": "Recent passport size photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Photo",
      "notes": "Clear face"
    }
  ],

  // ==========================================
  // 2. REVENUE CERTIFICATES
  // ==========================================
  "community-certificate": [
    {
      "name": "Father's Community Certificate",
      "description": "Certificate of father or siblings",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Father's old paper certificate",
      "notes": "Critical for proving caste lineage"
    },
    {
      "name": "School Transfer Certificate (TC)",
      "description": "TC mentioning community",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "School TC",
      "notes": "Must explicitly state the caste"
    },
    {
      "name": "Aadhaar Card",
      "description": "Proof of Identity",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "200KB",
      "example": "Aadhaar card",
      "notes": "Both sides"
    }
  ],
  "nativity-certificate": [
    {
      "name": "Birth Certificate",
      "description": "Proof of birth in Tamil Nadu",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Municipality certificate",
      "notes": "Essential to prove place of birth"
    },
    {
      "name": "Ration Card",
      "description": "Proof of continuous residence",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "Proof of address"
    },
    {
      "name": "School Certificates",
      "description": "Proof of education in TN (5-10 years)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "SSLC Marksheet or TC",
      "notes": "Proves long term residence"
    }
  ],
  "first-graduate-certificate": [
    {
      "name": "Transfer Certificate (Applicant)",
      "description": "12th Standard TC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "HSC TC",
      "notes": "Showing completion of schooling"
    },
    {
      "name": "Parents' Education Certificates",
      "description": "Proof of parents' literacy status",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Parents' TC or declaration",
      "notes": "To prove they are not graduates"
    },
    {
      "name": "Self-Declaration (Family)",
      "description": "Affirming no other graduate in family",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed declaration",
      "notes": "Must explicitly state no sibling has used this benefit"
    }
  ],
  "legal-heir-certificate": [
    {
      "name": "Death Certificate",
      "description": "Deceased person's death certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Corporation Death Cert",
      "notes": "Must be original government issued"
    },
    {
      "name": "Legal Heir Application Affidavit",
      "description": "Self-declaration of all heirs",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized Affidavit",
      "notes": "Listing all surviving legal heirs"
    },
    {
      "name": "Aadhaar Cards (All Heirs)",
      "description": "ID proofs of all claimants",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Combined PDF of all Aadhaar cards",
      "notes": "Identity proof for everyone listed"
    }
  ],
  "widow-certificate": [
    {
      "name": "Death Certificate of Husband",
      "description": "Official Death Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Govt issued death certificate",
      "notes": "Must contain husband's name"
    },
    {
      "name": "Marriage Certificate/Proof",
      "description": "Proof of marriage to deceased",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marriage Cert or Ration Card",
      "notes": "Proves relationship"
    }
  ],
  "deserted-woman-certificate": [
    {
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Proof of separate living if updated"
    },
    {
      "name": "Separation Evidence",
      "description": "Legal notice, Court order, or VAO report",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "FIR copy or Legal Notice",
      "notes": "Proof of desertion for statutory period"
    }
  ],
  "inter-caste-marriage-certificate": [
    {
      "name": "Marriage Certificate",
      "description": "Registered Marriage Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Govt issued marriage certificate",
      "notes": "Proof of legal marriage"
    },
    {
      "name": "Community Certificates (Both)",
      "description": "Community certs of husband and wife",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Both community certificates",
      "notes": "To prove different castes"
    }
  ],
  "family-card": [
    {
      "name": "Aadhaar Cards (All Members)",
      "description": "IDs of all family members",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Combined PDF",
      "notes": "For verification"
    },
    {
      "name": "Head of Family Photo",
      "description": "Photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Photo",
      "notes": "Usually female head"
    },
    {
      "name": "Address Proof",
      "description": "Gas Bill/EB Bill",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Bill",
      "notes": "Proof of residence"
    }
  ],
  "no-objection-certificate": [
    {
      "name": "Request Letter",
      "description": "Letter explaining purpose of NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed Letter",
      "notes": "Detailing why NOC is needed"
    },
    {
      "name": "ID Proof",
      "description": "Aadhaar/PAN",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Identity"
    },
    {
      "name": "Property/Vehicle Document",
      "description": "Relevant document for NOC",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC Copy or Property Tax",
      "notes": "Depends on NOC type"
    }
  ],
  "solvency-certificate": [
    {
      "name": "Property Documents",
      "description": "Sale Deed, Patta, Chitta",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Sale Deed",
      "notes": "Proof of asset ownership"
    },
    {
      "name": "Encumbrance Certificate (EC)",
      "description": "EC for last 13 years",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "EC",
      "notes": "Proof of clear title"
    },
    {
      "name": "Property Tax Receipt",
      "description": "Latest tax paid receipt",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tax receipt",
      "notes": "Proof of value"
    }
  ],
  "unemployment-certificate": [
    {
      "name": "Educational Certificates",
      "description": "TC, Marksheets",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "TC",
      "notes": "Proof of qualification"
    },
    {
      "name": "Employment Exchange Card",
      "description": "Registration card",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Emp Card",
      "notes": "If registered"
    },
    {
      "name": "Aadhaar Card",
      "description": "ID Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID Proof"
    }
  ],

  // ==========================================
  // 3. PROPERTY & ASSETS
  // ==========================================
  "patta-services": [
    {
      "name": "Sale Deed",
      "description": "Registered Sale Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sale Deed",
      "notes": "Proof of ownership"
    },
    {
      "name": "Previous Patta (if available)",
      "description": "Copy of old patta",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Old Patta",
      "notes": "Helpful for tracking"
    },
    {
      "name": "Encumbrance Certificate (EC)",
      "description": "EC showing transaction",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "EC",
      "notes": "Proof of transfer"
    }
  ],
  "encumbrance-certificate": [
    {
      "name": "Property Details",
      "description": "Survey No, Village Name, Ward",
      "mandatory": true,
      "formats": ["TXT"],
      "maxSize": "0KB",
      "example": "S.No 123, Adyar",
      "notes": "No upload required usually, just data"
    }
  ],
  "property-tax-payment": [
    {
      "name": "Previous Tax Receipt",
      "description": "Last paid receipt",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Old Receipt",
      "notes": "To fetch property ID"
    },
    {
      "name": "Aadhaar Card",
      "description": "Owner ID",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "For verification"
    }
  ],
  "property-registration": [
    {
      "name": "Draft Sale Deed",
      "description": "Draft document",
      "mandatory": true,
      "formats": ["DOC", "PDF"],
      "maxSize": "5MB",
      "example": "Draft Deed",
      "notes": "For verification before reg"
    },
    {
      "name": "Previous Parent Documents",
      "description": "Parent deeds",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Parent Deed",
      "notes": "Link documents"
    },
    {
      "name": "Patta",
      "description": "Land record",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta",
      "notes": "Proof of holding"
    }
  ],
  "khata-extract": [
    {
      "name": "Sale Deed",
      "description": "Registered Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Deed",
      "notes": "Proof of ownership"
    },
    {
      "name": "Tax Receipt",
      "description": "Latest Tax Receipt",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Receipt",
      "notes": "Proof of tax payment"
    }
  ],
  "mutation-certificate": [
    {
      "name": "Sale Deed / Settlement Deed",
      "description": "Document causing transfer",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Deed",
      "notes": "Registered document"
    },
    {
      "name": "Death Certificate (if applicable)",
      "description": "If transfer by inheritance",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death Cert",
      "notes": "For inheritance cases"
    },
    {
      "name": "Legal Heir Certificate (if applicable)",
      "description": "If transfer by inheritance",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LHC",
      "notes": "For inheritance cases"
    }
  ],

  // ==========================================
  // 4. WELFARE SCHEMES
  // ==========================================
  "old-age-pension": [
    {
      "name": "Aadhaar Card",
      "description": "Age Proof (60+)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Must show DOB"
    },
    {
      "name": "Ration Card",
      "description": "Proof of BPL status",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "PHH/AAY card preferred"
    },
    {
      "name": "Bank Passbook",
      "description": "For DBT",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook front page",
      "notes": "Account must be linked to Aadhaar"
    }
  ],
  "widow-pension": [
    {
      "name": "Death Certificate (Husband)",
      "description": "Husband's Death Cert",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death Cert",
      "notes": "Proof of widowhood"
    },
    {
      "name": "Legal Heir Certificate",
      "description": "Relationship proof",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Legal Heir Cert",
      "notes": "Supporting doc"
    },
    {
      "name": "Bank Passbook",
      "description": "For Payment",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "Single account"
    }
  ],
  "disability-pension": [
    {
      "name": "Disability Certificate / UDID",
      "description": "National ID Card for Disabled",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "UDID Card",
      "notes": "Percentage > 40%"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID Proof"
    },
    {
      "name": "Bank Passbook",
      "description": "For pension credit",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "Active account"
    }
  ],
  "deserted-woman-pension": [
    {
      "name": "Deserted Woman Certificate",
      "description": "Certificate from Tehsildar",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Proof of desertion"
    },
    {
      "name": "Bank Passbook",
      "description": "Account details",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "For DBT"
    }
  ],
  "scholarship-sc-st": [
    {
      "name": "Community Certificate",
      "description": "SC/ST Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Community Cert",
      "notes": "Mandatory"
    },
    {
      "name": "Income Certificate",
      "description": "Parent's Income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Within limit"
    },
    {
      "name": "Mark Sheets",
      "description": "Previous year marks",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marksheet",
      "notes": "Academic proof"
    }
  ],
  "scholarship-bc-mbc": [
    {
      "name": "Community Certificate",
      "description": "BC/MBC Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Community Cert",
      "notes": "Mandatory"
    },
    {
      "name": "Income Certificate",
      "description": "Parent's Income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Within limit"
    }
  ],
  "scholarship-minority": [
    {
      "name": "Community Declaration",
      "description": "Minority status declaration",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Christian/Muslim/Jain etc."
    },
    {
      "name": "Income Certificate",
      "description": "Family Income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Mandatory"
    }
  ],
  "maternity-benefit": [
    {
      "name": "Pregnancy Registration (PICME)",
      "description": "RCH ID / PICME Number",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Registration Slip",
      "notes": "Mandatory for TN"
    },
    {
      "name": "Aadhaar Card",
      "description": "Mother's Aadhaar",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID Proof"
    },
    {
      "name": "Bank Passbook",
      "description": "Mother's Bank Account",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "For assistance credit"
    }
  ],
  "marriage-assistance": [
    {
      "name": "Marriage Invitation",
      "description": "Original Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Invitation",
      "notes": "Date proof"
    },
    {
      "name": "Education Certificate (Bride)",
      "description": "10th/Degree Cert",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marksheet",
      "notes": "Determines scheme amount"
    },
    {
      "name": "Income Certificate",
      "description": "Family income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Within limit"
    }
  ],
  "funeral-assistance": [
    {
      "name": "Death Certificate",
      "description": "Proof of death",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death Cert",
      "notes": "Mandatory"
    },
    {
      "name": "Legal Heir / Applicant ID",
      "description": "Applicant Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Who receives the fund"
    }
  ],
  "unemployment-allowance": [
    {
      "name": "Employment Exchange Card",
      "description": "Proof of registration wait time",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Card",
      "notes": "Must be waiting for 5+ years"
    },
    {
      "name": "Educational Certificates",
      "description": "10th/12th/Degree",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "TC/Marksheet",
      "notes": "Qualification"
    }
  ],
  "farmer-welfare": [
    {
      "name": "Farmer ID Card / Patta",
      "description": "Proof of farming",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta or ID",
      "notes": "Land holding proof"
    },
    {
      "name": "Bank Passbook",
      "description": "For PM-KISAN etc",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "Active account"
    }
  ],
  "free-laptop-scheme": [
    {
      "name": "Student Bonafide",
      "description": "From School/College",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Confirming enrollment"
    },
    {
      "name": "ID Card",
      "description": "Student ID",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "2MB",
      "example": "ID Card",
      "notes": "Identity"
    }
  ],
  "ration-card-subsidy": [
    {
      "name": "Ration Card",
      "description": "Smart Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Proof of eligibility"
    },
    {
      "name": "Aadhaar Card",
      "description": "Head of Family",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID"
    }
  ],
  "health-insurance-scheme": [
    {
      "name": "Ration Card",
      "description": "Family Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Proof of residence/income group"
    },
    {
      "name": "Income Certificate",
      "description": "Annual Income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Below 72,000"
    }
  ],
  "skill-development-scheme": [
    {
      "name": "Educational Qualification",
      "description": "Mark sheets",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "10th/12th Marksheet",
      "notes": "Eligibility proof"
    },
    {
      "name": "Aadhaar Card",
      "description": "ID Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Mandatory"
    }
  ],

  // ==========================================
  // 5. BUSINESS & LICENSES
  // ==========================================
  "gst-registration": [
    {
      "name": "PAN Card",
      "description": "Business/Proprietor PAN",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PAN Card",
      "notes": "Mandatory"
    },
    {
      "name": "Proof of Business Address",
      "description": "Electricity Bill + Rent Agreement/NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "EB Bill + NOC",
      "notes": "Recent bill required"
    },
    {
      "name": "Bank Account Proof",
      "description": "Cancelled Cheque",
      "mandatory": true,
      "formats": ["JPG", "PDF"],
      "maxSize": "2MB",
      "example": "Cheque",
      "notes": "Showing Name, Account No, IFSC"
    }
  ],
  "shops-establishment-license": [
    {
      "name": "PAN Card",
      "description": "Proprietor PAN",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PAN Copy",
      "notes": "ID Proof"
    },
    {
      "name": "Rental Agreement",
      "description": "Proof of shop address",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Rental Agreement",
      "notes": "Address proof"
    },
    {
      "name": "Photo of Shop",
      "description": "Front board photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "2MB",
      "example": "Name board photo",
      "notes": "Showing Tamil name board"
    }
  ],
  "msme-udyam-registration": [
    {
      "name": "Aadhaar Card",
      "description": "Aadhaar of Entrepreneur",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar Card",
      "notes": "Must be linked to mobile"
    },
    {
      "name": "PAN Card",
      "description": "PAN of organization/proprietor",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PAN Card",
      "notes": "Business PAN"
    }
  ],
  "import-export-code": [
    {
      "name": "Firm PAN",
      "description": "PAN of the entity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PAN Card",
      "notes": "Mandatory"
    },
    {
      "name": "Bank Certificate / Cancelled Cheque",
      "description": "Proof of bank account",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Cancelled Cheque",
      "notes": "With entity name printed"
    }
  ],
  "professional-tax-registration": [
    {
      "name": "Incorporation Certificate",
      "description": "Company registration proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "COI / Partnership Deed",
      "notes": "Entity proof"
    },
    {
      "name": "Address Proof",
      "description": "Office address proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Rental Agreement",
      "notes": "Within local body limits"
    }
  ],
  "contractor-license": [
    {
      "name": "Technical Qualification",
      "description": "Degree/Diploma in Civil Engineering",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Degree Cert",
      "notes": "Proof of technical capability"
    },
    {
      "name": "Solvency Certificate",
      "description": "Financial capacity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Solvency Cert",
      "notes": "Based on class of license"
    }
  ],

  // ==========================================
  // 6. VEHICLE SERVICES
  // ==========================================
  "duplicate-rc": [
    {
      "name": "Police FIR / LDR",
      "description": "Lost Document Report",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LDR from Police",
      "notes": "Proof of loss"
    },
    {
      "name": "Insurance",
      "description": "Valid Insurance Policy",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Insurance",
      "notes": "Current policy"
    }
  ],
  "rc-address-change": [
    {
      "name": "Original RC",
      "description": "Scan of RC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC Smart Card",
      "notes": "Existing RC"
    },
    {
      "name": "New Address Proof",
      "description": "Aadhaar/Voter ID/Passport",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Proof of new address"
    }
  ],
  "hypothecation-removal": [
    {
      "name": "NOC from Bank",
      "description": "No Objection Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Bank NOC",
      "notes": "Confirming loan closure"
    },
    {
      "name": "Form 35",
      "description": "Signed Form 35",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 35",
      "notes": "In duplicate"
    },
    {
      "name": "Original RC",
      "description": "Registration Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC",
      "notes": "For endorsement"
    }
  ],
  "road-tax-payment": [
    {
      "name": "RC Copy",
      "description": "Vehicle RC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC",
      "notes": "To verify details"
    },
    {
      "name": "Insurance",
      "description": "Valid Insurance",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Insurance",
      "notes": "Must be valid"
    }
  ],
  "theft-intimation": [
    {
      "name": "FIR Copy",
      "description": "First Information Report",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "FIR",
      "notes": "From Police Station"
    },
    {
      "name": "RC Copy",
      "description": "Vehicle RC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC",
      "notes": "Vehicle proof"
    }
  ],

  // ==========================================
  // 7. LEGAL SERVICES
  // ==========================================
  "affidavit-drafting": [
    {
      "name": "ID Proof",
      "description": "Aadhaar or Voter ID of deponent",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "Identity verification"
    },
    {
      "name": "Content Details",
      "description": "Draft content or facts",
      "mandatory": true,
      "formats": ["DOC", "TXT"],
      "maxSize": "2MB",
      "example": "Text file",
      "notes": "Facts to be mentioned"
    }
  ],
  "notary-services": [
    {
      "name": "Original Document",
      "description": "Document to be notarized",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Affidavit",
      "notes": "Must be printed"
    },
    {
      "name": "ID Proof",
      "description": "Signatory's ID",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "For Register"
    }
  ],

  // ==========================================
  // 8. SAFETY & COMPLIANCE
  // ==========================================
  "name-change-gazette": [
    {
      "name": "Affidavit",
      "description": "Name Change Affidavit",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized Affidavit",
      "notes": "Original required later"
    },
    {
      "name": "Newspaper Publication",
      "description": "Newspaper Ad Clipping",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Ad Scan",
      "notes": "English/Tamil ad"
    }
  ]
};

export function getServiceDocuments(serviceSlug: string): RequiredDocument[] {
  return SERVICE_DOCUMENTS[serviceSlug] || [];
}

export function getMandatoryDocuments(serviceSlug: string): RequiredDocument[] {
  const docs = getServiceDocuments(serviceSlug);
  return docs.filter(doc => doc.mandatory);
}

export function getOptionalDocuments(serviceSlug: string): RequiredDocument[] {
  const docs = getServiceDocuments(serviceSlug);
  return docs.filter(doc => !doc.mandatory);
}