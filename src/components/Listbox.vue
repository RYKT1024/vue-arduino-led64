
<template>
    <div class="overflow-x-auto">
  <table class="table text-5xl">
    <!-- head -->
    <thead>
      <tr>
        <th class="w-2/12"></th>
        <th class="text-4xl w-5/12">Mode</th>
        <th class="text-4xl">Config</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(config, index) of configs" :key="index"
          :class="listClass(config)"
          @click="select(index)">
        <th>{{index+1}}</th>
        <td>{{config.mode}}</td>
        <td class="flex h-32 items-center">
            <ColorBox v-for="(color, index) of config.config" :key="index" :rgb="color"
                      class="mr-8"/>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import ColorBox from './ColorBox.vue';

const selected = ref(0);

const configs = reactive([
    {mode:"Breath", config:[[240,120,0]], selected:true},
    {mode:"Breath", config:[[0,0,240]], selected:false},
    {mode:"Gradient", config:[[0,255,50]], selected:false},
    {mode:"Gradient", config:[[100,200,50], [0,100,250]], selected:false},
    {mode:"Gradient", config:[[255,255,0], [0,255,255]], selected:false}
])

const listClass = (config) => {
    return config.selected ? "h-32 bg-green-50" : "h-32"
}

const select = (index) => {
    selected.value = index
    configs.forEach((_, i) => {
        configs[i].selected = (i == index ? true : false)
    })
}
</script>
