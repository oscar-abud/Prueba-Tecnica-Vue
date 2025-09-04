<script setup></script>

<template>
  <nav>
    <ul>
      <a href="/users/create">Crear usuario</a>
      <a href="/users">Usuarios</a>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 300px;
}
nav ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

ul a {
  color: var(--white-color);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.7;
  transition: 0.3s;
}

ul a:hover {
  opacity: 1;
}
</style>
