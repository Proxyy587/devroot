import { Folder, Github, Home, LineChart, Package } from "lucide-react";

export const navItems = [
  { label: "Docs", url: "/docs" },
  { label: "Pricings", url: "/pricings" },
  { label: "FAQ's", url: "/faqs" },
];

export const dashboardSidebar = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/products", label: "Deployment", icon: Package },
  { href: "/dashboard/profile", label: "Blogs", icon: Folder },
  { href: "/dashboard/orders", label: "Socials", icon: Github },
  { href: "/dashboard/analytics", label: "Analytics", icon: LineChart },
];

export const portfolio_template = [
  {
    label: "Starter Dark",
    src: "/starter.png",
    public: true,
  },
  {
    label: "NextJs beta",
    src: "/beta.png",
    public: false,
  },
];
