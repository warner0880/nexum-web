import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useFadeIn } from '../lib/useFadeIn'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const ref = useFadeIn()

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from('proyectos')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) {
          if (error.code === 'PGRST116') {
            navigate('/portafolio', { replace: true })
            return
          }
          throw error
        }
        setProject(data)
        document.title = `${data.nombre} — Nexum Analytics`
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.content = data.descripcion_corta
      } catch (err) {
        setError('No pudimos cargar este proyecto.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, [slug, navigate])

  const scrollToContact = () => {
    navigate('/#contacto')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32 mb-8" />
          <div className="bg-navy rounded-2xl h-64 mb-8" />
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">{error}</p>
          <Link to="/portafolio" className="text-accent font-semibold hover:underline">
            ← Ver todos los proyectos
          </Link>
        </div>
      </div>
    )
  }

  if (!project) return null

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="bg-navy pt-28 pb-20">
        <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/portafolio"
            className="fade-in inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Ver todos los proyectos
          </Link>

          <div className="fade-in fade-in-delay-1">
            <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {project.tipo_negocio}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {project.nombre}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {project.descripcion_corta}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Long description */}
            {project.descripcion_larga && (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-navy mb-4">Sobre el proyecto</h2>
                <p className="text-gray-600 leading-relaxed">{project.descripcion_larga}</p>
              </div>
            )}

            {/* Main image */}
            {project.imagen_url && (
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={project.imagen_url}
                  alt={project.nombre}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Demo button */}
            {project.url_demo && (
              <a
                href={project.url_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Ver demo en vivo
              </a>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Modules */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-4">
                Módulos implementados
              </h3>
              <div className="flex flex-col gap-2">
                {project.modulos.map((mod) => (
                  <div key={mod} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-gray-700">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-4">
                Información
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Tipo de negocio</p>
                  <p className="text-sm text-gray-700">{project.tipo_negocio}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Módulos</p>
                  <p className="text-sm text-gray-700">{project.modulos.length} módulos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-extrabold text-white mb-3">
            ¿Tu negocio necesita algo similar?
          </h3>
          <p className="text-gray-300 mb-6">
            Podemos construir un sistema a medida para tus procesos específicos.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
          >
            Solicitar cotización
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
