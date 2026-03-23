import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../data/translations'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const c = tr.contact
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    user_name: '', user_email: '', user_phone: '', subject: '', message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm('service_cusdo1k', 'template_l08eik3', formRef.current, 'BSVkZlqJCjEXVY7KF')
      setStatus('success')
      setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-20 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label">{c.label}</span>
          <h1
            className="font-playfair font-700 text-white mt-3 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            {c.title}
          </h1>
          <p className="font-outfit text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-playfair font-700 text-navy text-2xl mb-8">
                  {isAr ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">{c.form.name}</label>
                      <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} className="form-input" required />
                    </div>
                    <div>
                      <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">{c.form.email}</label>
                      <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} className="form-input" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">{c.form.phone}</label>
                      <input type="tel" name="user_phone" value={formData.user_phone} onChange={handleChange} className="form-input" />
                    </div>
                    <div>
                      <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">{c.form.subject}</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">{c.form.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={9} className="form-input resize-none" required />
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-700 font-outfit text-[14px] bg-green-50 p-4 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      {c.form.success}
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="text-red-600 font-outfit text-[14px] bg-red-50 p-4 rounded-xl">
                      {c.form.error}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-4 text-[15px]">
                    {status === 'sending' ? c.form.sending : c.form.submit}
                    {status !== 'sending' && <Send className="w-4 h-4" />}
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <ScrollReveal delay={100}>
                <h2 className="font-playfair font-700 text-navy text-2xl mb-6">
                  {isAr ? 'معلومات التواصل' : 'Contact Information'}
                </h2>

                {[
                  { Icon: Phone, label: c.info.phone, value: '971 52 545 1974', href: 'tel:+971525451974', dir: 'ltr' },
                  { Icon: Mail, label: c.info.email, value: 'f.alsulebi@gmail.com', href: 'mailto:f.alsulebi@gmail.com' },
                  { Icon: MapPin, label: c.info.address, value: isAr ? 'شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي، الإمارات' : 'Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE', href: 'https://maps.app.goo.gl/4ni9iADHJC4anDgN9' },
                  { Icon: Clock, label: c.info.hours, value: isAr ? 'الاثنين – السبت · 10:00 – 19:00' : 'Mon – Sat · 10:00 – 19:00', href: null },
                ].map(({ Icon, label, value, href, dir }, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl mb-3" style={{ background: 'var(--warm)', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,151,62,0.12)' }}>
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-outfit text-[11px] font-600 uppercase tracking-wider text-text-muted mb-1">{label}</div>
                      {href ? (
                        <a href={href} dir={dir} className="font-outfit text-[14px] text-text-primary hover:text-gold transition-colors leading-relaxed block">
                          {value}
                        </a>
                      ) : (
                        <span className="font-outfit text-[14px] text-text-primary leading-relaxed block">{value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <a href="https://wa.me/971525451974" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 rounded-2xl transition-all hover:opacity-90 mt-2"
                  style={{ background: '#25D366' }}
                >
                  <FaWhatsapp className="w-6 h-6 text-white" />
                  <span className="font-outfit font-600 text-white text-[14px]">
                    {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                  </span>
                </a>
              </ScrollReveal>

              </div>
          </div>

          {/* Full-width map */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl overflow-hidden mt-12" style={{ height: '480px' }}>
              <iframe
                src="https://www.google.com/maps?cid=5386227777658469374&output=embed"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
