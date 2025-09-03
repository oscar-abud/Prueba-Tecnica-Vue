<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  users: Array,
})

const emit = defineEmits(['update:filtered'])

const search = ref('')

// Observa los cambios y filtra
watch(search, (val) => {
  const filtered = !val
    ? props.users
    : props.users.filter(
        (u) =>
          u.name.toLowerCase().includes(val.toLowerCase()) ||
          u.email.toLowerCase().includes(val.toLowerCase()),
      )
  emit('update:filtered', filtered)
})
</script>

<template>
  <input
    v-model="search"
    type="text"
    placeholder="Filtrar por nombre o email..."
    class="filter-input"
  />
</template>

<style scoped>
.filter-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
