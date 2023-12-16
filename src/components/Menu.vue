<template>
<div class="navbar bg-base-100 rounded-2xl">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    </div>
    <label class="font-bold text-6xl ml-6 flex items-center whitespace-nowrap">
        <label class="pl-5 pr-5 pt-2 pb-2 rounded-3xl shadow-lg text-white bg-tricolor" style="--bg-color-1: #ff0000; --bg-color-2: #db41fa; --bg-color-3: #0077ff;">LED 64</label>
        <label class="ml-5"> Controller</label>
    </label>
  </div>
  <div class="navbar-end">
    <label v-if="!isConnected" class="btn font-medium text-5xl h-24 rounded-3xl mr-6 shadow">Connect</label>
    <label v-if="isConnected" class="swap">
        <input type="checkbox"/>
        <div class="swap-on font-medium text-5xl pt-4 text-center w-32 h-20 rounded-3xl mr-6 bg-blue-500 shadow text-white">ON</div>
        <div class="swap-off font-medium text-5xl pt-4 text-center w-32 h-20 rounded-3xl mr-6 bg-red-200 shadow">OFF</div>
    </label>
  </div>
</div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({isConnected:Boolean})
const isConnected = ref(props.isConnected);

</script>