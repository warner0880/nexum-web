import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Portfolio and contact form will not work.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// SQL to run in Supabase dashboard:
//
// create table proyectos (
//   id uuid primary key default gen_random_uuid(),
//   slug text unique not null,
//   nombre text not null,
//   tipo_negocio text not null,
//   descripcion_corta text not null,
//   descripcion_larga text,
//   modulos text[] not null,
//   imagen_url text,
//   url_demo text,
//   destacado boolean default false,
//   created_at timestamptz default now()
// );
//
// create table solicitudes (
//   id uuid primary key default gen_random_uuid(),
//   nombre text not null,
//   correo text not null,
//   negocio text not null,
//   tipo_sistema text not null,
//   mensaje text,
//   created_at timestamptz default now()
// );
