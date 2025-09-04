# AI_TESTS_PROMPT

Este archivo contiene mi prompt original para generar tests unitarios detallados de mi código usando IA. El prompt está diseñado para ser usado directamente en una herramienta de IA, insertando el código real del proyecto donde se indica. No usa plantillas predefinidas; es de mi autoría basada en las necesidades del proyecto (una app con tabla de usuarios y formulario de edición en HTML/CSS/JS).

## Prompt para Generar Tests Unitarios Detallados

"Actúa como un ingeniero de software experto en testing automatizado. Tengo un proyecto web CRUD en JavaScript con su framework Vue.js versión 3 con HTML y CSS puro, que incluye:

- Una tabla de usuarios hecha con CSS Grid, con columnas para id (1fr), nombre (2fr), correo (3fr) y acciones (2fr). La tabla se renderiza dinámicamente con datos de usuarios.
- Un formulario de edición con labels e inputs para nombre y email (cada input con padding de 0.5rem y ancho de 200px), más dos botones: uno de submit (con color var(--green-color), transition ease de 0.2s, opacity 0.8 que pasa a 1 en hover) y otro de cancelar.

El código completo del proyecto es el siguiente: [INSERTA AQUÍ EL CÓDIGO COMPLETO DEL PROYECTO, INCLUYENDO HTML, CSS Y JS].

Genera tests unitarios detallados para este código usando el framework Jest (elegido por su facilidad para DOM testing en aplicaciones web, aunque el prompt puede adaptarse a frameworks como Mocha o Vitest si es necesario).

## Razones de Diseño

El prompt está diseñado para ser específico y evitar outputs genéricos, asegurando que los tests generados sean relevantes para los componentes del proyecto (tabla y formulario). Se estructura en pasos claros para guiar a la IA a cubrir casos normales, de borde e interactivos, garantizando una cobertura completa. Jest fue elegido por su integración con @testing-library para testing de DOM, pero el prompt permite flexibilidad para otros frameworks. La instrucción de retornar solo código JavaScript puro facilita su uso directo en el proyecto, minimizando edición manual.
