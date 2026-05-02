# Prompt para Claude Design — Web Nexum Analytics

Pega este texto completo al iniciar una sesión de correcciones de diseño en Claude Design.

---

## Contexto del proyecto

Estoy trabajando en la landing page de **Nexum Analytics**, una empresa de desarrollo de software potenciada por agentes de IA. El sitio está construido en **React + Vite** con **Tailwind CSS**, desplegado en **Vercel**.

- **Repositorio GitHub:** `warner0880/nexum-analytics-web` (rama `main`)
- **URL de producción:** `https://nexum-analytics-web.vercel.app`
- **Stack:** React, Vite, Tailwind CSS, JavaScript (JSX)
- **Carpeta del proyecto local:** `web NEXUM/`

---

## Paleta de colores y tokens de diseño

| Token | Valor | Uso |
|-------|-------|-----|
| `navy` | `#0D1F3C` | Color principal, textos, fondos oscuros |
| `accent` | `#2563EB` | Azul eléctrico, CTAs, íconos, highlights |
| `bg` | `#F9FAFB` | Fondo general de la página |
| Blanco | `#FFFFFF` | Tarjetas, formularios |
| Gris texto | `#6B7280` / `#9CA3AF` | Textos secundarios |

---

## Estructura actual del sitio

La página es un **single-page layout** con estas secciones en orden:

1. **Navbar** — Logo + links de navegación + CTA "Hablemos"
2. **Hero** — Encabezado principal, subtítulo, botón CTA, visual/ilustración
3. **Services** — Sección de servicios (ver detalle abajo)
4. **Process** — Cómo trabajamos / proceso en pasos
5. **Portfolio** — Proyectos realizados (POS Amalia, POS ExquisipAN)
6. **Contact** — Formulario de contacto (usa Resend para envío de emails)
7. **Footer** — Links, redes, copyright

---

## Sección Services (recientemente actualizada)

La sección de servicios tiene esta estructura:

- **Producto principal:** Analítica de datos — 4 tarjetas en grid 2×2:
  1. Dashboards Interactivos (Power BI, tiempo real, KPIs, alertas)
  2. Modelado de Datos (SQL, Power Query, esquema estrella, ETL)
  3. Reportería Automática (PDFs, envío automático, schedules)
  4. Consultoría de Datos (análisis exploratorio, DAX avanzado, insights)

- **Secundario (bloque compacto debajo):** "También desarrollamos software a medida"
  - NEXUM POS — punto de venta para negocios físicos
  - NEXUM WEB — presencia digital profesional
  - NEXUM STORE — tienda online completa
  - NEXUM APP — aplicación de gestión personalizada

---

## Identidad visual / logo

- **Isotipo:** "N" de red neuronal — letra N formada por 3 líneas (SVG), con nodos circulares en los vértices y un nodo central con halo en el punto de cruce diagonal
- **Colores del logo:** Fondo navy `#0D1F3C` con borde redondeado, líneas y nodos en azul `#2563EB`
- **Tipografía:** Inter (Google Fonts), pesos: 400, 600, 700, 800

---

## Componentes principales (archivos JSX)

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx     ← recientemente actualizado
    Process.jsx
    Portfolio.jsx
    Contact.jsx
    Footer.jsx
  lib/
    useFadeIn.js     ← hook de animación (IntersectionObserver, clases fade-in)
  pages/
    App.jsx
```

---

## Animaciones

El sitio usa un sistema de fade-in con `useFadeIn` (IntersectionObserver). Las clases disponibles son:
- `fade-in` — elemento base animado
- `fade-in-delay-1` a `fade-in-delay-4` — delays escalonados
- Definidas en `index.css`

---

## Notas importantes para correcciones de diseño

- El sitio **ya está en producción**. Cualquier cambio en `main` de GitHub se despliega automáticamente en Vercel.
- Para cambios visuales: editar los archivos `.jsx` en `src/components/` y el CSS en `src/index.css`.
- Tailwind está configurado con colores custom (`navy`, `accent`) en `tailwind.config.js`.
- El formulario de contacto usa una API en `api/send.js` conectada a **Resend** para envío de emails.
- **No hay backend ni base de datos** — es un sitio estático con solo el endpoint de email.

---

## Objetivo de las correcciones

> _(Completar aquí qué correcciones específicas quieres hacer antes de iniciar la sesión)_

Ejemplos de lo que podría necesitar:
- Ajustar espaciado, tipografía o colores en alguna sección
- Mejorar el diseño responsive en mobile
- Cambiar el copy de algún texto
- Añadir o modificar animaciones
- Rediseñar alguna tarjeta o componente visual
