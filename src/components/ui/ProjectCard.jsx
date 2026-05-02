import { Link } from 'react-router-dom'

function ProjectPlaceholder({ nombre }) {
  const initials = nombre
    ? nombre
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'N'

  return (
    <div className="w-full h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
      <span className="text-5xl font-extrabold text-accent/50">{initials}</span>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const { slug, nombre, tipo_negocio, descripcion_corta, modulos, imagen_url } = project

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="overflow-hidden">
        {imagen_url ? (
          <img
            src={imagen_url}
            alt={nombre}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <ProjectPlaceholder nombre={nombre} />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            {tipo_negocio}
          </span>
          <h3 className="text-xl font-bold text-navy mt-1">{nombre}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{descripcion_corta}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {modulos.slice(0, 5).map((mod) => (
            <span
              key={mod}
              className="text-xs font-medium bg-[#F9FAFB] border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full"
            >
              {mod}
            </span>
          ))}
          {modulos.length > 5 && (
            <span className="text-xs font-medium bg-[#F9FAFB] border border-gray-200 text-gray-400 px-2.5 py-1 rounded-full">
              +{modulos.length - 5} más
            </span>
          )}
        </div>
        <Link
          to={`/portafolio/${slug}`}
          className="block w-full text-center py-2.5 rounded-lg bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors duration-200"
        >
          Ver caso de éxito
        </Link>
      </div>
    </div>
  )
}
