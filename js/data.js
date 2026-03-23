// ============================================================
// DATA.JS - ALL CONTENT LIVES HERE
// ============================================================
// This is the only file you need to edit to update content.
// Each section maps to one tab in the navigation.
// Never touch index.html, app.js, or style.css just to update text.
//
// HOW TO UPDATE:
//   - Add a new case study  -> find the right tab section, copy a {} block, paste & fill in
//   - Edit existing text    -> find the title, update the description array
//   - Add a link to a card  -> add a `link: "https://..."` field to the object
//   - Change contact links  -> scroll to CONTACT section at the bottom
// ============================================================




// ============================================================
// TAB: HOME
// ============================================================

const HOME = {
  name:         "Netta Tzin",
  title:        "AI Product Lead & Strategist",
  tagline:      "Turning complex AI capabilities into real operational systems.",
  bio:          "Multifaceted AI product leader and entrepreneur with over a decade of experience at the intersection of AI, technology, data, and arts. I build AI-driven platforms, LLM systems, and data-intensive products - translating complex capabilities into production systems that work in the real world.",
  profileImage: "assets/images/profile.jpg",
  stats: [
    { value: "10+",        label: "years in product leadership" },
    { value: "$2M+",       label: "bootstrapped at MySphera" },
    { value: "GRAILS '25", label: "best AI ethics project internationally" }
  ]
};




// ============================================================
// TAB: AI PRODUCT LEAD & STRATEGIST
// ============================================================

const STRATEGY = {

  intro: "I lead the end-to-end definition and delivery of scalable AI production systems, translating complex organizational workflows into high-impact products. My expertise spans architecting LLM-enabled platforms, implementing rigorous model benchmarking, and embedding responsible AI governance directly into operational environments.",

  caseStudies: [

    {
      title:        "Case Study 1 - AI-Driven Expense Evaluation Platform",
      organization: "Global Organization | Confidential",
      role:         "Product Strategy Lead",
      description: [
        "I led the end-to-end product strategy and delivery of an AI service for a global employee management platform, designed to automatically analyze expense submissions from multiple countries at scale.",
        "The engagement started with stakeholder discovery - interviews mapping current workflows, pain points, regulatory constraints, and unmet operational needs across multiple regions. Findings were synthesized into a prioritized solution landscape, with each option assessed for effort, risk, benefit, and architectural fit. From there, I owned full product scoping, planning, and KPI definition.",
        "The core technical challenge was significant: the system needed to ingest and interpret high volumes of multi-format, multilingual financial documents from different countries, extract structured data, and cross-reference inputs against country-specific regulations and provider guidelines to flag potential compliance risks. I designed and led a multi-dimensional model benchmarking framework evaluating candidates across document understanding accuracy, multilingual performance, structured data extraction quality, hallucination and omission rates, runtime cost, and operational scalability. Encryption standards and regulatory alignment were embedded into the evaluation framework from day one.",
        "The outcome was a validated, production-ready AI architecture that balanced performance, compliance, cost, and scale."
      ],
      dimensions: ["Stakeholder discovery", "Solution scoping & prioritization", "RAG pipeline design", "Multi-jurisdictional compliance grounding", "OCR & structured data extraction", "Multilingual content & sentiment analysis", "Multi-dimensional AI model benchmarking", "Evaluation, validation & explainability layer design", "KPI definition", "Compliance & governance"]
    },

    {
      title:        "Case Study 2 - AI-Powered Clinical Platform",
      organization: "Healthtech Startup | MediBoard",
      role:         "Product Lead - Core, Mobile, AI Features & Clinical Workflows",
      link:         "https://www.mediboard.co/",
      description: [
        "Led product definition and functional specification for MediBoard's transition to mobile-first, establishing the architectural foundation for role management and a multi-location specialty dashboard aggregating patient data into a real-time, physician-customized view.",
        "Beyond the core platform, I scoped and defined multiple AI-powered clinical features spanning visit and test result interpretation, a conversational patient health assistant connected to a patient's full health record, and a lab results standardization engine. The latter combined OCR, multilingual processing, and LLM-based extraction to read, translate, and normalize lab results from multiple sources, labs, and countries into a unified clinical index - accounting for naming variations, unit differences, and scale inconsistencies across providers.",
        "Across all features, I designed the trust and safety layer: confidence scoring, hallucination detection, completeness validation, and a professional review interface with source traceability. A deliberate, responsible design decision kept unresolved flags visible to clinicians while hiding them from patients to avoid confusion."
      ],
      dimensions: ["Mobile-first product strategy", "Role architecture", "Clinical UX", "AI feature definition", "OCR & multilingual pipelines", "LLM integration", "Hallucination mitigation", "Responsible AI", "Human-in-the-loop design"]
    },

    {
      title:        "Case Study 3 - Grant Advisory AI Platform",
      organization: "SMB Consulting Firm | Confidential",
      role:         "AI Product Manager & Product Strategist",
      description: [
        "Led product strategy and AI integration across the full product surface of a grant submission consultancy - transforming a largely manual, expertise-heavy advisory operation into a semi-automated, AI-assisted platform. The engagement spanned four interconnected product workstreams.",
        "The AI content generation layer covered three workstreams: an automated researcher profile generator that synthesised uploaded scientific materials into complete, submission-ready profiles; AI-assisted generation of core grant narrative sections aligned to each funding body's official submission guidelines; and an automated publication and patent detection engine cross-referencing uploaded materials against validated external sources. Across all three, I owned scoping, functional specification, prompt design and iteration, validation frameworks, and the human-review layers.",
        "The fourth workstream was a grant opportunity matching and ranking engine - an AI-powered system that analysed each client's project profile and scientific criteria to discover, score, and rank relevant funding opportunities. I led the full initial scoping, eligibility-filtering pipeline design, and ranking methodology definition.",
        "Alongside this, I owned product strategy and functional specification for the client-facing portal - including full IAM architecture with role-differentiated access, a project versioning and review workflow, and a smart analytics layer surfacing usage patterns, strategist productivity metrics, and platform engagement data."
      ],
      dimensions: ["Grant process automation", "Prompt engineering & iteration", "Document intelligence & extraction", "Grant opportunity matching & ranking engine", "Multi-source data integration", "Client portal design", "IAM & role-based access architecture", "Versioning & collaborative review workflows", "Validation framework design", "Regulated content generation", "Human-in-the-loop design", "Analytics & usage instrumentation"]
    },

    {
      title:        "Case Study 4 - AI Strategy for Alternative Protein R&D",
      organization: "Nonprofit Think Tank | Confidential",
      role:         "AI Strategy Consultant & Researcher",
      description: [
        "Led AI strategy research and advisory for the organization's initiative to identify where artificial intelligence can most meaningfully advance taste, texture, and price parity in plant-based and biomass fermentation-derived alternative meats.",
        "I designed the stakeholder interview framework for key informant interviews with experts spanning alternative protein R&D, academia, and AI applications - structuring the discovery process to surface high-impact intervention points. Alongside the stakeholder work, I conducted comprehensive patent mapping across 2020–2025, cross-industry AI innovation analysis, and an initial standardization landscape review across academic, commercial, and regulatory sources.",
        "To give the analysis operational grounding, I built a prototype knowledge base architecture and database schema for biomass fermentation publications, modelling the automated data collection and source evaluation process. Deliverables spanned the full strategic arc: stakeholder interview guidelines and analysis synthesis, identification of key AI applications and the barriers limiting their deployment, a comprehensive data mapping and gap analysis, and two action plans each centred on an R&D sub-field where AI was assessed to offer the highest marginal improvement."
      ],
      dimensions: ["AI opportunity mapping", "Stakeholder interview design", "Patent & literature analysis", "Data standardization strategy", "Knowledge base architecture", "Alternative protein R&D", "Strategic roadmapping", "Cross-industry innovation research"]
    },

    {
      title:        "Case Study 5 - Enterprise AI Adoption Platform",
      organization: "Public Sector | National Fund (KKL)",
      role:         "AI Product Strategist",
      description: [
        "Led end-to-end product strategy and specification for KKL's enterprise-wide internal AI platform - a secure, multi-model interface designed to bring AI capabilities to all staff across one of the most complex and diverse national institutions, spanning foresters, engineers, legal teams, fundraising staff, and education departments.",
        "I authored the full product specification - from role-based access architecture and token allocation models (API-based multi-model access replacing per-user premium subscriptions, delivering significant cost savings) to features spanning multi-model chat, document interaction (PDF, DOCS, CSV, JSON), organizational knowledge base, structured query templates per role, and a full admin analytics layer. The platform was designed for AWS Bedrock infrastructure, with multi-model flexibility (Anthropic, GPT, Gemini). Alongside the product specification I designed the vendor RFP, including technical requirements, eligibility thresholds, evaluation criteria, and project timeline.",
        "The governance and responsible AI layer was a central and non-negotiable deliverable. I authored KKL's organizational AI integration policy and usage guidelines - defining approved tool categories, data handling protocols, IP ownership frameworks, and ethical use standards. Responsible AI design was embedded throughout the product: hallucination detection, output explainability, usage audit logging, and a structured staff onboarding protocol."
      ],
      dimensions: ["Enterprise AI adoption", "Full product specification", "AWS Bedrock integration", "Role-based access architecture", "Token management & cost optimization", "AI governance & policy", "Responsible AI design", "RFP & vendor evaluation framework"]
    },

    {
      title:        "Case Study 6 - AI-Powered Audience Intelligence Platform",
      organization: "Major Broadcast Television Network | Confidential",
      role:         "AI Product Strategist",
      description: [
        "Led product strategy and architectural design for a multi-modal AI audience intelligence system - transforming static, aggregate ratings analysis into a dynamic, minute-by-minute understanding of what actually drives viewer behavior across four simultaneous broadcast channels.",
        "I designed a four-layer architecture spanning data ingestion (live video, audio, transcripts, minute-by-minute viewer data, and external event feeds), AI-powered content analysis (visual scene and object detection, audio sentiment and tone, multilingual speech analysis in Hebrew, English, and Arabic, and narrative and emotional pattern extraction), a correlation and prediction engine, and a stakeholder-facing dashboard and reporting layer.",
        "The methodology specification defined rigorous statistical thresholds for accepting detected patterns (SHAP feature importance ≥5%, model confidence ≥85%, p-value <0.05). Privacy and ethical AI governance were woven throughout: GDPR compliance, PII anonymization, fairness audits for bias detection, and transparent documentation of model logic."
      ],
      dimensions: ["Multi-modal AI architecture", "Audience intelligence system design", "Content analysis (visual, audio, language)", "Predictive modeling", "SHAP / XGBoost / Random Forest methodology", "Cross-modal pattern identification", "Privacy & ethics governance", "Dashboard design", "Real-time correlation engine"]
    },

    {
      title:        "Case Study 7 - AI-Enhanced Patient Engagement & Compliance Platform",
      organization: "Global Medical Device Company | Confidential",
      role:         "AI Product Discovery Lead",
      description: [
        "Led product discovery for an AI-enhanced patient engagement and clinical transparency platform for a chronic pain rehabilitation device - translating a hardware-first product with limited digital intelligence into a data-driven, clinically connected patient journey.",
        "The engagement centred on structured stakeholder discovery across the full device ecosystem: patients, physiotherapists, physicians, and insurance representatives. Interviews mapped the complete workflow - from initial prescription through insurance approval, device setup, ongoing usage, and clinical follow-up - surfacing a set of critical unmet needs that the existing application was not addressing.",
        "I synthesized findings into a prioritized product direction across three interconnected dimensions: usage transparency and insurance compliance logging (aligned to the 16-day/month, 60-minute/day insurance-defined usage targets), AI-driven personalized patient engagement and proactive reminders, and a simplified clinical feedback loop enabling physiotherapists to receive actionable usage insights. Discovery also surfaced key design constraints: accessibility requirements across an often elderly patient population, and the insurance audit as a primary commercial driver."
      ],
      dimensions: ["Product discovery", "Stakeholder user research", "Healthcare workflow mapping", "Patient journey design", "Insurance compliance requirements", "AI feature definition", "Accessibility-first design", "Clinical feedback loop design", "Human-in-the-loop design"]
    },

    {
      title:        "Case Study 8 - AI-Powered Government Digitization Platform",
      organization: "Public Sector | Government Cloud Initiative (Confidential)",
      role:         "AI Product Strategist & System Specification Lead",
      description: [
        "Led product strategy and full system specification for GovGuide AI - an AI-powered platform enabling government departments to transform informal digitisation project concepts into structured, committee-ready technical proposals.",
        "I owned the full product scope across two interconnected systems. The first - GovGuide AI - provides a template-based project input portal where departments describe their digitisation initiative, and the platform automatically generates structured project objectives, technical specifications, third-party tool recommendations, stakeholder and team composition requirements, budget estimates, and architecture outlines. The recommendation engine uses semantic matching against the approved government tools catalogue, with multi-criteria ranking and explainable AI outputs. An integrated AI chat assistant, powered by RAG, allows departments to interrogate recommendations and refine their submissions.",
        "The second system - a Content Intelligence Platform - continuously scans, analyses, classifies, and monitors government services, cloud provider documentation, and regulatory protocols to keep the recommendation engine current. Across both systems, responsible AI design was foundational: all outputs include source citations, full editing capability is maintained throughout, AI reasoning is surfaced via an explainability interface, and mandatory confirmation steps precede any committee submission."
      ],
      dimensions: ["AI product strategy", "Government technology", "Full system specification (two platforms)", "RAG & semantic search architecture", "Intelligent recommendation engine", "Hallucination detection & validation", "Government cloud compliance", "Human-in-the-loop design", "Explainable AI", "Cost estimation & phased roadmapping"]
    }

  ]
};




// ============================================================
// TAB: AI INITIATIVES
// ============================================================

const INITIATIVES = {

  intro: "As an entrepreneur, researcher, and enabler, I bridge the gap between AI and cultural, geopolitical, educational, and sustainable causes to enable responsible AI implementations.",

  caseStudies: [

    {
      title:        "DAIRE - Democratizing AI Resources for Global Equity",
      organization: "Academic Research | Elisava School of Design & Engineering, Barcelona",
      role:         "Lead Researcher & Platform Architect - GRAILS 2025 Winner",
      link:         "https://vo-daire.vercel.app/",
      description: [
        "DAIRE - Democratizing AI Resources for Global Equity - is a strategic intelligence platform developed as part of a Master's degree in Responsible Design in AI at Elisava, Barcelona, and selected as the winning project of GRAILS 2025 (Global Responsible Artificial Intelligence League for Students), recognized as the best project among AI ethics Master's programs internationally.",
        "The platform maps global AI resource infrastructures - computational capacity, data access, talent pipelines, and governance frameworks - to surface the structural inequities shaping who benefits from AI development and who is excluded. I designed and executed the full research methodology: landscape analysis, cross-sector resource mapping, and the development of an AI adoption readiness and organizational impact assessment framework grounded in responsible design principles.",
        "The methodology was built to be operationally applicable, not only academically rigorous - and has since been deployed in real-world AI transformation projects across public and private sector organizations."
      ],
      dimensions: ["AI equity & governance", "Global resource mapping", "Adoption readiness frameworks", "Organizational impact assessment", "Responsible AI design", "Academic & applied research", "Strategic intelligence platform design", "International recognition (GRAILS 2025)"]
    },

    {
      title:        "AI-Driven Exhibition Engagement & Community Matching Platform",
      organization: "Cultural Institution | Design Museum Holon - \"The Circle\" Exhibition",
      role:         "AI Product Lead",
      description: [
        "Led product design and AI architecture for an intelligent engagement platform built around \"The Circle,\" a circular design and sustainability exhibition at the Design Museum Holon - extending the exhibition's impact from a single visit into ongoing, real-world community participation.",
        "I designed a fully automated pipeline - from exhibition knowledge base curation and multi-platform social discovery (Facebook, Instagram, Twitter, Google Search) through AI-powered content validation, semantic tagging, and weighted artwork-to-activity matching. Each artwork was catalogued across multiple semantic dimensions, and discovered activities were matched using a custom weighted scoring algorithm spanning values alignment, material resonance, process similarity, theme overlap, and emotional resonance.",
        "The AI stack is built on n8n for workflow orchestration, Apify for automated multi-platform web scraping, and Claude API for content validation, semantic tagging, match reasoning, and description generation. I defined the full system architecture across seven phases, the confidence scoring model, the cost structure (~$60–100/month for the entire pipeline), and the human curation touchpoints maintaining quality across the recommendation flow."
      ],
      dimensions: ["AI product strategy", "Exhibition intelligence systems", "Semantic matching algorithm design", "Multi-platform social discovery (Apify)", "LLM-powered content processing (Claude API)", "Workflow automation (n8n)", "Bilingual NLP (Hebrew/English)", "Personalization engine", "Human-in-the-loop design"]
    },

    {
      title:        "ML-Powered Music Intelligence & Discovery Platform",
      organization: "Music Tech | MySphera",
      role:         "Co-Founder & Head of Product",
      link:         "https://www.hypebot.com/hypebot/2020/09/5-music-tech-startups-join-marathon-artists-labs-2020.html",
      description: [
        "Co-founded and led end-to-end product strategy for MySphera: a data-driven music intelligence platform connecting music creators and rights holders with tastemakers and digital creators through proprietary ML-based matching.",
        "The centrepiece of the platform is a proprietary in-house ML algorithm that models each tastemaker's continuously evolving musical preferences - not as a static profile, but as a dynamic, updating representation that reflects how taste shifts over time. This approach enabled discovery that remained personally relevant across changing contexts, genres, and career stages for both creators and tastemakers.",
        "Building bootstrapped and scaling without external funding, MySphera reached $2M+ in revenue with a global network of 45,000+ music rights holders and 3,000+ tastemakers and digital creators, and was selected for the Marathon-Labs accelerator programme."
      ],
      dimensions: ["ML-based recommendation system design", "Dynamic preference modelling", "Music intelligence platform", "Data ingestion & pipeline design", "End-to-end product ownership", "Marketplace product design", "B2B2C platform scaling", "UX design & iteration", "Bootstrapped growth"]
    },

    {
      title:        "AI Mapping of a Deceased Artist's Digital Archive",
      organization: "Cultural Heritage & Arts Foundation | Dorit Feldman Foundation",
      role:         "AI Strategist & Experience Designer",
      description: [
        "Led the AI strategy and mapping architecture for the digital archive of Dorit Feldman (1956–2020), a prominent multi-disciplinary artist whose practice spanned conceptual art, land art, and body art - continuously expanding visual language. Feldman's body of work is unusually dense with reference and connection: her layered works draw on literature, philosophy, scientific research, geography, bodily movement, and material culture.",
        "The work centred on mapping multiple source layers - direct sources (Feldman's own works, materials, processes, and statements) and indirect sources (the referenced texts, philosophical frameworks, scientific concepts, and geographical sites) - using AI tools to identify, structure, and surface the connections between them. This required designing a multi-source integration architecture capable of holding heterogeneous content types, and building the semantic mapping layer that reveals the connective tissue across them.",
        "The envisioned outcome is an immersive, physical watching-and-interacting room where each visitor creates their own singular journey - guided by their interests and curiosities rather than a fixed curatorial path. The AI layer enables this by personalising the discovery experience in real time: surfacing connections that resonate with where each visitor has wandered."
      ],
      dimensions: ["Digital archive strategy & structuring", "Multi-source knowledge integration", "Semantic mapping & connection discovery", "Knowledge graph design", "AI-powered personalised exploration", "Immersive experience design", "Multi-modal content processing", "Cultural heritage & digital preservation"]
    }

  ]
};




// ============================================================
// TAB: OTHER PROJECTS
// ============================================================

const OTHER_PROJECTS = {

  cvLink: "https://docs.google.com/document/d/1bJyZUhsRupD_mkorQIMBNBNSewlsOCoeXyUnT8cYRIk/edit?tab=t.0",

  projects: [

    {
      title:        "S.P.A.C.E | Strategic Portrait of AI-Integration Contextual Evaluation",
      role:         "Founder & Strategist",
      link:         "https://space-strategic-ai-evaluation.lovable.app/",
      description: [
        "S.P.A.C.E is a methodology and tool that transforms how organizations approach AI implementation decisions. It provides a comprehensive, time-stamped strategic portrait that captures an organization's unique context - from scope, capabilities, strategy, and risks - at a specific moment, recognizing that conditions like market dynamics, team composition, and stakeholder mindset are never replicated.",
        "Structured around a \"Strategic Solar System\" model, the process moves through nine interconnected pillars: from stakeholder atmosphere assessment and organizational foundation mapping, through process deep-dives, market intelligence, and risk/compliance/human-centric evaluations, to technical feasibility, strategic alignment, evolution planning, and actionable launch recommendations. The methodology is supported by custom-developed evaluation frameworks, including an MFAI (Meaningful & Fruitful AI) Integration score, an Environmental & Social Impact Assessment, and a Compliance & Standards evaluation - all powered by continuously updated, verified sources.",
        "Delivered through a dual-interface system offering full transparency to stakeholders and advanced analytical capabilities for the consultant, S.P.A.C.E shifts organizational thinking from fast AI automation toward long-term, responsible, human-centric AI strategy that bridges the persistent gap between AI investment and meaningful value creation."
      ],
      dimensions: ["AI implementation strategy", "Organizational readiness assessment", "Responsible AI methodology", "MFAI Integration score", "Environmental & Social Impact Assessment", "Compliance & Standards evaluation", "Dual-interface platform", "Human-centric AI strategy"]
    },

    {
      title:        "Reviving Iconic Board Game Through Mobile Gaming and AI",
      role:         "Project Lead & AI Designer",
      organization: "Ephraim Kishon Archive & Game Designers",
      description: [
        "Adapting Ephraim Kishon's 1960s satirical board game \"Package Arrived\" into a captivating mobile experience. The game's premise revolved around the absurd odyssey required to retrieve a package from abroad - a biting satire of Israel's bureaucracy at the time.",
        "Using AI narrative tools to reimagine the core bureaucratic nightmare into an engaging narrative-driven adventure that captures its satirical spirit through today's technology landscape and government processes. Presented at the Annual Comedy Festival named after Kishon."
      ],
      dimensions: ["Legacy game adaptation", "Bureaucracy satire", "AI narrative tools", "Mobile UX strategy"]
    },

    {
      title:        "Operation Restart",
      role:         "Founding Member & Digital Rights Activist",
      organization: "Digital Rights Collective",
      description: [
        "During 2020–2021, I was a founding member of a group of digital rights activists, following the events in the social media arena. We felt that the digital acceleration in the last 20 years continues to enlarge social, cultural, and financial gaps - creating a reality that justice institutions and parliaments are incapable, and reluctant, to deal with.",
        "We teamed with NGOs, Academics, and Activists from around the globe to raise awareness among end users and pressure legislators to prioritize regulation securing transparency, privacy, and freedom of speech."
      ],
      dimensions: ["Digital rights activism", "Global NGO collaboration", "Policy awareness", "Privacy & Transparency"]
    },

    {
      title:        "International Synthesizer Day",
      role:         "Founding Organizer",
      organization: "Music Innovation Community",
      description: [
        "In 2017, I was part of a group of music enthusiasts who wished to honor Bob Moog and his profound contribution to music by inventing the Moog Synthesizer. We established an international day, celebrated all over the world on May 23rd - Bob Moog's birthday.",
        "Since its establishment, International Synthesizer Day has gained global recognition, adopted by the Moog Foundation and other acclaimed institutions, joining together music lovers worldwide to celebrate creativity, music, and innovation."
      ],
      dimensions: ["Cultural heritage", "Innovation advocacy", "Global community building", "Music technology"]
    }

  ]
};




// ============================================================
// TAB: ABOUT
// ============================================================

const ABOUT = {

  name:         "Netta Tzin",
  title:        "AI Product Lead & Strategist",
  tagline:      "Turning complex AI capabilities into real operational systems.",
  profileImage: "assets/images/profile.jpg",

  bio: [
    "I'm a multifaceted AI product leader, strategist, and entrepreneur with over a decade of experience at the intersection of AI, technology, data, and arts.",
    "My work is focused on AI-driven platforms, LLM systems, and data-intensive products. Experienced in translating complex AI capabilities into production systems embedded in operational workflows across public and private sectors.",
    "I hold a Master's in Responsible Design in AI (Elisava, Barcelona), an MSc in International Management (ISCTE, Lisbon), and a BSc in Industrial & Management Engineering (Tel Aviv University)."
  ],

  education: [
    { degree: "MA - Responsible Design in AI",   institution: "Elisava, Barcelona",            year: "2024–2025" },
    { degree: "MSc - International Management",  institution: "ISCTE Business School, Lisbon", year: "2014–2016" },
    { degree: "BSc - Industrial Engineering",    institution: "Tel Aviv University",            year: "2007–2012" }
  ],

  accelerators: ["Marathon-Labs", "Techstars-Barclays"],

  skills: [
    {
      title: "AI & ML Systems",
      items: ["LLM applications", "RAG pipelines", "NLP", "Semantic search", "Document intelligence", "AI model evaluation"]
    },
    {
      title: "Data & Platforms",
      items: ["AI data pipelines", "Knowledge bases", "Structured & unstructured data", "Predictive modeling", "N8N", "Claude Code", "Google AI Studio"]
    },
    {
      title: "Product & Delivery",
      items: ["AI product strategy", "Platform design", "Product discovery", "Cross-functional delivery", "KPI definition"]
    },
    {
      title: "Responsible AI",
      items: ["Governance frameworks", "Explainability", "Risk evaluation", "Human-in-the-loop systems"]
    }
  ]
};




// ============================================================
// TAB: CONTACT
// ============================================================

const CONTACT = {

  heading:    "Let's get in touch.",
  subheading: "Open to consulting engagements, advisory roles, and collaborations at the intersection of AI, product, and responsible design.",
  email:      "nettatzin@gmail.com",

  links: [
    { label: "LinkedIn",    url: "https://www.linkedin.com/in/netta-tzin-b6795236/", handle: "Netta Tzin"  },
    { label: "Instagram",   url: "https://instagram.com/netushka",                   handle: "@netushka"   },
    { label: "Twitter / X", url: "https://x.com/nettzin",                            handle: "@nettzin"    }
  ]

};
