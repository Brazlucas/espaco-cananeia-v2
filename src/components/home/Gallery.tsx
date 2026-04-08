// Orçamento Form Section - matches reference "SOLICITE UM ORÇAMENTO"
import { useState } from 'react'

export const Gallery = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    tipoEvento: '',
    dia: '',
    mes: '',
    ano: '',
    convidados: '',
    mensagem: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.nome} ${formData.sobrenome}. Gostaria de solicitar um orçamento para ${formData.tipoEvento} com ${formData.convidados} convidados em ${formData.dia}/${formData.mes}/${formData.ano}. ${formData.mensagem}`
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank')
  }

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const anos = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i)
  const dias = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <section
      id="orcamentos"
      style={{ background: 'white', padding: '5rem 1.5rem' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Heading */}
        <h2
          className="heading-sage"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: '0.75rem' }}
        >
          SOLICITE UM ORÇAMENTO
        </h2>
        <p className="body-text" style={{ marginBottom: '2.5rem' }}>
          Preencha o formulário abaixo e nos conte qual evento você deseja realizar.
          Em breve, nossa equipe entrará em contato para ajudar em cada detalhe.
        </p>

        <form onSubmit={handleSubmit} id="orcamento-form">
          {/* Nome / Sobrenome */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label className="form-label">Nome *</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="form-field"
                id="form-nome"
              />
            </div>
            <div>
              <label className="form-label">Sobrenome *</label>
              <input
                type="text"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
                className="form-field"
                id="form-sobrenome"
              />
            </div>
          </div>

          {/* Telefone */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Telefone *</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', paddingBottom: '8px', borderBottom: '1px solid #ccc', lineHeight: '38px', color: '#666' }}>🇧🇷 +55</span>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="form-field"
                placeholder="(11) 99999-9999"
                id="form-telefone"
                style={{ flex: 1 }}
              />
            </div>
          </div>

          {/* Tipo de Evento */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Tipo de Evento</label>
            <select
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              className="form-field"
              id="form-tipo-evento"
            >
              <option value="">Selecione o tipo de evento</option>
              <option value="Casamento">Casamento</option>
              <option value="Formatura">Formatura</option>
              <option value="Evento Corporativo">Evento Corporativo</option>
              <option value="Festa de Aniversário">Festa de Aniversário</option>
              <option value="Debutante">Debutante</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Data do Evento */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Data do Evento *</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div>
                <span className="form-label" style={{ color: '#999', fontSize: '0.6rem' }}>Dia</span>
                <select
                  name="dia"
                  value={formData.dia}
                  onChange={handleChange}
                  className="form-field"
                  id="form-dia"
                >
                  <option value=""></option>
                  {dias.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <span className="form-label" style={{ color: '#999', fontSize: '0.6rem' }}>Mês</span>
                <select
                  name="mes"
                  value={formData.mes}
                  onChange={handleChange}
                  className="form-field"
                  id="form-mes"
                >
                  <option value=""></option>
                  {meses.map((m, i) => <option key={i} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <span className="form-label" style={{ color: '#999', fontSize: '0.6rem' }}>Ano</span>
                <select
                  name="ano"
                  value={formData.ano}
                  onChange={handleChange}
                  className="form-field"
                  id="form-ano"
                >
                  <option value=""></option>
                  {anos.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Número de Convidados */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Número de Convidados *</label>
            <input
              type="number"
              name="convidados"
              value={formData.convidados}
              onChange={handleChange}
              required
              className="form-field"
              placeholder="Ex: 150"
              id="form-convidados"
            />
          </div>

          {/* Mensagem */}
          <div style={{ marginBottom: '2rem' }}>
            <label className="form-label">Deixe uma mensagem ou conte mais sobre o seu evento</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="form-field"
              rows={3}
              id="form-mensagem"
              style={{ resize: 'vertical', display: 'block', width: '100%' }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-sage"
            id="form-submit-btn"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  )
}
