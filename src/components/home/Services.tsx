// Video Section + Estrutura Section
// Uses real media from /lukinhas/fotos and /lukinhas/videos

import { useState } from 'react'

const VIDEO_HIGHLIGHTS = [
  '/lukinhas/videos/WhatsApp Video 2026-04-01 at 16.00.03.mp4',
  '/lukinhas/videos/O casal do dia foi Magno e  Mayara, que selaram sua união  na Mansão mais linda  de Guarulhos!E .mp4',
]

export const Services = () => {
  const [activeVideo, setActiveVideo] = useState(0)

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

  // Foto grid para estrutura
  const estruturaFotos = [
    '/lukinhas/fotos/_MG_0582.jpg',
    '/lukinhas/fotos/_MG_0588.jpg',
    '/lukinhas/fotos/_MG_0593 (1).jpg',
    '/lukinhas/fotos/_MG_0596.jpg',
    '/lukinhas/fotos/_MG_0606.jpg',
  ]

  // Fotos para eventos (casamento, formatura, corporativo, festa)
  const eventosData = [
    {
      title: 'CASAMENTOS',
      desc: 'Um cenário deslumbrante à beira da lagoa para o momento mais especial da sua vida. Cerimônia ao ar livre, recepção sofisticada e uma experiência inesquecível.',
      img: '/lukinhas/fotos/_MG_1682.jpg',
    },
    {
      title: 'FORMATURAS',
      desc: 'Comemore esta conquista em um ambiente exclusivo e sofisticado. Espaço completo para receber sua turma com todo conforto e estilo.',
      img: '/lukinhas/fotos/_MG_3215.jpg',
    },
    {
      title: 'EVENTOS CORPORATIVOS',
      desc: 'Ambiente profissional e inspirador para conferências, workshops, lançamentos e confraternizações empresariais.',
      img: '/lukinhas/fotos/_MG_4098.jpg',
    },
    {
      title: 'FESTAS & CELEBRAÇÕES',
      desc: 'Aniversários, debutantes e celebrações especiais. Nosso espaço se adapta ao seu estilo para criar memórias únicas.',
      img: '/lukinhas/fotos/_MG_1770.jpg',
    },
  ]

  return (
    <>
      {/* ===== VIDEO SECTION ===== */}
      <section
        id="video"
        style={{
          background: '#0a0a0a',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2
            className="heading-sage"
            style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', marginBottom: '0.5rem' }}
          >
            NOSSO ESPAÇO EM VÍDEO
          </h2>
          <div className="divider-line" style={{ marginBottom: '2rem', background: 'var(--sage)' }} />

          {/* Main video player */}
          <div
            id="video-player-area"
            style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#111',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}
          >
            <video
              key={activeVideo}
              autoPlay
              controls
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={VIDEO_HIGHLIGHTS[activeVideo]} type="video/mp4" />
            </video>
          </div>

          {/* Thumbnail strip */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
          >
            {VIDEO_HIGHLIGHTS.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                id={`video-thumb-${i}`}
                style={{
                  flex: '0 0 120px',
                  height: '68px',
                  background: '#1a1a1a',
                  border: activeVideo === i ? '2px solid var(--sage)' : '2px solid transparent',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: 0,
                  transition: 'border-color 0.2s',
                }}
              >
                <video
                  src={v}
                  muted
                  style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeVideo === i ? 'rgba(141,164,126,0.2)' : 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.8 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            ))}
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

          {/* Real Photo Gallery - estrutura */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '8px' }}>
            {estruturaFotos.slice(0, 3).map((src, i) => (
              <div
                key={i}
                style={{ height: '280px', overflow: 'hidden', position: 'relative' }}
              >
                <img
                  src={src}
                  alt={`Estrutura do Espaço Cananeia ${i + 1}`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {estruturaFotos.slice(3, 5).map((src, i) => (
              <div
                key={i}
                style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
              >
                <img
                  src={src}
                  alt={`Estrutura do Espaço Cananeia ${i + 4}`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
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

          {/* Events Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
              border: '1px solid #ddd',
            }}
          >
            {eventosData.map((event, i) => (
              <div
                key={i}
                style={{
                  borderRight: i % 2 === 0 ? '1px solid #ddd' : 'none',
                  borderBottom: i < 2 ? '1px solid #ddd' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Real image */}
                <div style={{ height: '220px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                  <img
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
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
