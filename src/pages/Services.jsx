import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'

export default function Services() {
  const { isAr } = useLanguage()

  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-20 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label">{isAr ? 'مجالات الممارسة' : 'Practice Areas'}</span>
          <h1
            className="font-playfair font-700 text-white mt-3 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            {isAr ? 'خدماتنا القانونية' : 'Our Legal Services'}
          </h1>
          <p className="font-outfit text-white/50 text-lg leading-relaxed">
            {isAr
              ? 'تمثيل متخصص شامل في جميع مجالات القانون الإماراتي'
              : 'Comprehensive expert representation across all areas of UAE law'}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 80}>
                <Link
                  to={svc.path}
                  className="card-hover block rounded-2xl bg-white border group overflow-hidden"
                  style={{ borderColor: 'rgba(0,0,0,0.04)' }}
                >
                  {/* Card header */}
                  <div className="p-8 pb-0">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: 'rgba(200,151,62,0.1)' }}
                    >
                      <svc.Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h2 className="font-playfair font-600 text-navy text-xl mb-3 leading-snug">
                      {isAr ? svc.titleAr : svc.titleEn}
                    </h2>
                    <p className="font-outfit text-text-secondary text-[14px] leading-relaxed mb-6">
                      {isAr ? svc.shortDescAr : svc.shortDescEn}
                    </p>
                  </div>

                  {/* Key outcomes preview */}
                  <div className="px-8 pb-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(isAr ? svc.outcomesAr : svc.outcomesEn).slice(0, 3).map((o, j) => (
                        <span key={j} className="tag-pill text-[12px]">{o}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 font-outfit text-[13px] font-600 text-gold group-hover:gap-3 transition-all">
                      {isAr ? 'اعرف المزيد' : 'Learn More'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom gold bar on hover */}
                  <div
                    className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: 'var(--gold)' }}
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-label">{isAr ? 'لماذا تختارنا' : 'Why Choose Us'}</span>
              <h2
                className="font-playfair font-700 text-navy mt-3 mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}
              >
                {isAr ? 'الفرق الذي يحدثه الخبراء' : 'The Difference Expertise Makes'}
              </h2>
              <div className="space-y-5 font-outfit text-text-secondary text-[15px] leading-[1.9]">
                <p>
                  {isAr
                    ? 'في عالم قانوني معقد ومتشعب كعالم الإمارات، الخبرة ليست مجرد ميزة — إنها ضرورة. يجمع مكتبنا بين العمق القانوني، والخبرة القضائية الفعلية، والالتزام الشخصي لكل عميل.'
                    : 'In the complex, multifaceted UAE legal landscape, expertise is not just an advantage — it\'s a necessity. Our firm combines legal depth, real courtroom experience, and genuine personal commitment to every client.'}
                </p>
                <p>
                  {isAr
                    ? 'مع فريق يضم قضاة سابقين، ومحاضرين جامعيين، ومحامين متمرسين في المحاكم الاتحادية، نقدم مزيجًا لا مثيل له من المعرفة الأكاديمية والحكمة العملية.'
                    : 'With a team that includes former judges, university lecturers, and advocates seasoned in Federal Courts, we offer an unmatched combination of academic knowledge and practical wisdom.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '7', label: isAr ? 'مجالات ممارسة' : 'Practice Areas' },
                { val: '98%', label: isAr ? 'رضا العملاء' : 'Client Satisfaction' },
                { val: '3', label: isAr ? 'محامون متخصصون' : 'Expert Attorneys' },
                { val: '15+', label: isAr ? 'سنة خبرة' : 'Years Experience' },
              ].map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div
                    className="p-8 rounded-2xl text-center"
                    style={{ background: i % 2 === 0 ? 'var(--navy)' : 'var(--warm)', border: '1px solid rgba(0,0,0,0.04)' }}
                  >
                    <div className={`font-playfair font-700 text-3xl mb-2 ${i % 2 === 0 ? 'text-gold' : 'text-navy'}`}>
                      {s.val}
                    </div>
                    <div className={`font-outfit text-[12px] uppercase tracking-wider ${i % 2 === 0 ? 'text-white/50' : 'text-text-muted'}`}>
                      {s.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="absolute inset-0 dot-texture pointer-events-none" />
            <h2
              className="font-playfair font-700 text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}
            >
              {isAr ? 'هل تحتاج إلى مساعدة قانونية؟' : 'Need Legal Assistance?'}
            </h2>
            <p className="font-outfit text-white/50 mb-8 text-[15px] leading-relaxed">
              {isAr
                ? 'تواصل مع فريقنا اليوم لاستشارة أولية سرية.'
                : 'Contact our team today for a confidential initial consultation.'}
            </p>
            <Link to="/contact" className="btn-primary">
              {isAr ? 'احجز استشارة' : 'Book a Consultation'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
