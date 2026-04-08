// Video Section + Estrutura Section
// Matches the video player section and the estrutura section in reference

export const Services = () => {
  // Placeholder video URL - user will replace with real video
  const videoId = 'YOUR_VIDEO_ID_HERE'

  const features = [
    { icon: '🏛️', label: 'Salão de Festas' },
    { icon: '⛪', label: 'Capela Ecumênica' },
    { icon: '🌿', label: 'Espaços ao Ar Livre' },
    { icon: '⚡', label: 'Gerador Próprio' },
    { icon: '🅿️', label: 'Estacionamento' },
    { icon: '🍽️', label: 'Cozinha Equipada' },
    { icon: '🎪', label: 'Área de Apoio' },
    { icon: '♿', label: 'Acessibilidade' },
  ]

  return (
    <>
      {/* ===== VIDEO SECTION ===== */}
      <section
        id="video"
        style={{
          background: 'var(--cream)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Video Player Placeholder */}
          <div
            id="video-player-area"
            style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {videoId === 'YOUR_VIDEO_ID_HERE' ? (
              // Placeholder until real video is added
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3d25 50%, #1a2a18 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  [ Espaço para vídeo ]
                </p>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title="Espaço Cananeia - Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ===== ESTRUTURA SECTION ===== */}
      <section
        id="estrutura"
        style={{ background: 'white', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="heading-main" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1rem' }}>
              NOSSA ESTRUTURA
            </h2>
            <div className="divider-line" style={{ marginBottom: '1.5rem' }} />
            <p className="body-text" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
              Um espaço completo e sofisticado, pensado em cada detalhe para tornar
              o seu evento único e inesquecível.
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  borderBottom: '1px solid #eee',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--charcoal)',
                }}>
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Gallery Placeholders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '1rem' }}>
            {[
              { h: '280px', label: 'Foto do salão' },
              { h: '280px', label: 'Foto da área externa' },
              { h: '280px', label: 'Foto da cerimônia' },
            ].map((img, i) => (
              <div
                key={i}
                className="img-placeholder"
                style={{ height: img.h, position: 'relative' }}
              >
                <span style={{ position: 'absolute', bottom: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  [ {img.label} ]
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {[
              { h: '200px', label: 'Foto da recepção' },
              { h: '200px', label: 'Foto da pista de dança' },
            ].map((img, i) => (
              <div
                key={i}
                className="img-placeholder"
                style={{ height: img.h, position: 'relative' }}
              >
                <span style={{ position: 'absolute', bottom: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  [ {img.label} ]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENTOS SECTION ===== */}
      <section
        id="eventos"
        style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="heading-main" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1rem' }}>
              EVENTOS
            </h2>
            <div className="divider-line" style={{ marginBottom: '1.5rem' }} />
          </div>

          {/* Events Grid - 2 column like reference */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
              border: '1px solid #ddd',
            }}
          >
            {[
              {
                title: 'CASAMENTOS',
                desc: 'Um cenário deslumbrante à beira da lagoa para o momento mais especial da sua vida. Cerimônia ao ar livre, recepção sofisticada e uma experiência inesquecível.',
                img: 'Foto de casamento',
              },
              {
                title: 'FORMATURAS',
                desc: 'Comemore esta conquista em um ambiente exclusivo e sofisticado. Espaço completo para receber sua turma com todo conforto e estilo.',
                img: 'Foto de formatura',
              },
              {
                title: 'EVENTOS CORPORATIVOS',
                desc: 'Ambiente profissional e inspirador para conferências, workshops, lançamentos e confraternizações empresariais.',
                img: 'Foto corporativo',
              },
              {
                title: 'FESTAS & CELEBRAÇÕES',
                desc: 'Aniversários, debutantes e celebrações especiais. Nosso espaço se adapta ao seu estilo para criar memórias únicas.',
                img: 'Foto de festa',
              },
            ].map((event, i) => (
              <div
                key={i}
                style={{
                  borderRight: i % 2 === 0 ? '1px solid #ddd' : 'none',
                  borderBottom: i < 2 ? '1px solid #ddd' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image placeholder */}
                <div
                  className="img-placeholder"
                  style={{ height: '200px', position: 'relative', flexShrink: 0 }}
                >
                  <span style={{ position: 'absolute', bottom: '8px', color: 'rgba(255,255,255,0.35)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    [ {event.img} ]
                  </span>
                </div>
                {/* Text */}
                <div style={{ padding: '1.5rem 1.75rem', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    color: 'var(--charcoal)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                  }}>
                    {event.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.8rem' }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
