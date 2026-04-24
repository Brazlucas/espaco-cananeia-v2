import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ESTRUTURA', href: '#estrutura' },
  { name: 'EVENTOS', href: '#eventos' },
  { name: 'ORÇAMENTOS', href: '#orcamentos' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2'
          : 'py-3'
      }`}
      style={{
        background: isScrolled
          ? 'rgba(10,10,10,0.97)'
          : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center relative">
        {/* Logo - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a href="#home" className="flex flex-col items-center no-underline">
            <img
              src="/lukinhas/logo.png"
              alt="Espaço Cananeia"
              style={{
                height: isScrolled ? '48px' : '62px',
                width: 'auto',
                transition: 'height 0.4s ease',
                filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.3))',
              }}
              onError={(e) => {
                // Fallback SVG logo if image not found
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            {/* Fallback text logo */}
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center' }}>
              {/* Gold crest icon */}
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '4px' }}>
                <path d="M30 6 L52 18 L52 36 Q52 50 30 58 Q8 50 8 36 L8 18 Z" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
                <circle cx="30" cy="30" r="10" fill="none" stroke="#C9A84C" strokeWidth="1"/>
                <text x="30" y="35" textAnchor="middle" fontFamily="Cinzel,serif" fontSize="10" fill="#C9A84C" fontWeight="500">EC</text>
                {/* Laurel branches suggestion */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180
                  const x1 = 30 + 22 * Math.cos(rad)
                  const y1 = 30 + 22 * Math.sin(rad)
                  const x2 = 30 + 28 * Math.cos(rad)
                  const y2 = 30 + 28 * Math.sin(rad)
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
                  )
                })}
              </svg>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', lineHeight: 1.4, textAlign: 'center' }}>
                ESPAÇO<br />CANANEIA
              </div>
            </div>
          </a>
        </div>

        {/* Empty Left Side */}
        <div className="flex-1" />

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              onClick={() => setActiveSection(item.href.slice(1))}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X size={20} color="#C9A84C" />
            ) : (
              <Menu size={20} color="#C9A84C" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(10,10,10,0.98)',
            borderTop: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <div className="flex flex-col p-6 gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5F0E8', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
