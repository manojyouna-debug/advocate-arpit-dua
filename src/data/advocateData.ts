import { PracticeArea, ApproachStep, LegalArticle, FaqItem, HelpOption } from '../types';

export const ADVOCATE_CONFIG = {
  name: "Advocate Arpit Dua",
  shortName: "Arpit Dua",
  title: "Advocate & Litigation Counsel",
  court: "Punjab & Haryana High Court",
  subCourts: "District Courts across Chandigarh, Mohali, Panchkula & Yamunanagar",
  officeAddress: "House No. 1741/2, Sector 43-B, Chandigarh",
  primaryCity: "Chandigarh",
  phone: "8059288086",
  phoneDisplay: "+91 80592 88086",
  email: "advocatearpitdua@gmail.com",
  workingHours: "24 × 7",
  serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Yamunanagar"],
  
  socials: {
    instagram: "https://www.instagram.com/advarpitdua?stkn=MWF2eG5kdWVqcWxxZA==",
    facebook: "https://www.facebook.com/share/1HCewHvs7L/",
    linkedin: "https://www.linkedin.com/in/adv-arpit-dua0a6425187?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    youtube: "https://youtube.com/@advarpitdua?si=fG_4LlHfNmF7dc1l",
  },
  
  whatsappUrl: "https://wa.me/918059288086?text=Hello%20Advocate%20Arpit%20Dua,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.",
  telUrl: "tel:8059288086",
  emailUrl: "mailto:advocatearpitdua@gmail.com",
  
  slogan: "Driven by Law. Guided by Purpose. Committed to Justice",
  philosophyQuote: "Justice should be determined by the strength of a case, not by the strength of a person's financial position.",
  
  timeline: [
    {
      year: "2017",
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Kurukshetra University",
      description: "Foundational academic training developing strategic analysis, structured thinking, and institutional governance principles."
    },
    {
      year: "2022",
      degree: "Bachelor of Laws (LL.B.)",
      institution: "Punjabi University, Patiala",
      description: "Rigorous legal studies encompassing substantive and procedural law, constitutional jurisprudence, and litigation procedure."
    },
    {
      year: "2022",
      degree: "Commencement of Legal Practice",
      institution: "High Court & District Bar",
      description: "Enrolled in active courtroom advocacy, focusing primarily on Punjab & Haryana High Court litigation and Tricity trial courts."
    }
  ]
};

export const TRUST_STRIP_ITEMS = [
  {
    number: "01",
    title: "High Court Litigation",
    description: "Focused professional practice with a strong inclination towards High Court litigation and appellate proceedings."
  },
  {
    number: "02",
    title: "Strategic Preparation",
    description: "Thorough research, evidence analysis, and careful structuring of legal pleadings for each individual matter."
  },
  {
    number: "03",
    title: "Responsible Advice",
    description: "Honest, objective, and responsible legal guidance based strictly on the merits and applicable provisions of law."
  },
  {
    number: "04",
    title: "Client-Focused Approach",
    description: "Active listening to understand the person behind the brief, pursuing every legitimate legal remedy available."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "high-court-litigation",
    title: "High Court Litigation",
    shortDesc: "Representation and legal assistance relating to original, supervisory, and revisionary proceedings before the High Court.",
    fullDesc: "Professional advocacy before the Hon'ble Punjab & Haryana High Court at Chandigarh. Matters handled include writ petitions, revision petitions, quashing petitions, and statutory applications requiring deep understanding of High Court rules and constitutional provisions.",
    focusAreas: [
      "Punjab & Haryana High Court Representation",
      "Criminal Miscellaneous Petitions",
      "Civil Revision Petitions",
      "Statutory & Constitutional Remedies"
    ],
    courtForum: "Punjab & Haryana High Court, Chandigarh"
  },
  {
    id: "appellate-work",
    title: "Appellate Work",
    shortDesc: "Comprehensive appellate challenges against trial court convictions, sentences, judgments, or decree findings.",
    fullDesc: "Careful examination of trial records, appreciation of evidence, legal infirmities, procedural errors, and statutory grounds to build structured appellate arguments before appellate forums.",
    focusAreas: [
      "Criminal Appeals against Conviction & Sentence",
      "First & Second Civil Appeals",
      "Appellate Record & Evidence Analysis",
      "Stay Applications & Suspension of Sentence"
    ],
    courtForum: "High Court & Appellate Sessions Courts"
  },
  {
    id: "bail-matters",
    title: "Bail Matters",
    shortDesc: "Prompt legal assistance for Regular Bail, Anticipatory Bail, and Interim Protection across courts.",
    fullDesc: "Timely assessment of criminal allegations to pursue pre-arrest protection under anticipatory bail provisions or post-arrest release under regular bail before Sessions Courts and the High Court.",
    focusAreas: [
      "Anticipatory Bail (Pre-Arrest Protection)",
      "Regular Bail (Post-Arrest Custody Relief)",
      "Interim & Transit Bail Applications",
      "Bail Modification & Condition Redressal"
    ],
    courtForum: "District Courts & Punjab & Haryana High Court"
  },
  {
    id: "criminal-proceedings",
    title: "Criminal Proceedings",
    shortDesc: "Strategic litigation counsel across criminal court proceedings, inquiry stages, and defence representation.",
    fullDesc: "Responsible legal defence and courtroom representation across criminal trials, from initial complaint and FIR stage to framing of charges, evidence examination, and final arguments.",
    focusAreas: [
      "Trial Court Criminal Defence",
      "Cross-examination Strategy & Evidence Examination",
      "Framing of Charges & Discharge Applications",
      "Private Complaints & Quashing Petitions"
    ],
    courtForum: "District Courts (Chandigarh, Mohali, Panchkula, Yamunanagar)"
  },
  {
    id: "civil-proceedings",
    title: "Civil Proceedings",
    shortDesc: "Effective legal representation in civil suits, injunction matters, and contractual disputes.",
    fullDesc: "Advising and representing parties in civil disputes requiring meticulous pleadings, documented evidence, injunction applications, and pursuit of legitimate civil remedies.",
    focusAreas: [
      "Civil Suits for Declaration & Possession",
      "Temporary & Permanent Injunctions",
      "Execution of Decrees & Orders",
      "Property, Title & Contractual Disputes"
    ],
    courtForum: "District & Sub-Divisional Civil Courts"
  },
  {
    id: "other-court-proceedings",
    title: "Other Court Proceedings",
    shortDesc: "Diverse litigation and statutory representation across trial and tribunal forums in the Tricity and Yamunanagar.",
    fullDesc: "Providing coordinated legal assistance across local magistrate courts, district forums, and administrative proceedings for clients seeking dedicated representation across the region.",
    focusAreas: [
      "Magisterial & Judicial Inquiries",
      "Statutory Notices & Replies",
      "Local District Court Representation",
      "Legal Advisory & Document Due Diligence"
    ],
    courtForum: "Chandigarh Tricity & Yamunanagar Courts"
  }
];

export const HELP_OPTIONS: HelpOption[] = [
  {
    id: "general-consultation",
    label: "I Need Legal Consultation",
    subtitle: "Understanding options before proceeding to court",
    description: "If you are unsure of your legal standing, facing an emerging dispute, or received a notice, an early assessment helps clarify rights, liabilities, and legitimate remedies.",
    recommendedStep: "Schedule a preliminary consultation to evaluate the facts, documents, and applicable legal framework before initiating or answering litigation.",
    documentsToBring: [
      "All notices, letters, or communications received",
      "Timeline or brief summary of relevant events",
      "Existing agreements or relevant correspondence"
    ]
  },
  {
    id: "criminal-matter",
    label: "I Have a Criminal Matter",
    subtitle: "Facing FIR, police inquiry, or court summons",
    description: "Criminal proceedings require immediate care, strategic awareness of statutory protections, and responsible defence preparation without panic or delay.",
    recommendedStep: "Seek immediate legal counsel to examine the FIR/complaint, understand whether pre-arrest protection is required, and prepare a coherent defence.",
    documentsToBring: [
      "Copy of FIR or Police Complaint (if available)",
      "Summons or court notice served",
      "Proof of alibi or supporting factual documents"
    ]
  },
  {
    id: "bail-assistance",
    label: "I Need Bail Assistance",
    subtitle: "Anticipatory or Regular Bail application",
    description: "Bail is fact-specific. Timing, court stage, role attributed in the allegations, and gravity of the offense determine whether anticipatory or regular bail should be moved.",
    recommendedStep: "Promptly review the allegations with counsel to draft a well-grounded bail petition highlighting liberty safeguards and court precedents.",
    documentsToBring: [
      "FIR details and sections of law invoked",
      "Arrest memo / Remand details (for regular bail)",
      "Medical records or special circumstances, if any"
    ]
  },
  {
    id: "civil-dispute",
    label: "I Have a Civil Dispute",
    subtitle: "Property, contract, recovery, or injunctions",
    description: "Civil litigation relies strictly on documentation, chain of title, statutory limitation periods, and precise pleading of legitimate rights.",
    recommendedStep: "Have your title documents, notices, and agreements verified to determine the correct cause of action and appropriate court jurisdiction.",
    documentsToBring: [
      "Title deeds, sale deeds, or lease agreements",
      "Bank records, receipts, or financial proof",
      "Previous court orders or municipal notices"
    ]
  },
  {
    id: "appeal-help",
    label: "I Need Help With an Appeal",
    subtitle: "Challenging an adverse trial court judgment",
    description: "An appeal is an appellate review of the record, not a simple rerun of trial arguments. Limitation timelines are critical and require prompt action.",
    recommendedStep: "Obtain certified copies of the impugned judgment and trial evidence immediately so grounds of appeal and stay applications can be drafted.",
    documentsToBring: [
      "Certified copy of impugned judgment/decree",
      "Copies of trial court pleadings and evidence depositions",
      "Date of judgment to verify statutory limitation period"
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Listen Carefully",
    tagline: "Understanding the person behind the brief",
    description: "Every matter is different, and every client has a distinct story. We begin by patiently listening to all factual nuances, timelines, and client concerns without rushing into pre-packaged assumptions.",
    details: [
      "Comprehensive client interview and factual timeline documentation",
      "Identification of immediate risks and statutory deadlines",
      "Clarification of expectations and legitimate remedies available"
    ]
  },
  {
    number: "02",
    title: "Research Thoroughly",
    tagline: "Grounding arguments in legal precedent",
    description: "A litigation-first practice demands rigorous study of relevant statutes, judicial precedents from the High Court and Supreme Court, and deep examination of evidentiary material on record.",
    details: [
      "Case law research on contemporary judicial interpretations",
      "Analysis of substantive provisions and procedural prerequisites",
      "Critical review of opposition pleadings and documentary gaps"
    ]
  },
  {
    number: "03",
    title: "Prepare Strategically",
    tagline: "Precision in pleadings and court documents",
    description: "Courtroom success is built long before standing before the bench. Petitions, replies, and affidavits are drafted with clarity, conciseness, and structural discipline.",
    details: [
      "Drafting focused grounds without extraneous clutter",
      "Curating relevant annexures and supporting records",
      "Anticipating counter-arguments and procedural queries"
    ]
  },
  {
    number: "04",
    title: "Advocate Fearlessly",
    tagline: "Clear and convicted courtroom representation",
    description: "Presenting the client's legitimate legal position with clarity, dignity, and unwavering commitment before the bench, ensuring every viable argument is pursued.",
    details: [
      "Effective oral submissions focused on core points of law",
      "Responsive handling of judicial queries with record citations",
      "Vigorous protection of constitutional and statutory rights"
    ]
  },
  {
    number: "05",
    title: "Remain Grounded",
    tagline: "Professional integrity throughout the journey",
    description: "Advocacy is a public trust and solemn responsibility. We maintain humility, realistic advice, transparent communication, and continuous professional ethics at every stage.",
    details: [
      "Honest appraisals of case progress and possible outcomes",
      "No misleading promises or exaggerated assurances",
      "Accessibility and transparent conduct with every client"
    ]
  }
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: "regular-vs-anticipatory-bail",
    slug: "regular-bail-vs-anticipatory-bail",
    title: "Regular Bail vs Anticipatory Bail: Understanding the Key Differences",
    subtitle: "A comparative legal analysis on safeguarding personal liberty at different stages of criminal proceedings.",
    readTime: "4 min read",
    category: "Criminal Law & Liberty",
    summary: "Bail is one of the most important safeguards within the criminal justice system. However, the nature of relief depends upon the stage of proceedings and the circumstances of the case.",
    introduction: "Bail is one of the most important safeguards available within the criminal justice system. However, the nature of relief available to an accused depends upon the stage of the proceedings and the circumstances of the case.\n\nTwo commonly discussed forms of bail are regular bail and anticipatory bail. Although both are intended to protect an individual's liberty, they operate at different stages and serve different purposes.",
    sections: [
      {
        heading: "What is Anticipatory Bail?",
        paragraphs: [
          "Anticipatory bail is a form of pre-arrest protection available to a person who has reason to believe that they may be arrested in connection with a criminal accusation.",
          "The purpose of such protection is to safeguard personal liberty in appropriate circumstances while ensuring that the investigation and administration of justice are not obstructed."
        ],
        bulletPoints: [
          "Sought prior to an arrest when there is reasonable apprehension of arrest.",
          "Protects individuals from arbitrary or malicious arrest without impeding fair investigation.",
          "Can be subjected to specific statutory conditions, such as joining the investigation when required."
        ]
      },
      {
        heading: "What is Regular Bail?",
        paragraphs: [
          "Regular bail generally becomes relevant after a person has been arrested. The accused may seek release from custody subject to the applicable legal provisions and the circumstances of the case.",
          "The Court may consider several factors while deciding a bail application, including the nature and gravity of the allegations, the material available on record, the possibility of the accused influencing witnesses or tampering with evidence, and other relevant circumstances."
        ],
        bulletPoints: [
          "Applied for post-arrest while in judicial custody or police remand.",
          "Evaluated on gravity of offence, evidence collected, and period of custody undergone.",
          "Subject to personal bonds, sureties, and cooperation with court trial schedules."
        ]
      },
      {
        heading: "Why Legal Advice Matters in Bail Proceedings",
        paragraphs: [
          "Every bail matter is fact-specific. The appropriate legal remedy depends upon the allegations, stage of proceedings, applicable statutory provisions and circumstances surrounding the accused.",
          "A timely assessment of the case can help determine the appropriate legal course, ensuring that rights are protected before procedural complications arise."
        ]
      }
    ],
    keyTakeaways: [
      "Anticipatory bail provides pre-arrest protection when arrest is apprehended.",
      "Regular bail applies post-arrest to secure release from judicial or police custody.",
      "Courts balance individual personal liberty with fair investigation and public interest.",
      "Bail petitions must be strictly fact-specific and supported by verified material."
    ],
    conclusion: "Bail jurisprudence ultimately involves a balance between individual liberty, fair investigation and the interests of justice. Anyone facing criminal proceedings should obtain case-specific legal advice rather than relying solely on general information available online."
  },
  {
    id: "what-is-a-criminal-appeal",
    slug: "what-is-a-criminal-appeal",
    title: "What Is a Criminal Appeal? Understanding Your Legal Remedy After Conviction",
    subtitle: "A practical guide to the appellate mechanism for seeking judicial review of convictions and sentences.",
    readTime: "5 min read",
    category: "Appellate Jurisprudence",
    summary: "A criminal conviction is not necessarily the end of the legal process. Depending upon the applicable law and circumstances, a convicted individual may have a statutory right to challenge the judgment before the appropriate appellate Court.",
    introduction: "A criminal conviction is not necessarily the end of the legal process. Depending upon the applicable law and circumstances of the case, a person aggrieved by a conviction may have a statutory right to challenge the judgment before the appropriate appellate Court.\n\nA criminal appeal provides an important legal mechanism for seeking judicial review of a conviction, sentence or other challengeable aspects of a criminal judgment.",
    sections: [
      {
        heading: "What Can Be Challenged in an Appeal?",
        paragraphs: [
          "Depending upon the applicable statutory framework, an appeal provides a forum to re-examine the trial court's record to determine whether the verdict was arrived at through correct legal principles."
        ],
        bulletPoints: [
          "Appreciation of evidence: Whether the trial judge misinterpreted or overlooked key testimony.",
          "Findings of the Trial Court: Whether conclusions reached are supported by the record.",
          "Application of law: Whether statutory provisions, ingredients of the offense, or legal procedures were misapplied.",
          "Procedural irregularities: Whether mandatory investigative or trial procedures were violated.",
          "Credibility and reliability of evidence: Scrutinizing witness testimony, contradictions, and corroboration.",
          "Legality or proportionality of sentence: Evaluating whether the punishment imposed conforms to legal principles.",
          "Other grounds recognised by law: Constitutional safeguards, limitation, or jurisdictional flaws."
        ]
      },
      {
        heading: "Why Preparation of the Appeal Matters",
        paragraphs: [
          "An appeal is not simply a repetition of the arguments made before the Trial Court. The appellate challenge requires careful examination of the judgment, evidence, pleadings, applicable law and the specific grounds on which interference is sought.",
          "A properly structured appeal should clearly identify the alleged errors and explain why the impugned judgment requires reconsideration."
        ]
      },
      {
        heading: "Role of the Appellate Court",
        paragraphs: [
          "The scope of appellate interference depends upon the nature of the challenge and the applicable law.",
          "The Court examines the grounds raised before it in accordance with the governing statutory framework and judicial principles."
        ]
      }
    ],
    keyTakeaways: [
      "A conviction is subject to statutory appeal rights before higher judicial forums.",
      "Appeals scrutinize evidentiary appreciation, trial findings, and procedural compliance.",
      "An appellate petition requires fresh, structured grounds rather than merely repeating trial notes.",
      "Statutory limitation periods apply, making prompt consultation critical after conviction."
    ],
    conclusion: "A person considering an appeal should act promptly and obtain professional legal advice regarding limitation, maintainability, grounds of appeal and the appropriate appellate forum."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "who-is-advocate-arpit-dua",
    question: "Who is Advocate Arpit Dua?",
    shortAnswer: "Advocate Arpit Dua is a Chandigarh-based litigation counsel practising before the Punjab & Haryana High Court and District Courts.",
    detailedAnswer: "Advocate Arpit Dua is a Chandigarh-based litigation counsel who practices before the Punjab & Haryana High Court and District Courts across Chandigarh, Mohali, Panchkula, and Yamunanagar. He is a first-generation lawyer with an educational background comprising a BBA from Kurukshetra University (2017) and an LL.B. from Punjabi University, Patiala (2022). He commenced his legal practice in 2022 with a litigation-first focus.",
    category: "practice"
  },
  {
    id: "which-court-practise",
    question: "Which court does Advocate Arpit Dua practise before?",
    shortAnswer: "He practises primarily before the Punjab & Haryana High Court and District Courts across the Tricity and Yamunanagar.",
    detailedAnswer: "Advocate Arpit Dua has a particular professional inclination towards High Court litigation before the Hon'ble Punjab & Haryana High Court at Chandigarh. Additionally, he represents clients in trial courts across the Chandigarh Tricity (Chandigarh, Mohali, Panchkula) and District Courts in Yamunanagar.",
    category: "practice"
  },
  {
    id: "office-location",
    question: "Where is Advocate Arpit Dua's office located?",
    shortAnswer: "House No. 1741/2, Sector 43-B, Chandigarh.",
    detailedAnswer: "The office of Advocate Arpit Dua is situated at House No. 1741/2, Sector 43-B, Chandigarh. Clients are advised to coordinate an appointment in advance by telephone or WhatsApp for in-person consultations.",
    category: "consultation"
  },
  {
    id: "service-areas",
    question: "Which areas does Advocate Arpit Dua serve?",
    shortAnswer: "Chandigarh, Mohali, Panchkula, and Yamunanagar.",
    detailedAnswer: "Advocate Arpit Dua serves clients across Chandigarh, Mohali, Panchkula, and Yamunanagar. While the physical office is based in Sector 43-B Chandigarh, he represents clients with matters pending across these connected judicial jurisdictions.",
    category: "practice"
  },
  {
    id: "high-court-matters",
    question: "Does Advocate Arpit Dua handle High Court matters?",
    shortAnswer: "Yes, his practice maintains a strong dedicated focus on High Court litigation and appellate proceedings.",
    detailedAnswer: "Yes. High Court litigation, constitutional writ remedies, criminal miscellaneous petitions, and appellate matters before the Punjab & Haryana High Court represent a core dimension of his professional practice.",
    category: "practice"
  },
  {
    id: "difference-bail",
    question: "What is the difference between regular bail and anticipatory bail?",
    shortAnswer: "Anticipatory bail provides pre-arrest protection; regular bail applies after a person has been arrested into custody.",
    detailedAnswer: "Anticipatory bail is pre-arrest relief sought by an individual who reasonably apprehends arrest in relation to a non-bailable offense, aimed at protecting personal liberty prior to detention. Regular bail, by contrast, becomes relevant after an individual has already been arrested and placed in custody, seeking release subject to judicial terms and sureties.",
    category: "bail"
  },
  {
    id: "criminal-appeal-meaning",
    question: "What is a criminal appeal?",
    shortAnswer: "A formal statutory challenge against a conviction, trial finding, or sentence before a superior appellate court.",
    detailedAnswer: "A criminal appeal is a formal statutory legal remedy through which an individual aggrieved by a conviction or sentence challenges the Trial Court's decision before an appellate court (such as the High Court or Sessions Court). The appeal examines evidence appreciation, legal misdirections, and procedural errors.",
    category: "appeal"
  },
  {
    id: "how-to-contact",
    question: "How can I contact Advocate Arpit Dua?",
    shortAnswer: "Call or WhatsApp at 8059288086, or email advocatearpitdua@gmail.com.",
    detailedAnswer: "You can reach Advocate Arpit Dua directly by phone at 8059288086, send a message on WhatsApp at +91-8059288086, or email advocatearpitdua@gmail.com. Inquiries can also be submitted through the consultation request form on this website.",
    category: "consultation"
  },
  {
    id: "advice-before-visiting",
    question: "Can I seek preliminary guidance before visiting the office?",
    shortAnswer: "Yes, you can initiate preliminary contact via phone or WhatsApp to discuss the nature of your matter.",
    detailedAnswer: "Yes. Prospective clients can make initial contact by telephone or WhatsApp to discuss the broad nature of their legal matter and ascertain what case papers or certified copies will be required for an effective in-person review.",
    category: "consultation"
  },
  {
    id: "pro-bono-assistance",
    question: "Does Advocate Arpit Dua handle pro-bono or need-based cases?",
    shortAnswer: "Yes, in appropriate cases where genuine financial hardship is a barrier to justice.",
    detailedAnswer: "Guided by the belief that access to justice should not become a privilege available only to those who can afford it, Advocate Arpit Dua extends pro-bono and need-based legal assistance in appropriate matters where genuine financial hardship is demonstrated.",
    category: "consultation"
  }
];
