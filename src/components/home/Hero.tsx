export const Hero = () => {
  const whatsappLink = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espaço%20Cananeia.'

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '550px', marginTop: '-73px', paddingTop: '73px' }}>
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0">
        <div
          className="img-placeholder w-full h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(80,100,75,0.2) 0%, rgba(0,0,0,0.35) 100%), linear-gradient(135deg, #4a5e45 0%, #7a9970 30%, #c8d5ba 60%, #a0b890 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Simulated aerial landscape */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '45%',
              height: '40%',
              borderRadius: '50%',
              background: 'rgba(150,180,200,0.4)',
              boxShadow: '0 0 80px 30px rgba(150,190,200,0.3)',
              backdropFilter: 'blur(2px)',
            }} />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.28)' }} />
          {/* Placeholder label */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            [ Espaço para foto / vídeo ]
          </div>
        </div>
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
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
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
