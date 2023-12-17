<template>
  <div id="app" class="min-h-screen">
    <Home class="shadow-2xl max-h-screen overflow-y-auto" :style="{ maxWidth: '1080px', margin: '0 auto' }"/>
  </div>
</template>

<script setup>
import Home from "@/views/HomeView.vue"
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使整个页面垂直居中 */
}
</style>