import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../data/translations'
import { services } from '../data/services'

export default function Navbar() {
  const { lang, toggleLang, isAr } = useLanguage()
  const tr = useT(lang)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navBg = scrolled || !isHome
    ? 'glass-nav shadow-sm border-b border-black/5'
    : 'bg-transparent'

  const linkColor = scrolled || !isHome ? 'text-navy hover:text-gold' : 'text-white/90 hover:text-gold-light'
  const logoColor = scrolled || !isHome ? 'text-navy' : 'text-white'

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo.png" alt="Faten Tamim Logo" className="h-10 w-10 object-contain" />
            <div className={`hidden sm:block transition-colors duration-300 ${logoColor}`}>
              <div className="font-playfair font-700 text-sm leading-tight">
                {isAr ? 'د. فاتن تميم' : 'Dr. Faten Tamim'}
              </div>
              <div className="font-outfit text-xs opacity-70 leading-tight">
                {isAr ? 'للمحاماه والاستشارات القانونية' : 'Advocates & Legal Consultants'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" label={tr.nav.home} active={location.pathname === '/'} color={linkColor} />
            <NavLink to="/about" label={tr.nav.about} active={isActive('/about')} color={linkColor} />

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-outfit font-500 transition-colors duration-200 ${linkColor} ${isActive('/services') ? '!text-gold' : ''}`}
              >
                {tr.nav.services}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className={`absolute ${isAr ? 'right-0' : 'left-0'} top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-black/5 py-2 z-50`}>
                  <div className="px-4 py-2 border-b border-gray-100 mb-1">
                    <Link
                      to="/services"
                      className="text-xs font-outfit font-600 uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
                    >
                      {isAr ? 'عرض جميع الخدمات' : 'View All Services'} →
                    </Link>
                  </div>
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={svc.path}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-cream transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <svc.Icon className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-[13px] font-outfit font-500 text-text-primary group-hover:text-navy transition-colors">
                        {isAr ? svc.titleAr : svc.titleEn}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/team" label={tr.nav.team} active={isActive('/team')} color={linkColor} />
            <NavLink to="/news" label={isAr ? 'الأخبار' : 'News'} active={isActive('/news')} color={linkColor} />
            <NavLink to="/contact" label={tr.nav.contact} active={isActive('/contact')} color={linkColor} />
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 text-[12px] font-outfit font-600 px-3 py-1.5 rounded-full border transition-all duration-200 ${
                scrolled || !isHome
                  ? 'border-navy/20 text-navy hover:border-gold hover:text-gold'
                  : 'border-white/30 text-white/90 hover:border-gold hover:text-gold'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {tr.nav.langToggle}
            </button>
            <Link
              to="/contact"
              className="btn-primary text-[13px] py-2.5 px-5"
            >
              {tr.nav.bookConsult}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'text-navy' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-nav border-t border-black/5 shadow-xl">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <MobileLink to="/" label={tr.nav.home} />
            <MobileLink to="/about" label={tr.nav.about} />
            <div className="py-1">
              <div className="text-xs font-outfit font-600 uppercase tracking-wider text-text-muted px-3 py-2">
                {tr.nav.services}
              </div>
              <MobileLink to="/services" label={isAr ? 'عرض جميع الخدمات' : 'All Services'} indent />
              {services.map(svc => (
                <MobileLink
                  key={svc.slug}
                  to={svc.path}
                  label={isAr ? svc.titleAr : svc.titleEn}
                  indent
                />
              ))}
            </div>
            <MobileLink to="/team" label={tr.nav.team} />
            <MobileLink to="/news" label={isAr ? 'الأخبار' : 'News'} />
            <MobileLink to="/contact" label={tr.nav.contact} />
            <div className="pt-3 flex gap-3">
              <button
                onClick={toggleLang}
                className="flex-1 py-2.5 border border-navy/20 rounded-xl text-[13px] font-outfit font-600 text-navy hover:border-gold hover:text-gold transition-colors text-center"
              >
                {tr.nav.langToggle}
              </button>
              <Link
                to="/contact"
                className="flex-1 btn-primary justify-center py-2.5 text-center text-[13px]"
              >
                {tr.nav.bookConsult}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, label, active, color }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-lg text-[13px] font-outfit font-500 transition-colors duration-200 ${color} ${active ? '!text-gold' : ''}`}
    >
      {label}
    </Link>
  )
}

function MobileLink({ to, label, indent = false }) {
  return (
    <Link
      to={to}
      className={`block py-2.5 text-[14px] font-outfit font-500 text-text-primary hover:text-gold transition-colors rounded-lg hover:bg-cream ${indent ? 'px-6' : 'px-3'}`}
    >
      {label}
    </Link>
  )
}
