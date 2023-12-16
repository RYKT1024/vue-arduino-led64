<template>
<div class="fixed bg-gray-50  h-full w-full">
  <div class="bg-tricolor p-6 h-48" style="--bg-color-1: #ff7878; --bg-color-2: #d1ff9d; --bg-color-3: #75b5ff;">
    <Menu class="shadow-xl shadow-blue h-full" :isConnected="isConnected"/>
  </div>
  <div class="pt-8 pl-5 pr-5">
    <List :configs="configs" :selected="selected" 
          class="shadow-lg rounded-xl bg-white"/>
  </div>
</div>
  
    
</template>

<script setup>
import Menu from "@/components/Menu.vue"
import List from "@/components/Listbox.vue"
import { ref, reactive } from "vue"

const selected = ref(-1);

const configs = reactive([
    {mode:"Breath", config:[[240,120,0]], selected:false},
    {mode:"Breath", config:[[255,0,50]], selected:false},
    {mode:"Gradient", config:[[0,255,50]], selected:false},
    {mode:"Gradient", config:[[100,200,50], [0,100,250]], selected:false},
    {mode:"Gradient", config:[[255,255,0], [0,255,255]], selected:false},
    
])

const isConnected = ref(false);
</script>