# pru-tec

Guía rápida (paso a paso) para instalar las dependencias necesarias y poner en marcha el proyecto.

Requisitos

- Node.js >= 16 (recomendado). Verifica con:
  ```sh
  node -v
  ```
- npm (v8+) o yarn.

1. Instalar dependencias desde package.json

- Si ya tienes package.json en el proyecto:
  ```sh
  npm install
  ```
  Esto instalará todas las dependencias listadas en package.json.

2. Dependencias específicas usadas en el proyecto
   El proyecto usa Vue 3 + Vite, Pinia y Apollo Client (GraphQL). Si alguna dependencia falta, instala las siguientes:

- Dependencias principales:

  ```sh
  npm install vue@3 pinia @apollo/client graphql @vue/apollo-composable cross-fetch
  ```

  - vue@3: framework.
  - pinia: store (tu estado global).
  - @apollo/client: cliente Apollo (incluye gql).
  - graphql: required runtime para Apollo.
  - @vue/apollo-composable: helpers Composition API para Apollo.
  - cross-fetch: polyfill fetch (útil en algunos entornos).

3. (Opcional) Dependencias de desarrollo comunes

- Si necesitas herramientas de lint/format:
  ```sh
  npm install -D vite eslint prettier
  ```

4. Scripts útiles

- Ejecutar modo desarrollo:
  ```sh
  npm run dev
  ```
- Compilar para producción:
  ```sh
  npm run build
  ```
- Ejecutar linter / formateador (si los instalaste):
  ```sh
  npm run lint
  npm run format
  ```

5. Comprobaciones y solución de problemas

- Si recibes errores 400 o problemas con las consultas/mutations:
  - Abre DevTools → Network → revisa el body de la petición POST y la respuesta del servidor.
  - Asegúrate de que las variables se envían como { variables: { id: "..." } } en las mutaciones.
  - Verifica el endpoint GraphQL (en el setup del cliente Apollo).
- Si falta algún módulo: ejecuta `npm ls <nombre-paquete>` para ver estado e instalar el paquete faltante con `npm install <paquete>`.

6. Crear el proyecto desde cero (si no tienes package.json)

- Para crear un nuevo proyecto Vite + Vue 3:
  ```sh
  npm create vite@latest pru-tec -- --template vue
  cd pru-tec
  npm install
  ```
  Luego añade las dependencias listadas en el paso 2.

Notas finales

- Después de instalar, inicia con `npm run dev`. Si ves errores relacionados con Apollo o GraphQL, revisa que las importaciones en `src/graphQl/*.gql.js` y la configuración del cliente Apollo estén correctas.
- Si necesitas, puedo generar el archivo de configuración del cliente Apollo (ej. `src/apollo/client.js`) o ajustar las mutaciones/queries para el endpoint que estés usando.
