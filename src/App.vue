<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Me</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/education">Experience & Education</RouterLink>
    <RouterLink to="/contact">Contact Me</RouterLink>

  </nav>

  <RouterView />
</template>

<style>
nav {
  padding: 1rem;
  display: flex;
  gap: 2rem;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

/* This class is automatically added by Vue Router when the link is active! */
.router-link-active {
  color: #42b883;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f5f3ff; /* Base Lilac-White */

  /* This creates four 'blobs' of color that overlap and blend irregularly */
  background: 
    radial-gradient(at 0% 0%, hsla(268, 100%, 85%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, hsla(252, 90%, 80%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(273, 85%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(245, 95%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 50% 50%, hsla(260, 100%, 90%, 1) 0px, transparent 50%);

  background-attachment: fixed;
  background-size: cover;
}

#app {
  /* This 'frosted glass' layer smooths the blobs into a professional glow */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(100px);
  min-height: 100vh;
}
</style>