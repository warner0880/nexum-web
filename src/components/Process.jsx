import { useFadeIn } from '../lib/useFadeIn'

const steps = [
  {
    number: '01',
    title: 'Reunión inicial',
    description:
      'Conversamos sobre tu negocio, lo que necesitas y cómo opera tu equipo. Sin tecnicismos, solo escuchamos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Definimos el plan',
    description:
      'Documentamos todo lo que necesitas en un plan claro y en lenguaje sencillo. Tú lo revisas y nos das el visto bueno antes de arrancar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Bosquejo y aprobación',
    description:
      'Te mostramos cómo va a quedar antes de construirlo. Ajustamos lo que haga falta y solo arrancamos cuando estés conforme.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Construcción',
    description:
      'Construimos el sistema completo: código, base de datos y despliegue en la nube. Tú puedes ver el avance en todo momento.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Entrega y soporte',
    description:
      'Recibes tu sistema listo para usar, con documentación. Y si algo falla después, estamos ahí — no desaparecemos al entregar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
]

export default function Process() {
  const ref = useFadeIn()

  return (
    <section id="proceso" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Cómo trabajamos
          </h2>
          <p className="fade-in fade-in-delay-1 text-gray-500 max-w-xl mx-auto">
            Un proceso claro y predecible, desde la primera conversación hasta la entrega.
          </p>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* Connector line — ajustado para 5 pasos (cada uno = 20%, mitad = 10%) */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in fade-in-delay-${i + 1} flex-1 flex flex-col items-center text-center relative z-10 px-2`}
            >
              {/* Circle */}
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white mb-5 ring-4 ring-white shadow-md">
                {step.icon}
              </div>
              <span className="text-4xl font-extrabold text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 select-none -z-10">
                {step.number}
              </span>
              <h3 className="text-sm font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute top-8 left-8 bottom-8 w-0.5 bg-gray-200 z-0" />
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in fade-in-delay-${i + 1} flex gap-6 pb-10 relative z-10`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white ring-4 ring-white shadow-md">
                  {step.icon}
                </div>
              </div>
              <div className="pt-3">
                <h3 className="text-base font-bold text-navy mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
