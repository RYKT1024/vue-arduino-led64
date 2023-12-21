
<template>
<div class="overflow-x-auto select-none">
  <table class="table">
    <!-- head -->
    <thead class="text-4xl">
      <tr class="bg-green-50">
        <th class="w-2/12"></th>
        <th class="w-5/12">Mode</th>
        <th class="w-4/12">Colors</th>
        <th></th>
      </tr>
    </thead>
    <tbody class="text-5xl">
      <tr v-for="(config, index) of configs" :key="index"
          :class="listClass(config)"
          @click="selectLED(index)">
        <th>{{index+1}}</th>
        <td>{{config.mode}}</td>
        <td class="flex h-36 pb-1 border-white items-center">
            <ColorBox v-for="(color, index) of config.colors" :key="index" :rgb="color"
                      class="mr-8"/>
        </td>
        <td><Operation @click="setCoinfig(index, true)" :class="setClass(config)"/></td>
      </tr>
      <tr v-if="!configs.length">
        <th></th>
        <td class="text-5xl">not connected.</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { reactive, defineProps } from 'vue';
import ColorBox from './ColorBox.vue';
const props = defineProps({
    configs: Array,
    select: Function,
    setConfig: Function,
})
const configs = reactive(props.configs);
const selectLED = props.select;
const setCoinfig = props.setConfig;

const listClass = (config) => {
    return config.selected ? "h-32 bg-indigo-50" : "h-32"
}

const setClass = (config) => {
    return config.selected ? "btn p-2 w-20 h-32 bg-indigo-600 text-white" : "btn p-2 w-20 h-32 bg-gray-50"
}



</script>
