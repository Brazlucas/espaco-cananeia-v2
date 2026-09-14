// Photo Gallery with Lightbox - uses real photos from /lukinhas/fotos
import { useState, useEffect } from 'react'

const ALL_PHOTOS = [
  '/lukinhas/fotos/_MG_0582.jpg',
  '/lukinhas/fotos/_MG_0588.jpg',
  '/lukinhas/fotos/_MG_0593 (1).jpg',
  '/lukinhas/fotos/_MG_0596.jpg',
  '/lukinhas/fotos/_MG_0606.jpg',
  '/lukinhas/fotos/_MG_0763.jpg',
  '/lukinhas/fotos/_MG_0893-2.jpg',
  '/lukinhas/fotos/_MG_1682.jpg',
  '/lukinhas/fotos/_MG_1684.jpg',
  '/lukinhas/fotos/_MG_1687.jpg',
  '/lukinhas/fotos/_MG_1715.jpg',
  '/lukinhas/fotos/_MG_1770.jpg',
  '/lukinhas/fotos/_MG_1772.jpg',
  '/lukinhas/fotos/_MG_1774.jpg',
  '/lukinhas/fotos/_MG_1777.jpg',
  '/lukinhas/fotos/_MG_2214.jpg',
  '/lukinhas/fotos/_MG_2217.jpg',
  '/lukinhas/fotos/_MG_3215.jpg',
  '/lukinhas/fotos/_MG_3217.jpg',
  '/lukinhas/fotos/_MG_3223.jpg',
  '/lukinhas/fotos/_MG_3226.jpg',
  '/lukinhas/fotos/_MG_3235.jpg',
  '/lukinhas/fotos/_MG_3237.jpg',
  '/lukinhas/fotos/_MG_4098.jpg',
  '/lukinhas/fotos/_MG_4100.jpg',
  '/lukinhas/fotos/_MG_4101.jpg',
  '/lukinhas/fotos/_MG_4104.jpg',
  '/lukinhas/fotos/_MG_4108.jpg',
  '/lukinhas/fotos/_MG_4111.jpg',
  '/lukinhas/fotos/WhatsApp Image 2026-04-01 at 15.50.34 (1).jpeg',
]

export const PhotoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex(i => (i! > 0 ? i! - 1 : ALL_PHOTOS.length - 1))
  const goNext = () => setLightboxIndex(i => (i! < ALL_PHOTOS.length - 1 ? i! + 1 : 0))

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      <section
        id="galeria"
        style={{ background: 'var(--sage-light)', padding: '5rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-main" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1rem' }}>
              GALERIA
            </h2>
            <div className="divider-line" style={{ marginBottom: '1.5rem' }} />
            <p className="body-text" style={{ textAlign: 'center' }}>
              Momentos que ficam para sempre. Conheça nosso espaço através das fotos.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div
            style={{
              columns: '3 200px',
              columnGap: '8px',
              lineHeight: 0,
            }}
          >
            {ALL_PHOTOS.map((src, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                id={`gallery-photo-${i}`}
                style={{
                  display: 'inline-block',
                  width: '100%',
                  marginBottom: '8px',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  position: 'relative',
                  lineHeight: 0,
                }}
              >
                <img
                  src={src}
                  alt={`Espaço Cananeia foto ${i + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease, filter 0.3s ease',
                    filter: 'brightness(0.92)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.04)'
                    e.currentTarget.style.filter = 'brightness(1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.filter = 'brightness(0.92)'
                  }}
                />
                {/* Hover overlay with expand icon */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}
                >
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-overlay"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            id="lightbox-close-btn"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
              zIndex: 1001,
              padding: '0.5rem',
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); goPrev() }}
            id="lightbox-prev-btn"
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.75rem 1rem',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ‹
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={ALL_PHOTOS[lightboxIndex]}
              alt={`Espaço Cananeia foto ${lightboxIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); goNext() }}
            id="lightbox-next-btn"
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.75rem 1rem',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ›
          </button>

          {/* Counter */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
          }}>
            {lightboxIndex + 1} / {ALL_PHOTOS.length}
          </div>
        </div>
      )}
    </>
  )
}
