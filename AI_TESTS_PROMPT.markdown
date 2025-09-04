# AI_TESTS_PROMPT

Este archivo contiene mi prompt original para generar tests unitarios detallados de mi código usando IA. El prompt está diseñado para ser usado directamente en una herramienta de IA, insertando el código real del proyecto donde se indica. No usa plantillas predefinidas; es de mi autoría basada en las necesidades del proyecto (una app con tabla de usuarios y formulario de edición en HTML/CSS/JS).

## Prompt para Generar Tests Unitarios Detallados

"Actúa como un ingeniero de software experto en testing automatizado. Tengo un proyecto web CRUD en JavaScript con su framework Vue.js versión 3 con HTML y CSS puro, que incluye:

- Una tabla de usuarios hecha con CSS Grid, con columnas para id (1fr), nombre (2fr), correo (3fr) y acciones (2fr). La tabla se renderiza dinámicamente con datos de usuarios.
- Un formulario de edición con labels e inputs para nombre y email (cada input con padding de 0.5rem y ancho de 200px), más dos botones: uno de submit (con color var(--green-color), transition ease de 0.2s, opacity 0.8 que pasa a 1 en hover) y otro de cancelar.

El código completo del proyecto es el siguiente: [INSERTA AQUÍ EL CÓDIGO COMPLETO DEL PROYECTO, INCLUYENDO HTML, CSS Y JS].

Genera tests unitarios detallados para este código usando el framework Jest (elegido por su facilidad para DOM testing en aplicaciones web, aunque el prompt puede adaptarse a frameworks como Mocha o Vitest si es necesario). Sigue estas instrucciones estrictas:

- Cubre todos los componentes principales: el rendering de la tabla, el formulario, las interacciones con botones y validaciones de inputs.
- Incluye al menos 3-5 tests por componente o función clave, enfocándote en:
  - Casos normales: por ejemplo, renderizar la tabla con datos válidos, enviar el formulario con inputs correctos.
  - Casos de borde: valores nulos, strings vacíos, emails inválidos, IDs negativos, o acciones sin datos.
  - Comportamiento interactivo: simula clicks en botones de acciones (ej. editar/eliminar), submit del form, y verifica cambios en el DOM o llamadas a funciones.
  - Estilos y estructura: verifica que la grid de la tabla use las fracciones correctas (1fr/2fr/3fr/2fr), y que los inputs tengan el padding y ancho especificados.
  - Errores y excepciones: tests que fallen intencionalmente si hay bugs, como inputs sin labels o botones sin transition.
- Usa bloques 'describe' para agrupar tests por componente (ej. 'Tabla de Usuarios', 'Formulario de Edición'), e 'it' para cada test individual.
- Asegúrate de que los tests sean independientes, usen mocks si hay funciones asíncronas o APIs, y no dependan de estado externo.
- Retorna solo el código de los tests en formato JavaScript puro, listo para copiar en un archivo como 'app.test.js'. No agregues explicaciones extras ni código fuera de los tests."

## Razones de Diseño

El prompt está diseñado para ser específico y evitar outputs genéricos, asegurando que los tests generados sean relevantes para los componentes del proyecto (tabla y formulario). Se estructura en pasos claros para guiar a la IA a cubrir casos normales, de borde e interactivos, garantizando una cobertura completa. Jest fue elegido por su integración con @testing-library para testing de DOM, pero el prompt permite flexibilidad para otros frameworks. La instrucción de retornar solo código JavaScript puro facilita su uso directo en el proyecto, minimizando edición manual.
