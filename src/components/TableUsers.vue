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

<style scoped>
.actions button {
  padding: 0.5rem 0.8rem;
  margin-right: 0.3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.edit-btn {
  background-color: var(--green-color);
  color: white;
  opacity: 0.8;
  transition: ease 0.2s;
}
.edit-btn:hover {
  opacity: 1;
}
.delete-btn {
  background-color: #ff4d4f;
  color: white;
}
.delete-btn:hover {
  background-color: #d9363e;
}
</style>
