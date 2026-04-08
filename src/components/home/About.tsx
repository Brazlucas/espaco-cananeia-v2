// Pitch Section - "O SEU EVENTO MERECE"
// Matches the sage green section in the reference site

export const About = () => {
  return (
    <section
      id="pitch"
      style={{ background: 'var(--sage-light)', padding: '5rem 1.5rem', textAlign: 'center' }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 className="heading-main" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', marginBottom: '1.5rem' }}>
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
