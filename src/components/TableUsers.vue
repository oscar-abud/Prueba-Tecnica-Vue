<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  id: Number,
  name: String,
  email: String,
})
const emit = defineEmits(['delete'])
</script>

<template>
  <!-- Filas de los usuarios -->
  <div class="grid row">
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ email }}</div>
    <div class="actions">
      <button class="edit-btn">Editar</button>
      <button class="delete-btn" @click="emit('delete', id)">Eliminar</button>
    </div>
  </div>
</template>
