import { motion } from 'framer-motion'
import { fadeInUp, cardVariant, staggerContainer } from '../lib/animations'

const services = [
  {
    id: 'dashboards',
    category: 'Analítica de datos',
    title: 'Ve cómo va tu negocio en tiempo real',
    description:
      'Un panel con todos tus números importantes en pantalla — ventas, clientes, inventario — actualizado solo, sin que tengas que hacer nada.',
    modules: ['Sin hojas de Excel', 'Siempre actualizado', 'Fácil de entender', 'En cualquier dispositivo'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    id: 'modelos',
    category: 'Analítica de datos',
    title: 'Conectamos y ordenamos todos tus datos',
    description:
      'Si tienes información en Excel, en varios archivos o en sistemas distintos, la unificamos en un solo lugar para que puedas tomar decisiones con confianza.',
    modules: ['Todo en un solo lugar', 'Sin datos perdidos', 'Sin duplicados', 'Listo para analizar'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: 'reporteria',
    category: 'Analítica de datos',
    title: 'Informes que llegan solos a tu correo',
    description:
      'Sin enviar archivos a mano, sin copiar y pegar en Excel. Los reportes se preparan y se envían automáticamente a quien los necesite.',
    modules: ['Sin trabajo manual', 'Puntual y sin errores', 'PDF listo para imprimir', 'Para todo el equipo'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    id: 'estrategia',
    category: 'Estrategia Digital',
    title: 'Estrategia Digital a la Medida de tu Negocio',
    description:
      'Antes de invertir en marketing o tecnología, te damos claridad: quién es tu cliente ideal, qué canales priorizar y un plan concreto para avanzar con información, no con suposiciones.',
    modules: ['Diagnóstico digital', 'Público objetivo definido', 'Canales prioritarios', 'Hoja de ruta clara'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758" />
      </svg>
    ),
  },
  {
    id: 'publicidad',
    category: 'Publicidad Digital',
    title: 'Campañas Publicitarias que Generan Resultados',
    description:
      'Planeamos, lanzamos y optimizamos tus campañas en Meta, Google y TikTok — enfocadas en traer tráfico, clientes calificados y ventas, con ajustes constantes según los resultados.',
    modules: ['Meta, Google y TikTok', 'Optimización continua', 'Reportes de desempeño', 'Enfocado en resultados'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c2.32.196 4.594.66 6.75 1.38l.527.176c.557.186 1.156-.114 1.232-.726.21-1.633.321-3.299.321-4.99 0-1.691-.111-3.357-.32-4.99-.077-.612-.677-.912-1.234-.726l-.526.175a48.948 48.948 0 0 1-6.75 1.38m0 9.18v3.27a.75.75 0 0 1-.75.75h-.375a.75.75 0 0 1-.69-.45l-.405-.943a3 3 0 0 1-.099-1.83l.299-1.005m1.02-3.882a48.587 48.587 0 0 1 6.075-1.518" />
      </svg>
    ),
  },
  {
    id: 'pos',
    category: 'Software a medida',
    title: 'Sistema de Ventas y Caja',
    description:
      'Registra ventas, controla tu inventario y cierra el día sin papel ni hojas de cálculo. Todo en una sola pantalla, fácil para cualquier empleado.',
    modules: ['Control de inventario', 'Cierre de caja', 'Reportes de ventas', 'Sin papel'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    id: 'web',
    category: 'Software a medida',
    title: 'Página Web para tu Negocio',
    description:
      'Tu empresa en internet con una presencia profesional que genera confianza. Lista para recibir clientes desde el día uno, en cualquier dispositivo.',
    modules: ['Diseño profesional', 'En todos los dispositivos', 'Rápida y segura', 'Lista en días'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
      </svg>
    ),
  },
  {
    id: 'app',
    category: 'Software a medida',
    title: 'App a la Medida de tu Empresa',
    description:
      'Gestiona pedidos, personal, entregas o lo que tu negocio necesite, directamente desde el celular. Construida exactamente para cómo tú trabajas.',
    modules: ['Android y iOS', 'A tu medida', 'Sin límites de usuarios', 'Escalable'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: 'trading',
    category: 'Trading Automatizado',
    title: 'Expert Advisors para MetaTrader 5',
    description:
      'Automatizamos tu estrategia de trading: opera 24/7 sin decisiones emocionales, con gestión de riesgo definida y validación histórica antes de arriesgar capital real.',
    modules: ['Backtesting incluido', 'Gestión de riesgo', 'Operación 24/7', 'Optimización de parámetros'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: 'propuestas',
    category: 'Servicios con IA',
    title: 'Propuestas Comerciales que Cierran Más Ventas',
    description:
      'Convertimos tu oferta en una propuesta clara y profesional — con la estructura, el diseño y los argumentos que tu prospecto necesita para decir que sí.',
    modules: ['Estructura persuasiva', 'Diseño con tu marca', 'Precios y tiempos claros', 'Mayor tasa de cierre'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    id: 'legal',
    category: 'Servicios con IA',
    title: 'Asistente Legal con IA para tu Empresa',
    description:
      'Revisión de contratos, redacción de documentos legales y consultas bajo el marco jurídico colombiano. Rapidez de la IA con respaldo del derecho colombiano vigente.',
    modules: ['Contratos y NDAs', 'Habeas Data Ley 1581', 'Derecho Laboral', 'Constitución de SAS'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.97Z" />
      </svg>
    ),
  },
]

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.15)}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Nuestros servicios
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
            Hacemos que tu negocio funcione mejor con tecnología — sin complicaciones, sin tecnicismos.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer(0.09)}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariant}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(37,99,235,0.13)' }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-accent/25 transition-colors duration-300 flex flex-col cursor-default"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {service.category}
              </span>

              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-base font-bold text-navy leading-snug">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed flex-1 text-sm">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.modules.map((mod) => (
                  <span key={mod} className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {mod}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={scrollToContact}
                className="mt-auto w-full py-2.5 rounded-lg border-2 border-accent text-accent font-semibold text-sm"
                whileHover={{ backgroundColor: '#2563EB', color: '#ffffff', scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                Solicitar cotización
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
