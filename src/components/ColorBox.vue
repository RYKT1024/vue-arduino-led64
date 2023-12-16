<template>
    <div class="color-box" :style="boxStyle"></div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const { rgb } = defineProps(['rgb']);
  
  const boxStyle = computed(() => ({
    borderColor: 'black',
    backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
  }));
  </script>
  
  <style scoped>
  .color-box {
    width: 40px;
    height: 40px;
    border: 5px solid;
    border-radius: 8px;
  }
  </style>
  