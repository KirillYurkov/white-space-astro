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
