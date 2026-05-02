import { useFadeIn } from '../lib/useFadeIn'

export default function Hero() {
  const ref = useFadeIn()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/60 to-navy pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Tu negocio merece un<br />
          <span className="text-accent">sistema hecho para él</span>
        </h1>

        <p className="fade-in fade-in-delay-1 text-accent/80 text-base sm:text-lg font-medium tracking-wide mb-6 italic">
          "Conectando datos con decisiones."
        </p>

        <p className="fade-in fade-in-delay-2 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Construimos software a medida y soluciones de análisis de datos — sistemas de ventas,
          páginas web, dashboards en Power BI y reportes automáticos — diseñados exactamente
          para cómo opera tu empresa.
        </p>

        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('servicios')}
            className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-navy transition-all duration-200"
          >
            Ver servicios
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="px-8 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold transition-colors duration-200"
          >
            Solicitar cotización
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
