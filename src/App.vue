<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="w-75 d-flex flex-row justify-content-center mx-auto p-3 rounded-5 mt-3 shadow">
        <RouterLink to="/" class="btn btn-primary mx-2">Acceuil</RouterLink>
        <RouterLink to="/feedmanager" class="btn btn-primary mx-2">Sources</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style>
nav {
  background-color: #2d3136;
}

#loading-screen {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

#loading-screen .loading-content {
  text-align: center;
  color: #fff;
}
</style>
