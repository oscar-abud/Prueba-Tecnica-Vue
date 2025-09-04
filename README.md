# Reto Técnico - Frontend Vue 3 + Apollo GraphQL (GraphQLZero)

Una SPA en Vue 3 que consume la API pública GraphQLZero para gestionar usuarios (listado, filtro, creación, edición y eliminación). Enfoque en arquitectura clara, componentes reutilizables y manejo de estados con Pinia y Apollo.

## Prerrequisitos

- Node.js: Versión 18+ (recomendada 20+). Descárgalo desde [nodejs.org](https://nodejs.org).
- npm: Viene incluido con Node.js.
- No se requieren variables de entorno, ya que el endpoint GraphQL está hardcoded en `apollo.js` (`https://graphqlzero.almansi.me/api`). Si quieres hacerlo configurable, crea un archivo `.env` con `VITE_API_URL=https://tu-endpoint` y úsalo en el código como `import.meta.env.VITE_API_URL`.

## Instalación

1. Clona el repositorio:
   git clone https://github.com/oscar-abud/Prueba-Tecnica-Vue
   cd pru-tec

2. Instala las dependencias:
   npm run install-deps

## Scripts para Ejecutar

Usa estos comandos desde la terminal en la raíz del proyecto:

- **Modo desarrollo**:
  npm run dev
  Abre `http://localhost:5173` en tu navegador.

- **Construir para producción**:
  npm run build
- **Previsualizar build**:
  npm run preview
- **Formatear código** (con Prettier):
  npm run format
- **Linting** (opcional, si agregas ESLint):
  npm run lint

## Arquitectura y Decisiones

- **Framework**: Vue 3 con Composition API y `<script setup>` para lógica modular y reactiva.
- **Estado Global**: Pinia para manejar usuarios, loading y errors (e.g., `useUsersStore` en `counter.js`).
- **GraphQL**: Apollo Client para queries/mutations (e.g., `useUsersQuerys.js` para GET, `useUserMutation.js` para CRUD). Usé `fetchPolicy: 'network-only'` para datos frescos, y updates locales en Pinia para consistencia inmediata.
- **Enrutamiento**: Vue Router con rutas para listado (`/users`) y creación (`/users/create`).
- **Componentes**: Reutilizables como `InputFilter` (filtro), `FormEdit` (edición), `TableUsersGrid` (grid).
- **Decisiones**: Elegí Users como entidad (en vez de Posts) para simplicidad, ya que cubre el alcance CRUD. No usé Apollo cache updates avanzados para mantenerlo básico, priorizando Pinia para estado. Filtros client-side en `List.vue` con `computed` para rendimiento.

## Qué Haría con Más Tiempo

- Implementar paginación server-side en GET_USERS con variables de GraphQL (skip, limit).
- Agregar ruta de detalle (/users/:id) con GET_USER y comentarios relacionados para asi mostrar más información de los usuarios como dirección e implementar ahi mismo la paginación.
- Mejorar responsive con media queries o una librería como Tailwind CSS.
- Añadir tests unitarios con Vitest/Jest para componentes y composables.
- Integrar Apollo cache updates (e.g., `writeQuery`) para consistencia sin refetch.
- Refactorizar errores con toast notifications (e.g., Vue Toastification).
- Aprender más sobre Vue 3, Apollo y lo relacionado con la paginación por CSR para anotarlo en mi Notion personal y estudiar y probar los casos de la misma API.
