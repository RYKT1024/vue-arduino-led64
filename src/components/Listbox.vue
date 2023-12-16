
<template>
    <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead class="text-4xl">
      <tr>
        <th class="w-2/12"></th>
        <th class="w-5/12">Mode</th>
        <th class="w-4/12">Config</th>
        <th></th>
      </tr>
    </thead>
    <tbody class="text-5xl">
      <tr v-for="(config, index) of configs" :key="index"
          :class="listClass(config)"
          @click="select(index)">
        <th>{{index+1}}</th>
        <td>{{config.mode}}</td>
        <td class="flex h-36 pb-1 border-white items-center">
            <ColorBox v-for="(color, index) of config.config" :key="index" :rgb="color"
                      class="mr-8"/>
        </td>
        <td><Operation :class="setClass(config)"/></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue';
import ColorBox from './ColorBox.vue';
const props = defineProps({
    selected: Number,
    configs: Array,
})
const selected = ref(props.selected);
const configs = reactive(props.configs);

const listClass = (config) => {
    return config.selected ? "h-32 bg-green-50" : "h-32"
}

const setClass = (config) => {
    return config.selected ? "btn p-2 w-20 h-32 bg-indigo-600 text-white" : "btn p-2 w-20 h-32 bg-gray-50"
}

const select = (index) => {
    selected.value = index
    configs.forEach((_, i) => {
        configs[i].selected = (i == index ? true : false)
    })
}

</script>
