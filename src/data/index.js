import edu from "../assets/icons/edu.jpeg";
import prop from "../assets/icons/prop.jpeg";
import venture from "../assets/icons/edu.jpeg";
import {
  cardIcon,
  exchangeIcon,
  loanIcon,
  paymentIcon,
  phoneIcon,
  transferIcon,
  signupIcon,
  setupIcon,
  requestIcon,
  checkIcon,
  faceIcon,
  lockIcon,
  cartIcon,
  acctIcon,
  quote,
  linkedIn,
  facebook,
  instagram,
  x,
  missionIcon,
  visionIcon,
  goalIcon,
  CoreIcon1,
  CoreIcon2,
  CoreIcon3,
  CoreIcon4,
  CoreIcon5,
  CoreIcon6,
} from "../assets/icons";

export const navLinks = [
  { path: "/", name: "Home" },
  { path: "/gallery", name: "Gallery" },
  { path: "/reviews", name: "Review" },
  { path: "/contact", name: "Contact" },
  { path: "/services", name: "Services" },
  { path: "/privacy", name: "Privacy Policy" },
];

export const trustedIcons = [
  {
    icon: edu,
    name: "EDU BRIDGE",
  },
  {
    icon: prop,
    name: "PROPELIO",
  },
  {
    icon: venture,
    name: "VENTURE TRIBE",
  },
];

export const features = [
  {
    icon: phoneIcon,
    desc: "Airtime & Data",
  },
  {
    icon: paymentIcon,
    desc: "Automatic Bill Payment",
  },
  {
    icon: loanIcon,
    desc: "Loan",
  },
  {
    icon: cardIcon,
    desc: "Virtual Card",
  },
  {
    icon: transferIcon,
    desc: "Transfer",
  },
  {
    icon: exchangeIcon,
    desc: "Currency Exchange",
  },
];

export const benefits = [
  {
    title: "fast and secure transactions",
    desc: " with VentriPay you get to enjoy a seamless fast, and secure transactions.",
  },
  {
    title: "blockchain technology",
    desc: " Utilizing blockchain for secure, transparent, and decentralized transactions.",
  },
  {
    title: "easy online access",
    desc: "With VentriPay you get to enjoy easy access to all our amazing features without facing any difficulties ",
  },
  {
    title: "competitive exchange rate",
    desc: "VentriPay is always ready to give you our esteemed costumers the best rate out there for all your financial transactions.",
  },
];

export const steps = [
  { no: "step1", icon: signupIcon, label: "Sign up on the App" },
  { no: "step2", icon: setupIcon, label: "Set up your Account" },
  { no: "step3", icon: requestIcon, label: "Request a Virtual Card" },
  { no: "step4", icon: checkIcon, label: "You are all set to use your Card" },
];

export const cardBenefits = [
  { icon: faceIcon, label: "fraud protection" },
  { icon: lockIcon, label: "enhance security" },
  { icon: cartIcon, label: "easy online purchase" },
  { icon: acctIcon, label: "improved accountability" },
];

export const testimonials = [
  {
    icon: quote,
    quote:
      "i love their customer service team,very responsive and friendly. they were above and beyond to assist me with my issues",
  },
  {
    icon: quote,
    quote:
      "they have one of the best currency conversion rate out there and you should definitely work with them. also, their network is very fast and swift, the best i’ve used.",
  },
  {
    icon: quote,
    quote:
      "very secured database so you have nothing to worry about your personal details and fraudster, their encryption is top notch.",
  },
];

export const footerLinks = [
  {
    title: "about",
    links: [
      { name: "Our Product", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "How it Works", link: "/" },
      { name: "Career", link: "/" },
    ],
  },
  {
    title: "our services",
    links: [
      { name: "Transactions", link: "/" },
      { name: "Investment", link: "/" },
      { name: "Cards", link: "/" },
      { name: "Help Center", link: "/" },
    ],
  },
  {
    title: "contact us",
    links: [
      { name: "+234080000000", link: "+234080000000" },
      { name: "VentriPay@gmail.com", link: "mailto:VentriPay@gmail.com" },
    ],
  },
];

export const socialMedia = [
  {
    src: linkedIn,
    url: "https://www.linkedin.com/posts/ventripay_ventripay-securepayments-fintechsolutions-activity-7239193928955027459--yaL?utm_source=share&utm_medium=member_android",
    alt: "linkedIn logo",
  },
  {
    src: facebook,
    url: "https://www.facebook.com/61561739670957/posts/pfbid02pQ8c5wXEKpb48478EWfPTLYX5DjV8cEDo4M48bDZVb9mvKKpSuHXyShk3s8GGJoSl/",
    alt: "facebook logo",
  },
  {
    src: instagram,
    url: "https://www.instagram.com/p/C_uq6CXIF5v/?igsh=MWh0ZGV2cncyMmVhaQ==",
    alt: "instagram logo",
  },
  {
    src: x,
    url: "https://x.com/ventripay/status/1833427098523886065?t=1i_NJweUx7jEN9eM2v7-zA&s=19",
    alt: "x logo",
  },
];

export const Mission = [
  {
    icon: missionIcon,
    name: "our mission",
    desc: "To empower individuals and businesses in Africa by providing seamless, secure, and innovative payment solutions that bridge the gap in international transactions and foster financial inclusion",
    titleColor:"text-mission-color"
  },
  {
    icon: visionIcon,
    name: "our vision",
    desc: "To be the leading fintech company in Africa, transforming the landscape of international payments and driving economic growth through accessible, efficient, and inclusive financial services",
    titleColor:"text-vision-color"
  },
  {
    icon: goalIcon,
    name: "goals",
    desc: "VentriPay goals to simplify and secure international payments within Africa.",
    titleColor:"text-goal-color"
  },
];

export const coreStrength=[
  {
    icon: CoreIcon1,
    title: "Innovation in fintech",
    desc:"Pioneering new digital payment solutions with cutting-edge technology to simplify financial management across Africa. Our continuous innovation keeps VentriPay at the forefront of fintech, empowering users with seamless and secure transactions."
  },
  {
    icon:CoreIcon2,
    title: "Scalability",
    desc:"Built to grow with you, VentriPay’s solutions adapt to your financial needs, offering scalable services that ensure efficient payments, whether you’re making one or thousands of transactions."
  },
  {
    icon:CoreIcon3,
    title: "Customer Support",
    desc:"We are dedicated to providing exceptional support to ensure that every user experiences smooth, secure, and seamless transactions. Our dedicated team is here to assist you whenever needed."
  },
  {
    icon:CoreIcon4,
    title: "Security and Compliance",
    desc:"With a strong focus on data security and compliance, VentriPay guarantees your transactions are safe. We implement the highest industry standards to protect your information, giving you confidence in every payment."
  },
  {
    icon:CoreIcon5,
    title: "Proactive Solutions",
    desc:"For your payments to continue flowing smoothly, VentriPay sees and tackles financial obstacles with creative solutions. Our goal is to maximize your financial potential by ensuring reliability at every stage."
  },
  {
    icon:CoreIcon6,
    title: "Timely Transactions",
    desc:"At VentriPay, we place a high value on each transaction's accuracy and speed, making sure that your payments are handled fast and effectively. Keep track of your financial obligations with our dependable, quick service. simplify financial management across Africa. Our continuous innovation keeps VentriPay at the forefront of fintech, empowering users with seamless and secure transactions."
  },
]
