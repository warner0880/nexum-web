import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import ProjectCard from '../components/ui/ProjectCard'
import { useFadeIn } from '../lib/useFadeIn'

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6">
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
        <div className="h-5 bg-gray-200 rounded w-2/3 mb-4" />
        <div className="h-3 bg-gray-200 rounded w-full mb-2" />
        <div className="h-3 bg-gray-200 rounded w-4/5 mb-5" />
        <div className="flex gap-2 mb-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-200 rounded-full w-16" />
          ))}
        </div>
        <div className="h-10 bg-gray-200 rounded-lg" />
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState(null)
  const [allModules, setAllModules] = useState([])
  const ref = useFadeIn()

  useEffect(() => {
    document.title = 'Portafolio — Nexum Analytics'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = 'Conoce los proyectos de software que hemos entregado para nuestros clientes.'
  }, [])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('proyectos')
          .select('*')
          .order('destacado', { ascending: false })
          .order('created_at', { ascending: false })

        if (error) throw error
        const rows = data || []
        setProjects(rows)

        const modSet = new Set()
        rows.forEach((p) => p.modulos?.forEach((m) => modSet.add(m)))
        setAllModules([...modSet].sort())
      } catch (err) {
        setError('No pudimos cargar los proyectos.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const filtered = activeFilter
    ? projects.filter((p) => p.modulos?.includes(activeFilter))
    : projects

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Page header */}
      <div className="bg-navy pt-28 pb-16">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="fade-in inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Portafolio
          </h1>
          <p className="fade-in fade-in-delay-2 text-gray-300 text-lg">
            Sistemas reales para negocios reales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Module filter */}
        {!loading && allModules.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveFilter(null)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                activeFilter === null
                  ? 'bg-accent text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
              }`}
            >
              Todos
            </button>
            {allModules.map((mod) => (
              <button
                key={mod}
                onClick={() => setActiveFilter(activeFilter === mod ? null : mod)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                  activeFilter === mod
                    ? 'bg-accent text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {mod}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-gray-400">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">
              {activeFilter ? `Sin proyectos con módulo "${activeFilter}"` : 'Próximamente'}
            </h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              {activeFilter
                ? 'Prueba con otro filtro o ve todos los proyectos.'
                : 'Estamos documentando nuestros primeros proyectos. ¡Vuelve pronto!'}
            </p>
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                className="mt-4 text-accent text-sm font-medium hover:underline"
              >
                Ver todos
              </button>
            )}
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
