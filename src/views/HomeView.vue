<template>
<div class="fixed bg-gray-50  h-full w-full">
  <div class="bg-tricolor p-6 h-48" style="--bg-color-1: #ff7878; --bg-color-2: #d1ff9d; --bg-color-3: #75b5ff;">
    <Menu class="shadow-xl shadow-blue h-full"/>
  </div>
  <div class="pt-8 pl-5 pr-5">
    <List class="shadow-lg rounded-xl bg-white"/>
  </div>
</div>
  
    
</template>

<script setup>
import Menu from "@/components/Menu.vue"
import List from "@/components/Listbox.vue"
</script>