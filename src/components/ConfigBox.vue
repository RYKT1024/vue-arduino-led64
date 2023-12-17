<template>
<div class="fixed pl-5 pr-5">
<div class="overflow-x-auto shadow-xl rounded-2xl bg-white shadow-indigo-300">
  <table class="table">
    <!-- head -->
    <thead class="text-4xl">
      <tr v-show="false">
        <th class="w-2/12"></th>
        <th class="w-10/12"></th>
      </tr>
    </thead>
    <tbody class="text-5xl">
      <tr class="h-32">
        <td class="w-2/12 bg-red-100 text-center font-medium">Mode</td>
        <td class="w-full pl-12">
            <select class="select  max-w-xs text-5xl select-lg pl-0 h-full" v-model="config.mode">
            <option class="text-2xl" v-for="(mode, index) of modes" :key="index">{{mode}}</option>
            </select>
        </td>
      </tr>
      <tr class="h-32" v-if="config.speed">
        <td class="bg-green-100 text-center font-medium">Speed</td>
        <td class="pl-12">{{ config.speed }}</td>
      </tr>
      <tr class="h-32" v-for="(color, index) of config.colors" :key="index">
        <td class=" bg-blue-100 text-center font-medium">{{ init(index) }}</td>
        <td class="pl-12"><color-box :rgb="color"/></td>
      </tr>
    </tbody>
  </table>
</div>
</div>

</template>

<script setup>
import { reactive, defineProps } from 'vue';
import ColorBox from './ColorBox.vue';

const props = defineProps({
    config: Object,
})
const config = reactive(props.config)
const modes = ["breath", "gradient"]

const init = (index) => {
    return index == 0 ? "Color" : ""
}

</script>