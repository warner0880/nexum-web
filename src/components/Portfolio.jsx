import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useFadeIn } from '../lib/useFadeIn'
import ProjectCard from './ui/ProjectCard'

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

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const ref = useFadeIn()

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('proyectos')
          .select('*')
          .order('destacado', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(4)

        if (error) throw error
        setProjects(data || [])
      } catch (err) {
        setError('No pudimos cargar los proyectos en este momento.')
        console.error('Supabase error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="portafolio" className="py-24 bg-[#F9FAFB]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="fade-in text-3xl sm:text-4xl font-extrabold text-navy mb-2">
              Proyectos entregados
            </h2>
            <p className="fade-in fade-in-delay-1 text-gray-500">
              Sistemas reales para negocios reales.
            </p>
          </div>
          {!loading && projects.length > 0 && (
            <Link
              to="/portafolio"
              className="fade-in text-accent font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Ver todos los proyectos
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {error && (
          <div className="text-center py-16 text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Próximamente</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              Estamos documentando nuestros primeros proyectos. ¡Vuelve pronto!
            </p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={project.id} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
