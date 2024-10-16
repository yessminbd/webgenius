import { Layout, Smartphone, ShoppingCart, Server, Headset, BarChart, Facebook, Linkedin } from 'lucide-react';


import user1 from "../assets/images/profile-pictures/user1.jpg";
import user2 from "../assets/images/profile-pictures/user2.jpg";
import user3 from "../assets/images/profile-pictures/user3.jpg";
import user4 from "../assets/images/profile-pictures/user4.jpg";
import user5 from "../assets/images/profile-pictures/user5.jpg";
import user6 from "../assets/images/profile-pictures/user6.jpg";


export const navItems = [
  { label: 'Features', href:"#features" },
  { label: "Workflow", href:"#workflow"},
  { label: "Pricing", href:"#pricing" },
  { label: "Testimonials", href:"#testimonials" },
  { label: "Contact us", href:"#contact" },
];

export const testimonials = [
  {
    user: "Ahmed Ben Salem",
    image: user1,
    text: "It was a great experience working with Web Genius. They designed my business website with professionalism and speed. Highly recommend them!",
  },
  {
    user: "Sarah El Majri",
    image: user3,
    text: "The app they developed for me was exactly what I was looking for. The Web Genius team guided me every step of the way, and I loved the final results.",
  },
  {
    user: "Mohamed El Hamdi",
    image: user2,
    text: "Excellent customer service and continuous support. My website runs smoothly with a unique design. Thank you, Web Genius!",
  },
  {
    user: "Fatima Ben Ali",
    image: user4,
    text: "Web Genius exceeded my expectations! The team delivered a stunning website that truly represents my brand.",
  },
  {
    user: "Youssef Rouhani",
    image: user6,
    text: "I am thrilled with the mobile app they created for me. It’s user-friendly and visually appealing. Great job!",
  },
  {
    user: "Layla Khairi",
    image: user5,
    text: "The support from Web Genius was amazing throughout the process. They were always available to answer my questions.",
  },
];



export const features = [
  {
    icon: <Layout />,
    text: "Intelligent Web Design",
    description:
      "Visually appealing designs that seamlessly adapt to all devices for an optimal user experience.",
  },
  {
    icon: <Smartphone />,
    text: "Mobile Development",
    description:
      "Creating apps that function flawlessly on both iOS and Android, ensuring broad accessibility and a consistent user experience.",
  },
  {
    icon: <ShoppingCart />,
    text: "E-commerce Solutions",
    description:
      "Creating secure online stores with efficient inventory management to streamline operations and enhance customer satisfaction.",
  },

  {
    icon: <Server />,
    text: "Hosting & Maintenance",
    description:
      "Robust hosting services designed for maximum uptime and reliability, backed by round-the-clock expert assistance.",
  },
  {
    icon: <BarChart />,  // New icon for "Web Analytics"
    text: "Web Analytics",
    description:
      "Track performance and user behavior to optimize conversions.",
  },
  {
    icon: <Headset />,
    text: "Technical Support",
    description:
      "Analyze user behavior and performance data to improve engagement and boost conversion rates.",
  },
];

export const checklistItems = [
  {
    title: "Increased Conversions",
    description:
      "Our optimized designs and proven UX strategies significantly increase conversion rates.",
  },
  {
    title: "Enhanced Mobile Experience",
    description:
      "We create smooth and fast experiences across all devices, increasing mobile user engagement.",
  },

  {
    title: "Technical Performance",
    description:
      "Our solutions are optimized for speed and reliability, ensuring a seamless user experience.",
  },
  {
    title: "Scalability",
    description:
      "Our applications are designed to evolve with your business, supporting rapid growth without compromising on performance.",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "We offer continuous technical support and regular updates to ensure the longevity of your solution.",
  },
];

export const pricingOptions = [

  {
    title: "Mobile Development",
    price: "2,000 TND",
    features: [
      "Android and iOS app",
      "Custom UI/UX design",
      "API integration",
      "Push notifications",
      "Maintenance for 6 months",
    ],
  },
  {
    title: "Web Development",
    price: "1,500 TND",
    features: [
      "Professional showcase website",
      "Basic SEO optimization",
      "Custom design",
      "Mobile and tablet compatibility",
      "Technical support for 3 months",
    ],
  },
  {
    title: "Web + Mobile Pack",
    price: "3,200 TND",
    features: [
      "Website + Mobile app",
      "SEO and performance optimization",
      "Consistent design across platforms",
      "Technical support for 6 months",
      "Free hosting for 1 year",
    ],
  },

];

export const resourcesLinks = [
  { href: "/webgenius/about_us", text: "About Us" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
  { href: "/webgenius/faq", text: "FAQ" },
];


export const platformLinks = [
  { href: "https://www.linkedin.com/in/yourprofile", icon: <Linkedin /> },
  { href: "https://www.facebook.com/yourpage", icon: <Facebook /> },
  { href: "https://www.instagram.com/yourpage", icon: <Facebook /> },
  { href: "https://www.instagram.com/yourpage", text: "WhatsApp" },

];



