
import {
  Code,
  Video,
  CreditCard,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Database,
  BarChart3,
  Smartphone,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  icon: React.ElementType;
  longDescription: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 1,
    image: "/service1.jpg",
    title: "Software Development & Consulting",
    description:
      "We develop tailored digital solutions to streamline business operations and enhance productivity.",
    longDescription:
      "We develop tailored digital solutions to streamline business operations and enhance productivity. From custom software development to comprehensive database management systems, we empower businesses with technology that drives growth and innovation.",
    features: [
      "Custom Software Development",
      "Database Management Systems (DBMS)",
      "Biometric & ID Card Processing",
      "Digitisation of Cooperatives, Associations & SMEs",
      "Business Suites & Automation",
      "Farm Mapping, Traceability & Digital Marketplaces",
      "SME Training & Acceleration"
    ],
    benefits: [
      "Streamlined business operations",
      "Increased productivity and efficiency",
      "Scalable digital infrastructure",
      "Enhanced data security and management",
      "Improved decision-making capabilities",
      "Cost optimization and ROI"
    ],
    icon: Code,
  },
  {
    id: 2,
    image: "/service2.jpg",
    title: "AI Solutions & Security Surveillance",
    description:
      "Harness the power of artificial intelligence and 3D digital twins to drive insight and innovation.",
    longDescription:
      "Harness the power of artificial intelligence and 3D digital twins to drive insight and innovation across multiple industries. Our advanced AI systems and surveillance solutions transform how organizations operate and make critical decisions.",
    features: [
      "Satellite Imagery & 3D Digital Twins",
      "Urban Planning Solutions",
      "Security & Defense Systems",
      "Real Estate & Construction Analytics",
      "Manufacturing & Industry Optimization",
      "Gaming & Architecture Solutions",
      "Travel & Hospitality Intelligence",
      "Agricultural Analytics",
      "Energy & Utilities Management"
    ],
    benefits: [
      "Advanced predictive analytics",
      "Real-time monitoring and surveillance",
      "Enhanced decision intelligence",
      "Risk mitigation and security",
      "Industry-specific optimization",
      "Data-driven strategic planning"
    ],
    icon: Video,
  },
  {
    id: 3,
    image: "/fintech.jpg",
    title: "Fintech Solutions",
    description:
      "Cutting-edge financial technology delivering secure, efficient, and seamless user experiences.",
    longDescription:
      "We provide cutting-edge financial technology solutions that deliver secure, efficient, and seamless user experiences. Our fintech platforms enable organizations to modernize their financial operations.",
    features: [
      "Digital Payment Systems",
      "Mobile Banking Solutions",
      "Payment Integration APIs",
      "Blockchain & Cryptocurrency Solutions",
      "Wealth Management Platforms",
      "Insurance Technology Solutions"
    ],
    benefits: [
      "Enhanced transaction security",
      "Reduced operational costs",
      "Improved customer experience",
      "Real-time financial insights",
      "Regulatory compliance",
      "Scalable financial infrastructure"
    ],
    icon: CreditCard,
  },
  {
    id: 4,
    image: "/security.jpg",
    title: "Security, Safety & Surveillance",
    description:
      "CCTV systems, asset tracking, biometric access, alarms, and time attendance solutions.",
    longDescription:
      "Comprehensive security solutions protecting your assets and personnel. We provide integrated CCTV systems, biometric access control, asset tracking, alarm systems, and time attendance management.",
    features: [
      "CCTV & Video Surveillance",
      "Biometric Access Control",
      "Asset Tracking Systems",
      "Alarm & Detection Systems",
      "Time Attendance Solutions",
      "24/7 Monitoring Services",
      "Integration with Building Management"
    ],
    benefits: [
      "Maximum security and protection",
      "Real-time threat detection",
      "Improved employee accountability",
      "Reduced theft and loss",
      "Peace of mind operations",
      "Regulatory compliance"
    ],
    icon: ShieldCheck,
  },
  {
    id: 5,
    image: "/innovation.jpg",
    title: "Acceleration & Incubation",
    description:
      "Business training, financial management, technical support, and grant funding for innovators.",
    link: "/wgtechhub",
    longDescription:
      "Our innovation hub provides comprehensive support for entrepreneurs and businesses. From training programs to financial management and grant funding assistance, we empower innovators to scale their ideas.",
    features: [
      "Business Training Programs",
      "Financial Management Coaching",
      "Technical Support & Mentorship",
      "Grant Funding Assistance",
      "Business Plan Development",
      "Pitch Preparation Services",
      "Networking & Partnership Opportunities"
    ],
    benefits: [
      "Access to expert mentorship",
      "Funding opportunities unlocked",
      "Enhanced business skills",
      "Network with like-minded entrepreneurs",
      "Accelerated business growth",
      "Risk mitigation strategies"
    ],
    icon: Lightbulb,
  },
  {
    id: 6,
    image: "/finance.jpg",
    title: "Project Financing",
    description:
      "Debt and equity financing for private and public projects across global funding sources.",
    longDescription:
      "We facilitate access to debt and equity financing for both private and public projects. Our expertise spans global funding sources, enabling organizations to secure capital for strategic initiatives.",
    features: [
      "Debt Financing Solutions",
      "Equity Investment Facilitation",
      "Project Valuation Services",
      "Grant Funding Identification",
      "Loan Structuring & Negotiation",
      "Blended Finance Solutions",
      "International Funding Access"
    ],
    benefits: [
      "Access to diverse funding sources",
      "Optimized capital structure",
      "Reduced financial burden",
      "Accelerated project implementation",
      "Financial flexibility",
      "Expert guidance throughout process"
    ],
    icon: TrendingUp,
  },
  {
    id: 7,
    image: "/service7.jpg",
    title: "Data Mining & Management",
    description:
      "Advanced data analysis, insight optimization, and strategic decision-making solutions.",
    longDescription:
      "Transform raw data into actionable intelligence. Our advanced data mining and management solutions provide deep insights that drive strategic decision-making and business optimization.",
    features: [
      "Advanced Data Analysis",
      "Business Intelligence Solutions",
      "Data Warehousing",
      "Predictive Analytics",
      "Data Visualization & Dashboards",
      "Machine Learning Models",
      "Real-time Data Processing"
    ],
    benefits: [
      "Actionable business insights",
      "Data-driven decision making",
      "Improved operational efficiency",
      "Competitive advantage",
      "Risk identification & mitigation",
      "Revenue optimization"
    ],
    icon: Database,
  },
  {
    id: 8,
    image: "/service8.jpg",
    title: "Revenue Mobilization Services",
    description:
      "Strategic enhancement of revenue streams for sustainable business growth.",
    longDescription:
      "Maximize your revenue potential through our strategic revenue mobilization services. We identify new revenue streams and optimize existing ones for sustainable business growth.",
    features: [
      "Revenue Stream Analysis",
      "Pricing Strategy Optimization",
      "New Market Development",
      "Customer Retention Programs",
      "Sales Process Improvement",
      "Revenue Forecasting",
      "Monetization Strategy"
    ],
    benefits: [
      "Increased revenue streams",
      "Improved profit margins",
      "Market expansion opportunities",
      "Enhanced customer lifetime value",
      "Sustainable growth trajectory",
      "Financial stability"
    ],
    icon: BarChart3,
  },
  {
    id: 9,
    image: "/service10.jpg",
    title: "Financial Advisory",
    description:
      "Optimizing financial performance and driving long-term business sustainability.",
    longDescription:
      "Our expert financial advisors provide strategic guidance to optimize your financial performance and ensure long-term business sustainability and growth.",
    features: [
      "Financial Planning & Strategy",
      "Performance Analysis & Optimization",
      "Risk Management Consulting",
      "Capital Allocation Strategy",
      "Merger & Acquisition Advisory",
      "Treasury Management",
      "Regulatory Compliance Support"
    ],
    benefits: [
      "Enhanced financial performance",
      "Strategic financial planning",
      "Risk mitigation",
      "Optimal capital deployment",
      "Long-term sustainability",
      "Stakeholder value creation"
    ],
    icon: TrendingUp,
  },
];
