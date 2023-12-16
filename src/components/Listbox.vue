
<template>
    <div class="overflow-x-auto">
  <table class="table text-5xl">
    <!-- head -->
    <thead>
      <tr>
        <th class="w-1/12"></th>
        <th class="text-4xl w-4/12">Mode</th>
        <th class="text-4xl">Config</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(config, index) of configs" :key="index"
          :class="listClass(config)"
          @click="select(index)">
        <th>{{index+1}}</th>
        <td>{{config.mode}}</td>
        <td>{{config.config}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const selected = ref(0);

const configs = reactive([
    {mode:"Breath", config:"Red", selected:true},
    {mode:"Breath", config:"Yellow", selected:false},
    {mode:"Gradient", config:"Red, Yellow", selected:false},
    {mode:"Gradient", config:"Blue, Pink", selected:false},
    {mode:"Gradient", config:"Brown, Orange", selected:false}
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
