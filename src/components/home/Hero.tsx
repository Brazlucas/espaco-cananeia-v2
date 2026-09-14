import { useEffect, useRef } from 'react'

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const whatsappLink = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espaço%20Cananeia.'

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '550px', marginTop: '-73px', paddingTop: '73px' }}>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src="/lukinhas/videos/WhatsApp Video 2026-04-01 at 16.00.03.mp4" type="video/mp4" />
          <source src="/lukinhas/videos/WhatsApp Video 2026-04-01 at 16.00.22.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.50) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          style={{
            fontFamily: 'Cinzel, serif',
            color: 'white',
            fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            lineHeight: 1.4,
            marginBottom: '2rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            maxWidth: '700px',
          }}
        >
          UM CENÁRIO INESQUECÍVEL<br />PARA O SEU EVENTO
        </h1>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-white"
          id="hero-cta-btn"
        >
          AGENDAR VISITA
        </a>
      </div>
    </section>
  )
}
