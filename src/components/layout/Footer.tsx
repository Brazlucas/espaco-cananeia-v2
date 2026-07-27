// Footer - matches reference: tagline, contact info, Google Map, copyright bar

export const Footer = () => {
  const address = 'Cananeia - SP'
  const email = 'contato@espacocananeia.com.br'
  const phone = '(11) 99899-2034'
  const whatsapp = 'https://wa.me/11998992034'

  // Google Maps embed - placeholder coordinates for Cananeia, SP
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7408086531836!2d-46.5477979235104!3d-23.469812058237515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef57aaabcec91%3A0xe90cc5d562081e9f!2sEspa%C3%A7o%20Canan%C3%A9ia%20-%20Eventos%20%26%20Buffet!5e0!3m2!1spt-BR!2sbr!4v1785171886797!5m2!1spt-BR!2sbr'

  return (
    <footer id="contato">
      {/* ===== TAGLINE SECTION ===== */}
      <section
        style={{
          background: 'var(--black-card)',
          padding: '5rem 1.5rem 2.5rem',
          textAlign: 'center',
          borderTop: '1px solid var(--black-border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold gradient top line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        }} />

        {/* Logo */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/lukinhas/logo.png"
            alt="Espaço Cananeia"
            style={{
              height: '80px',
              width: 'auto',
              filter: 'drop-shadow(0 4px 16px rgba(201,168,76,0.4))',
              opacity: 0.9,
            }}
            onError={e => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            color: 'var(--gold)',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            marginBottom: '2rem',
            fontStyle: 'italic',
            letterSpacing: '0.05em',
            fontWeight: 400,
          }}
        >
          VOCÊ SONHA, NÓS REALIZAMOS
        </h2>

        {/* Gold divider */}
        <div className="divider-line" style={{ marginBottom: '2rem' }} />

        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          {/* Address */}
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'var(--text-light)',
            letterSpacing: '0.04em',
          }}>
            {address}
          </p>

          <div style={{ width: '1px', height: '1px', background: 'var(--black-border)', margin: '0.25rem 0' }} />

          {/* Contact links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={`mailto:${email}`}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
            >
              {email}
            </a>
            <span style={{ color: 'var(--black-border)' }}>|</span>
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
            >
              {phone}
            </a>
          </div>

          {/* Social / WhatsApp */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(37,211,102,0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(220,39,67,0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <div style={{ width: '100%', height: '320px', position: 'relative', borderTop: '1px solid var(--black-border)', borderBottom: '1px solid var(--black-border)' }}>
        <iframe
          src={mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Localização Espaço Cananeia"
        />
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div
        className="footer-bar"
        style={{ padding: '1rem 1.5rem', textAlign: 'center' }}
      >
        <p>
          © {new Date().getFullYear()} Espaço Cananeia. Todos os direitos reservados.
        </p>
      </div>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar pelo WhatsApp"
        id="whatsapp-float-btn"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}
