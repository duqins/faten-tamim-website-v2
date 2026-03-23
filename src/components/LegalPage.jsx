import ScrollReveal from './ScrollReveal'

export default function LegalPage({ content }) {
  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-16 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h1
            className="font-playfair font-700 text-white mb-3 leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            {content.title}
          </h1>
          <p className="font-outfit text-white/40 text-[13px]">{content.updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {content.sections.map((sec, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-4">{sec.heading}</h2>
                  <p className="font-outfit text-text-secondary text-[15px] leading-[1.9]">{sec.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
