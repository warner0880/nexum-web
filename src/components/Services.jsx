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
