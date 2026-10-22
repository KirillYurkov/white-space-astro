import Testimonials from "@/components/Testimonials/Testimonials.astro";

interface SubMenu {
  title: string;
  href: string;
  desc: string;
}
interface Menu {
  title: string;
  href: string;
  submenu?: SubMenu[];
}
export const menuItems: Menu[] = [
  {
    title: "Products",
    href: "/products",
    submenu: [
      {
        title: "Cloud SaaS Platform",
        desc: "Управление проектами в облаке",
        href: "/products/saas",
      },
      {
        title: "AI Analytics Tool",
        desc: "Аналитика на базе искусственного интеллекта",
        href: "/products/ai",
      },
      {
        title: "Mobile App Builder",
        desc: "Конструктор приложений без кода",
        href: "/products/mobile",
      },
      {
        title: "Security Shield",
        desc: "Защита данных и аудит прав",
        href: "/products/security",
      },
    ],
  },
  {
    title: "Solution",
    href: "/solution",
    submenu: [
      {
        title: "For Enterprise",
        desc: "Масштабируемые решения для корпораций",
        href: "/solution/enterprise",
      },
      {
        title: "For Startups",
        desc: "Быстрый запуск и гибкие тарифы",
        href: "/solution/startups",
      },
      {
        title: "Cloud Migration",
        desc: "Бесшовный перенос инфраструктуры",
        href: "/solution/migration",
      },
      {
        title: "Data Analytics",
        desc: "Интеграция баз данных и BI-систем",
        href: "/solution/data",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    submenu: [
      {
        title: "Documentation",
        desc: "Полное руководство и API справочник",
        href: "/resources/docs",
      },
      {
        title: "Blog & News",
        desc: "Статьи, тренды и обновления продукта",
        href: "/resources/blog",
      },
      {
        title: "Video Tutorials",
        desc: "Пошаговые видеоуроки по настройке",
        href: "/resources/tutorials",
      },
      {
        title: "Help Center",
        desc: "База знаний и тикеты техподдержки",
        href: "/resources/help",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    submenu: [
      {
        title: "Free Tier",
        desc: "Базовые функции бесплатно навсегда",
        href: "/pricing/free",
      },
      {
        title: "Pro Plan",
        desc: "Для растущих команд и бизнеса",
        href: "/pricing/pro",
      },
      {
        title: "Custom Enterprise",
        desc: "Индивидуальные условия и выделенный сервер",
        href: "/pricing/enterprise",
      },
    ],
  },
];

interface iPlan {
  id: number;
  title: string;
  price: number;
  currency: string;
  features: string[];
  buttonText: string;
}

export const plans: iPlan[] = [
  {
    id: 0,
    title: "Free",
    price: 0,
    currency: "$",
    features: [
      "Capture ideas and find them quickly",
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
  },
  {
    id: 1,
    title: "Personal",
    price: 11.99,
    currency: "$",
    features: [
      "Keep home and family on track",
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Organization",
    price: 49.99,
    currency: "$",
    features: [
      "Capture ideas and find them quickly",
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
    buttonText: "Get Started",
  },
];

interface ISponsors {
  src: string;
  alt?: string;
  title?: string;
  "aria-label"?: string;
}
export const sponsors: ISponsors[] = [
  {
    title: "apple",
    alt: "apple",
    "aria-label": "apple",
    src: "/src/assets/img/apple.png",
  },
  {
    title: "microsoft",
    alt: "microsoft",
    "aria-label": "microsoft",
    src: "/src/assets/img/microsoft.png",
  },
  {
    title: "slack",
    alt: "slack",
    "aria-label": "slack",
    src: "/src/assets/img/slack.png",
  },
  {
    title: "google",
    alt: "google",
    "aria-label": "google",
    src: "/src/assets/img/google.png",
  },
];

interface Testimonials {
  testimonial: string;
  author: string;
  degree: string;
  job: string;
  src: string;
  title?: string;
  alt?: string;
}
export const testimonials: Testimonials[] = [
  {
    testimonial:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw",
    degree: "MCH",
    job: "Head of Talent Acquisition, North America",
    src: "/src/assets/img/avatar-oberon.png",
    title: "Oberon Shaw Avatar",
    alt: "Portrait of Oberon Shaw",
  },
  {
    testimonial:
      "The real-time document editing and canvas features completely replaced three other tools we were paying for. It streamlined our entire design-to-development workflow.",
    author: "Elena Rostova",
    degree: "PhD",
    job: "Lead UI/UX Architect",
    src: "/src/assets/img/avatar-elena.png",
    title: "Elena Rostova Avatar",
    alt: "Portrait of Elena Rostova",
  },
  {
    testimonial:
      "Managing a remote team of 50+ engineers used to be chaotic. With this web app, tracking milestones and setting sprint dependencies takes less than five minutes a day.",
    author: "Marcus Vance",
    degree: "MBA",
    job: "VP of Product Engineering",
    src: "/src/assets/img/avatar-marcus.png",
    title: "Marcus Vance Avatar",
    alt: "Portrait of Marcus Vance",
  },
  {
    testimonial:
      "An absolute game-changer for cross-functional communication. The automated status updates keep our stakeholders in the loop without endless weekly sync meetings.",
    author: "Sora Tanaka",
    degree: "ScD",
    job: "Director of Operations & Strategy",
    src: "/src/assets/img/avatar-bob.png",
    title: "Sora Tanaka Avatar",
    alt: "Portrait of Sora Tanaka",
  },
  {
    testimonial:
      "We migrated all our client onboarding pipelines over a weekend. The interface is intuitive enough that our non-technical clients adopted it instantly without training.",
    author: "Amara Diop",
    degree: "PMP",
    job: "Senior Global Project Manager",
    src: "/src/assets/img/avatar-amara.png",
    title: "Amara Diop Avatar",
    alt: "Portrait of Amara Diop",
  },
];
