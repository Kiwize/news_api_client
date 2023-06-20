<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="w-75 d-flex flex-row justify-content-center mx-auto p-3 rounded-5 mt-3 shadow">
        <RouterLink to="/" class=" btn btn-primary mx-2">Acceuil</RouterLink>
        <RouterLink to="/feedmanager" class=" btn btn-primary mx-2 ">Sources</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
nav {
  background-color: #2d3136;
}
</style>
