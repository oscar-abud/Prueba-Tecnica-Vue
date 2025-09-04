<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  id: Number,
  name: String,
  email: String,
})

const emit = defineEmits(['cancel', 'sendSubmit'])

const formName = ref(props.name || '')
const formEmail = ref(props.email || '')

function handleSubmit() {
  emit('sendSubmit', {
    id: props.id,
    name: formName.value,
    email: formName.value,
  })
}
</script>

<template>
  <h2>Editar Usuario</h2>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Nombre:</label>
      <input v-model="formName" required />
    </div>
    <div>
      <label>Email:</label>
      <input v-model="formEmail" type="email" required />
    </div>
    <div class="form-actions">
      <button type="submit" class="edit-btn">Guardar</button>
      <button type="button" @click="emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>
