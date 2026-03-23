import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/971525451974"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+971525451974"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'var(--gold)' }}
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 text-navy" />
      </a>
    </div>
  )
}
