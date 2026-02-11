export interface Solution {
  id?: number;
  name: string;
  description: string;
  link: string;
  image: string;
  category?: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  tryLink?: string;
}

export const solutionsSections = [
  {
    title: "Our Featured products and Solutions",
    solutions: [
      {
        id: 1,
        name: "Falcon Pay",
        description: "A secure, user-friendly digital payment platform with seamless bank and wallet integration.",
        category: "Digital Payments",
        longDescription: "Falcon Pay is a comprehensive digital payment platform designed to deliver secure, efficient, and seamless transactions. With seamless bank and wallet integration, we power financial transactions with cutting-edge technology.",
        link: "https://falconpayglobal.com/",
        tryLink: "https://falconpayglobal.com/",
        image: "/falconpay.png",
        features: [
          "Seamless Bank Integration",
          "Multi-wallet Support",
          "Real-time Transaction Processing",
          "Advanced Security Features",
          "Mobile & Web Platforms",
          "API Integration Solutions",
          "Transaction Monitoring Dashboard"
        ],
        benefits: [
          "Secure and reliable transactions",
          "Reduced payment processing time",
          "Enhanced customer experience",
          "Increased transaction volume",
          "Fraud prevention systems",
          "24/7 customer support"
        ]
      },
      {
        id: 2,
        name: "Falcon Connect",
        description: "Seamless global payment integration for businesses with payment cards, USSD, mobile money, and instant settlements.",
        category: "Payment Gateway",
        longDescription: "Falcon Connect is a flagship innovation enabling individuals, SMEs, and enterprises to accept payments from anywhere in the world. Whether through cards (local, regional, or international), USSD Short Codes, mobile money, or other digital payment channels, we simplify the way you receive funds. Experience speed, reliability, and convenience, all through one unified platform designed to scale with your business. Our mission is to bridge the gap between businesses and customers through secure, instant, and accessible digital payment systems.",
        link: "https://wgsms.vercel.app/",
        tryLink: "https://wgsms.vercel.app/",
        image: "/falconconnect.png",
        features: [
          "Payment Integration for Cards, Mobile Money, and Wallets",
          "Bulk SMS Solutions for Customer Engagement",
          "USSD Short Code Solutions (e.g. *716#)",
          "Global Payment Acceptance",
          "Unified Platform Management",
          "Instant Settlement",
          "24/7 Expert Support"
        ],
        benefits: [
          "Global reach for international payments",
          "Unified platform for all payment channels",
          "Instant and secure fund settlement",
          "Empowers SMEs and digital startups",
          "Advanced encryption and compliance standards",
          "Seamless API and plugin integration"
        ]
      },
      {
        id: 3,
        name: "FlexiPhones",
        description: "Digital marketplace simplifying smartphone access through hire-purchase arrangements with trusted vendors.",
        category: "E-Commerce",
        longDescription: "FlexiPhones is a digital platform designed to simplify access to smartphones through hire-purchase arrangements. The platform connects customers with trusted vendors offering flexible payment plans on top smartphone brands. It provides a seamless and transparent system for browsing vendors and exploring available phones. FlexiPhones bridges the gap between individuals who need smartphones but cannot pay upfront and vendors struggling to reach hire-purchase customers, transforming smartphone accessibility through a trusted digital marketplace.",
        link: "https://portal.flexiphones.app",
        tryLink: "https://portal.flexiphones.app",
        image: "/flexi.png",
        features: [
          "Vendor Directory with Verified Sellers",
          "Comprehensive Phone Catalogue",
          "Advanced Search & Filter Tools",
          "Easy Vendor Contact Access",
          "Favorites and Saved Items",
          "Flexible Payment Plans",
          "User-friendly Interface"
        ],
        benefits: [
          "Access to trusted vendors",
          "Wide variety of phone options",
          "Convenient marketplace experience",
          "Transparent pricing and offers",
          "Flexible payment arrangements",
          "Seamless browsing and comparison"
        ]
      },
      // {
      //   id: 4,
      //   name: "MyEasyDonate",
      //   description: "Trusted digital crowdfunding and donation platform enabling secure, transparent, and efficient fundraising.",
      //   category: "Crowdfunding",
      //   longDescription: "MyEasyDonate is a trusted digital crowdfunding and donation platform designed and developed locally, enabling individuals, communities, and organizations to raise funds securely, transparently, and efficiently. Whether for a church project, school anniversary, medical assistance, business start-up, or social cause, MyEasyDonate simplifies giving and receiving funds both locally and globally through a user-friendly interface and multiple payment integrations. The platform empowers users to create personalized donation campaigns, share them with their networks, and track every contribution in real time. MyEasyDonate stands as a bridge between need and generosity, turning hope into action, one cedi at a time.",
      //   link: "https://www.myeasydonate.com",
      //   tryLink: "https://www.myeasydonate.com",
      //   image: "/myeasydonate.png",
      //   features: [
      //     "Local, Global & Limitless Donations",
      //     "Full Transparency & Total Control",
      //     "Secure Payment Integrations (Mobile Money, Cards, Bank Transfers)",
      //     "Donor Communication Tools (SMS & Email)",
      //     "Detailed Reporting & Analytics",
      //     "Cloud-based Hosting with Redundancy",
      //     "KYC Verification & Anti-fraud Algorithms"
      //   ],
      //   benefits: [
      //     "Transparent fund tracking and accountability",
      //     "Secure payment integrations",
      //     "Global reach for fundraising",
      //     "Real-time donation notifications",
      //     "Community trust and engagement",
      //     "Compliance with Ghana's Data Protection Act"
      //   ]
      // },
      {
        id: 5,
        name: "ISDBMS",
        description: "Innovative system for registration and management of informal sector associations with integrated cooperative services.",
        category: "Enterprise Management",
        longDescription: "The Informal Sector Database Management System (ISDBMS) is an innovative software solution designed to streamline the registration and management of members within informal sector associations. This system not only provides a unified database but also integrates cooperative services that ensure members can access welfare benefits such as pensions, insurance, loans, and business support services. Each registered member receives an RFID smart ID card linked to their cooperative account, enabling seamless contributions, transactions, and access to financial inclusion opportunities.",
        link: "https://isdbms.com/",
        tryLink: "https://isdbms.com/",
        image: "/isdbms.png",
        features: [
          "Centralized Member Data Management",
          "Co-operative Services and Shareholder Access",
          "Welfare Solutions (Pensions, Insurance, Health Coverage)",
          "RFID Smart ID Cards",
          "Digital Payment Solutions",
          "Microfinance and Savings (Susu) Accounts",
          "Business Development Services and Training"
        ],
        benefits: [
          "Financial inclusion for informal sector members",
          "Streamlined dues and contribution collection",
          "Access to welfare and insurance benefits",
          "Seamless digital transactions",
          "Reduced administrative overhead",
          "Enhanced business capacity through training"
        ]
      },
      {
        id: 6,
        name: "TailorLink",
        description: "Comprehensive management solution for tailors and fashion designers to streamline operations and boost productivity.",
        category: "Business Management",
        longDescription: "TailorLink is a comprehensive management solution designed for tailors, dressmakers, and fashion designers to streamline business operations by combining order management, customer tracking, and reporting into one easy-to-use platform. The TailorLink system is built to simplify workflow, enhance productivity, and improve customer service, serving both individual tailors and large fashion studios with tools that help teams stay organized and efficient.",
        link: "https://tailorlink.app",
        tryLink: "https://tailorlink.app",
        image: "/tailorlinks.png",
        features: [
          "Centralized Order Management Dashboard",
          "Customer Management with Profiles",
          "Measurement Records and History Tracking",
          "Garment Details and Due Date Management",
          "Business Performance Reporting",
          "Sales and Order Statistics",
          "Customer Analytics and Insights"
        ],
        benefits: [
          "Streamlined workflow and operations",
          "Enhanced team productivity",
          "Improved customer satisfaction",
          "Better business visibility",
          "Time-saving automation",
          "Scalable for individual tailors and studios"
        ]
      }
    ]
  }
];