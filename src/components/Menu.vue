<template>
<div class="navbar bg-base-100 rounded-2xl select-none">
  <div class="navbar-start">
    <label class="font-bold text-6xl ml-6 flex items-center whitespace-nowrap">
        <label class="pl-5 pr-5 pt-3 pb-3 rounded-3xl shadow-lg text-white bg-tricolor" style="--bg-color-1: #ff0000; --bg-color-2: #db41fa; --bg-color-3: #0077ff;">LED 64</label>
        <label class="ml-5"> Controller</label>
    </label>
  </div>
  <div class="navbar-end">
    <label v-if="!isConnected" class="btn font-medium text-5xl h-24 rounded-3xl mr-6 shadow"
           @click="setIPcomp(true)">Connect</label>
    <label v-if="isConnected" class="swap">
        <input type="checkbox" @click="switchLED" v-model="switch_button"/>
        <div class="swap-on font-medium text-5xl pt-4 text-center w-32 h-20 rounded-3xl mr-6 bg-blue-500 shadow text-white">ON</div>
        <div class="swap-off font-medium text-5xl pt-4 text-center w-32 h-20 rounded-3xl mr-6 bg-gray-100 shadow">OFF</div>
    </label>
  </div>
</div>
</template>
  
<script setup>
import { ref, watch, defineProps, defineExpose } from 'vue';
import api from "@/api"
const props = defineProps({
  switch: Function,
  setIPcomp: Function,
})
const isConnected = ref(false);
const switchLED = props.switch;
const switch_button = ref(false);


watch(isConnected, (newVal, oldVal) => {
  if(newVal){
    api.status().then(res => {
      switch_button.value = res.data.status[0] == 1 ? true : false;
    })
  }
})

defineExpose({isConnected})
</script>