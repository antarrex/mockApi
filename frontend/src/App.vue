<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="header box">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <router-link class="navbar-brand has-text-weight-semibold is-size-3 has-text-dark" to="/">
          MockAPI
        </router-link>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <strong>Загрузить файл</strong>
              </a>
              <a class="button is-light"> Скачать файл </a>
              <router-link class="button is-link" to="/add">Добавить</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 1rem;
  padding: 0.5rem 5rem;
}
</style>
