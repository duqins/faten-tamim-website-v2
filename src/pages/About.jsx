import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, BookOpen, Scale } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { teamMembers } from '../data/team'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  const { isAr } = useLanguage()

  const values = isAr ? [
    { icon: Scale, title: 'النزاهة', desc: 'معايير أخلاقية راسخة في كل قضية نتولاها. الشفافية والأمانة ليستا مجرد قيم — إنهما أساس كل علاقة عميل.' },
    { icon: Award, title: 'التميز', desc: 'عمل قانوني متفوق في كل ما نقوم به. من أبحاث القضايا إلى المرافعات أمام المحاكم، نسعى دائمًا نحو أعلى المعايير.' },
    { icon: BookOpen, title: 'الدقة', desc: 'اهتمام دقيق بكل تفصيل قانوني. يُبنى النجاح في القانون على التفاصيل، ولا يفوتنا شيء.' },
    { icon: Users, title: 'النتائج', desc: 'مخرجات تحمي مصالحك وتعززها. ما يهمنا ليس فقط تمثيلك، بل تحقيق أفضل نتيجة ممكنة.' },
  ] : [
    { icon: Scale, title: 'Integrity', desc: 'Unwavering ethical standards in every case we handle. Transparency and honesty are not just values — they are the foundation of every client relationship.' },
    { icon: Award, title: 'Excellence', desc: 'Superior legal work in everything we do. From case research to courtroom advocacy, we relentlessly pursue the highest standards.' },
    { icon: BookOpen, title: 'Precision', desc: 'Meticulous attention to every legal detail. Success in law is built on details, and we miss nothing.' },
    { icon: Users, title: 'Results', desc: 'Outcomes that protect and advance your interests. We care not just about representing you, but about achieving the best possible result.' },
  ]

  return (
    <main>
      {/* Banner */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: 'var(--navy)' }}
      >
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label">{isAr ? 'من نحن' : 'About Us'}</span>
          <h1
            className="font-playfair font-700 text-white mt-3 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            {isAr ? 'التميز القانوني في قلب أبوظبي' : 'Legal Excellence at the Heart of Abu Dhabi'}
          </h1>
          <p className="font-outfit text-white/50 text-lg leading-relaxed">
            {isAr
              ? 'مكتب قانوني متخصص مبني على الخبرة والنزاهة والتميز الحقيقي'
              : 'A boutique law firm built on expertise, integrity, and genuine excellence'}
          </p>
        </div>
      </section>

      {/* Main story */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '500px' }}>
                <img
                  src="/about.jpg"
                  alt="Dr. Faten Tamim Office"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '500px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={100}>
                <span className="section-label">{isAr ? 'قصتنا' : 'Our Story'}</span>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2
                  className="font-playfair font-700 text-navy mt-3 mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}
                >
                  {isAr ? 'إرث من التميز القانوني في أبوظبي' : 'A Legacy of Legal Excellence in Abu Dhabi'}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="space-y-5 font-outfit text-text-secondary text-[15px] leading-[1.9]">
                  <p>
                    {isAr
                      ? 'مكتب الدكتوره فاتن تميم للمحاماه والاستشارات القانونية مكتب قانوني متخصص رائد في أبوظبي، الإمارات العربية المتحدة. تأسس على يد الدكتورة فاتن تميم الصليبي — محامية متميزة وأستاذة جامعية في جامعة أبوظبي — يجمع المكتب بين الخبرة القانونية العميقة والنهج المتمحور حول العميل.'
                      : 'Dr. Faten Tamim Advocates & Legal Consultants is a premier boutique law firm in Abu Dhabi, UAE. Founded by Dr. Faten Tamim Alsulebi — a distinguished advocate and lecturer at Abu Dhabi University — the firm combines deep legal expertise with a relentlessly client-centric approach.'}
                  </p>
                  <p>
                    {isAr
                      ? 'يمثل فريقنا من المحامين المتميزين العملاء على جميع مستويات الجهاز القضائي الإماراتي، من المشورة الأولية حتى التقاضي والاستئناف والتنفيذ. نتخصص في قانون الأسرة والأحوال الشخصية، والدفاع الجنائي، وقانون العمل، والشركات والتجارة، والبنوك والتمويل، والإهمال الطبي.'
                      : 'Our team of distinguished advocates represents clients at all levels of the UAE judicial system, from initial counsel through litigation, appeal, and enforcement. We specialize in family and personal status law, criminal defense, labour law, corporate and commercial matters, banking and finance, and medical malpractice.'}
                  </p>
                  <p>
                    {isAr
                      ? 'ما يميزنا ليس فقط خبرتنا القانونية — بل التزامنا الشخصي بكل عميل. نعتقد أن الوصول إلى عدالة حقيقية يتطلب محامين لا يُترجمون فقط القانون، بل يفهمون أيضًا الإنسان الذي أمامهم ويناضلون بكل قواهم.'
                      : 'What sets us apart is not just our legal expertise — it\'s our personal commitment to every client. We believe that access to real justice requires lawyers who not only understand the law, but understand the human being before them and fight with everything they have.'}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label">{isAr ? 'مكتبنا' : 'Our Office'}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="font-playfair font-700 text-navy mt-3 mb-10 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}
            >
              {isAr ? 'بيئة عمل تعكس جودتنا' : 'A Space That Reflects Our Standards'}
            </h2>
          </ScrollReveal>
          {/* Gallery grid — 5 photos */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Row 1: large left + two stacked right */}
            <ScrollReveal className="sm:col-span-7" delay={0}>
              <div className="rounded-2xl overflow-hidden" style={{ height: '480px' }}>
                <img src="/about-2.jpg" alt={isAr ? 'مكتب فاتن تميم' : 'Faten Tamim Office'} className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <div className="sm:col-span-5 flex flex-col gap-4">
              <ScrollReveal delay={120}>
                <div className="rounded-2xl overflow-hidden" style={{ height: '228px' }}>
                  <img src="/about-5.jpg" alt={isAr ? 'مكتب فاتن تميم' : 'Faten Tamim Office'} className="w-full h-full object-cover object-center" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="rounded-2xl overflow-hidden" style={{ height: '228px' }}>
                  <img src="/about-4.jpg" alt={isAr ? 'مكتب فاتن تميم' : 'Faten Tamim Office'} className="w-full h-full object-cover object-center" />
                </div>
              </ScrollReveal>
            </div>
            {/* Row 2: two equal photos, natural height (no cropping) */}
            <ScrollReveal className="sm:col-span-6" delay={100}>
              <div className="rounded-2xl overflow-hidden">
                <img src="/about-6.jpg" alt={isAr ? 'مكتب فاتن تميم' : 'Faten Tamim Office'} className="w-full h-auto block" />
              </div>
            </ScrollReveal>
            <ScrollReveal className="sm:col-span-6" delay={180}>
              <div className="rounded-2xl overflow-hidden">
                <img src="/about-7.jpg" alt={isAr ? 'مكتب فاتن تميم' : 'Faten Tamim Office'} className="w-full h-auto block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="section-label">{isAr ? 'قيمنا' : 'Our Values'}</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                className="font-playfair font-700 text-navy mt-3 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}
              >
                {isAr ? 'المبادئ التي تقودنا' : 'The Principles That Guide Us'}
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className="card-hover p-7 rounded-2xl bg-white border"
                  style={{ borderColor: 'rgba(0,0,0,0.04)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(200,151,62,0.1)' }}>
                    <v.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-600 text-navy text-xl mb-3">{v.title}</h3>
                  <p className="font-outfit text-text-secondary text-[14px] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: photo strip */}
            <ScrollReveal className="flex -space-x-4 rtl:space-x-reverse">
              {teamMembers.map((m, i) => (
                <div
                  key={m.slug}
                  className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-navy flex-shrink-0"
                  style={{ zIndex: teamMembers.length - i }}
                >
                  <img
                    src={m.photo}
                    alt={isAr ? m.nameAr : m.nameEn}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </ScrollReveal>
            {/* Right: text + CTA */}
            <div className="flex-1 text-center lg:text-start">
              <ScrollReveal delay={100}>
                <h2
                  className="font-playfair font-700 text-white mb-3 leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  {isAr ? 'فريق من 3 محامين متميزين' : 'A Team of 3 Distinguished Attorneys'}
                </h2>
                <p className="font-outfit text-white/50 text-[15px] leading-relaxed mb-6 max-w-xl">
                  {isAr
                    ? 'خبرة مشتركة تتجاوز 35 عامًا في القانون الإماراتي والدولي'
                    : 'Combined expertise spanning over 35 years in UAE and international law'}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link to="/team" className="btn-primary">
                  {isAr ? 'تعرف على فريقنا' : 'Meet the Full Team'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--warm)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-playfair font-700 text-navy mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}
            >
              {isAr ? 'هل تحتاج إلى مشورة قانونية متخصصة؟' : 'Need Expert Legal Counsel?'}
            </h2>
            <p className="font-outfit text-text-secondary mb-8 text-[15px] leading-relaxed">
              {isAr
                ? 'تواصل مع فريقنا اليوم لاستشارة أولية سرية وتقييم قضيتك.'
                : 'Contact our team today for a confidential initial consultation and case assessment.'}
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
