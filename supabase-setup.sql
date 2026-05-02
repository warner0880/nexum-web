-- ============================================================
-- Nexum Analytics — Supabase Schema + Seed
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Tabla de proyectos del portafolio
create table if not exists proyectos (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nombre text not null,
  tipo_negocio text not null,
  descripcion_corta text not null,
  descripcion_larga text,
  modulos text[] not null,
  imagen_url text,
  url_demo text,
  destacado boolean default false,
  created_at timestamptz default now()
);

-- 2. Tabla de solicitudes de cotización
create table if not exists solicitudes (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  correo text not null,
  negocio text not null,
  tipo_sistema text not null,
  mensaje text,
  created_at timestamptz default now()
);

-- 3. Habilitar Row Level Security
alter table proyectos enable row level security;
alter table solicitudes enable row level security;

-- 4. Política: lectura pública de proyectos
create policy "proyectos_public_read" on proyectos
  for select using (true);

-- 5. Política: insertar solicitudes públicamente (anon key)
create policy "solicitudes_public_insert" on solicitudes
  for insert with check (true);

-- ============================================================
-- Seed: Proyectos iniciales
-- ============================================================

insert into proyectos (slug, nombre, tipo_negocio, descripcion_corta, descripcion_larga, modulos, destacado)
values
(
  'pos-amalia',
  'POS Amalia',
  'Restaurante a la carta',
  'Sistema completo de punto de venta para restaurante con módulos de mesero, cocina e inventario.',
  'POS Amalia es un sistema de gestión para restaurante a la carta que cubre el ciclo completo de operación: toma de pedidos por mesero, pantalla de cocina en tiempo real, control de inventario con descuento automático de insumos por receta, analytics de ventas y cierre de caja diario.',
  ARRAY['Ventas', 'Módulo Mesero', 'Módulo Cocina', 'Inventario', 'Descuento por recetas', 'Analytics', 'Cierre de caja'],
  true
),
(
  'pos-exquisipan',
  'POS ExquisipAN',
  'Panadería multi-sede',
  'Punto de venta para panadería con dos sedes, jornadas de trabajo, reportes PDF automáticos y roles de usuario.',
  'POS ExquisipAN gestiona dos sedes de panadería con control de jornadas por trabajador, reportes PDF generados automáticamente al cierre del día, formato de montos en pesos colombianos, y sistema de roles multi-usuario. Permite operación simultánea en ambas sedes con reportes consolidados.',
  ARRAY['Ventas', 'Multi-sede', 'Jornadas', 'Reportes PDF', 'Multi-usuario con roles', 'Formato COP'],
  true
)
on conflict (slug) do nothing;
