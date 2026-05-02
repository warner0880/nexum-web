import { useState } from 'react'
import { useFadeIn } from '../lib/useFadeIn'

const systemOptions = [
  'Dashboard de datos para mi negocio',
  'Ordenar y conectar mis datos',
  'Informes automáticos por correo',
  'Sistema de Ventas y Caja',
  'Página Web para mi negocio',
  'App a la Medida de mi empresa',
  'No estoy seguro',
]

const initialForm = {
  nombre: '',
  correo: '',
  negocio: '',
  tipo_sistema: '',
  mensaje: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const ref = useFadeIn()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error desconocido')

      setSuccess(true)
      setForm(initialForm)
    } catch (err) {
      console.error('Error al enviar solicitud:', err)
      setError('Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all'

  return (
    <section id="contacto" className="py-24 bg-navy">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Listo para tomar mejores decisiones?
          </h2>
          <p className="fade-in fade-in-delay-1 text-gray-300 text-lg">
            Cuéntanos sobre tu negocio y te damos una propuesta en 48 horas.
          </p>
        </div>

        {success ? (
          <div className="fade-in bg-accent/20 border border-accent/40 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¡Recibido!</h3>
            <p className="text-gray-300">Te contactaremos en menos de 48 horas.</p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 text-accent text-sm font-medium hover:underline"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="fade-in fade-in-delay-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Nombre completo <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Correo electrónico <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Nombre del negocio <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="negocio"
                  value={form.negocio}
                  onChange={handleChange}
                  required
                  placeholder="Tu empresa o negocio"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Servicio de interés <span className="text-accent">*</span>
                </label>
                <select
                  name="tipo_sistema"
                  value={form.tipo_sistema}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {systemOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-navy text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Mensaje <span className="text-gray-500">(opcional)</span>
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos más sobre tu negocio y lo que necesitas..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-lg bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-bold text-base transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                'Enviar solicitud'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
