import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react'
import { FaSnapchatGhost } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../data/translations'
import { services } from '../data/services'

export default function Footer() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)

  return (
    <footer style={{ background: 'var(--navy)' }} className="gold-border-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-playfair font-700 text-white text-sm leading-snug">
                  {isAr ? 'د. فاتن تميم' : 'Dr. Faten Tamim'}
                </div>
                <div className="font-outfit text-xs text-white/50 leading-snug">
                  {isAr ? 'للاستشارات والمرافعات القانونية' : 'Advocates & Legal Consultants'}
                </div>
              </div>
            </div>
            <p className="font-outfit text-[13px] text-white/45 leading-relaxed mb-5">
              {tr.footer.desc}
            </p>
            <div className="font-playfair italic text-gold text-sm mb-6">{tr.footer.tagline}</div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dr-faten-tamim-lawyer-691b58253/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/faten_lawyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.snapchat.com/@fatqnqueen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
              >
                <FaSnapchatGhost className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-600 text-xs uppercase tracking-widest text-gold/70 mb-5">
              {tr.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: isAr ? 'الرئيسية' : 'Home' },
                { to: '/about', label: isAr ? 'من نحن' : 'About Us' },
                { to: '/services', label: isAr ? 'الخدمات' : 'Services' },
                { to: '/contact', label: isAr ? 'اتصل بنا' : 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-outfit text-[13px] text-white/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-outfit font-600 text-xs uppercase tracking-widest text-gold/70 mb-5">
              {tr.footer.practiceAreas}
            </h4>
            <ul className="space-y-3">
              {services.map(svc => (
                <li key={svc.slug}>
                  <Link
                    to={svc.path}
                    className="font-outfit text-[13px] text-white/50 hover:text-gold transition-colors"
                  >
                    {isAr ? svc.titleAr : svc.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-600 text-xs uppercase tracking-widest text-gold/70 mb-5">
              {isAr ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+971525451974" className="font-outfit text-[13px] text-white/50 hover:text-gold transition-colors" dir="ltr">
                  971 52 545 1974
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:f.alsulebi@gmail.com" className="font-outfit text-[13px] text-white/50 hover:text-gold transition-colors break-all">
                  f.alsulebi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-outfit text-[13px] text-white/50 leading-relaxed">
                  {isAr
                    ? 'شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي'
                    : 'Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-outfit text-[13px] text-white/50">
                  {isAr ? 'الاثنين – السبت · 10:00 – 19:00' : 'Mon – Sat · 10:00 – 19:00'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-outfit text-[12px] text-white/30 text-center">
            {tr.footer.rights}
          </p>
          <div className="flex items-center flex-wrap justify-center gap-4">
            {[
              { to: '/privacy', label: tr.footer.privacy },
              { to: '/terms', label: tr.footer.terms },
              { to: '/disclaimer', label: tr.footer.disclaimer },
              { to: '/cookies', label: tr.footer.cookies },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-outfit text-[12px] text-white/30 hover:text-gold/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
