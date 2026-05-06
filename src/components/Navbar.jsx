import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!isHome) {
      navigate('/' + href)
    } else {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCTA = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!isHome) {
      navigate('/#contacto')
    } else {
      const el = document.getElementById('contacto')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(13, 31, 60, 0.92)' : 'rgba(13, 31, 60, 0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.25)' : '1px solid rgba(255,255,255,0.06)',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center select-none">
            <img
              src="/nexum-logo-a-dark.svg"
              alt="Nexum Analytics"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleCTA}
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '0.5rem 1.1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(59,130,246,0.4)',
                cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.15s',
                boxShadow: '0 2px 12px rgba(37,99,235,0.35)',
              }}
              onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
            >
              Solicitar cotización
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            style={{ color: 'rgba(255,255,255,0.8)', padding: '0.5rem', borderRadius: '0.375rem', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500, padding: '0 0.5rem' }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleCTA}
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '0.6rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                marginTop: '0.5rem',
                boxShadow: '0 2px 12px rgba(37,99,235,0.35)',
              }}
            >
              Solicitar cotización
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
