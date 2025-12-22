import { RequiredDocument } from '@/types/document';

export const SERVICE_DOCUMENTS: Record<string, RequiredDocument[]> = {
  "aadhaar": [
    {
      "name": "Proof of Identity",
      "description": "Voter ID, Passport, or PAN Card",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Scanned copy of Voter ID",
      "notes": "Must contain name and photo"
    },
    {
      "name": "Proof of Address",
      "description": "Ration Card, Electricity Bill, or Water Bill",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Recent Electricity Bill (not older than 3 months)",
      "notes": "Must match the address to be updated"
    },
    {
      "name": "Date of Birth Proof",
      "description": "Birth Certificate or SSLC Book/Marksheet",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "10th Marksheet",
      "notes": "Must clearly show Date of Birth"
    },
    {
      "name": "Passport Size Photo",
      "description": "Recent color photograph with white background",
      "mandatory": true,
      "formats": ["JPG", "PNG"],
      "maxSize": "500KB",
      "example": "3.5cm x 4.5cm photo",
      "notes": "No glasses or caps"
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
      "notes": "Ensure mobile number is linked to Aadhaar for OTP"
    },
    {
      "name": "Passport Size Photo",
      "description": "Two recent physical photos (for offline) or digital scan",
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
  "passport": [
    {
      "name": "Aadhaar Card",
      "description": "Front and back of Aadhaar",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "e-Aadhaar download",
      "notes": "Used for ECR/Non-ECR check"
    },
    {
      "name": "Educational Certificate",
      "description": "10th or 12th Marksheet (for ECNR status)",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Matriculation certificate",
      "notes": "Mandatory for Non-ECR category"
    },
    {
      "name": "Birth Certificate",
      "description": "Municipal authority issued certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Birth certificate from Corporation",
      "notes": "Required if born after 1989"
    },
    {
      "name": "Bank Passbook",
      "description": "Front page of bank passbook with photo",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "SBI/Indian Bank passbook",
      "notes": "Running account for last 1 year"
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
      "description": "Ration Card or Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Smart Card copy",
      "notes": "Must show current residence"
    },
    {
      "name": "Age Proof",
      "description": "Birth Certificate or School TC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Transfer Certificate",
      "notes": "Required for applicants between 18-21 years"
    }
  ],
  "driving-license": [
    {
      "name": "Learner's License",
      "description": "Valid LLR Number/Document",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LLR generated 30 days prior",
      "notes": "Must hold LLR for at least 30 days"
    },
    {
      "name": "Form 1A (Medical Certificate)",
      "description": "Signed by Govt Registered Practitioner",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 1A signed by Doctor",
      "notes": "Mandatory for applicants over 40 years or transport vehicles"
    },
    {
      "name": "Address Proof",
      "description": "Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar copy",
      "notes": "Same address as in application"
    }
  ],
  "ration-card": [
    {
      "name": "Aadhaar Cards (All Members)",
      "description": "Aadhaar cards of family head and all members",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Combined PDF of all Aadhaar cards",
      "notes": "Ensure names match exactly"
    },
    {
      "name": "Family Head Photo",
      "description": "Passport size photo of the head of family",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Female head of family photo",
      "notes": "Usually the senior-most female"
    },
    {
      "name": "Address Proof",
      "description": "Gas Bill, EB Bill, or Rental Agreement",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Gas connection book front page",
      "notes": "Must be in the name of applicant"
    },
    {
      "name": "Old Ration Card Deletion Cert",
      "description": "If name exists in parents' card",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Removal certificate from TSO",
      "notes": "Required for newlyweds applying for new card"
    }
  ],
  "learners-license": [
    {
      "name": "Address Proof",
      "description": "Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar front and back",
      "notes": "Primary KYC document"
    },
    {
      "name": "Age Proof",
      "description": "SSLC Marksheet or Birth Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "10th Marksheet",
      "notes": "To verify 16+ (MCWG) or 18+ (MCWOG/LMV)"
    },
    {
      "name": "Photo and Signature",
      "description": "Uploaded during Sarathi application",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Cropped signature",
      "notes": "Clear black ink signature"
    }
  ],
  "community-certificate": [
    {
      "name": "Applicant Photo",
      "description": "Recent passport size photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "50KB",
      "example": "Self photo",
      "notes": "Recent within 6 months"
    },
    {
      "name": "Aadhaar Card",
      "description": "Proof of Identity",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "200KB",
      "example": "Aadhaar card",
      "notes": "Both sides"
    },
    {
      "name": "Ration Card",
      "description": "Smart Card Proof of Address",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "200KB",
      "example": "Smart card",
      "notes": "Ensure name is listed"
    },
    {
      "name": "Father's Community Certificate",
      "description": "Certificate of father or siblings",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Father's old paper certificate or digital cert",
      "notes": "Critical for proving caste lineage"
    },
    {
      "name": "School Transfer Certificate (TC)",
      "description": "TC mentioning community",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "School TC",
      "notes": "Must explicitly state the caste/community"
    },
    {
      "name": "Self-Declaration",
      "description": "Signed self-declaration form",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Downloadable form from TNeGA",
      "notes": "Signed by applicant or parent (if minor)"
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
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "200KB",
      "example": "Smart Card",
      "notes": "Front page showing family members"
    },
    {
      "name": "Salary Slip / Income Proof",
      "description": "Pay slip if employed, or VAO report",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Last 3 months pay slip or Employer letter",
      "notes": "For private/govt employees"
    },
    {
      "name": "Self-Declaration",
      "description": "Applicant's declaration of income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "TNeGA Self Declaration Form",
      "notes": "Must match the income claimed"
    }
  ],
  "nativity-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Proof of identity"
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
      "name": "Birth Certificate",
      "description": "Proof of birth in Tamil Nadu",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Corporation/Municipality certificate",
      "notes": "Essential to prove place of birth"
    },
    {
      "name": "School Certificates (10th/12th)",
      "description": "Proof of education in TN",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "SSLC Marksheet or TC",
      "notes": "Used to prove residence for last 5-10 years"
    }
  ],
  "first-graduate-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Applicant's Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "Also include parents' Aadhaar if possible"
    },
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
      "example": "Parents' TC (if studied up to school) or declaration",
      "notes": "If parents are illiterate, self-declaration is required"
    },
    {
      "name": "Self-Declaration (Family)",
      "description": "Affirming no other graduate in family",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed declaration",
      "notes": "Must explicitly state no sibling has used this benefit"
    },
    {
      "name": "Smart Card",
      "description": "Family Ration Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "To verify family members"
    }
  ],
  "birth-certificate": [
    {
      "name": "Discharge Summary",
      "description": "Hospital Discharge Summary",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Hospital document issued at discharge",
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
    },
    {
      "name": "Marriage Certificate",
      "description": "Parents' marriage proof",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marriage registration cert",
      "notes": "Helpful for verifying parents' names"
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
    },
    {
      "name": "Burial/Cremation Receipt",
      "description": "Receipt from burial ground",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Receipt from Municipality/Panchayat burial ground",
      "notes": "Proof of disposal of body"
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
      "notes": "Must contain husband's name matching marriage proof"
    },
    {
      "name": "Marriage Certificate/Proof",
      "description": "Proof of marriage to deceased",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marriage Registration or Ration Card showing relationship",
      "notes": "Ration card usually accepted if husband is head"
    },
    {
      "name": "Aadhaar Card",
      "description": "Widow's Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "Address should match"
    },
    {
      "name": "Ration Card",
      "description": "Family card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "Should show husband's name removed or marked deceased"
    }
  ],
  "deserted-woman-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Applicant Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "Proof of ID"
    },
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
      "description": "Legal notice, Court order, or VAO/Police report",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "FIR copy or Legal Notice",
      "notes": "Proof of desertion for statutory period"
    },
    {
      "name": "Self-Declaration",
      "description": "Affidavit stating desertion",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized affidavit",
      "notes": "Stating husband has deserted for specific years"
    }
  ],
  "marriage-certificate": [
    {
      "name": "Wedding Invitation",
      "description": "Original Wedding Invitation Card",
      "mandatory": true,
      "formats": ["PDF", "JPG"],
      "maxSize": "2MB",
      "example": "Scanned invitation card",
      "notes": "Proof of date and venue"
    },
    {
      "name": "Husband & Wife ID Proof",
      "description": "Aadhaar, Passport or Voter ID",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar cards of both",
      "notes": "Proof of age and address"
    },
    {
      "name": "Witness ID Proofs",
      "description": "ID proofs of 3 witnesses",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar cards of 3 witnesses",
      "notes": "Witnesses must sign in person at registrar"
    },
    {
      "name": "Wedding Photo",
      "description": "Photo showing the couple tying the knot",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "2MB",
      "example": "Ceremonial photo",
      "notes": "Proof of solemnization"
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
      "name": "Community Certificates",
      "description": "Community certs of BOTH husband and wife",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Both community certificates",
      "notes": "To prove different castes (e.g., SC/ST and BC)"
    },
    {
      "name": "Aadhaar Cards",
      "description": "ID proof of couple",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar cards",
      "notes": "Identity verification"
    }
  ],
  "ncc-certificate": [
    {
      "name": "School/College ID",
      "description": "Institutional ID card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "College ID",
      "notes": "Proof of student status"
    },
    {
      "name": "NCC Unit Verification",
      "description": "Letter from ANO (Associate NCC Officer)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed letter from unit head",
      "notes": "Verifying completion of training (A, B, or C cert)"
    },
    {
      "name": "Camp Certificates",
      "description": "Proof of attending required camps",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Annual Training Camp cert",
      "notes": "Mandatory for B and C certificates"
    }
  ],
  "sports-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    },
    {
      "name": "Participation/Merit Certificates",
      "description": "Certificates from authorized sports associations",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "District/State/National level certificates",
      "notes": "Must be recognized by SDAT"
    },
    {
      "name": "Form 1/2/3",
      "description": "Relevant sports form for government quota",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 1 for National representation",
      "notes": "Specific to quota claims"
    }
  ],
  "differently-abled-certificate": [
    {
      "name": "Medical Board Certificate",
      "description": "Assessment from Govt Hospital Medical Board",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Disability assessment report",
      "notes": "Must state percentage of disability"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    },
    {
      "name": "Photo",
      "description": "Full body photo showing disability if visible",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Full photograph",
      "notes": "For ID card generation"
    }
  ],
  "ex-serviceman-certificate": [
    {
      "name": "Discharge Book",
      "description": "Service Discharge Book",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Complete discharge book scan",
      "notes": "Proof of service and exit"
    },
    {
      "name": "PPO (Pension Payment Order)",
      "description": "Pension Order",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PPO document",
      "notes": "Proof of pension status"
    },
    {
      "name": "Ex-Serviceman ID Card",
      "description": "ID issued by Zilla Sainik Welfare Board",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RSB/ZSB ID card",
      "notes": "Welfare board registration"
    }
  ],
  "unmarried-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    },
    {
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "Proof of residence"
    },
    {
      "name": "Self-Affidavit",
      "description": "Notarized affidavit stating unmarried status",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Rs. 20 Stamp paper affidavit",
      "notes": "Must clearly state 'Not married to anyone'"
    },
    {
      "name": "School TC",
      "description": "Transfer Certificate",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "TC",
      "notes": "Often used for age proof"
    }
  ],
  "no-remarriage-certificate": [
    {
      "name": "Death Certificate of Spouse",
      "description": "Proof of widow/widower status",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death certificate",
      "notes": "Mandatory"
    },
    {
      "name": "Legal Heir Certificate",
      "description": "To prove relationship",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Legal heir certificate",
      "notes": "Proves applicant is the spouse"
    },
    {
      "name": "Self-Affidavit",
      "description": "Affidavit stating no remarriage",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized affidavit",
      "notes": "Declaring no remarriage took place since spouse's death"
    }
  ],
  "temple-priest-certificate": [
    {
      "name": "Training Certificate",
      "description": "Agama School Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate from recognized Agama Patashala",
      "notes": "Proof of qualification"
    },
    {
      "name": "Experience Certificate",
      "description": "Letter from Temple Executive Officer/Trustee",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Letter on temple letterhead",
      "notes": "Proof of service"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    }
  ],
  "agricultural-labourer-certificate": [
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    },
    {
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "Proof of residence in village"
    },
    {
      "name": "VAO Report/Certificate",
      "description": "Verification from Village Administrative Officer",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed VAO report",
      "notes": "Certifying status as landless labourer"
    },
    {
      "name": "NREGA Card",
      "description": "Job Card (100 days work)",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "MGNREGA Job Card",
      "notes": "Strong supporting document"
    }
  ],
  "small-marginal-farmer-certificate": [
    {
      "name": "Chitta/Adangal",
      "description": "Land holding records",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Current Fasli Chitta",
      "notes": "Must show land holding below limit (e.g. 2.5/5 acres)"
    },
    {
      "name": "Patta",
      "description": "Land ownership document",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta copy",
      "notes": "Proof of ownership"
    },
    {
      "name": "Aadhaar Card",
      "description": "Farmer Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    }
  ],
  "bonafide-certificate": [
    {
      "name": "School/College ID",
      "description": "Student ID card",
      "mandatory": true,
      "formats": ["JPG", "PDF"],
      "maxSize": "2MB",
      "example": "Valid ID card",
      "notes": "Proof of enrollment"
    },
    {
      "name": "Admission Receipt",
      "description": "Fee receipt of current year",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tuition fee receipt",
      "notes": "Proof of continuing education"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    }
  ],
  "fire-safety-certificate": [
    {
      "name": "Building Plan",
      "description": "Approved Building Plan",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Blueprint approved by DTCP/CMDA",
      "notes": "Showing exits and fire equipment"
    },
    {
      "name": "Ownership Proof",
      "description": "Rental Agreement or Sale Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sale Deed",
      "notes": "Proof of possession"
    },
    {
      "name": "Fire Equipment Invoice",
      "description": "Purchase bill of extinguishers",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Invoice for Fire Extinguishers",
      "notes": "Proof of installation"
    }
  ],
  "completion-certificate": [
    {
      "name": "Building Permit",
      "description": "Original Planning Permit",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "CMDA/DTCP Permit",
      "notes": "Reference for compliance check"
    },
    {
      "name": "Architect Certificate",
      "description": "Certification from Licensed Surveyor/Architect",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 4 from Architect",
      "notes": "Certifying completion as per plan"
    },
    {
      "name": "Structural Stability Certificate",
      "description": "From Structural Engineer",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Stability Certificate",
      "notes": "Ensuring safety"
    }
  ],
  "fitness-certificate": [
    {
      "name": "RC Book",
      "description": "Registration Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC Smart Card",
      "notes": "Must be valid"
    },
    {
      "name": "Insurance Certificate",
      "description": "Valid Vehicle Insurance",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Comprehensive or Third Party Insurance",
      "notes": "Must be current"
    },
    {
      "name": "Pollution Under Control (PUC)",
      "description": "Emission test certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PUC Certificate",
      "notes": "Valid emission test"
    },
    {
      "name": "Tax Token",
      "description": "Road Tax Receipt",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tax paid receipt",
      "notes": "Proof of tax payment"
    }
  ],
  "occupancy-certificate": [
    {
      "name": "Completion Certificate",
      "description": "Certificate issued by planning authority",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "CC from CMDA/DTCP",
      "notes": "Prerequisite for OC"
    },
    {
      "name": "Building Plan",
      "description": "Approved plan",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Approved blueprint",
      "notes": "Reference"
    },
    {
      "name": "NOCs",
      "description": "NOC from Fire and Water departments",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Fire NOC",
      "notes": "If applicable for building type"
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
      "example": "Notarized Affidavit on Stamp Paper",
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
    },
    {
      "name": "Ration Card",
      "description": "Deceased's family card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart card",
      "notes": "Showing the family relationship"
    }
  ],
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
      "name": "Draft Content",
      "description": "Details of what needs to be declared",
      "mandatory": true,
      "formats": ["DOC", "TXT", "PDF"],
      "maxSize": "2MB",
      "example": "Text draft of name change or address proof",
      "notes": "Fact details"
    }
  ],
  "notary-services": [
    {
      "name": "Original Document",
      "description": "Document to be notarized",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Affidavit or Agreement",
      "notes": "Must be printed on Stamp paper if applicable"
    },
    {
      "name": "ID Proof",
      "description": "Signatory's ID",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "For Notary register entry"
    }
  ],
  "power-of-attorney": [
    {
      "name": "Property Deed",
      "description": "Parent document of property",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Sale Deed",
      "notes": "To verify property details"
    },
    {
      "name": "ID Proofs (Principal & Agent)",
      "description": "Aadhaar/PAN of both parties",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar cards",
      "notes": "Both parties need to provide ID"
    },
    {
      "name": "Photos",
      "description": "Passport photos of both",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Photos",
      "notes": "For the registered document"
    }
  ],
  "will-drafting": [
    {
      "name": "Property Details",
      "description": "Schedule of property",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Patta or Sale Deed copies",
      "notes": "Description of assets to be bequeathed"
    },
    {
      "name": "Testator ID",
      "description": "ID of person making the Will",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar Card",
      "notes": "Proof of Identity"
    },
    {
      "name": "Beneficiary Details",
      "description": "Names and relationship of beneficiaries",
      "mandatory": true,
      "formats": ["TXT", "PDF"],
      "maxSize": "2MB",
      "example": "List of heirs",
      "notes": "Full names and ages"
    }
  ],
  "succession-certificate": [
    {
      "name": "Death Certificate",
      "description": "Deceased's death certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death certificate",
      "notes": "Original required for court"
    },
    {
      "name": "Asset details",
      "description": "Details of debts/securities",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Bank Passbook or Share Certificates",
      "notes": "To determine value of certificate"
    },
    {
      "name": "Legal Heir details",
      "description": "Relationship proof of petitioners",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Ration card or Birth certs",
      "notes": "Proof of relationship"
    }
  ],
  "name-change-gazette": [
    {
      "name": "Affidavit",
      "description": "Name Change Affidavit",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized Name Change Affidavit",
      "notes": "Stating old name and new name"
    },
    {
      "name": "Newspaper Publication",
      "description": "Copy of ad in one English and one Tamil newspaper",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Scanned clipping of newspaper ad",
      "notes": "Must show date and name clearly"
    },
    {
      "name": "Request Letter",
      "description": "Letter to Stationary & Printing Dept",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed request letter",
      "notes": "Format available on stationex.tn.gov.in"
    }
  ],
  "legal-notice": [
    {
      "name": "Case Facts",
      "description": "Chronology of events",
      "mandatory": true,
      "formats": ["DOC", "PDF"],
      "maxSize": "2MB",
      "example": "Written summary of dispute",
      "notes": "To draft the notice"
    },
    {
      "name": "Supporting Contracts",
      "description": "Any agreement/contract breached",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Rental Agreement or Loan Agreement",
      "notes": "Evidence of relationship"
    }
  ],
  "patta-transfer-full-field": [
    {
      "name": "Sale Deed",
      "description": "Registered Sale Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Document showing ownership transfer",
      "notes": "Must be legible"
    },
    {
      "name": "Encumbrance Certificate (EC)",
      "description": "EC for relevant period",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "EC showing the transaction",
      "notes": "Proof of clean title transfer"
    },
    {
      "name": "Aadhaar Card",
      "description": "Applicant Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    }
  ],
  "patta-transfer-subdivision": [
    {
      "name": "Sale Deed",
      "description": "Registered Sale Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Deed showing specific extent (e.g. 1200 sqft)",
      "notes": "Requires subdivision of survey number"
    },
    {
      "name": "FMB (Field Measurement Book) Sketch",
      "description": "Current FMB sketch",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Village map sketch",
      "notes": "Helpful for surveyor"
    },
    {
      "name": "EC",
      "description": "Encumbrance Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "EC",
      "notes": "Proof of title"
    }
  ],
  "encumbrance-certificate": [
    {
      "name": "Property Details",
      "description": "Survey Number, Village, and Ward details",
      "mandatory": true,
      "formats": ["TXT"],
      "maxSize": "0KB",
      "example": "S.No 123/4, Adyar Village",
      "notes": "Input data required, no upload usually"
    }
  ],
  "patta-mutation": [
    {
      "name": "Legal Heir Certificate",
      "description": "If transfer is due to death",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Legal Heir Certificate",
      "notes": "For inheritance based transfer"
    },
    {
      "name": "Death Certificate",
      "description": "Of original owner",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Death Certificate",
      "notes": "Proof of death"
    }
  ],
  "land-conversion": [
    {
      "name": "Patta/Chitta",
      "description": "Current land classification",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta showing 'Wet' or 'Dry' land",
      "notes": "Proof of current status"
    },
    {
      "name": "NOC from Local Body",
      "description": "Panchayat/Municipality NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "NOC resolution",
      "notes": "No objection to conversion"
    },
    {
      "name": "Topography Sketch",
      "description": "Map of the area",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Survey sketch",
      "notes": "Showing surroundings"
    }
  ],
  "land-partition": [
    {
      "name": "Partition Deed",
      "description": "Registered Partition Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Registered deed",
      "notes": "Showing division of property"
    },
    {
      "name": "Patta",
      "description": "Joint Patta",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Existing Patta",
      "notes": "Proof of joint ownership"
    }
  ],
  "building-plan-approval": [
    {
      "name": "Patta",
      "description": "Proof of land ownership",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta copy",
      "notes": "Must be in applicant's name"
    },
    {
      "name": "Proposed Plan",
      "description": "Blueprints from Licensed Surveyor",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Detailed drawing",
      "notes": "Floor plan, elevation, section"
    },
    {
      "name": "Structural Design",
      "description": "From Structural Engineer",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Stability report",
      "notes": "Mandatory for multi-story"
    }
  ],
  "property-tax-assessment": [
    {
      "name": "Building Plan Approval",
      "description": "Approved plan order",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Order copy from Municipality",
      "notes": "Proof of authorized construction"
    },
    {
      "name": "Completion Certificate",
      "description": "CC for the building",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "CC Copy",
      "notes": "Required for large buildings"
    },
    {
      "name": "Title Deed",
      "description": "Sale Deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sale Deed",
      "notes": "Proof of ownership"
    }
  ],
  "survey-resurvey": [
    {
      "name": "Patta",
      "description": "Current Patta",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta",
      "notes": "Proof of title"
    },
    {
      "name": "Challan",
      "description": "Survey fees paid challan",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Treasury Challan",
      "notes": "Proof of payment"
    }
  ],
  "patta-name-correction": [
    {
      "name": "Sale Deed",
      "description": "Deed with correct name",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sale Deed",
      "notes": "Proof of correct spelling"
    },
    {
      "name": "ID Proof",
      "description": "Aadhaar/Voter ID",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Showing correct name"
    },
    {
      "name": "Wrong Patta",
      "description": "Copy of Patta with error",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Current Patta",
      "notes": "Reference for correction"
    }
  ],
  "land-dispute-resolution": [
    {
      "name": "Petition",
      "description": "Written complaint/petition to DRO/RDO",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Petition letter",
      "notes": "Detailing the grievance"
    },
    {
      "name": "Evidence Documents",
      "description": "Old deeds, ECs, Chitta",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Combined PDF of documents",
      "notes": "Proof of claim"
    }
  ],
  "trade-license": [
    {
      "name": "Property Tax Receipt",
      "description": "Latest property tax receipt of business premise",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Corporation Tax Receipt",
      "notes": "Proof of building legitimacy"
    },
    {
      "name": "Rental Agreement",
      "description": "Or Consent Letter from owner",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Notarized Rental Agreement",
      "notes": "If premises is rented"
    },
    {
      "name": "ID Proof",
      "description": "Aadhaar/PAN of Proprietor",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    }
  ],
  "fire-noc": [
    {
      "name": "Building Plan",
      "description": "Approved plan showing fire exits",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Blueprint",
      "notes": "Must show compliance"
    },
    {
      "name": "Ownership Proof",
      "description": "Deed/Rental Agreement",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sale Deed",
      "notes": "Proof of possession"
    },
    {
      "name": "Compliance Report",
      "description": "Self-compliance report",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Report",
      "notes": "Listing installed equipment"
    }
  ],
  "money-lender-license": [
    {
      "name": "Solvency Certificate",
      "description": "Solvency cert for required amount",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tehsildar issued certificate",
      "notes": "Proof of financial stability"
    },
    {
      "name": "Police Clearance",
      "description": "PCC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Police Verification Certificate",
      "notes": "No criminal record"
    },
    {
      "name": "Office Address Proof",
      "description": "Rental Agreement/Tax Receipt",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Rental Agreement",
      "notes": "Place of business"
    }
  ],
  "food-license-fssai": [
    {
      "name": "Photo",
      "description": "Passport size photo of FBO",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Photo",
      "notes": "Proprietor/Partner photo"
    },
    {
      "name": "ID Proof",
      "description": "Aadhaar/PAN",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar card",
      "notes": "ID Proof"
    },
    {
      "name": "Address Proof (Premises)",
      "description": "Rental Agreement/Tax Receipt",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Rental Agreement",
      "notes": "Proof of business address"
    },
    {
      "name": "Form B",
      "description": "Signed Form B",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "FSSAI Form B",
      "notes": "Declaration form"
    }
  ],
  "shops-establishments-license": [
    {
      "name": "Form 1",
      "description": "Application Form",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 1",
      "notes": "Registration application"
    },
    {
      "name": "PAN Card",
      "description": "Business/Proprietor PAN",
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
    }
  ],
  "factory-license": [
    {
      "name": "Form 1",
      "description": "Approval of plans",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Site Plan",
      "notes": "Detailed factory layout"
    },
    {
      "name": "Process Flow Chart",
      "description": "Manufacturing process details",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Flow chart",
      "notes": "List of raw materials and products"
    },
    {
      "name": "Machinery List",
      "description": "List of machinery with HP rating",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Machinery schedule",
      "notes": "For calculating fees"
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
    },
    {
      "name": "GST Certificate",
      "description": "GSTIN (if applicable)",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "GST Cert",
      "notes": "Auto-fetched usually, but keep copy"
    }
  ],
  "gst-registration": [
    {
      "name": "PAN Card",
      "description": "Business PAN",
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
      "description": "Cancelled Cheque or Passbook",
      "mandatory": true,
      "formats": ["JPG", "PDF"],
      "maxSize": "2MB",
      "example": "First page of passbook",
      "notes": "Showing Name, Account No, IFSC"
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
    },
    {
      "name": "Address Proof",
      "description": "Utility Bill/Rent Agreement",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Electricity Bill",
      "notes": "For registered office"
    }
  ],
  "pawn-broker-license": [
    {
      "name": "Solvency Certificate",
      "description": "Solvency for Rs. 50,000",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tehsildar certificate",
      "notes": "Financial capacity"
    },
    {
      "name": "Shop Address Proof",
      "description": "Ownership/Rental proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Tax Receipt",
      "notes": "Secure premises proof"
    }
  ],
  "liquor-license": [
    {
      "name": "Application Form",
      "description": "FL-1/2/3 Application",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form",
      "notes": "Specific to license type (Club/Hotel)"
    },
    {
      "name": "Solvency Certificate",
      "description": "High value solvency",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Proof of financial status"
    },
    {
      "name": "Building Plan",
      "description": "Blueprint of bar area",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Layout",
      "notes": "Showing separate entry/exit"
    }
  ],
  "explosive-license": [
    {
      "name": "Site Plan",
      "description": "Site plan showing safety distances",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Site Plan",
      "notes": "Crucial for PESO approval"
    },
    {
      "name": "NOC",
      "description": "District Magistrate/Commissioner NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "NOC",
      "notes": "Local authority clearance"
    }
  ],
  "arms-license": [
    {
      "name": "Training Certificate",
      "description": "Safe handling certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Training Cert",
      "notes": "From rifle club/trainer"
    },
    {
      "name": "Medical Certificate",
      "description": "Mental and physical health",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Doctor's certificate",
      "notes": "Fitness proof"
    },
    {
      "name": "Police Report",
      "description": "Anticipate heavy verification",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "N/A - Internal",
      "notes": "Internal process, but ID proofs required"
    }
  ],
  "hotel-license": [
    {
      "name": "Building Stability Certificate",
      "description": "Structural stability",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Engineer's certificate",
      "notes": "Safety proof"
    },
    {
      "name": "Sanitary Certificate",
      "description": "Health Inspector cert",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Sanitary Cert",
      "notes": "Hygiene proof"
    },
    {
      "name": "Police NOC",
      "description": "NOC from Police Commissioner",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "NOC",
      "notes": "Law and order"
    }
  ],
  "restaurant-license": [
    {
      "name": "FSSAI License",
      "description": "Food License",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "FSSAI Cert",
      "notes": "Prerequisite"
    },
    {
      "name": "NOC from Fire Dept",
      "description": "Fire Safety NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Fire NOC",
      "notes": "If seating > 50"
    }
  ],
  "medical-shop-license": [
    {
      "name": "Pharmacist Reg Certificate",
      "description": "Registered Pharmacist Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Pharmacy Council Cert",
      "notes": "Qualification proof"
    },
    {
      "name": "Refrigerator Invoice",
      "description": "Proof of cold storage",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Fridge Bill",
      "notes": "Mandatory for storage"
    },
    {
      "name": "Blueprint",
      "description": "Layout of pharmacy",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Layout",
      "notes": "Min 10 sq meters"
    }
  ],
  "petrol-bunk-license": [
    {
      "name": "Letter of Intent (LOI)",
      "description": "LOI from Oil Company (IOCL/BPCL/HPCL)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Offer letter",
      "notes": "Primary document"
    },
    {
      "name": "Land Documents",
      "description": "Lease or Ownership deed",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Lease Deed",
      "notes": "Long term lease required"
    },
    {
      "name": "NOCs (Multiple)",
      "description": "District Magistrate, Police, Fire, NHAI",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "10MB",
      "example": "Combined NOCs",
      "notes": "Multiple clearances needed"
    }
  ],
  "small-scale-industry-registration": [
    {
      "name": "Udyam Registration",
      "description": "MSME Reg",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Udyam Cert",
      "notes": "Base registration"
    },
    {
      "name": "Project Report",
      "description": "Details of project",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Project Profile",
      "notes": "For bank loans/subsidy"
    }
  ],
  "pollution-control-noc": [
    {
      "name": "Site Plan",
      "description": "Industry location map",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Map",
      "notes": "Distance from water bodies"
    },
    {
      "name": "Project Report",
      "description": "Manufacturing process",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Process details",
      "notes": "Effluent generation details"
    }
  ],
  "environmental-clearance": [
    {
      "name": "EIA Report",
      "description": "Environmental Impact Assessment",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "10MB",
      "example": "EIA Consultant Report",
      "notes": "Comprehensive study"
    },
    {
      "name": "Public Hearing Minutes",
      "description": "If applicable",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Minutes",
      "notes": "For large projects"
    }
  ],
  "water-noc": [
    {
      "name": "Land Ownership",
      "description": "Proof of land",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta",
      "notes": "Where well is located"
    },
    {
      "name": "Hydrogeological Report",
      "description": "Groundwater availability",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "5MB",
      "example": "Geologist Report",
      "notes": "For commercial extraction"
    }
  ],
  "electricity-noc": [
    {
      "name": "Building Permit",
      "description": "Construction approval",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Permit",
      "notes": "To release connection"
    },
    {
      "name": "Wiring Completion Report",
      "description": "From Licensed Contractor",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Completion report",
      "notes": "Safety check"
    }
  ],
  "health-noc": [
    {
      "name": "Water Test Report",
      "description": "Potability test",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Lab report",
      "notes": "Safe drinking water"
    },
    {
      "name": "Pest Control Certificate",
      "description": "Pest management proof",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Invoice",
      "notes": "Hygiene proof"
    }
  ],
  "vehicle-registration": [
    {
      "name": "Form 20",
      "description": "Application for Registration",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed Form 20",
      "notes": "Main application"
    },
    {
      "name": "Form 21",
      "description": "Sale Certificate from Dealer",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 21",
      "notes": "Vehicle details"
    },
    {
      "name": "Form 22",
      "description": "Roadworthiness Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 22",
      "notes": "Manufacturer issued"
    },
    {
      "name": "Insurance Certificate",
      "description": "Valid Insurance",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Cover note",
      "notes": "Insurance proof"
    },
    {
      "name": "Address Proof",
      "description": "Aadhaar Card",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Owner address"
    }
  ],
  "vehicle-transfer": [
    {
      "name": "Form 29 & 30",
      "description": "Notice of Transfer & Application",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Signed Forms",
      "notes": "Signed by both seller and buyer"
    },
    {
      "name": "Original RC",
      "description": "Registration Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC Book",
      "notes": "To be surrendered/updated"
    },
    {
      "name": "Insurance",
      "description": "Valid Insurance",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Insurance Policy",
      "notes": "Must be valid"
    },
    {
      "name": "PUC",
      "description": "Pollution Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "PUC Cert",
      "notes": "Emission check"
    }
  ],
  "vehicle-hypothecation": [
    {
      "name": "Form 34",
      "description": "Application for Hypothecation",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 34",
      "notes": "Signed by Owner and Financier"
    },
    {
      "name": "RC Book",
      "description": "Registration Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "RC",
      "notes": "For endorsement"
    },
    {
      "name": "Insurance",
      "description": "Insurance",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Policy",
      "notes": "Valid copy"
    }
  ],
  "duplicate-rc": [
    {
      "name": "Form 26",
      "description": "Application for Duplicate RC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 26",
      "notes": "Application"
    },
    {
      "name": "Police FIR",
      "description": "Lost Document Report (LDR)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LDR from TN Police website",
      "notes": "Proof of loss"
    },
    {
      "name": "Insurance",
      "description": "Insurance Policy",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Insurance",
      "notes": "Must be current"
    }
  ],
  "noc-vehicle-relocation": [
    {
      "name": "Form 28",
      "description": "Application for NOC",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 28 (Triplicate)",
      "notes": "For interstate transfer"
    },
    {
      "name": "Chassis Print",
      "description": "Pencil print of chassis number",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "2MB",
      "example": "Pencil sketch",
      "notes": "Proof of vehicle identity"
    }
  ],
  "permanent-license": [
    {
      "name": "Learner's License",
      "description": "Valid LLR",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "LLR",
      "notes": "Held for 30+ days"
    },
    {
      "name": "Form 5",
      "description": "Driving School Certificate",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Form 5",
      "notes": "For transport vehicles"
    }
  ],
  "international-driving-permit": [
    {
      "name": "Valid Driving License",
      "description": "Indian DL",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "DL",
      "notes": "Must be valid"
    },
    {
      "name": "Passport",
      "description": "Valid Passport",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passport",
      "notes": "Proof of citizenship"
    },
    {
      "name": "Visa",
      "description": "Valid Visa",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Visa",
      "notes": "Proof of travel"
    }
  ],
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
      "description": "Proof of BPL status/Residence",
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
    },
    {
      "name": "Photo",
      "description": "Passport photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "200KB",
      "example": "Photo",
      "notes": "Recent"
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
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Legal Heir Cert",
      "notes": "Proof"
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
      "description": "For Payment",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "Single account"
    }
  ],
  "girl-child-protection": [
    {
      "name": "Birth Certificate",
      "description": "Child's Birth Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Birth Cert",
      "notes": "Proof of age"
    },
    {
      "name": "Income Certificate",
      "description": "Family Income Certificate",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Below income limit (e.g. 72000)"
    },
    {
      "name": "Sterilization Certificate",
      "description": "Family planning certificate of parent",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Surgery certificate",
      "notes": "Mandatory condition"
    },
    {
      "name": "Photo of Child",
      "description": "Child's photo",
      "mandatory": true,
      "formats": ["JPG"],
      "maxSize": "500KB",
      "example": "Photo",
      "notes": "With mother preferably"
    }
  ],
  "differently-abled-pension": [
    {
      "name": "Disability Certificate",
      "description": "National ID Card for Disabled (UDID)",
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
  "deserted-wife-pension": [
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
      "description": "Account details",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "For DBT"
    }
  ],
  "unmarried-women-pension": [
    {
      "name": "Unmarried Certificate",
      "description": "Proof of unmarried status (Age 50+)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Village Officer Cert",
      "notes": "Age criteria applies"
    },
    {
      "name": "Aadhaar Card",
      "description": "Age Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Must be 50+"
    }
  ],
  "agricultural-labourer-pension": [
    {
      "name": "Agri Labourer Card",
      "description": "Member card of Welfare Board",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Board ID Card",
      "notes": "Uzhavar Pathukappu Thittam card"
    },
    {
      "name": "Aadhaar Card",
      "description": "Age Proof (60+)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Age Verification"
    }
  ],
  "destitute-pension": [
    {
      "name": "Destitute Certificate",
      "description": "From RDO/Sub-Collector",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Certifying no income/assets"
    },
    {
      "name": "Aadhaar Card",
      "description": "Identity",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "ID Proof"
    }
  ],
  "transgender-pension": [
    {
      "name": "Transgender ID Card",
      "description": "Issued by Welfare Board",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "TG ID Card",
      "notes": "Proof of identity"
    },
    {
      "name": "Aadhaar Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Aadhaar",
      "notes": "Age 40+"
    }
  ],
  "free-bicycle-scheme": [
    {
      "name": "School Certificate",
      "description": "From Headmaster",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Bonafide Cert",
      "notes": "Studying in 11th Std"
    },
    {
      "name": "Community Certificate",
      "description": "Caste proof",
      "mandatory": false,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Community Cert",
      "notes": "If applicable for specific quotas"
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
  "marriage-assistance-scheme": [
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
      "name": "Education Certificate",
      "description": "Bride's education proof (10th/Degree)",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marksheet",
      "notes": "Determines assistance amount (25k/50k)"
    },
    {
      "name": "Income Certificate",
      "description": "Family income",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Below 72000 limit"
    }
  ],
  "housing-scheme": [
    {
      "name": "Patta",
      "description": "Land ownership for construction",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Patta",
      "notes": "Proof of site"
    },
    {
      "name": "Income Certificate",
      "description": "BPL Status",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Income Cert",
      "notes": "Eligibility check"
    },
    {
      "name": "Ration Card",
      "description": "Address Proof",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Smart Card",
      "notes": "Proof of residence"
    }
  ],
  "sc-st-scholarship": [
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
      "notes": "Within limit (e.g. 2.5L)"
    },
    {
      "name": "Attendance Certificate",
      "description": "From Institution",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Attendance Cert",
      "notes": "75% required"
    }
  ],
  "bc-mbc-scholarship": [
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
      "notes": "Within limit (e.g. 2L)"
    },
    {
      "name": "Previous Marksheet",
      "description": "Last year's marks",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Marksheet",
      "notes": "No arrears usually"
    }
  ],
  "minority-scholarship": [
    {
      "name": "Community/Religion Certificate",
      "description": "Proof of minority status",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Certificate",
      "notes": "Christian/Muslim/Jain etc."
    },
    {
      "name": "Income Declaration",
      "description": "Income Affidavit",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Affidavit",
      "notes": "Self declaration for pre-matric"
    },
    {
      "name": "Bank Passbook",
      "description": "Student's Account",
      "mandatory": true,
      "formats": ["PDF"],
      "maxSize": "2MB",
      "example": "Passbook",
      "notes": "Direct credit"
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