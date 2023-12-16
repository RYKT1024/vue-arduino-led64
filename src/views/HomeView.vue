<template>
<div class="fixed bg-gray-50 h-full w-full">
  <div class="bg-tricolor p-6 h-52" style="--bg-color-1: #fca5a5; --bg-color-2: #e4ffc5; --bg-color-3: #93c5fd;">
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