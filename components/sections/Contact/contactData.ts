import {
  MapPin,
  Phone,
  Clock,
  Star,
  Building2,
  Mail,
} from "lucide-react";

export const contactInfo = [
  {
    id: 1,
    title: "Address",
    value: `Gut No.137,
Kasturi Park,
Shop No.3,
Plot No.42,
Vijayant Nagar,
Satara Deolai Parisar,
Chhatrapati Sambhajinagar,
Maharashtra – 431001`,
    icon: MapPin,
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: 2,
    title: "Phone",
    value: "+91 91753 59798",
    href: "tel:+919175359798",
    icon: Phone,
    color: "from-green-500 to-emerald-500",
  },

  {
    id: 3,
    title: "Email",
    value: "deccanenterprises@gmail.com",
    href: "mailto:deccanenterprises@gmail.com",
    icon: Mail,
    color: "from-purple-500 to-indigo-500",
  },

  {
    id: 4,
    title: "Business Hours",
    value: "Monday - Saturday\n10:00 AM - 7:00 PM",
    icon: Clock,
    color: "from-orange-500 to-amber-500",
  },

  {
    id: 5,
    title: "Google Rating",
    value: "⭐⭐⭐⭐⭐ 5.0 / 5",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
  },

  {
    id: 6,
    title: "Business",
    value: "Surgical Products Wholesaler",
    icon: Building2,
    color: "from-sky-500 to-blue-500",
  },
];