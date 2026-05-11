import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/animations'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orb 1 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
          top: '-10%',
          left: '-8%',
        }}
        animate={{ x: [0, 40, 0, -25, 0], y: [0, -30, 15, 25, 0], scale: [1, 1.06, 0.97, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orb 2 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)',
          bottom: '5%',
          right: '-5%',
        }}
        animate={{ x: [0, -30, 12, 30, 0], y: [0, 25, -18, -12, 0], scale: [1, 0.96, 1.05, 0.99, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating orb 3 - small */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)',
          top: '55%',
          left: '42%',
        }}
        animate={{ x: [0, 18, -12, 22, 0], y: [0, -14, 18, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/55 to-navy pointer-events-none" />

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={staggerContainer(0.18, 0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Tu negocio merece un<br />
            <span className="text-accent">sistema hecho para él</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-accent/80 text-base sm:text-lg font-medium tracking-wide mb-6 italic"
          >
            "Conectando datos con decisiones."
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Construimos software a medida y soluciones de análisis de datos — sistemas de ventas,
            páginas web, dashboards en Power BI y reportes automáticos — diseñados exactamente
            para cómo opera tu empresa.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollTo('servicios')}
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,1)', color: '#0D1F3C' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              Ver servicios
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contacto')}
              className="px-8 py-3 rounded-lg bg-accent text-white font-semibold"
              whileHover={{ scale: 1.06, backgroundColor: '#1d4ed8' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              Solicitar cotización
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span className="text-white/35 text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent rounded-full origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
