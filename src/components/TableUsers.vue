<script setup>
defineProps({
  id: Number,
  name: String,
  email: String,
})
</script>

<template>
  <!-- Filas de los usuarios -->
  <div class="grid row">
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ email }}</div>
    <div class="actions">
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Eliminar</button>
    </div>
  </div>
</template>
