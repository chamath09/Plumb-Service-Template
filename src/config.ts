import { Wrench, Droplets, Droplet, Bath, AlertTriangle, ShieldCheck, Clock, ThumbsUp, MapPin, Phone, Mail } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "ProPlumb Services",
  phone: "+1 (555) 123-4567",
  whatsapp: "15551234567", // Format for WhatsApp link
  email: "hello@proplumbservices.com",
  address: "123 Plumber Ave, Water City, WC 12345",
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM (24/7 for Emergencies)",
  yearsOfExperience: "15+",
  serviceAreas: ["Water City", "Pipe Town", "Drainville", "Leak County", "Surrounding Areas"],
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#"
  }
};

export const SERVICES = [
  {
    id: "pipe-repair",
    title: "Pipe Repair",
    description: "Fast and reliable repair for burst, leaking, or damaged pipes.",
    icon: Wrench,
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Professional clearing of clogged drains and sewer lines.",
    icon: Droplets,
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    description: "Advanced technology to find hidden water leaks quickly.",
    icon: Droplet,
  },
  {
    id: "water-heater",
    title: "Water Heater Installation",
    description: "Expert installation and repair of traditional and tankless water heaters.",
    icon: Bath, // Using Bath as a placeholder, could use Flame or similar
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services, from toilets to showers.",
    icon: Bath,
  },
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    description: "24/7 emergency response for urgent plumbing disasters.",
    icon: AlertTriangle,
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "24/7 Emergency Service",
    description: "We are always ready to respond to your plumbing emergencies, day or night.",
    icon: Clock,
  },
  {
    title: "Experienced Technicians",
    description: "Our team consists of fully licensed, insured, and highly trained professionals.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, upfront pricing with no hidden fees or surprise charges.",
    icon: ThumbsUp,
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "ProPlumb saved the day when our water heater burst. They arrived within an hour and had a new one installed the same day. Highly recommended!",
    rating: 5,
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    name: "Michael Smith",
    text: "Very professional and clean. They fixed a stubborn leak under my sink that two other plumbers couldn't figure out. Great service.",
    rating: 5,
    avatar: "https://picsum.photos/seed/michael/100/100"
  },
  {
    id: 3,
    name: "Emily Davis",
    text: "Honest pricing and excellent work. I appreciate that they explained exactly what needed to be done before starting the work.",
    rating: 5,
    avatar: "https://picsum.photos/seed/emily/100/100"
  },
  {
    id: 4,
    name: "James Wilson",
    text: "I called them for a drain cleaning and they were fast, polite, and very affordable. Will definitely use them again for any plumbing needs.",
    rating: 5,
    avatar: "https://picsum.photos/seed/james/100/100"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    text: "The team was fantastic! They remodeled our entire bathroom plumbing and the results are flawless. Highly skilled and trustworthy.",
    rating: 5,
    avatar: "https://picsum.photos/seed/olivia/100/100"
  }
];
