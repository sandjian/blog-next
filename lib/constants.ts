import { HomeIcon, ListIcon, SearchIcon, UsersIcon, Users2, ShieldCheckIcon, BookOpen} from "lucide-react";

export const NavLinks = [
  { href: "/", label: "Lobby", icon: HomeIcon },
  { href: "/categories", label: "Categories", icon: ListIcon },
  { href: "/search", label: "Search", icon: SearchIcon },
  { href: "/about-us", label: "About Us", icon: UsersIcon },
  { href: "/contact-us", label: "Contact Us", icon: Users2 },
  { href: "/privacy-policy", label: "Privacy Policy", icon: ShieldCheckIcon },
  { href: "/terms-of-service", label: "Terms of Service", icon: BookOpen },
];


  export const LogoSectionData = {
    title: "TRUSTED BY FITNESS LEADERS",
    companies: [
      {
        name: "Google",
        url: "logos/Google.svg",
      },
      {
        name: "GitHub",
        url: "logos/GitHub.svg",
      },
      {
        name: "Amazon",
        url: "logos/Amazon.svg",
      },
      {
        name: "Netflix",
        url: "logos/Netflix.svg",
      },
      {
        name: "YouTube",
        url: "logos/YouTube.svg",
      },
      {
        name: "Instagram",
        url: "logos/Instagram.svg",
      },
      {
        name: "Spotify",
        url: "logos/Spotify.svg",
      },
    ]
  };


  export const AboutUsPageData = {
  hero: {
    title: "Innovate. Engage. Grow.",
    description: "We are a passionate team dedicated to crafting innovative digital solutions that empower businesses to thrive in today's dynamic landscape. Discover how we turn vision into tangible results.",
    mainImage: {
      src: "/001.svg",
      alt: "Our team collaborating on a project",
    },
    secondaryImage: {
      src: "/002.svg",
      alt: "Creative brainstorming session",
    },
    breakout: {
      src: "https://shadcnblocks.com/images/block/block-1.svg",
      alt: "Abstract digital pattern",
      title: "Unlock Your Brand's Full Potential",
      description: "Our strategic approach and cutting-edge tools are designed to streamline your workflows, boost efficiency, and accelerate sustainable growth.",
      buttonText: "Explore Our Services",
      buttonUrl: "/services", 
    },
    achievementsTitle: "Our Impact in Numbers",
    achievementsDescription: "Quantifying success one project at a time. See the measurable results we've delivered for businesses across various industries.",
    achievements: [
      { label: "Successful Campaigns", value: "300+" },
      { label: "Client Growth Achieved", value: "800%+" }, 
      { label: "Client Satisfaction", value: "99%" },
      { label: "Industry Recognitions", value: "10+" },
    ],
  },
};



export const WhyChooseUsAboutData = {
    breakout: {
      title: "Our Core Values", 
      description: "Our agency thrives on principles that guide every decision and every project we undertake.", 
    },
    spotlightCards: [
      {
        title: "Integrity",
        description: "Operating with honesty and transparency in all our client relationships.",
      },
      {
        title: "Innovation",
        description: "Constantly seeking new approaches and technologies to deliver cutting-edge solutions.",
      },
      {
        title: "Collaboration",
        description: "Working hand-in-hand with clients as true partners in their journey.",
      },
      {
        title: "Excellence",
        description: "Committed to delivering the highest quality in every aspect of our work.",
      },
    ],
    images: {
    mainImage: {
      src: "/001.svg",
      alt: "Digital marketing team collaborating",
    },
    secondaryImage: {
      src: "/002.svg",
      alt: "Creative strategy meeting",
    },
  },
    achievementsSection: {
      title: "A Decade of Digital Dominance", 
      description: "With over 10 years in the industry, our experience is your greatest asset in the digital landscape.", 
      achievements: [
        { label: "Years in Business", value: "10+" },
        { label: "Expert Certifications", value: "50+" },
        { label: "Global Reach", value: "5 Continents" }, 
        { label: "Client Testimonials", value: "200+" },
      ],
    },
};
