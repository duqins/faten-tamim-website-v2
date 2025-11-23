// App.jsx — refined, production ready
// Requirements: react, react-dom, react-router-dom, framer-motion, lucide-react, tailwindcss
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Scale,
  Gavel,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronRight,
  Languages,
  ShieldCheck,
  BookOpen,
  Building2,
  Handshake,
  Crown,
  Star,
  Quote,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  MessageCircle,
  User,
  Users,
  Briefcase,
  Stethoscope,
  Landmark,
  Clock,
} from "lucide-react";

// Snapchat from react-icons
import { SiSnapchat } from "react-icons/si";



// ✅ Make sure IMG is declared **before** it’s used anywhere
const IMG = {
  about2: "/about-2.jpg",
  about3: "/about-3.jpg",
  about4: "/about-4.jpg",
  logo: "/logo.png",
  hero: "/hero.jpg",
  about: "/about.jpg",
  areas: {
    family: "/family.jpg",
    criminal: "/criminal.jpg",
    labour: "/labour.jpg",
    corporate: "/corporate.jpg",
    banking: "/banking.jpg",
    medical: "/medical.jpg",
  },
// in the IMG object up top
team: {
  faten: "/faten-alsulebi.jpg",
  mohamed: "/mohamed-eltobgy.jpg",
  zahra: "/zahra-sabrina-meddah.jpg",
  rafik: "/mohamed-rafik.jpg",
},



};
const EMAILJS_SERVICE_ID = "service_cusdo1k";
const EMAILJS_TEMPLATE_ID = "template_l08eik3";
const EMAILJS_PUBLIC_KEY  = "BSVkZlqJCjEXVY7KF";
// OUR SERVICES (page data)
const SERVICES_LIST = (lang) => [
  {
    key: "family-law",
    title: lang === "ar" ? "الأحوال الشخصية" : "Family & Personal Status",
    summary: lang === "ar"
      ? "زواج، طلاق، حضانة، نفقة."
      : "Marriage, divorce, custody, alimony.",
    img: "/family.jpg",
    objectPosition: "50% 40%", // focus a bit higher (hands/face area)
    href: "/services/family-status",
    icon: Users,
  },
  {
    key: "criminal-defense",
    title: lang === "ar" ? "القضايا الجنائية" : "Criminal Defense",
    summary: lang === "ar"
      ? "دفاع استراتيجي وتمثيل أمام المحاكم."
      : "Strategic defense and courtroom representation.",
    img: "/criminal.jpg",
    objectPosition: "35% 50%", // focus left-center (avoid over-cropping)
    href: "/services/criminal-defense",
    icon: Gavel,
  },
  {
    key: "labour-law",
    title: lang === "ar" ? "قانون العمل" : "Labour & Employment",
    summary: lang === "ar"
      ? "عقود، نزاعات، إنهاء خدمة، امتثال."
      : "Contracts, disputes, termination, compliance.",
    img: "/labour.jpg",
    objectPosition: "65% 50%", // focus right side (handshake)
    href: "/services/labour-law",
    icon: Briefcase,
  },
  {
    key: "corporate-law",
    title: lang === "ar" ? "الشركات والتجاري" : "Corporate & Commercial",
    summary: lang === "ar"
      ? "تأسيس، حوكمة، وصياغة/تفاوض العقود."
      : "Setup, governance, drafting & negotiation.",
    img: "/corporate.jpg",
    objectPosition: "50% 45%", // centered but slightly higher
    href: "/services/corporate-commercial",
    icon: Building2,
  },
  {
    key: "banking",
    title: lang === "ar" ? "المصارف والتمويل" : "Banking & Finance",
    summary: lang === "ar"
      ? "تمويل الشركات والضمانات والمطالبات."
      : "Corporate finance, securities, claims.",
    img: "/banking.jpg",
    objectPosition: "45% 45%", // balanced focus
    href: "/services/banking-finance",
    icon: Scale,
  },
  {
    key: "medical",
    title: lang === "ar" ? "الأخطاء الطبية" : "Medical Malpractice",
    summary: lang === "ar"
      ? "إهمال طبي وسجلات وامتثال."
      : "Negligence, records, compliance.",
    img: "/medical.jpg",
    objectPosition: "60% 50%", // focus slightly right (stethoscope side)
    href: "/services/medical-malpractice",
    icon: Stethoscope,
  },
  {
    key: "litigation-stages",
    title: lang === "ar" ? "مراحل الدعوى" : "All Stages of the Lawsuit",
    summary: lang === "ar"
      ? "من القيد حتى التنفيذ."
      : "From filing to enforcement.",
    img: "/hero.jpg",
    objectPosition: "50% 45%", // center slightly up (architecture/columns)
    href: "/services/litigation-stages",
    icon: Landmark,
  },
];

//footer
const LegalShell = ({ title, lang, children }) => (
  <Container>
    <div className="py-12">
      <h1 className="font-serif text-3xl md:text-4xl text-slate-800">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {lang === "ar" ? "آخر تحديث" : "Last updated"}: {new Date().toLocaleDateString()}
      </p>
      <div className="mt-6 prose prose-slate max-w-none">
        {children}
      </div>
    </div>
  </Container>
);

const PrivacyPage = ({ lang }) => (
  <LegalShell title={lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"} lang={lang}>
    <h2>{lang === "ar" ? "المعلومات التي نجمعها" : "Information We Collect"}</h2>
    <p>{lang === "ar" ? "ضع هنا تفاصيل السياسة..." : "Place your policy details here..."}</p>
    <h2>{lang === "ar" ? "الاتصال بنا" : "Contact Us"}</h2>
    <p>{lang === "ar" ? "للاستفسارات: " : "For queries: "}
      <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
    </p>
  </LegalShell>
);

const TermsPage = ({ lang }) => (
  <LegalShell title={lang === "ar" ? "الشروط والأحكام" : "Terms of Use"} lang={lang}>
    <h2>{lang === "ar" ? "القبول" : "Acceptance"}</h2>
    <p>...</p>
    <h2>{lang === "ar" ? "المسؤولية" : "Liability"}</h2>
    <p>...</p>
  </LegalShell>
);

const DisclaimerPage = ({ lang }) => (
  <LegalShell title={lang === "ar" ? "إخلاء المسؤولية" : "Disclaimer"} lang={lang}>
    <p>...</p>
  </LegalShell>
);

const CookiesPage = ({ lang }) => (
  <LegalShell title={lang === "ar" ? "سياسة الكوكيز" : "Cookie Policy"} lang={lang}>
    <p>...</p>
  </LegalShell>
);




/* ===========================
   BRAND + TEXT (EN/AR)
=========================== */
const BRAND = {
  nameEN: "Dr.Faten Tamim Advocates & Legal Consultants",
  nameAR: "د. فاتن تميم للاستشارات والمرافعات القانونية",
  taglineEN: "Clarity. Strategy. Results.",
  taglineAR: "وضوح. إستراتيجية. نتائج.",

  // ✅ Official number
  phoneDisplay: "971 52 545 1974",

  phoneE164: "+971525451974",
  whatsappE164: "+971525451974",

  email: "f.alsulebi@gmail.com",
  addressEN:
    "Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE",
  addressAR:
    "شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي، الإمارات العربية المتحدة",

  linkedin: "https://www.linkedin.com/in/dr-faten-tamim-lawyer-691b58253/",
  instagram:
    "https://www.instagram.com/faten_lawyer/?igsh=NmNsMDF6NGhqbGth&utm_source=qr#",
  snapchat:
    "https://www.snapchat.com/@fatqnqueen?invite_id=Uvc8PQ6B&locale=en_AE&share_id=mvFJaNSJRr2uZIDlhX9jGA&sid=7687b8b3223b4d369785a1b2e1b8408c",
  logoUrl: IMG.logo,
};


const DICT = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Our Services",
      areas: "Practice Areas",
      success: "Our Success",
      blog: "Insights",
      contact: "Contact",
    },
    hero: {
      title: "Legal counsel that moves you forward",
      subtitle:
        "Courtroom expertise with practical business sense for decisive results.",
      cta1: "Book a Free Consultation",
      cta2: "Explore Practice Areas",
    },
    badges: [
      "Courtroom Strategy",
      "Bilingual Team",
      "Transparent Fees",
      "Results-Driven",
      "Client-First",
      "Dispute Resolution",
    ],
about: {
  title: "Who We Are",
  p1: "Faten Tamim Advocates & Legal Consultants is a boutique law firm headquartered in Abu Dhabi, committed to providing clear, strategic, and dignified legal representation to individuals and businesses across the United Arab Emirates. Our philosophy is built on clarity, integrity, and excellence — ensuring every client receives advice that is practical, transparent, and focused on real outcomes.",
  p2: "We specialize in a range of legal areas including personal status, labour and employment, corporate, criminal, and medical law. Each case is handled with discretion, empathy, and strategic precision. Our mission is to create long-term trust with our clients by offering legal guidance that protects their rights and strengthens their confidence in every step of the process.",
  values: [
    { k: "Integrity", v: "We uphold honesty and transparency in every case." },
    { k: "Commitment", v: "Your goals and protection are our priority." },
    { k: "Excellence", v: "We aim for quality, clarity, and results in all our work." }
  ],
  stats: [] // keep empty so old code that maps stats won't crash
},


    marquee:
  "Personal Status · Labour Law · Criminal Law · Corporate & Commercial · Banking & Finance · Medical Malpractice · Arbitration",
areas: {
  title: "Practice Areas",
  cards: [
    {
      title: "Family & Personal Status",
      desc: "Marriage, divorce, custody, guardianship, inheritance, and family dispute resolution.",
      img: "/family.jpg",
    },
    {
      title: "Criminal Law",
      desc: "Comprehensive representation from investigation to trial and appeal.",
      img: "/criminal.jpg",
    },
    {
      title: "Labour & Employment",
      desc: "Employee rights, wrongful termination, unpaid dues, and employment contracts.",
      img: "/labour.jpg",
    },
    {
      title: "Corporate & Commercial",
      desc: "Company formation, contracts, mergers, acquisitions, and partnership disputes.",
      img: "/corporate.jpg",
    },
    {
      title: "Banking & Finance",
      desc: "Loan defaults, guarantees, financial settlements, and restructuring advice.",
      img: "/banking.jpg",
    },
    {
      title: "Medical Malpractice",
      desc: "Negligence claims, insurance disputes, and regulatory investigations.",
      img: "/medical.jpg",
    },
  ],
},

    team: { title: "Meet the Team", sub: "Experienced advocates, client-first." },
    accolades: {
      title: "Recognitions",
      points: [
        "Cross-border matters",
        "Panel advisors for SMEs",
        "Published insights",
        "High client satisfaction",
      ],
    },
    testimonials: { title: "Client Testimonials" },
    contact: {
      title: "Request a Free Case Review",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Case description",
      submit: "Send",
      address: "Head Office",
      hours: "Working Hours",
      hoursVal: "Mon – Sat · 10:00 – 19:00",
    },
    footer: {
      quick: "Quick Links",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      areas: "مجالات الممارسة",
      success: "إنجازاتنا",
      blog: "مقالات",
      contact: "اتصل بنا",
    },
    hero: {
      title: "استشارات قانونية تدفعك للأمام",
      subtitle: "خبرة مرافعات ورؤية عملية لنتائج حاسمة.",
      cta1: "احجز استشارة مجانية",
      cta2: "استعرض مجالاتنا",
    },
    badges: [
      "استراتيجية مرافعات",
      "فريق ثنائي اللغة",
      "رسوم شفافة",
      "نتائج فعّالة",
      "العميل أولاً",
      "حل النزاعات",
    ],
    about: {
  title: "من نحن",
  p1: "تُعد «فاتن تميم للمحاماة والاستشارات القانونية» مكتباً قانونياً متخصصاً مقره في أبوظبي، يقدّم تمثيلاً قانونياً واضحاً واستراتيجياً يراعي كرامة الموكلين للأفراد والشركات في مختلف إمارات الدولة. يقوم نهجنا على قيم الوضوح والنزاهة والتميّز، لضمان حصول كل عميل على استشارة قانونية عملية وشفافة تركز على تحقيق النتائج.",
  p2: "نقدّم خبرتنا في مجموعة واسعة من المجالات القانونية تشمل الأحوال الشخصية، والعمل والتوظيف، والقانون الجنائي، والقانون التجاري، وقضايا الشركات، والمسؤولية الطبية. نتعامل مع كل قضية بسرّية وتعاطف ودقة استراتيجية، ونسعى إلى بناء ثقة طويلة الأمد مع عملائنا من خلال إرشاد قانوني يحمي حقوقهم ويعزّز ثقتهم في كل خطوة من رحلتهم القانونية.",
  values: [
    { k: "النزاهة", v: "نلتزم بالصدق والشفافية في جميع القضايا." },
    { k: "الالتزام", v: "أهدافكم وحمايتكم تبقى أولويتنا دائماً." },
    { k: "التميّز", v: "نسعى إلى الجودة والوضوح وتحقيق النتائج في كل عمل نقوم به." }
  ],
  stats: []
},

    marquee:
      "أحوال شخصية · عمل · جنائي · شركات · مصارف · عقارات · أخطاء طبية · تحكيم",
    areas: {
      title: "مجالات الممارسة",
      more: "اقرأ المزيد",
      cards: [
        {
          route: "/services/family-status",
          title: "الأحوال الشخصية",
          desc: "الزواج والطلاق والحضانة والولاية والميراث.",
          img: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=1200&auto=format&fit=crop",
        },
        {
          route: "/services/criminal-defense",
          title: "القضايا الجنائية",
          desc: "دفاع استراتيجي من التحقيق إلى الاستئناف.",
          img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1200&auto=format&fit=crop",
        },
        {
          route: "/services/labour-law",
          title: "قانون العمل",
          desc: "مستحقات متأخرة، فصل تعسفي، عقود واستشارات.",
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          route: "/services/corporate-commercial",
          title: "الشركات والتجاري",
          desc: "العقود والمشاريع المشتركة ونزاعات الشركاء.",
          img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
        },
        {
          route: "/services/banking-finance",
          title: "المصارف والتمويل",
          desc: "التعثر والضمانات والتنفيذ وإعادة الهيكلة.",
          img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
        },
        {
          route: "/services/medical-malpractice",
          title: "الأخطاء الطبية",
          desc: "الإهمال ونزاعات التأمين والجهات التنظيمية.",
          img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    team: { title: "فريق العمل", sub: "محامون بخبرة ونهج يضع العميل أولاً." },
    accolades: {
      title: "اعتمادات وتكريم",
      points: ["قضايا عابرة للحدود", "مستشارون للشركات", "مقالات منشورة", "رضا مرتفع"],
    },
    testimonials: { title: "آراء العملاء" },
    contact: {
      title: "اطلب مراجعة مجانية لقضيتك",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "وصف القضية",
      submit: "إرسال",
      address: "المقر الرئيسي",
      hours: "ساعات العمل",
      hoursVal: "الاثنين – السبت · 10:00 – 19:00",
 
    },
    footer: {
      quick: "روابط سريعة",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
  },
};
// Keep EN/AR practice-area images in sync with your /public files
["en","ar"].forEach(l => {
  DICT[l].areas.cards[0].img = IMG.areas.family;
  DICT[l].areas.cards[1].img = IMG.areas.criminal;
  DICT[l].areas.cards[2].img = IMG.areas.labour;
  DICT[l].areas.cards[3].img = IMG.areas.corporate;
  DICT[l].areas.cards[4].img = IMG.areas.banking;
  DICT[l].areas.cards[5].img = IMG.areas.medical;
});

/* ===========================
   Safe <Img> with fallback
=========================== */
const FALLBACK_IMG = "/fallback.jpg"; // put a 1600x900 JPG under public/

const Img = ({ src, alt = "", className = "", ...r }) => {
  const [ok, setOk] = React.useState(true);
  return (
    <img
      src={ok ? src : FALLBACK_IMG}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
      className={className}
      {...r}
    />
  );
};

/* ===========================
   UI PRIMITIVES
=========================== */
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const SectionTitle = ({ icon: Icon = Scale, title, sub }) => (
  <div className="mb-10 text-center">
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 ring-1 ring-amber-300">
      <Icon className="h-6 w-6 text-amber-700" />
    </div>
    <h2 className="text-3xl font-serif font-semibold tracking-tight text-slate-800 md:text-4xl">
      {title}
    </h2>
    {sub && <p className="mx-auto mt-3 max-w-2xl text-slate-600">{sub}</p>}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs text-slate-700 backdrop-blur">
    {children}
  </span>
);

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400";
  const map = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow md:active:scale-[0.98]",
    ghost:
      "bg-white/70 text-slate-800 border border-slate-200 hover:bg-white shadow-sm",
    link: "text-amber-700 hover:underline underline-offset-4",
  };
  return (
    <button className={`${base} ${map[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/80 text-white outline-none backdrop-blur focus:border-amber-300 ${className}`}
  />
);
const TextArea = ({ className = "", ...props }) => (
  <textarea
    rows={5}
    {...props}
    className={`w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/80 text-white outline-none backdrop-blur focus:border-amber-300 ${className}`}
  />
);

/* ===========================
   NAVBAR + MEGA MENU
=========================== */
const MegaMenu = ({ lang }) => {
  const items = SERVICES_LIST(lang); // same source as /services page
  const cols = 3;
  const perCol = Math.ceil(items.length / cols);
  const columns = Array.from({ length: cols }, (_, i) =>
    items.slice(i * perCol, (i + 1) * perCol)
  );

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-3">
      {columns.map((col, i) => (
        <ul key={i} className="space-y-3">
          {col.map((it) => (
            <li key={it.href}>
              <Link
                to={it.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 backdrop-blur hover:border-amber-300 hover:bg-amber-50"
              >
                <span>{it.title}</span>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};


const Navbar = ({ lang, setLang }) => {
  const D = DICT[lang];
  const [open, setOpen] = useState(false);
  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";
  return () => { document.body.style.overflow = ""; };
}, [open]);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Container>
          <div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
  <Img
  src="/logo.svg"
  alt={BRAND.nameEN}
  className="h-[60px] w-auto select-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
  loading="eager"
  decoding="async"
/>



  <div className="hidden flex-col sm:flex">
    <span className="font-serif text-lg font-semibold text-slate-800">
      {lang === "ar" ? BRAND.nameAR : BRAND.nameEN}
    </span>
    <span className="text-xs text-slate-500">
      {lang === "ar" ? BRAND.taglineAR : BRAND.taglineEN}
    </span>
  </div>
</div>


          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-amber-700">
              {D.nav.home}
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-amber-700">
              {D.nav.about}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
            >
              <button className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-amber-700">
                {D.nav.services}
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {mega && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute left-1/2 mt-3 w-[780px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl z-[60]"
                  >
                    <MegaMenu lang={lang} />
                    <div className="flex justify-end border-t border-slate-100 p-3">
                      <Link
                        to="/services"
                        className="text-sm text-amber-700 hover:underline"
                      >
                        {lang === "ar" ? "جميع الخدمات" : "All Services"}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
              <Link to="/areas" className="text-sm font-medium text-slate-700 hover:text-amber-700">
                {D.nav.areas}
              </Link>
            <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-amber-700">
              {D.nav.contact}
            </Link>

            <div className="h-6 w-px bg-slate-200" />
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-700"
            >
              <Languages className="h-4 w-4" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              className="rounded-xl border border-slate-200 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-1 pb-4">
                {[
                  { label: D.nav.home, to: "/" },
                  { label: D.nav.about, to: "/about" },
                  { label: D.nav.services, to: "/services" },
                  { label: D.nav.areas, to: "/areas" },
                  { label: D.nav.contact, to: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-amber-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                  className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-700"
                >
                  <Languages className="h-4 w-4" />
                  <span>{lang === "en" ? "العربية" : "English"}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

/* ===========================
   HERO + MARQUEE
=========================== */
// Paste this over the existing Hero in App.jsx (only this component)
const Hero = ({ lang }) => {
  const D = DICT[lang]
  const navigate = useNavigate()
  const bg =
IMG.hero;
  return (
    // IMPORTANT: keep `relative` and do NOT use negative z-index anywhere in here
    <section className="relative isolate">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <Img src={bg} alt="hero background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Foreground content */}
      <Container>
        <div className="relative z-10 grid min-h-[76vh] md:min-h-[72vh] place-items-center py-20">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              // If the bg ever fails to load, text stays visible on white
              className="font-serif text-4xl font-semibold leading-tight text-white [@supports(color:var(--foo))]:text-white md:text-5xl"
            >
              {D.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
              className="mt-4 max-w-2xl text-lg text-white/85"
            >
              {D.hero.subtitle}
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {DICT[lang].badges.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => navigate("/contact")}>
                <Handshake className="h-4 w-4" /> {D.hero.cta1}
              </Button>
              <Button variant="ghost" onClick={() => navigate("/areas")}>
                <BookOpen className="h-4 w-4" /> {D.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee under hero */}
      <Marquee lang={lang} />
    </section>
  )
}

const HeroMosaic = () => {
  const imgs = [
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616596872406-7b6f81f45431?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589829545914-693195f1cb26?q=80&w=900&auto=format&fit=crop",
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {imgs.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06 } }}
          className={`relative h-40 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-52 ${
            i === 1 ? "col-span-2" : ""
          }`}
        >
<Img
  src={src}
  alt="office"
  className="rounded-2xl h-72 w-full object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40" />
        </motion.div>
      ))}
    </div>
  );
};

const Marquee = ({ lang }) => (
  <div className="relative border-y border-white/10 bg-slate-900/70 py-3 text-white overflow-hidden">
    {/* Subtle radial overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

    {/* Smooth infinite scroll text */}
    <div className="animate-[marquee_32s_linear_infinite] whitespace-nowrap text-sm">
      <span className="mx-6 opacity-80">{DICT[lang].marquee}</span>
      <span className="mx-6 opacity-80">{DICT[lang].marquee}</span>
      <span className="mx-6 opacity-80">{DICT[lang].marquee}</span>
    </div>

    {/* Stable GPU-friendly animation */}
    <style>{`
      @keyframes marquee {
        0% { transform: translate3d(0,0,0); }
        100% { transform: translate3d(-50%,0,0); }
      }
    `}</style>
  </div>
);

/* ===========================
   ABOUT TEAM (same 4 members)
=========================== */
const AboutTeam = ({ lang }) => {
  const isAR = lang === "ar";

  const people = PEOPLE(isAR);

  return (
    <section className="mt-12" dir={isAR ? "rtl" : "ltr"}>
      <h3 className="mb-6 text-2xl font-semibold text-slate-800">
        {isAR ? "فريق العمل" : "Meet the Team"}
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p) => (
          <div
            key={p.name}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
              <Img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: p.objectPos }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10" />
            </div>
            <div className="p-5 text-center">
              <h4 className="font-serif text-lg text-slate-900">{p.name}</h4>
              <p className="mt-1 text-sm text-slate-600">{p.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700 whitespace-pre-line">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



/* ===========================
   ABOUT
=========================== */
const About = ({ lang, showTeam = false }) => {
  const T = DICT[lang];
  const A = T.about || {};
  const Plus = T.aboutPlus || {};
  const portrait = IMG.about;


  // Optional gallery images (put these under /public and add to IMG—see step 3)
  const gallery = [
    IMG.about2 || "/about-2.jpg",
    IMG.about3 || "/about-3.jpg",
    IMG.about4 || "/about-4.jpg",
  ].filter(Boolean);

  return (
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-12">
        {/* LEFT: Text */}
        <div className="md:col-span-6">
          <SectionTitle icon={Scale} title={A.title || (lang==='ar'?'من نحن':'Who We Are')} sub={null} />

          <div className="mx-auto max-w-[62ch] text-slate-700 text-[17px] leading-8">
            <p className="mb-5">{A.p1}</p>
            <p>{A.p2}</p>
          </div>

          {/* Values */}
          {Array.isArray(A.values) && A.values.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
              {A.values.map(({ k, v }) => (
                <div key={k} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-amber-700 font-semibold">{k}</div>
                  <div className="mt-1 text-sm text-slate-600 leading-6">{v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* RIGHT: Image */}
        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
            <Img
              src={portrait}
              alt={lang === "ar" ? "عن المكتب" : "About our firm"}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/85 p-3 backdrop-blur">
              <ShieldCheck className="h-5 w-5 text-amber-700" />
              <span className="text-sm text-slate-800">
                {lang === "ar" ? "مرخّصون أمام محاكم أبوظبي" : "Licensed Abu Dhabi Court Practitioners"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials */}
      {(Plus.creds?.length || 0) > 0 && (
        <section className="mt-2">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            {Plus.credsTitle || (lang==='ar' ? "التراخيص والاعتمادات" : "Licensing & Credentials")}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {Plus.creds.map((txt, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-sm text-slate-700">
                {txt}
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Gallery */}
{gallery.length > 0 && (
  <section className="mt-10">
    <h2 className="text-xl font-semibold text-slate-800 mb-4">
      {Plus.galleryTitle || (lang === "ar" ? "من داخل مكتبنا" : "Inside Our Practice")}
    </h2>

    <div className="grid md:grid-cols-3 gap-4">
      {gallery.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-lg h-72">
          <Img src={src} alt="office" className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]" />
        </div>
      ))}
    </div>

    {/* ✅ Only show on About page */}
    {showTeam && <AboutTeam lang={lang} />}

    <div className="pb-24" />
  </section>
)}



      {/* Team Highlight */}
      {showTeam && (Plus.team?.length || 0) > 0 && (
  <section className="mt-10 mb-2">
    <h2 className="text-xl font-semibold text-slate-800 mb-4">
      {Plus.teamTitle || (lang==='ar' ? "القيادة" : "Leadership")}
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Plus.team.map((p, i) => (
        <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="font-medium">{p.name}</div>
          <div className="text-sm text-slate-600">{p.role}</div>
          {p.note && <div className="text-xs text-slate-500">{p.note}</div>}
        </div>
      ))}
    </div>
  </section>
)}

      <div className="pb-24"></div>

    </Container>
  );
};

/* ===========================
   AREAS (Home grid, NOT clickable)
=========================== */
const Areas = ({ lang }) => {
  const items = SERVICES_LIST(lang); // ← use the canonical list that has objectPosition

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <SectionTitle icon={Gavel} title={DICT[lang].areas.title} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: it.objectPosition || "50% 50%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50" />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/80 px-3 py-1 text-xs text-slate-700 backdrop-blur">
                  <Scale className="mr-1 inline h-4 w-4" /> {it.title}
                </div>
              </div>

              <div className="space-y-3 p-5">
                <h3 className="font-serif text-xl text-slate-800">{it.title}</h3>
                <p className="text-sm text-slate-600">{it.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

/* ===========================
   OUR SERVICES — dedicated page
=========================== */
const OurServices = ({ lang }) => {
  const items = SERVICES_LIST(lang);
  const [q, setQ] = React.useState("");
  const list = items.filter(s =>
    (s.title + " " + s.summary).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Container>
      <div className="py-16">
        <SectionTitle
          title={lang === "ar" ? "خدماتنا" : "Our Services"}
          sub={lang === "ar" ? "حلول عملية عبر مجالات متعددة" : "Practical solutions across multiple domains"}
          icon={Scale}
        />

        {/* search */}
        <div className="mt-4 mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === "ar" ? "ابحث في الخدمات..." : "Search services..."}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ title, summary, href, img, icon: Icon, objectPosition }) => (
            <Link
              key={href}
              to={href}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                    style={{ objectPosition: objectPosition || "50% 50%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center gap-2">
                   {Icon ? (
   <Icon className="h-5 w-5 text-amber-700" />
 ) : (
   <Scale className="h-5 w-5 text-amber-700" />
 )}
                  <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-6">{summary}</p>
                <div className="mt-4 text-amber-700 font-medium inline-flex items-center gap-1">
                  {lang === "ar" ? "عرض التفاصيل" : "View details"}
                  <span className="transition-transform group-hover:translate-x-0.5">›</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pb-24" />
      </div>
    </Container>
  );
};

/* ===========================
   GALLERY, TEAM, ACCOLADES, TESTIMONIALS
=========================== */
const GalleryStrip = () => {
  const imgs = [
    "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530731141654-5993c3016c77?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0.05),transparent_50%)]" />
      <Container>
        <div className="grid grid-cols-2 gap-4 py-16 md:grid-cols-5">
          {imgs.map((src, i) => (
            <div
              key={i}
              className={`group relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-slate-200 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Img
                src={src}
                alt="mosaic"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

//constant team
// ===========================
// Shared Team Data
// ===========================
const PEOPLE = (isAR) => [
  {
    name: isAR ? "د. فاتن تميم الصليبي" : "Dr. Faten Tamim Alsulebi",
    role: isAR ? "محامية ومديرة المكتب" : "Attorney & Managing Partner",
    desc: isAR
      ? `أستاذة جامعية في جامعة أبوظبي في مجال القانون المدني، وأول امرأة إماراتية تنال درجة الدكتوراه في قانون الرياضة ضمن فروع القانون المدني. ترتكز خبرتها الأكاديمية والعملية على "تنظيم عقود رعاية الرياضة" — موضوع أطروحتها للدكتوراه (دراسة مقارنة بين القانون الإماراتي والمصري) — وقدّمت محاضرات متخصصة في قانون الرياضة وصياغة ومراجعة عقود الرعاية والوكالات.

خلال مسيرتها، شاركت في برامج تدريب متقدمة في سويسرا متصلة بتطبيقات لوائح قانون الرياضة على اللاعبين، وزارت الهيئة الدولية للتحكيم (جنيف) ضمن برنامج مدعوم من الجامعة الأمريكية في دبي. عمليًا، عملت في شركة أبوظبي للتوزيع (ADDC) في إدارة التحقيقات مع الموظفين المخالفين للوائح، وأنشأت فريقًا تطوعيًا ناجحًا انضم إليه معظم الموظفين، كما أسست نشرة قانونية داخلية تصدر شهريًا لتغطية أحدث المستجدات التشريعية. قامت كذلك بمتابعة شكاوى المخالفات، والعمل على عقود واتفاقيات المياه والكهرباء، وتنظيم العلاقات مع المستثمرين بصفة مستشار قانوني.

قدّمت محاضرات في الجريمة والقانون المدني في جهات متعددة، وأسهمت في دعم الجوانب الأسرية لعدد من موظفي المؤسسة بهدف تحسين سلامتهم النفسية، انطلاقًا من اهتمامها بتطوير السلوك الإنساني. وتشمل خبرتها صياغة ومراجعة العقود التجارية والرياضية (ومنها أعمال مرتبطة بنادي العين)، وإعداد سياسات الامتثال والحوكمة والتفاوض على التسويات بما يضمن حماية المصالح وتحقيق نتائج عملية تراعي أعلى معايير المهنية والسرية.`
      : `University educator in civil law at Abu Dhabi University and the first Emirati woman to earn a PhD in sports law within the civil-law discipline. Her doctoral research — “Regulating Contracts for Sports Sponsorship (A Comparative Study between UAE and Egyptian Law)” — anchors a practice that blends rigorous scholarship with hands-on advisory on drafting and reviewing sponsorship, agency, and commercial agreements.

She has undertaken advanced training in Switzerland related to the application of sports-law regulations to professional players and visited the International Court of Arbitration in Geneva through a program sponsored by the American University in Dubai. In practice, she served at Abu Dhabi Distribution Company (ADDC) within the investigations department, led inquiries into employee violations, founded a successful corporate volunteer program, and launched a monthly internal legal bulletin covering regulatory updates. She also handled customer-violation complaints, negotiated and reviewed water and electricity agreements, and advised on investor relations as legal counsel.

Beyond academia and corporate advisory, she has delivered lectures on criminal and civil law at multiple venues and provided family-law support initiatives for staff well-being, reflecting a broader interest in behavioral development. Her portfolio includes commercial and sports-law contracting (including work with Al Ain Football Club), compliance and governance policies, and high-stakes negotiations — consistently prioritizing client protection, clear strategy, and professional confidentiality.`,
    img: IMG.team.faten,
    objectPos: "50% 22%",
  },
  {
    name: isAR ? "محمد أحمد الطوبجي" : "Mohamed Ahmed Eltobgy",
    role: isAR ? "مستشار قانوني" : "Legal Consultant",
    desc: isAR
      ? `مستشار قانوني يركّز على التقاضي وصياغة المذكرات واللوائح عبر الدعاوى المدنية والتجارية والجزائية والعمالية والأحوال الشخصية. يمتاز بقدرة عالية على تحليل الوقائع وبناء نظرية قانونية متماسكة، وإدارة مسار الدعوى من القيد حتى التنفيذ، بما يشمل طلبات الإثبات وندب الخبراء والمرافعة الشفوية وإعداد الطعون في الاستئناف والتمييز عند الجدوى.

خبرته العملية تشمل مراجعة وصياغة العقود التجارية، إعداد مذكرات الرأي القانوني، التفاوض على التسويات، وإدارة المخاطر والامتثال داخل الشركات. يتعامل بثنائية لغوية (العربية/الإنجليزية) ويُحسن التنسيق مع الفرق الاستشارية والخبراء الفنيين، مع الالتزام بمعايير السرية والمهنية، وتقديم حلول عملية تركّز على النتائج وتحسين موقف العميل الإجرائي والموضوعي على حد سواء.`
      : `Legal consultant focused on litigation and written advocacy across civil, commercial, criminal, labour, and personal-status matters. He builds clear, fact-driven case theories; manages end-to-end proceedings from filing through enforcement; and handles evidence applications, expert appointments, oral pleadings, and appellate strategy (where viable).

His work also covers contract drafting and review, legal opinions, negotiation of settlements, and corporate risk and compliance support. Bilingual (Arabic/English), he collaborates effectively with expert witnesses and advisory teams, maintaining strict confidentiality and delivering pragmatic, results-oriented solutions that strengthen both procedural posture and substantive outcomes.`,
    img: IMG.team.mohamed,
    objectPos: "50% 28%",
  },
  {
    name: isAR ? "زهراء صبرينة مداح" : "Zahra Sabrina Meddah",
    role: isAR ? "محامية ومستشارة قانونية" : "Attorney & Legal Counsel",
    desc: isAR
      ? `قاضية سابقة ومحامية بخبرة واسعة تتجاوز 15 عامًا في مجالات التقاضي وتسوية النزاعات، مع تركيز خاص على القضايا التجارية، الاستثمارية، وقانون الشركات والنزاعات العقارية والمطالبات المالية إضافة إلى القضايا المدنية والعمالية والأحوال الشخصية والجزائية. أمتلك سجلًا مهنيًا متميزًا في إدارة الملفات المعقدة، وصياغة المذكرات القانونية، وتمثيل العملاء في مختلف المنازعات. أقدّم استشارات قانونية دقيقة تستند إلى خبرة قضائية عميقة وفهم شامل للتشريعات المحلية والدولية وصياغة العقود والمذكرات القانونية، مع التزام كامل بأعلى معايير المهنية والسرية.`
      : `Former judge and attorney with over 15 years of extensive experience in litigation and dispute resolution, with a strong focus on commercial and investment disputes, corporate law, real-estate conflicts, financial claims, as well as civil, labour, family, and criminal cases. Proven track record in managing complex legal matters, drafting contracts, legal submissions, and pleadings, and representing clients effectively before judicial authorities. Provides precise and strategic legal advice grounded in deep judicial experience and a comprehensive understanding of local and international laws, with a steadfast commitment to the highest standards of professionalism and confidentiality.`,
    img: IMG.team.zahra,
    objectPos: "50% 35%",
  },
  {
    name: isAR ? "محمد رفيق محمد أحمد إبراهيم" : "Mohamed Rafik Mohamed Ahmed Ibrahim",
    role: isAR ? "مستشار قانوني" : "Legal Counsel",
    desc: isAR
      ? `مستشار قانوني ثنائي اللغة (العربية والإنجليزية) يتمتع بخبرة تتجاوز ثماني سنوات في العمل القانوني داخل دولة الإمارات العربية المتحدة ومصر، لدى كبرى مكاتب المحاماة. يمتلك خبرة واسعة في التقاضي، صياغة العقود، الامتثال التنظيمي، إدارة المخاطر، وتسوية النزاعات، إضافة إلى معرفة متعمقة بأنظمة القضاء في الإمارات، بما في ذلك محاكم دبي وأبوظبي والمحاكم الاتحادية. يتميز محمد رفيق بمهارات عالية في صياغة اللوائح والمذكرات القانونية في مختلف الدعاوى المدنية والجزائية والتجارية والعمالية والأحوال الشخصية، مع سجل نجاح بلغ 90% في القضايا التي تولّى الترافع فيها. كما يمتلك خبرة متميزة في قوانين العقارات والامتثال لجهات مثل RERA وDLD، إلى جانب براعة في التفاوض وإعداد التسويات عالية المخاطر لصالح العملاء. قدم أكثر من 200 استشارة قانونية متخصصة عبر منصات احترافية، وشارك في إعداد ونشر مقالات قانونية مؤثرة ساهمت في رفع تصنيف المنصات القانونية على محركات البحث. يحمل درجة الماجستير في القانون العام والجنائي وعدة دبلومات وشهادات دولية في مجالات القانون والتكنولوجيا القانونية، مما يعزز قدرته على تقديم حلول قانونية مبتكرة وفعّالة. يؤمن بأن العمل القانوني يقوم على الدقة، النزاهة، وحماية مصالح العملاء وفق أعلى المعايير المهنية.`
      : `Experienced and results-driven Legal Counsel with 8+ years of professional practice across the UAE and Egypt, specializing in corporate and commercial law, regulatory compliance, real estate (RERA/DLD), dispute resolution, and contract negotiation. Provides strategic legal guidance to support business growth, reduce risk, and ensure full compliance with local and international regulations. Has represented clients before major UAE judicial authorities, managed complex litigation portfolios, and successfully negotiated high-value settlements. Experience spans drafting and reviewing contracts, leading case strategies, advising on cross-border transactions, and supporting corporate governance frameworks. Beyond legal practice, authored high-impact legal content, delivered 200+ consultations, and achieved a 90% litigation success rate while leading high-performing teams. Holds an LL.M and LL.B from Alexandria University with certifications in commercial law, negotiation, legal tech, and digital transformation. Fluent in Arabic and English with a detail-oriented, analytical approach dedicated to clear, practical, business-aligned legal solutions.`,
    img: IMG.team.rafik,
    objectPos: "50% 30%",
  },
];

/* ===========================
   TEAM (4 cards, RTL-ready)
=========================== */
/* ===========================
   TEAM (4 members, long bios)
=========================== */
const Team = ({ lang }) => {
  const isAR = lang === "ar";
  const people = PEOPLE(isAR);

  return (
    <section className="py-16 bg-white" dir={isAR ? "rtl" : "ltr"}>
      <Container>
        <SectionTitle
          title={DICT[lang].team.title}
          sub={DICT[lang].team.sub}
          icon={Building2}
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
                <Img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: p.objectPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10" />
              </div>
              <div className="p-5 text-center">
                <h4 className="font-serif text-lg text-slate-900">{p.name}</h4>
                <p className="mt-1 text-sm text-slate-600">{p.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700 whitespace-pre-line">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};




const Accolades = ({ lang }) => (
  <div className="bg-gradient-to-b from-white to-amber-50/40 py-16">
    <Container>
      <SectionTitle title={DICT[lang].accolades.title} icon={Crown} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DICT[lang].accolades.points.map((p) => (
          <div
            key={p}
            className="flex items-start gap-3 rounded-2xl border border-amber-200/60 bg-white/80 p-5"
          >
            <Star className="mt-1 h-5 w-5 text-amber-600" />
            <p className="text-slate-700">{p}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

const Testimonials = ({ lang }) => {
  const items = [
    {
      quote:
        lang === "ar"
          ? "تعامل احترافي ونصيحة واضحة منذ اليوم الأول."
          : "Professional handling and clear advice from day one.",
      name: "Corporate Client",
    },
    {
      quote:
        lang === "ar"
          ? "وقفوا معنا خطوة بخطوة حتى صدور الحكم."
          : "They stood with us step by step until judgment.",
      name: "Litigation Client",
    },
    {
      quote:
        lang === "ar"
          ? "أسلوب راقٍ واحترام كامل لخصوصيتنا."
          : "Refined approach with full respect to our privacy.",
      name: "Family Law Client",
    },
  ];
  return (
    <Container>
      <div className="py-16">
        <SectionTitle icon={Quote} title={DICT[lang].testimonials.title} />
        <div className="overflow-x-auto">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {items.map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 basis-[90%] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:basis-[46%] lg:basis-[30%]"
              >
                <p className="min-h-[90px] text-slate-700">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-amber-700" />
                  <span>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

// Footer
// Footer
const Footer = ({ lang }) => {
  const D = DICT[lang];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        {/* 3-column: Logo/Social • Office • Quick Links */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* LEFT: Logo + tagline + socials */}
          <div>
            <div className="flex items-center gap-3">
              <Img
                src="/logo.svg"
                alt={BRAND.nameEN}
                className="h-[64px] w-auto select-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="font-serif text-lg font-semibold text-slate-800">
                  {lang === "ar" ? BRAND.nameAR : BRAND.nameEN}
                </div>
                <div className="text-sm text-slate-500">
                  {lang === "ar" ? BRAND.taglineAR : BRAND.taglineEN}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3 text-slate-500">
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:text-[#0A66C2]"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={BRAND.snapchat}
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:text-[#FFFC00]"
              >
                <SiSnapchat size={16} />
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:text-[#E4405F]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* MIDDLE: Office address + contact */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-slate-800">
              {lang === "ar" ? "المكتب" : "Office"}
            </h5>
            <p className="text-sm leading-relaxed text-slate-600">
              {lang === "ar" ? BRAND.addressAR : BRAND.addressEN}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <a href={`tel:${BRAND.phoneE164}`} className="hover:text-amber-700">
                {BRAND.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${BRAND.email}`} className="hover:text-amber-700">
                {BRAND.email}
              </a>
            </p>
            {D?.contact?.hours && (
              <p className="mt-2 text-xs text-slate-500">
                <span className="font-medium">{D.contact.hours}:</span>{" "}
                {D.contact.hoursVal}
              </p>
            )}
          </div>

          {/* RIGHT: Quick links */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-slate-800">
              {D.footer.quick}
            </h5>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/about" className="hover:text-amber-700">
                  — {DICT[lang].nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-700">
                  — {DICT[lang].nav.services}
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-amber-700">
                  — {DICT[lang].nav.areas}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-700">
                  — {DICT[lang].nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()}{" "}
              {lang === "ar" ? BRAND.nameAR : BRAND.nameEN}. {D.footer.rights}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link className="hover:text-amber-700" to="/privacy">{D.footer.privacy}</Link>
              <Link className="hover:text-amber-700" to="/terms">{D.footer.terms}</Link>
              <Link className="hover:text-amber-700" to="/disclaimer">{lang === "ar" ? "إخلاء المسؤولية" : "Disclaimer"}</Link>
              <Link className="hover:text-amber-700" to="/cookies">{lang === "ar" ? "سياسة الكوكيز" : "Cookie Policy"}</Link>
            </div>
          </div> {/* ✅ fixed: closes flex row */}

          <div
            className="mt-6 cursor-pointer text-center text-[11px] text-slate-400 transition-colors hover:text-amber-600"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {lang === "ar" ? "العودة للأعلى ↑" : "Back to Top ↑"}
          </div>
        </div>
      </Container>
    </footer>
  );
};


// ===========================
// InsidePractice Section
// ===========================
const InsidePractice = ({ lang }) => {
  const title = lang === "ar" ? "من داخل مكتبنا" : "Inside Our Practice";
  const images = [
    { src: IMG.about2, alt: "Office photo 1" },
    { src: IMG.about3, alt: "Office photo 2" },
    { src: IMG.about4, alt: "Office photo 3" },
  ].filter(Boolean);

  return (
    <section className="py-16 bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">
          {title}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <Img
                src={img.src || img}
                alt={img.alt || "office"}
                className="h-72 w-full object-cover transform hover:scale-110 hover:brightness-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};


/* ===========================
   HOMEPAGE COMPOSER
=========================== */
const HomePage = ({ lang }) => (
  <>
    <Hero lang={lang} />
    <About lang={lang} />        {/* stays without showTeam -> no team on Home */}
    <Areas lang={lang} />
    <Team lang={lang} />         {/* ✅ shows on Home under Practice Areas */}
    <ContactSection lang={lang} />
  </>
);


/* ===========================
   SERVICE PAGES — Full content
=========================== */
const PageShell = ({
  lang,
  titleEN,
  titleAR,
  introEN,
  introAR,
  sectionsEN,
  sectionsAR,
  banner,
  outcomesEN = [], outcomesAR = [],
  processEN = [], processAR = [],
  docsEN = [], docsAR = [],
  feesEN = [], feesAR = [],
  faqEN = [], faqAR = [],
}) => {
  const isAR = lang === "ar";
  const title = isAR ? titleAR : titleEN;
  const intro = isAR ? introAR : introEN;
  const sections = isAR ? sectionsAR : sectionsEN;

  const outcomes = isAR ? outcomesAR : outcomesEN;
  const process  = isAR ? processAR  : processEN;
  const docs     = isAR ? docsAR     : docsEN;
  const fees     = isAR ? feesAR     : feesEN;
  const faq      = isAR ? faqAR      : faqEN;
  
  // --- Lightbox state ---
  const [lightbox, setLightbox] = React.useState(null);
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative isolate min-h-[280px] overflow-hidden">
        {/* Background image + dark overlay IN FRONT (z-0) */}
               <button
          type="button"
          className="absolute inset-0 z-0 h-full w-full cursor-zoom-in"
          onClick={() => setLightbox({ src: banner, alt: title })}
          aria-label="Open image"
        >
          <img
            src={banner}
            alt={title}
            className="h-full w-full object-cover"
          />
        </button>
        <div className="absolute inset-0 z-0 bg-slate-900/60" />

        {/* Foreground content stays above (z-10) */}
        <Container>
          <div className="relative z-10 py-16 text-white">
            <h1 className="font-serif text-4xl md:text-5xl text-white max-w-[20ch] leading-tight">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              {intro}
            </p>
          </div>
        </Container>
      </div>

      {/* Content + Sidebar */}
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {sections.map((s, i) => (
              <section key={i} className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">{s.h}</h2>
                <p className="text-slate-700">{s.p}</p>
                { s.img?.src && (
  <button
    type="button"
    onClick={() => setLightbox({ src: s.img.src, alt: s.img.alt || s.h })}
    className="group mt-3 block overflow-hidden rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
  >
    <Img
      src={s.img.src}
      alt={s.img.alt || s.h}
      className="h-56 w-full object-cover md:h-64 transition-transform duration-300 group-hover:scale-[1.02]"
      loading="lazy"
      decoding="async"
    />
  </button>
)}

                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
                    {s.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Key Outcomes */}
            {outcomes.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">
                  {isAR ? "ما الذي ستحصل عليه" : "Key Outcomes"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {outcomes.map((o, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                    >
                      ✓ {o}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Our Process */}
            {process.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">
                  {isAR ? "خطوات العمل" : "Our Process"}
                </h2>
                <ol className="space-y-3">
                  {process.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white text-xs">
                        {i + 1}
                      </span>
                      <div className="text-slate-700">{step}</div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Required Documents */}
            {docs.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">
                  {isAR ? "المستندات المطلوبة" : "Required Documents"}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {docs.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-600" />
                      <span className="text-slate-700">{d}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Fees */}
            {fees.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">
                  {isAR ? "الرسوم" : "Fees"}
                </h2>
                <ul className="space-y-2">
                  {fees.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQs */}
            {faq.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-serif text-2xl text-slate-800">
                  {isAR ? "الأسئلة الشائعة" : "FAQs"}
                </h2>
                <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                  {faq.map(({ q, a }, i) => (
                    <details key={i} className="group p-4">
                      <summary className="cursor-pointer list-none font-medium text-slate-800">
                        {q}
                      </summary>
                      <p className="mt-2 text-slate-600">{a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-semibold text-slate-800">
                  {isAR ? "احجز استشارة" : "Book a Consultation"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isAR
                    ? "أرسل لنا تفاصيل قضيتك وسيتواصل معك فريقنا."
                    : "Send us your case details and our team will reach out."}
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-white"
                >
                  <Handshake className="h-4 w-4" /> {isAR ? "ابدأ الآن" : "Get Started"}
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="mb-2 font-semibold text-slate-800">
                  {isAR ? "خدمات ذات صلة" : "Related Services"}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>
                    <Link className="hover:text-amber-700" to="/services/criminal-defense">
                      {isAR ? "القضايا الجنائية" : "Criminal Defense"}
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-amber-700" to="/services/labour-law">
                      {isAR ? "قانون العمل" : "Labour Law"}
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-amber-700" to="/services/corporate-commercial">
                      {isAR ? "الشركات والتجاري" : "Corporate & Commercial"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
      
    {/* Lightbox */}    {lightbox && (
     <div
       role="dialog"
       aria-modal="true"
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
       onClick={() => setLightbox(null)}
     >
       <img
          src={lightbox.src}
         alt={lightbox.alt || ""}
         className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </div>
  );
};

/* ===== All Stages of the Lawsuit ===== */
const LitigationStages = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.hero}
    titleEN="All Stages of the Lawsuit"
    titleAR="مراحل الدعوى"
    introEN="End-to-end representation through pleadings, first instance, appeal, cassation, and enforcement — with clear strategy at every stage."
    introAR="تمثيل قانوني متكامل عبر جميع مراحل الدعوى: من القيد والمرافعات إلى الدرجة الأولى فالاستئناف والتمييز والتنفيذ — بخطة واضحة في كل مرحلة."
    sectionsEN={[
      { h: "Pleadings & Filing", p: "We frame claims or defenses, assemble exhibits, and file within limitation windows." },
      { h: "First Instance", p: "Hearings management, evidence requests, expert appointments, and closing submissions." },
      { h: "Appeal", p: "Error-of-fact or law appeals with targeted grounds and deadlines control." },
      { h: "Cassation (Points of Law)", p: "Where viable, petitions focused on misapplication of law, jurisdiction, or procedure." },
      { h: "Enforcement", p: "Judgment execution, precautionary measures, travel bans, and asset tracing." },
    ]}
    sectionsAR={[
      { h: "القيد وصحف الدعوى", p: "صياغة الطلبات أو الدفوع وتجهيز المستندات والقيد ضمن المواعيد النظامية." },
      { h: "الدرجة الأولى", p: "إدارة الجلسات وطلبات الإثبات وندب الخبراء والمذكرات الختامية." },
      { h: "الاستئناف", p: "طعن لأخطاء الواقع أو القانون بأسباب محددة وضبط للمواعيد." },
      { h: "التمييز (مسائل قانونية)", p: "عند الجدوى، طعون تركز على سوء تطبيق القانون أو الاختصاص أو الإجراءات." },
      { h: "التنفيذ", p: "تنفيذ الأحكام والإجراءات الوقتية ومنع السفر وتتبع الأصول." },
    ]}
    outcomesEN={["Stage roadmap & deadlines", "Evidence strategy", "Appeal/cassation viability early"]}
    outcomesAR={["خارطة طريق ومواعيد دقيقة", "خطة الإثبات", "تقييم مبكر لجدوى الاستئناف/التمييز"]}
    processEN={["Intake & scoping", "Pleadings & evidence", "Hearings", "Appeal/cassation (if any)", "Enforcement"]}
    processAR={["استلام وتحديد النطاق", "المرافعات والإثبات", "الجلسات", "الاستئناف/التمييز (إن وجد)", "التنفيذ"]}
    docsEN={["IDs & contracts", "Correspondence & exhibits", "Prior judgments (if any)"]}
    docsAR={["الهويات والعقود", "المراسلات والمستندات المؤيدة", "أحكام سابقة إن وجدت"]}
    feesEN={["Fixed fee per stage", "Clear quote for experts/enforcement"]}
    feesAR={["رسوم ثابتة لكل مرحلة", "تسعير واضح للخبرة/التنفيذ"]}
  />
);



/* ===== Criminal Defense ===== */
const CriminalDefense = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.criminal}
    titleEN="Criminal Defense"
    titleAR="القضايا الجنائية"
    introEN="Focused defense from investigation to appeal — safeguarding due process and your rights at every stage."
    introAR="دفاع مركز من التحقيق حتى الاستئناف مع حماية الضمانات القانونية وحقوق المتهم في جميع المراحل."
    sectionsEN={[
      {
        h: "Coverage",
        p: "We act in misdemeanors and felonies, cybercrime, financial crimes, defamation and extradition interfaces.",
        bullets: ["Investigations & prosecution", "Appeals & cassation", "Travel bans & asset freezes challenges"],
      },
      { h: "Approach", p: "Fact-driven case theory, early mitigation where sensible, and discreet client handling." },
    ]}
    sectionsAR={[
      {
        h: "نطاق العمل",
        p: "نتولى الجنح والجنايات وجرائم تقنية المعلومات والجرائم المالية والسب والقذف والتسليم القضائي.",
        bullets: ["التحقيق والادعاء", "الاستئناف والتمييز", "التظلم من منع السفر وتجميد الأصول"],
      },
      { h: "النهج", p: "بناء نظرية واقعية دقيقة، والمعالجة المبكرة عندما تكون مفيدة، والتعامل بسرية عالية." },
    ]}

    outcomesEN={["Early mitigation plan", "Procedural safeguards enforced", "Clear appeal/cassation path if viable"]}
    outcomesAR={["خطة معالجة مبكرة", "تفعيل الضمانات الإجرائية", "مسار واضح للاستئناف/التمييز عند الجدوى"]}

    processEN={["Investigation-stage guidance", "Defense theory & evidence map", "Hearing preparation", "Appeal/cassation assessment"]}
    processAR={["إرشاد مرحلة التحقيق", "صياغة نظرية دفاع وخريطة الأدلة", "التحضير للجلسات", "تقييم الاستئناف/التمييز"]}

    docsEN={["Charge sheet / summons", "Forensic/device reports (if any)", "Witness list & contacts"]}
    docsAR={["أمر الإحالة/الاستدعاء", "تقارير الأدلة الرقمية/الطب الشرعي إن وجدت", "قائمة الشهود وبيانات التواصل"]}

    feesEN={["Fixed fee per phase", "Transparent expert-report costs if needed"]}
    feesAR={["رسوم ثابتة لكل مرحلة", "تكاليف تقارير الخبراء (شفافة) عند الحاجة"]}

    faqEN={[
      { q: "Will I face a travel ban?", a: "Depends on case type and stage; we advise and file challenges where possible." },
      { q: "Can I get an interpreter?", a: "Yes—tell us your language and we’ll arrange through court procedures." }
    ]}
    faqAR={[
      { q: "هل سأواجه منع سفر؟", a: "يعتمد على نوع القضية ومرحلتها؛ نرشدك ونتظلم عند الاقتضاء." },
      { q: "هل يتوفر مترجم؟", a: "نعم—أبلغنا باللغة المطلوبة وننسق وفق إجراءات المحكمة." }
    ]}
  />
);
//labour law
const LabourLaw = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.labour}
    titleEN="Labour & Employment"
    titleAR="قانون العمل"
    introEN="Practical solutions for employees and employers — from unpaid dues to complex policy and compliance."
    introAR="حلول عملية للموظفين وأصحاب العمل — من المستحقات المتأخرة إلى السياسات والامتثال المعقد."
    sectionsEN={[
      {
        h: "Employee Matters",
        p: "Claims for end-of-service, wage disputes, overtime, leave, and arbitrary dismissal.",
        bullets: ["Unpaid wages / EOSB", "Wrongful termination", "Overtime & leave claims"],
      },
      {
        h: "Employer Advisory",
        p: "Contracts, handbooks, compliance audits, and dispute avoidance.",
        bullets: ["Contracts & policies", "Internal investigations", "Settlement strategies"],
      },
    ]}
    sectionsAR={[
      {
        h: "قضايا الموظفين",
        p: "مطالبات نهاية الخدمة ونزاعات الأجور والعمل الإضافي والإجازات والفصل التعسفي.",
        bullets: ["الأجور / نهاية الخدمة", "الفصل التعسفي", "ساعات العمل والإجازات"],
      },
      {
        h: "استشارات أصحاب العمل",
        p: "العقود واللوائح ومراجعات الامتثال وتجنّب النزاعات.",
        bullets: ["العقود والسياسات", "تحقيقات داخلية", "استراتيجيات التسوية"],
      },
    ]}

    outcomesEN={["Claim value estimate", "Documented legal position", "Settlement options mapped"]}
    outcomesAR={["تقدير قيمة المطالبة", "موقف قانوني موثق", "خيارات التسوية محددة"]}

    processEN={["Contract & payroll review", "Demand letter", "Filing if needed", "Mediation/Committee", "Judgment/settlement"]}
    processAR={["مراجعة العقد والرواتب", "خطاب مطالبة", "القيد إذا لزم", "الوساطة/اللجنة", "حكم/تسوية"]}

    docsEN={["Employment contract / offer", "Payslips & bank statements", "Email/WhatsApp evidence"]}
    docsAR={["عقد العمل/العرض", "قسائم الرواتب وكشوف الحساب", "مراسلات البريد/الواتساب"]}

    feesEN={["Employee fixed-fee packs", "Employer advisory retainers"]}
    feesAR={["باقات رسوم ثابتة للموظف", "اتفاقيات استشارية لأصحاب العمل"]}

    faqEN={[
      { q:"How long do wage claims take?", a:"Often 1–3 months depending on committee load and document readiness." }
    ]}
    faqAR={[
      { q:"كم تستغرق مطالبات الأجور؟", a:"غالبًا 1–3 أشهر حسب ضغط اللجان وجاهزية المستندات." }
    ]}
  />
);


/* ===== Corporate & Commercial ===== */
const CorporateCommercial = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.corporate}
    titleEN="Corporate & Commercial"
    titleAR="الشركات والتجاري"
    introEN="From incorporations to shareholder disputes — we support your transactions and protect governance."
    introAR="من التأسيس إلى نزاعات الشركاء — ندعم معاملاتكم ونحمي الحوكمة."
    sectionsEN={[
      {
        h: "Transactions",
        p: "JV and M&A support, commercial contracts aligned with regulatory frameworks.",
        bullets: ["Shareholders’ agreements", "Distribution & agency", "NDAs, MSAs & SLAs"],
      },
      {
        h: "Disputes",
        p: "Shareholder conflicts, director liability, urgent measures and enforcement.",
        bullets: ["Injunctions & precautionary measures", "Boardroom disputes", "Claims for breach & misrepresentation"],
      },
    ]}
    sectionsAR={[
      {
        h: "المعاملات",
        p: "المشاريع المشتركة والاندماجات والعقود التجارية وفق الأطر التنظيمية.",
        bullets: ["اتفاقيات الشركاء", "التوزيع والوكالات", "اتفاقيات السرية والخدمة"],
      },
      {
        h: "النزاعات",
        p: "خلافات الشركاء ومسؤولية المديرين والإجراءات العاجلة والتنفيذ.",
        bullets: ["الأوامر الوقتية والاحترازية", "نزاعات مجالس الإدارة", "دعاوى الإخلال والتمثيل غير الصحيح"],
      },
    ]}

    outcomesEN={["Risk-reduced contracts", "Governance clarity", "Faster closings"]}
    outcomesAR={["عقود منخفضة المخاطر", "حوكمة أوضح", "إغلاق أسرع"]}

    processEN={["Scoping", "Drafting/redlines", "Approvals", "Closing/implementation"]}
    processAR={["تحديد النطاق", "الصياغة/الملاحظات", "الموافقات", "الإغلاق/التنفيذ"]}

    docsEN={["Trade license & AoA", "Cap table / shareholders list", "Prior agreements & term sheets"]}
    docsAR={["رخصة التجارة والعقد التأسيسي", "هيكل/قائمة المساهمين", "اتفاقيات سابقة ومسودات الشروط"]}

    feesEN={["Flat-fee per document type", "Bundle pricing for repeated work"]}
    feesAR={["رسوم ثابتة لكل نوع مستند", "تجميع أسعار للأعمال المتكررة"]}

    faqEN={[
      { q:"Do you work with ADGM/DIFC frameworks?", a:"Yes, we align documents to onshore and free-zone regimes." }
    ]}
    faqAR={[
      { q:"هل تعملون مع أطر ADGM/DIFC؟", a:"نعم، نُطابق الوثائق مع الأطر داخل الدولة والمناطق الحرة." }
    ]}
  />
);
//banking financial
const BankingFinance = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.banking}
    titleEN="Banking & Finance"
    titleAR="المصارف والتمويل"
    introEN="Enforcement, restructuring, and settlement strategies informed by market realities and statute."
    introAR="التنفيذ وإعادة الهيكلة واستراتيجيات التسوية وفق الواقع السوقي والنص القانوني."
    sectionsEN={[
      {
        h: "Matters",
        p: "Guarantees, bounced cheques, defaults, enforcement and insolvency interfaces.",
        bullets: ["Settlement frameworks", "Asset tracing", "Insolvency touchpoints"],
      },
      {
        h: "For Lenders & Borrowers",
        p: "Balanced, solution-oriented advice that preserves value and relationships.",
      },
    ]}
    sectionsAR={[
      {
        h: "الموضوعات",
        p: "الضمانات والشيكات المرتجعة والتعثر والتنفيذ وروابط الإعسار.",
        bullets: ["أطر التسوية", "تتبع الأصول", "نقاط التماس مع الإعسار"],
      },
      {
        h: "للممولين والمقترضين",
        p: "استشارات متوازنة تركّز على الحلول وتحافظ على القيمة والعلاقات.",
      },
    ]}

    outcomesEN={["Clear enforcement route", "Settlement frameworks", "Asset-trace checklist"]}
    outcomesAR={["مسار تنفيذ واضح", "أطر تسوية", "قائمة تتبع الأصول"]}

    processEN={["Instrument review", "Demand/negotiation", "Filing & measures", "Execution/settlement"]}
    processAR={["مراجعة السندات", "خطاب مطالبة/تفاوض", "القيد والإجراءات", "التنفيذ/التسوية"]}

    docsEN={["Facility agreements", "Guarantees & cheques", "Statements & security documents"]}
    docsAR={["اتفاقيات التمويل", "الضمانات والشيكات", "الكشوف والمستندات التأمينية"]}

    feesEN={["Stage-based legal fees", "Execution actions quoted upfront"]}
    feesAR={["رسوم قانونية مرحلية", "تسعير خطوات التنفيذ مسبقًا"]}

    faqEN={[
      { q:"Can we avoid court?", a:"Often we try structured settlement first; if not, we proceed to enforcement." }
    ]}
    faqAR={[
      { q:"هل يمكن تجنب المحكمة؟", a:"غالبًا نبدأ بالتسوية المنظّمة، وإن تعذّر ننتقل للتنفيذ." }
    ]}
  />
);


/* ===== Medical Malpractice ===== */
const MedicalMalpractice = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.medical}
    titleEN="Medical Malpractice"
    titleAR="الأخطاء الطبية"
    introEN="Claims rooted in expert reports and statutory procedures — with empathy for patients and families."
    introAR="دعاوى مبنية على تقارير خبراء وإجراءات نظامية — مع مراعاة إنسانية للمرضى وذويهم."
    sectionsEN={[
      {
        h: "Scope",
        p: "Negligence, consent issues, insurer disputes, and regulator/medical boards engagement.",
        bullets: ["Expert strategy", "Causation analysis", "Damages quantification"],
      },
      { h: "Process", p: "Evidence gathering, regulator findings, and carefully timed filings." },
    ]}
    sectionsAR={[
      {
        h: "النطاق",
        p: "الإهمال ومشكلات الموافقة ونزاعات شركات التأمين والتعامل مع الجهات الرقابية واللجان الطبية.",
        bullets: ["استراتيجية الخبرة", "تحليل السببية", "تقدير التعويض"],
      },
      { h: "الإجراءات", p: "جمع الأدلة والاعتماد على تقارير الجهات المختصة وتوقيت صحيح للرفع." },
    ]}

    outcomesEN={["Clinically backed claim theory", "Causation clarity", "Realistic damages range"]}
    outcomesAR={["نظرية مطالبة مدعومة طبيًا", "وضوح السببية", "نطاق تعويض واقعي"]}

    processEN={["Records & consent analysis", "Expert report", "Regulator filing", "Court claim"]}
    processAR={["مراجعة السجلات والموافقات", "تقرير خبير", "تقديم للجهات المختصة", "الدعوى القضائية"]}

    docsEN={["Medical records", "Consent forms", "Insurer correspondence", "Hospital/clinic reports"]}
    docsAR={["السجلات الطبية", "نماذج الموافقة", "مراسلات شركة التأمين", "تقارير المستشفى/العيادة"]}

    feesEN={["Expert fees disclosed", "Phase-based legal fees"]}
    feesAR={["رسوم الخبرة معلنة", "رسوم قانونية مرحلية"]}

    faqEN={[
      { q:"Do we need an expert first?", a:"Yes, expert opinion is typically essential before filing." }
    ]}
    faqAR={[
      { q:"هل يلزم رأي خبير أولاً؟", a:"عادةً رأي الخبير ضروري قبل رفع الدعوى." }
    ]}
  />
);


/* ===== Family & Personal Status ===== */
const FamilyStatus = ({ lang }) => (
  <PageShell
    lang={lang}
    banner={IMG.areas.family}
    titleEN="Family & Personal Status"
    titleAR="الأحوال الشخصية"
    introEN="Clear, dignified guidance across marriage, divorce, custody, guardianship and inheritance matters — with practical steps and realistic timelines."
    introAR="إرشاد واضح ومحترف في قضايا الزواج والطلاق والحضانة والولاية والميراث — بخطوات عملية وجداول زمنية واقعية."
    sectionsEN={[
      {
        h: "Marriage & Divorce",
        p: "Marriage contracts, private settlements, and court filings for separation or divorce (including non-Muslim civil procedures where applicable).",
        bullets: ["Marriage contracts & notarization", "Khulʿ / talaq / civil divorce", "Financial settlements & maintenance"],
      },
      {
        h: "Custody & Guardianship",
        p: "Child-focused strategies that prioritize stability — custody, visitation schedules, relocation issues and guardianship requests.",
        bullets: ["Custody & visitation", "Travel consent & relocation", "Guardianship and education/health decisions"],
      },
      {
        h: "Inheritance & Wills",
        p: "Succession planning and probate support under UAE law, DIFC/ADGM wills, and cross-border coordination where assets are abroad.",
        bullets: ["UAE probate filings", "DIFC/ADGM wills", "Heirs’ shares & estate distribution"],
      },
      {
        h: "What We Need To Start",
        p: "Bring IDs, marriage/birth certificates, any prior court orders and a short timeline of events. We will extract the legal core quickly.",
        bullets: ["Passport/Emirates ID", "Certificates & prior orders", "Brief event summary & objectives"],
      },
      {
        h: "Fees & Timeline",
        p: "We outline filing fees and our fixed/phase-based fees before starting. Typical matters move through negotiation, filing, and judgment/settlement.",
      },
    ]}
    sectionsAR={[
      {
        h: "الزواج والطلاق",
        p: "عقود الزواج، التسويات الودية، ورفع دعاوى الانفصال أو الطلاق (بما في ذلك الإجراءات المدنية لغير المسلمين عند الاقتضاء).",
        bullets: ["توثيق عقود الزواج", "خلع / طلاق / طلاق مدني", "التسويات المالية والنفقة"],
      },
      {
        h: "الحضانة والولاية",
        p: "استراتيجيات تركّز على مصلحة الطفل واستقراره — الحضانة وتنظيم الزيارة والسفر والانتقال وطلبات الولاية.",
        bullets: ["الحضانة والزيارة", "موافقات السفر والانتقال", "الولاية وقرارات التعليم والصحة"],
      },
      {
        h: "الميراث والوصايا",
        p: "تخطيط التركات وإجراءات حصر الإرث وفق القانون الإماراتي، ووصايا DIFC/ADGM، والتنسيق العابر للحدود عند وجود أصول خارج الدولة.",
        bullets: ["حصر الإرث في الدولة", "وصايا DIFC/ADGM", "أنصبة الورثة وتوزيع التركة"],
      },
      {
        h: "المستندات المطلوبة للبدء",
        p: "يرجى إحضار الهوية، شهادات الزواج/الميلاد، أي أحكام سابقة، وخلاصة زمنية للأحداث. سنحدد الجوانب القانونية بسرعة.",
        bullets: ["جواز/هوية إماراتية", "الشهادات والأحكام السابقة", "ملخص للأحداث والأهداف"],
      },
      {
        h: "الرسوم والمدة",
        p: "نوضح رسوم المحكمة ورسومنا (الثابتة أو المرحلية) قبل البدء. تمر القضايا عادة عبر التفاوض ثم القيد والمحاكمة/التسوية.",
      },
    ]}

    outcomesEN={["Clear next steps within 48h", "Child-first custody plans", "Realistic settlement ranges"]}
    outcomesAR={["خطوات واضحة خلال 48 ساعة", "خطط حضانة تركّز على مصلحة الطفل", "نطاقات تسوية واقعية"]}

    processEN={["Intake & facts timeline", "Document review and strategy memo", "Negotiation or filing plan with timeline"]}
    processAR={["استلام المعلومات وخلاصة زمنية", "مراجعة المستندات ومذكرة استراتيجية", "خطة تفاوض أو قيد مع الجدول الزمني"]}

    docsEN={["Passports / Emirates IDs", "Marriage & birth certificates", "Prior court orders or settlements"]}
    docsAR={["جوازات السفر / الهوية الإماراتية", "شهادات الزواج والميلاد", "أحكام أو تسويات سابقة"]}

    feesEN={["Free 15 min consulting call", "Fixed fee for initial strategy memo", "Phase-based fees for filing & hearings"]}
    feesAR={["استشارة هاتفية مجانية لمدة 15 دقيقة", "رسوم ثابتة لمذكرة الاستراتيجية الأولية", "رسوم مرحلية للقيد والجلسات"]}

    faqEN={[
      { q: "How long do custody matters take?", a: "Typical timelines are 2–5 months depending on complexity and court schedules." },
      { q: "Can we do a private settlement?", a: "Yes, and we’ll formalize it to make it enforceable." },
    ]}
    faqAR={[
      { q: "كم تستغرق قضايا الحضانة؟", a: "عادة بين 2–5 أشهر حسب التعقيد وجداول المحاكم." },
      { q: "هل يمكن التسوية الودية؟", a: "نعم، ونقوم بتوثيقها لتكون قابلة للتنفيذ." },
    ]}
  />
);
function MapCard({ lang }) {
  const addrEN =
    "Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE";
  const addrAR =
    "شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي، الإمارات العربية المتحدة";
  const isAR = lang === "ar";

  // use address-based embed (works even before GBP verification)
  const addressQuery = encodeURIComponent(addrEN);
  const mapEmbed = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const dirLink = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-amber-600" />
          <h3 className="font-semibold text-slate-800">
            {isAR ? "الموقع على الخريطة" : "Location on the Map"}
          </h3>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          {isAR ? addrAR : addrEN}
        </p>
      </div>

      <div className="relative h-[320px] w-full">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />
        )}
        <iframe
          title={isAR ? "خريطة المكتب" : "Office Map"}
          src={mapEmbed}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/5 to-transparent" />
      </div>

      <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-slate-500">
          {isAR ? "قد تختلف الإرشادات وفق حركة المرور." : "Directions may vary with traffic."}
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-700"
          >
            {isAR ? "فتح في خرائط جوجل" : "Open in Google Maps"}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={dirLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-700"
          >
            {isAR ? "الحصول على الاتجاهات" : "Get Directions"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}



// ---- Contact section (hoisted) ----
function ContactSection({ lang }) {
  const D = DICT[lang];
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef(null);
  const isAR = lang === "ar";

  return (
    <section className="relative bg-gradient-to-b from-amber-50/60 via-white to-white" dir={isAR ? "rtl" : "ltr"}>
      <Container>
        <div className="py-12">
          <SectionTitle title={D.contact.title} icon={Handshake} />

          {/* === TOP ROW: Form (left) + Info cards (right) === */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-12">
            {/* LEFT: Form */}
            <div className="md:col-span-7">
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setSent(false);
                  emailjs
                    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
                    .then(() => { setLoading(false); setSent(true); e.target.reset(); })
                    .catch(() => { setLoading(false); alert(isAR ? "تعذّر الإرسال. حاول لاحقاً." : "Failed to send. Please try again later."); });
                }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-600">{D.contact.name}</label>
                    <input name="user_name" required className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" placeholder={D.contact.name}/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-600">{D.contact.email}</label>
                    <input name="user_email" type="email" required className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" placeholder={D.contact.email}/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-600">{D.contact.phone}</label>
                    <input name="user_phone" required className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" placeholder={D.contact.phone}/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-600">{isAR ? "الموضوع" : "Subject"}</label>
                    <input name="subject" className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" placeholder={isAR ? "الموضوع" : "Subject"}/>
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-600">{D.contact.message}</label>
                    <textarea name="message" required className="h-32 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" placeholder={D.contact.message}/>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                  <Button className="w-full sm:w-auto disabled:opacity-60" disabled={loading}>
                    <Mail className="h-4 w-4" />
                    {loading ? (isAR ? "يتم الإرسال..." : "Sending...") : D.contact.submit}
                  </Button>
                  {sent && <span className="text-sm text-emerald-700">{isAR ? "تم استلام رسالتك. سنتواصل معك قريباً." : "Your message was sent. We’ll be in touch shortly."}</span>}
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {isAR ? "بإرسال هذا النموذج، فإنك توافق على معالجة بياناتك وفق سياسة الخصوصية."
                        : "By submitting this form, you agree to our processing of your data under our Privacy Policy."}
                </p>
              </form>
            </div>

            {/* RIGHT: Info cards */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <span className="font-medium">{D.contact.address}:</span>{" "}
                  {isAR ? BRAND.addressAR : BRAND.addressEN}
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <span className="font-medium">Email:</span>{" "}
                  <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">{BRAND.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <span className="font-medium">{isAR ? "الهاتف" : "Phone"}:</span>{" "}
                  <a href={`tel:${BRAND.phoneE164}`} className="underline underline-offset-2">{BRAND.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Clock />
                <div className="text-sm text-slate-700">
                  <span className="font-medium">{D.contact.hours}:</span> {D.contact.hoursVal}
                </div>
              </div>
            </div>
          </div>

          {/* === BOTTOM ROW: Centered Map === */}
          <div className="mt-8 md:mt-10">
            <div className="mx-auto w-full max-w-4xl">
              <MapCard lang={lang} />
            </div>
          </div>
        </div>
      </Container>

      {/* Floating WhatsApp / Call (unchanged) */}
      {/* Floating WhatsApp / Call */}
<div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col gap-3">
  <a
    href={`https://wa.me/${BRAND.whatsappE164.replace(/\D/g, "")}`}
    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg ring-1 ring-black/10"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
  <a
    href={`tel:${BRAND.phoneE164}`}
    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg ring-1 ring-black/10"
    aria-label="Call"
  >
    <Phone className="h-6 w-6" />
  </a>
</div>

    </section>
  );
}


/* -------- Contact Page wrapper (route) -------- */
const Contact = ContactSection; // make sure ContactSection is defined above this
const ContactPage = ({ lang }) => <ContactSection lang={lang} />;

/* -------- Scroll to top on route change -------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* -------- 404 -------- */
const NotFound = ({ lang }) => (
  <Container>
    <div className="py-16">
      <h1 className="text-3xl font-serif text-slate-800">
        {lang === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
      </h1>
      <p className="mt-3 text-slate-600">
        {lang === "ar" ? "تحقق من الرابط أو عُد إلى الرئيسية." : "Check the link or go back home."}
      </p>
      <div className="mt-6">
        <Link to="/" className="text-amber-700 hover:underline">
          {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>
    </div>
  </Container>
);

/* ===========================
   APP (Router + Layout)
=========================== */
function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <BrowserRouter>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>
        <ScrollToTop />
        <Navbar lang={lang} setLang={setLang} />

        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage lang={lang} />} />

          {/* Top-level pages (no internal footers) */}
          <Route path="/about" element={<About lang={lang} showTeam />} />
          <Route path="/services" element={<OurServices lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="/areas" element={<Areas lang={lang} />} />

          {/* Service detail pages */}
          <Route path="/services/family-status" element={<FamilyStatus lang={lang} />} />
          <Route path="/services/criminal-defense" element={<CriminalDefense lang={lang} />} />
          <Route path="/services/labour-law" element={<LabourLaw lang={lang} />} />
          <Route path="/services/corporate-commercial" element={<CorporateCommercial lang={lang} />} />
          <Route path="/services/banking-finance" element={<BankingFinance lang={lang} />} />
          <Route path="/services/medical-malpractice" element={<MedicalMalpractice lang={lang} />} />
          <Route path="/services/litigation-stages" element={<LitigationStages lang={lang} />} />
          {/* 404 */}
          <Route path="*" element={<NotFound lang={lang} />} />
          <Route path="/privacy" element={<PrivacyPage lang={lang} />} />
          <Route path="/terms" element={<TermsPage lang={lang} />} />
          <Route path="/disclaimer" element={<DisclaimerPage lang={lang} />} />
          <Route path="/cookies" element={<CookiesPage lang={lang} />} />

        </Routes>

        {/* Single global footer */}
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}

export default App;


