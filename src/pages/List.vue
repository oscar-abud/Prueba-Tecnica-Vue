<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// Tabla grid header
import TableHeaderGrid from '@/components/TableHeader.vue'
import TableUsersGrid from '@/components/TableUsers.vue'
//Importando
import useUsers from '../composables/useUsersQuerys'
const { users, usersLoading, usersError } = useUsers()
</script>

<template>
  <Header />
  <main>
    <div class="user-table-container">
      <h1 class="title">Listado de Usuarios</h1>
      <div id="loading" v-if="usersLoading">
        <h1>Cargando...</h1>
      </div>
      <div v-else>
        <!-- Filtro -->
        <input type="text" placeholder="Filtrar por nombre o email..." class="filter-input" />

        <!-- Tabla tipo grid Header -->
        <TableHeaderGrid />

        <!-- Filas de usuarios -->
        <!-- <TableUsersGrid id="1" name="Oscar Palma" email="oscarP@mail.com" /> -->
        <TableUsersGrid
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :name="user.name"
          :email="user.email"
        />

        <!-- Paginación -->
        <!-- <div class="pagination">
            <button class="prev-btn" disabled>Anterior</button>
            <span>Página 1 de 10</span>
            <button class="next-btn">Siguiente</button>
            </div> -->
      </div>
    </div>
  </main>
  <Footer />
</template>

<style>
.user-table-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.filter-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.row {
  border-bottom: 1px solid #ddd;
}

/* Botones */
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

/* Paginación */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.pagination button {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

#loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

#loading h1 {
  font-size: 3rem;
}
</style>
