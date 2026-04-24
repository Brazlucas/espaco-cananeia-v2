// Pitch Section - "O SEU EVENTO MERECE"

export const About = () => {
  return (
    <section
      id="pitch"
      style={{
        background: 'var(--black-card)',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid var(--black-border)',
        borderBottom: '1px solid var(--black-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold corner decorations */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        width: '40px',
        height: '40px',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderLeft: '1px solid rgba(201,168,76,0.3)',
      }} />
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        width: '40px',
        height: '40px',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderRight: '1px solid rgba(201,168,76,0.3)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '2rem',
        width: '40px',
        height: '40px',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        borderLeft: '1px solid rgba(201,168,76,0.3)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        width: '40px',
        height: '40px',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        borderRight: '1px solid rgba(201,168,76,0.3)',
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 className="heading-gold" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1.5rem' }}>
          O SEU EVENTO MERECE
        </h2>

        <p className="body-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Ambientes integrados à natureza, com estrutura completa para receber casamentos, eventos
          sociais e corporativos com conforto, exclusividade e personalidade.
        </p>

        <a
          href="#estrutura"
          className="btn-dark"
          id="about-saiba-mais-btn"
        >
          SAIBA MAIS
        </a>
      </div>
    </section>
  )
}
