export interface GalleryImage {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface SME {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  contact: string;
  website?: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: "/gal1.jpeg",
    title: "Tech Training Session",
    category: "Training"
  },
  {
    id: 2,
    image: "/gal2.jpg",
    title: "Team Collaboration",
    category: "Workspace"
  },
  {
    id: 3,
    image: "/gal3.png",
    title: "Innovation Workshop",
    category: "Workshop"
  },
  
];

export const smes: SME[] = [
  {
    id: 1,
    name: "Yummy Bakes and Grill",
    description: "We produce high-quality, delicious food and cater for many occasions and events—weddings, funerals, birthdays, parties, canteen services, snacks, home food services, and more. We always aim to deliver outstanding service and high standards, which is what our customers have come to expect from us. This has been achieved by employing a highly talented team with great culinary and hospitality skills.",
    image: "/yummy.jpeg",
    location: "West Adenta- Nii Kodia Road. Around Jempat Gardens",
    contact: "Instagram: @Yummybakesngrill",
    socials: {
      instagram: "https://www.instagram.com/yummybakesngrill"
    }
  },
  {
    id: 2,
    name: "Nyon Derma",
    description: "With pure natural and naturally derived ingredients, Nyon Derma targets the healing of the skin as a means to enhance beauty and build confidence in users. Our products range from soaps, serums, natural body oils, creams and toners. Each product is made with the end user in mind and for a specific skin concern.",
    image: "/nyeon.jpeg",
    location: "Ashongman Estate N795 ECOWAS HWY GE-158-8270",
    contact: "0558498657",
    website: "http://www.nyonderma.com",
    socials: {}
  },
  {
    id: 3,
    name: "Jana-psalms Enterprise (Awakn Beauty Africa)",
    description: "A natural skincare brand inspired by the natural beauty and rich heritage of Africa. Our mission is to empower individuals to embrace their skin's natural radiance through high-quality products crafted using indigenous African botanicals and sustainable practices. Awakn Beauty Africa celebrates the diversity and uniqueness of African beauty traditions while promoting a message of self-love and authenticity.",
    image: "/jana.jpeg",
    location: "New Bortianor",
    contact: "0548677566, 0248461171",
    socials: {
      instagram: "https://www.instagram.com/awakn_beauty_africa"
    }
  },
  {
    id: 4,
    name: "D'Mema Beads and Accessories",
    description: "We are bespoke beads and accessories crafters, located in the heart of the industrial port city of Tema, Ghana. Born out of sheer passion for stylish fashion and dress making, and a desire to become a recognized brand globally, D'Mema Beads and Accessories was established in November 2015.",
    image: "/dmema.jpeg",
    location: "Tema Community 12 Kiwilane",
    contact: "0541850274 / 0503508483",
    socials: {
      instagram: "https://www.instagram.com/Dmema_designs"
    }
  },
  {
    id: 5,
    name: "Daystar Commercial Complex",
    description: "The business obtains its supplies from reliable suppliers in neighboring Francophone countries such as Ivory Coast and Togo, and has built a trusted business relationship with these suppliers over the years. In terms of clientele base, Daystar boasts of a large customer base spanning individuals and households within Takoradi and its environs.",
    image: "/daystar.png",
    location: "Takoradi",
    contact: "0240571988",
    socials: {}
  },
  {
    id: 6,
    name: "Allotey Honey Bee Farms",
    description: "Our company is to be recognized as a world class leader in the development and promotion of efficient low tech and cost-effective intermediary to intensive value-based advance beekeeping research and innovative solutions for increased sustainable improvement and efficient productivity of honey bees in Top Bar and Traditional Hives.",
    image: "/allotey.jpeg",
    location: "8th Woowoti Link, GA-508-2001 Dansoman",
    contact: "0302327014 / +233243322609",
    website: "mailto:aaaallotey@yahoo.co.uk",
    socials: {}
  }
];

export const hubStats = {
  totalSMEs: 480,
  femaleTraders: 1500,
  cocoaFarmers: 500000,
  vegetableFarmers: 200000,
  pwdEnterprises: 150,
  accelerationGoal: 5000
};

export const hubInfo = {
  location: "24th Street, New Achimota, Accra, Ghana",
  focus: ["Youth-led enterprises", "Female-led enterprises", "Informal sector enterprises", "PWD-led enterprises"],
  services: [
    "Incubation & Acceleration",
    "Business Software Development",
    "Access to Finance & Markets",
    "Digital Payment Solutions (FalconPay)",
    "Micro-welfare Solutions",
    "Training & Capacity Building"
  ]
};
