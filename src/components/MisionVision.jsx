import { useFadeIn } from '../lib/useFadeIn'

const valores = [
  {
    icon: '🤝',
    label: 'Honestidad y transparencia',
    desc: 'Actuamos con integridad y comunicamos con claridad en todo momento.',
  },
  {
    icon: '🌱',
    label: 'Responsabilidad social y ambiental',
    desc: 'Generamos valor cuidando el entorno y aportando a la sociedad.',
  },
  {
    icon: '🫱🏽‍🫲🏼',
    label: 'Respeto',
    desc: 'Fomentamos relaciones basadas en la consideración, la escucha y el trato digno hacia todas las personas.',
  },
  {
    icon: '🎯',
    label: 'Orientación al cliente',
    desc: 'Trabajamos enfocados en entender y satisfacer las necesidades de quienes confían en nosotros.',
  },
  {
    icon: '🔒',
    label: 'Lealtad',
    desc: 'Construimos relaciones basadas en la confianza y el compromiso.',
  },
  {
    icon: '⭐',
    label: 'Calidad',
    desc: 'Entregamos soluciones confiables que generan valor real.',
  },
  {
    icon: '💡',
    label: 'Innovación',
    desc: 'Buscamos constantemente nuevas formas de mejorar y crecer.',
  },
]

export default function MisionVision() {
  const ref = useFadeIn()

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Quiénes somos
          </h2>
          <p className="fade-in fade-in-delay-1 text-gray-500 max-w-xl mx-auto mb-3">
            Una empresa colombiana construida con propósito: hacer que la tecnología trabaje
            para tu negocio, no al revés.
          </p>
          <p className="fade-in fade-in-delay-1 text-accent font-semibold text-base tracking-wide">
            Conectando datos con decisiones.
          </p>
        </div>

        {/* Cards de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Misión */}
          <div className="fade-in fade-in-delay-1 relative bg-navy rounded-2xl p-8 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-5"
              style={{
                background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Nuestra Misión
              </div>
              <p className="text-white text-xl font-bold leading-relaxed mb-4">
                Brindar a las organizaciones colombianas soluciones de análisis de datos y
                plataformas de negocio que conviertan su información en conocimiento estratégico.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dotando a sus líderes de la claridad y la visibilidad que necesitan para tomar
                decisiones con confianza y dirección. Construimos la capa de inteligencia que
                transforma información dispersa en dashboards ejecutivos, reportes accionables
                y plataformas diseñadas a la medida de cada organización.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="fade-in fade-in-delay-2 relative bg-[#F9FAFB] border border-gray-100 rounded-2xl p-8 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-10"
              style={{
                background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Nuestra Visión
              </div>
              <p className="text-navy text-xl font-bold leading-relaxed mb-4">
                Ser la empresa referente a nivel nacional en análisis de datos y plataformas
                de negocio.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reconocida por transformar la manera en que las organizaciones colombianas
                toman decisiones y gestionan su información. En el largo plazo, convertir
                nuestra metodología en una referencia del sector que otras organizaciones
                puedan adoptar y replicar.
              </p>
            </div>
          </div>

        </div>

        {/* Valores corporativos */}
        <div className="fade-in fade-in-delay-3 mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-2">
              Nuestros valores corporativos
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Los principios que guían cada decisión, cada entrega y cada relación con nuestros clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v) => (
              <div
                key={v.label}
                className="p-6 rounded-xl border border-gray-100 bg-white hover:border-accent/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <p className="font-bold text-navy text-base mb-2">{v.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
