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
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4'
      }`}
      style={{ borderBottom: isScrolled ? '1px solid #eee' : '1px solid #eee' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center relative">
        {/* Logo - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a href="#home" className="flex flex-col items-center no-underline">
            {/* Sun/Logo Icon */}
            <svg width="38" height="38" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
              <circle cx="30" cy="30" r="10" fill="#8DA47E" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 30 + 14 * Math.cos(rad)
                const y1 = 30 + 14 * Math.sin(rad)
                const x2 = 30 + 26 * Math.cos(rad)
                const y2 = 30 + 26 * Math.sin(rad)
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#8DA47E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )
              })}
            </svg>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#333', lineHeight: 1.4, textAlign: 'center' }}>
              ESPAÇO<br />CANANEIA
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
              <X size={20} color="#333" />
            ) : (
              <Menu size={20} color="#333" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#333', textDecoration: 'none', fontWeight: 500 }}
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
