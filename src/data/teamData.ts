export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

export const teamSections: TeamSection[] = [
  {
    title: "CHIEF EXECUTIVE OFFICER",
    members: [
      {
        name: "MR. SOLOMON K. ANDOH",
        role: "CEO",
        image: "/Andoh2.png",
        description: "Visionary leader with over 15 years of experience in technology and business transformation, driving innovation and strategic growth.",
        linkedin: "https://linkedin.com/in/solomonandoh",
        twitter: "https://twitter.com/solomonandoh",
        email: "solomon.andoh@company.com",
      },
    ],
  },


  {
    title: "Board of Directors",
    members: [
      {
        name: "MR. SOLOMON K. ANDOH",
        role: "CHIEF EXECUTIVE OFFICER",
        image: "/Andoh.png",
        description: "Visionary leader with over 15 years of experience in technology and business transformation, driving innovation and strategic growth.",
        linkedin: "https://linkedin.com/in/solomonandoh",
        twitter: "https://twitter.com/solomonandoh",
        email: "solomon.andoh@company.com",
      },
      {
        name: "MR. KAKRA KWABI ADISI",
        role: "CHIEF OPERATIONS OFFICER",
        image: "/Kakra.png",
        description: "Strategic operations expert with proven track record in streamlining processes and optimizing business efficiency across multiple sectors.",
        linkedin: "https://linkedin.com/in/kakraadisi",
        twitter: "https://twitter.com/kakraadisi",
        email: "kakra.adisi@company.com",
      },
      
      {
        name: "MR. EUNAS KOFI ESHUN",
        role: "HEAD, LEGAL AFFAIRS",
        image: "/unas.jpg",
        description: "Accomplished legal counsel specializing in corporate law, compliance, and regulatory frameworks with deep industry knowledge.",
        linkedin: "https://linkedin.com/in/eunaseshun",
        twitter: "https://twitter.com/eunaseshun",
        email: "eunas.eshun@company.com",
      },
    ],
  },

  {
    title: "Management Team",
    members: [
      {
        name: "MR. SOLOMON K. ANDOH",
        role: "CHIEF EXECUTIVE OFFICER",
        image: "/Andoh.png",
        description: "Visionary leader with over 15 years of experience in technology and business transformation, driving innovation and strategic growth.",
        linkedin: "https://linkedin.com/in/solomonandoh",
        twitter: "https://twitter.com/solomonandoh",
        email: "solomon.andoh@company.com",
      },
      {
        name: "MR. KAKRA KWABI ADISI",
        role: "CHIEF OPERATIONS OFFICER",
        image: "/Kakra.png",
        description: "Strategic operations expert with proven track record in streamlining processes and optimizing business efficiency across multiple sectors.",
        linkedin: "https://linkedin.com/in/kakraadisi",
        twitter: "https://twitter.com/kakraadisi",
        email: "kakra.adisi@company.com",
      },
      {
        name: "MR. RAYMOND HARRY OKITY",
        role: "HEAD OF FINANCE AND ADMINISTRATION",
        image: "/Okity.png",
        description: "Seasoned finance professional with expertise in financial planning, risk management, and administrative excellence.",
        linkedin: "https://linkedin.com/in/raymondokity",
        twitter: "https://twitter.com/raymondokity",
        email: "raymond.okity@company.com",
      },
      {
        name: "MR. EUNAS KOFI ESHUN",
        role: "HEAD, LEGAL AFFAIRS",
        image: "/unas.jpg",
        description: "Accomplished legal counsel specializing in corporate law, compliance, and regulatory frameworks with deep industry knowledge.",
        linkedin: "https://linkedin.com/in/eunaseshun",
        twitter: "https://twitter.com/eunaseshun",
        email: "eunas.eshun@company.com",
      },
    ],
  },

  // {
  //   title: "Business Management",
  //   members: [
  //     {
  //       name: "MR. KAKRA KWABI ADISI",
  //       role: "CHIEF OPERATIONS OFFICER",
  //       image: "/kakra.jpg",
  //       description: "Strategic operations expert with proven track record in streamlining processes and optimizing business efficiency across multiple sectors.",
  //       linkedin: "https://linkedin.com/in/kakraadisi",
  //       twitter: "https://twitter.com/kakraadisi",
  //       email: "kakra.adisi@company.com",
  //     },
  //     {
  //       name: "MS. REJOICE EMEFA TENU",
  //       role: "BUSINESS DEVELOPMENT OFFICER",
  //       image: "/blog_admin.jpg",
  //       description: "Dynamic business developer focused on identifying growth opportunities and building strategic partnerships to expand market reach.",
  //       linkedin: "https://linkedin.com/in/rejoicetenu",
  //       twitter: "https://twitter.com/rejoicetenu",
  //       email: "rejoice.tenu@company.com",
  //     },
  //   ],
  // },

  // {
  //   title: "Technical Team",
  //   members: [
  //     {
  //       name: "Chris Werner",
  //       role: "Software Engineer",
  //       image: "/team3.jpeg",
  //       description: "Innovative software engineer passionate about building scalable solutions and implementing cutting-edge technologies.",
  //       linkedin: "https://linkedin.com/in/chriswerner",
  //       twitter: "https://twitter.com/chriswerner",
  //       email: "chris.werner@company.com",
  //     },
  //     {
  //       name: "Amanda Welsh",
  //       role: "Web Designer",
  //       image: "/team1.jpeg",
  //       description: "Creative web designer with an eye for aesthetics and user experience, crafting beautiful and functional digital experiences.",
  //       linkedin: "https://linkedin.com/in/amandawelsh",
  //       twitter: "https://twitter.com/amandawelsh",
  //       email: "amanda.welsh@company.com",
  //     },
  //   ],
  // },
  
  // {
  //   title: "Human Resources",
  //   members: [
  //     {
  //       name: "MS. RAMATU ISSAH",
  //       role: "EXECUTIVE ASSISTANT",
  //       image: "/rama.png",
  //       description: "Highly organized executive assistant with exceptional multitasking abilities, ensuring smooth operations and effective leadership support.",
  //       linkedin: "https://linkedin.com/in/ramatuissah",
  //       twitter: "https://twitter.com/ramatuissah",
  //       email: "ramatu.issah@company.com",
  //     },
  //   ],
  // },
];