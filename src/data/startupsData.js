// Shared startup data - imported by both StartupDetail and AboutSocials
import Shepallogo from '../components/StartupDetail/startupimg/shepalllogo.png'
import MarriageM from '../components/StartupDetail/startupimg/Sara6.jpeg'
import Sara1 from '../components/StartupDetail/startupimg/Sara1.jpeg'
import Sara2 from '../components/StartupDetail/startupimg/Sara2.jpeg'
import Sara3 from '../components/StartupDetail/startupimg/Sara3.jpeg'
import Sara4 from '../components/StartupDetail/startupimg/Sara4.jpeg'
import Shepall1 from '../components/StartupDetail/startupimg/shepallnaseni.jfif'
import Shepall2 from '../components/StartupDetail/startupimg/shepall2.jfif'
import Thumbsup from '../assets/Review-Assets/Thumbsup-icon.svg'
import Saferum from '../components/StartupDetail/startupimg/saferum.png'
import Saferum1 from '../components/StartupDetail/startupimg/saferum1.png'
import CampusL from '../components/StartupDetail/startupimg/campusL.png'
import Wapcon from '../components/StartupDetail/startupimg/wapcon.jpg'

export const STARTUPS_DATA = {
  shepall: {
    name: 'Shepall',
    img: Shepallogo,
    description: 'Shepall is a secure, offline-first digital data and document management platform that helps individuals, businesses, and institutions safely store, share, and verify vital digital credentials. Based out of Kano, Nigeria, the platform utilizes AI and military-grade encryption to eliminate document fraud and paper waste across Africa.',
    description2: "Shepall proudly emerged as the Kano State Champion in the 2026 NASENI InnovateNaija Challenge, earning the number one position among innovators in the state. This outstanding achievement secured Shepall a place among the Top 15 startups nationwide, qualifying the team for the prestigious national pitch competition where Nigeria's most innovative solutions will compete for national recognition and funding.",
    images: [Shepall1, Shepall2],
  },
  schooby: {
    name: 'Schooby',
    img: Thumbsup,
    description: 'Schooby is a startup that ... add full description here.',
    images: [],
  },
  'marriage-maven': {
    name: 'Marriage Maven',
    img: MarriageM,
    description: 'Marriage Maven is an Islamic marriage education and support platform designed to help individuals and couples build healthy, successful marriages based on the Qur\'an, Sunnah, and sound psychological principles. Our mission is to reduce the rate of divorce by providing practical, faith-based guidance at every stage of the marriage journey.The platform offers four core courses: Relationship Guidance, Premarital Counselling, Conflict Resolution, and Parenting, delivered through structured video lessons by verified Islamic scholars and qualified professionals. As the platform grows, additional courses on topics such as intimacy, financial management, and other marriage-related subjects will be introduced.Marriage Maven also features a Resources Library with articles and Islamic marriage guidance, access to verified scholars and marriage counsellors for private consultations, and an AI-powered Islamic assistant that provides answers to marriage and family-related questions based on authentic Islamic teachings.In the future, the platform will also include a Prophetic Store, offering carefully selected Sunnah-inspired products such as dates, black seed, honey, and other beneficial items.',
    images: [Sara1, Sara2, Sara3, Sara4],
  },
  'safe-rum': {
    name: 'safeRüm',
    img: Saferum,
    description: "safeRüm is a proposed mobile application designed to provide culturally and religiously sensitive mental wellness support. It targets young adults, students, and working professionals, with a special focus on serving African, faith-based, and traditional communities who are underserved by generic, Westernized digital mental health solutions. safeRüm's core value is offering a safe, private, and non-judgmental space for emotional check-ins, self-reflection, and encouragement that aligns with users' moral and cultural beliefs.",
    images: [Saferum1],
  },
  'campus-linkup': {
    name: 'CampusLinkup',
    img: CampusL,
    description: "CampusLinkup is an all-in-one smart campus platform designed to simplify university life by bringing essential campus services, communication, and support into one seamless digital experience. Built with students at its core, CampusLinkup eliminates the everyday challenges of navigating campus, finding information, recovering lost items, and staying connected with peers and university services.The platform combines intelligent campus navigation, an AI-powered virtual assistant (**Linky**), a digital Lost & Found system, a Report & Suggest portal, and **Campus Connect**—a vibrant social communication hub where students can chat, collaborate, join study groups, and build meaningful connections. Users also benefit from personalized profiles, real-time notifications, activity tracking, and a dedicated feedback and help center, creating a more connected and engaging campus ecosystem.To ensure security and trust, CampusLinkup features role-based authentication for students, administrators, campus staff, and content managers, along with robust password protection, account verification, and optional multi-factor authentication. Every feature is designed with a clean, intuitive, and mobile-first interface that delivers a fast, modern, and stress-free user experience.More than just an application, **CampusLinkup is the digital gateway to a smarter campus**, empowering students to navigate with confidence, communicate effortlessly, access campus resources efficiently, and actively participate in shaping their university community. By bridging the gap between students and campus services, CampusLinkup transforms campus life into a connected, collaborative, and technology-driven experience.",
    images: [CampusL],
  },
  'wapcon': {
    name: 'wapcon',
    img: Wapcon,
    description: "WAPCON (Water and Power Connect) is a civic technology platform that enables citizens to report water and electricity infrastructure problems in their communities. Users can submit location-tagged reports with photos, videos, and descriptions, while the platform automatically directs these reports to relevant government agencies, NGOs, and potential donors for action.The platform also recommends possible solutions based on the type of issue reported, provides a transparent system for tracking the progress of each case from reporting to resolution, and offers an interactive map showing affected areas. By connecting communities, authorities, NGOs, and donors, WAPCON aims to improve accountability, accelerate response times, and help underserved communities gain access to reliable water and electricity services.",
    images: [Wapcon],
  }

};

/**
 * Get all startups as an array
 * Useful for displaying startups in list views
 */
export const getStartupsArray = () => {
  return Object.entries(STARTUPS_DATA).map(([slug, data]) => ({
    slug,
    ...data
  }));
};

/**
 * Get startup by slug
 */
export const getStartup = (slug) => {
  return STARTUPS_DATA[slug?.toLowerCase()];
};
