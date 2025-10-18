import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "E-Commerce Website",
    href: "/projects",
    tags: ["PHP", "MySQL", "Laravel", "JavaScript", "HTML5"],
    image: {
      LIGHT: "/images/projects/ecommerceLight.webp",
      DARK: "/images/projects/ecommerceDark.webp",
    },
  },
  {
    index: 1,
    title: "Complaint Management System",
    href: "/projects",
    tags: ["PHP", "MySQL", "JavaScript", "Admin Panel", "API", "Express.js"],
    image: {
      LIGHT: "/images/projects/cmsLight.webp",
      DARK: "/images/projects/cmsDark.webp",
    },
  },
  {
    index: 2,
    title: "Route Optimization",
    href: "/projects",
    tags: [
      "JavaScript",
      "API",
      "Flask",
      "Google OR-Tools",
      "MSSQL",
      "React",
      "Google Maps API",
    ],
    image: {
      LIGHT: "/images/projects/routeLight.webp",
      DARK: "/images/projects/routeDark.webp",
    },
  },
  {
    index: 3,
    title: "Custom HomeLab Infrastructure",
    href: "/projects",
    tags: ["Proxmox", "Home Assistant", "OPNsense", "CasaOS", "Pi-hole"],
    image: {
      LIGHT: "/images/projects/homelabLight.webp",
      DARK: "/images/projects/homelabDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Gyrate Netcom",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/gyrateLight.webp",
      "/images/projects/gyrateDark.webp",
    ],
    description:
      "Network communication platform for efficient data management.",
    detailedDescription:
      "Gyrate Netcom is a comprehensive network communication platform designed to streamline data management and enhance user interaction across distributed systems. The platform features real-time messaging capabilities, secure data transmission protocols, and an intuitive dashboard for monitoring network performance. Built with scalability in mind, it supports multiple concurrent connections and provides detailed analytics for network optimization. The system includes user authentication, role-based access control, and comprehensive logging for audit trails.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "WebSocket",
      "Razorpay API",
      "Shiprocket API",
    ],
    features: [
      "Real-time messaging",
      "Network monitoring",
      "User authentication",
      "Analytics dashboard",
      "Secure data transmission",
      "Role-based access control",
      "WebSocket support",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Furniture Ecomers",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/furnitureLight.webp",
      "/images/projects/furnitureDark.webp",
    ],
    description:
      "Full-featured e-commerce platform for furniture retail business.",
    detailedDescription:
      "A comprehensive e-commerce solution specifically designed for furniture retailers, featuring an elegant product catalog with high-resolution image galleries, advanced filtering options, and detailed product specifications. The platform includes a robust shopping cart system with persistent sessions, multiple payment gateway integrations, and automated inventory management. Customer features include wishlist functionality, order tracking, review systems, and personalized recommendations. The admin panel provides comprehensive sales analytics, inventory control, customer management, and order processing workflows.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Razorpay API",
    ],
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Inventory management",
      "Order tracking",
      "Customer reviews",
      "Admin dashboard",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Loan Management System",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/loanLight.webp",
      "/images/projects/loanDark.webp",
    ],
    description:
      "Enterprise loan management system for financial institutions.",
    detailedDescription:
      "A sophisticated loan management system designed for banks and financial institutions to streamline the entire loan lifecycle. The system features automated application processing with document verification, credit scoring integration, and multi-level approval workflows. It includes comprehensive borrower profiles, collateral management, automated payment scheduling, and default risk assessment. The platform provides real-time reporting, regulatory compliance tools, and integration with external credit bureaus. Advanced features include automated notifications, payment reminders, and detailed financial analytics for portfolio management.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Chart.js",
      "PDF Generation",
      "REST API",
    ],
    features: [
      "Application processing",
      "Credit scoring",
      "Approval workflows",
      "Payment tracking",
      "Risk assessment",
      "Compliance reporting",
      "Document management",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "I&R(TATA TELE SERVICES)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/tataLight.webp",
      "/images/projects/tataDark.webp",
    ],
    description:
      "Installation & Repair management system for TATA Teleservices.",
    detailedDescription:
      "A comprehensive Installation & Repair (I&R) management system developed for TATA Teleservices to optimize field operations and customer service delivery. The system manages technician scheduling, work order assignments, and real-time status tracking of installation and repair activities. Features include GPS-based technician tracking, automated dispatch algorithms, customer communication portals, and comprehensive reporting dashboards. The platform integrates with existing CRM systems and provides mobile applications for field technicians to update job status, capture photos, and collect customer signatures.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Google Maps API",
      "Mobile App Integration",
    ],
    features: [
      "Work order management",
      "Technician scheduling",
      "GPS tracking",
      "Customer portal",
      "Mobile integration",
      "Real-time updates",
      "Performance analytics",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "SDWand(TATA TELE SERVICES)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/sdwandLight.webp",
      "/images/projects/sdwandDark.webp",
    ],
    description:
      "Microserviced Service Delivery Wand - automated service management platform with progressive web app.",
    detailedDescription:
      "SDWand is an advanced microserviced service delivery management platform designed for TATA Teleservices to automate and optimize service provisioning workflows. The system features intelligent service orchestration, automated quality assurance checks, and real-time service monitoring capabilities. It includes comprehensive SLA management, automated escalation procedures, and integration with network infrastructure systems. The platform provides detailed service analytics, performance metrics, and predictive maintenance capabilities to ensure optimal service delivery and customer satisfaction. The progressive web app provides offline support, push notifications, and real-time updates to ensure seamless user experience.",
    technologies: [
      "PHP",
      "Laravel",
      "React",
      "Node.js",
      "MySQL",
      "JavaScript",
      "API Integration",
      "Workflow Engine",
      "PWA",
      "Service Worker",
    ],
    features: [
      "Service orchestration",
      "SLA management",
      "Quality assurance",
      "Performance monitoring",
      "Automated workflows",
      "Predictive analytics",
      "Network integration",
      "Offline support",
      "Push notifications",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "AI Route Optimization",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/aiRouteLight.webp",
      "/images/projects/aiRouteDark.webp",
    ],
    description:
      "AI-powered route optimization for logistics and delivery services.",
    detailedDescription:
      "An intelligent route optimization system leveraging machine learning algorithms to optimize delivery routes and reduce operational costs. The system analyzes historical traffic data, weather conditions, vehicle capacity, and delivery time windows to generate optimal routes. Features include real-time route adjustments based on traffic conditions, driver performance analytics, fuel consumption optimization, and customer delivery preferences. The platform integrates with GPS tracking systems and provides mobile applications for drivers with turn-by-turn navigation and delivery confirmations.",
    technologies: [
      "Python",
      "Machine Learning",
      "Google OR-Tools",
      "JavaScript",
      "Laravel",
      "MySQL",
      "Google Maps API",
    ],
    features: [
      "Route optimization",
      "Real-time tracking",
      "Traffic analysis",
      "Fuel optimization",
      "Driver analytics",
      "Mobile navigation",
      "Delivery confirmation",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Custom HomeLab Infrastructure",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/homelabLight.webp",
      "/images/projects/homelabDark.webp",
    ],
    description:
      "Enterprise-grade home laboratory with virtualization and automation.",
    detailedDescription:
      "A sophisticated home laboratory infrastructure designed to replicate enterprise-level networking and virtualization environments. The setup features Proxmox hypervisor running multiple virtual machines and containers, Home Assistant for comprehensive IoT device management and automation, OPNsense firewall providing advanced security with intrusion detection and prevention systems. The infrastructure includes VLAN segmentation for network isolation, automated SSL certificate management through Let's Encrypt, reverse proxy configuration for secure external access, and comprehensive monitoring with Grafana and Prometheus. Additional services include Pi-hole for network-wide ad blocking, automated backup solutions, and container orchestration with Docker and Kubernetes.",
    technologies: [
      "Proxmox",
      "Home Assistant",
      "OPNsense",
      "Docker",
      "Kubernetes",
      "Pi-hole",
      "Grafana",
      "Prometheus",
    ],
    features: [
      "Virtualization",
      "Network security",
      "IoT automation",
      "Container orchestration",
      "Monitoring",
      "Backup automation",
      "SSL management",
      "DNS filtering",
    ],
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
];
