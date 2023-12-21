<template>
<div class="fixed pl-5 pr-5">
<div class="overflow-x-auto shadow-xl rounded-2xl bg-white shadow-pink-200">
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
        <td class="w-2/12 bg-red-100 text-center font-medium select-none">Mode</td>
        <td class="w-full pl-12 bg-red-100">
            <select class="select  max-w-xs text-5xl select-lg pl-0 h-full select-ghost" v-model="config.mode">
            <option class="text-5xl" v-for="(mode, index) of modes" :key="index">{{mode}}</option>
            </select>
        </td>
      </tr>
      <tr class="h-32">
        <td class="w-2/12 bg-yellow-100 text-center font-medium select-none">Bright</td>
        <td class="pl-12 flex items-center pt-8 pr-16">
            <span class="w-36 mb-1 select-none">{{ config.brightness }}</span>
            <div class="w-full mt-1">
                <input type="range" min="0" max="1" value="0.05" class="range range-warning range-lg" step="0.05" v-model="config.brightness"/>
                <div class="w-full flex justify-between text-xs px-2 select-none">
                    <span class="text-yellow-700" v-for="index of 6">|</span>
                </div>
            </div>
        </td>
      </tr>
      <tr class="h-32" v-if="config.speed">
        <td class="bg-green-100 text-center font-medium select-none">Speed</td>
        <td class="pl-12 flex items-center pt-8 pr-16">
            <span class="w-36 mb-1 select-none">{{ config.speed }}</span>
            <div class="w-full mt-1">
                <input type="range" min="0.2" max="1.8" value="0.05" class="range range-accent range-lg" step="0.05" v-model="config.speed"/>
                <div class="w-full flex justify-between text-xs px-2 select-none">
                    <span class="text-green-600" v-for="index of 9">|</span>
                </div>
            </div>
        </td>
      </tr>
      <tr class="h-32" v-for="(color, index) of config.colors" :key="index">
        <td class=" bg-blue-100 text-center font-medium select-none">{{ init(index) }}</td>
        <td class="pl-14 flex items-center pt-6 pr-16 pb-4">
            <div class="w-auto mr-4 pb-2">
                <color-box :rgb="color"/>
            </div>
            <div class="flex items-center w-full">
                <div class="w-16 flex flex-col ml-14 pb-8 ">
                    <div class="w-4 mt-4 mb-2 select-none" v-for="(_, i) of color" :key="i">
                        <span :class="rgb_text(i)">{{ color[i] }}</span>
                    </div>
                </div>
                <div class="w-full flex flex-col ml-14 mt-1">
                    <div class="w-full" v-for="(_, i) of color" :key="i">
                        <input type="range" min="0" max="255" value="1" :class="rgb_scroll(i)" step="1" v-model="config.colors[index][i]"/>
                        <div class="w-full flex justify-between text-xs px-2 mb-2 select-none">
                            <span :class="rgb_bar(i)" v-for="index of 9">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>

</template>

<script setup>
import { reactive, defineProps, watch } from 'vue';
import ColorBox from './ColorBox.vue';

const props = defineProps({
    config: Object,
    setBoard: Function,
})
const config = reactive(props.config)
const modes = ["static", "breath", "gradient"]
const setBoard = props.setBoard

const init = (index) => {
    return index == 0 ? "Color" : ""
}

const rgb_scroll = (i) => {
    switch(i){
        case 0:
            return "range range-lg range-error"
        case 1:
            return "range range-lg range-success"
        case 2:
            return "range range-lg range-info"
    }
}

const rgb_bar = (i) => {
    switch(i){
        case 0:
            return "text-red-700"
        case 1:
            return "text-green-700"
        case 2:
            return "text-blue-700"
    }
}

const rgb_text = (i) => {
    switch(i){
        case 0:
            return "text-4xl mb-10 text-red-700 select-none"
        case 1:
            return "text-4xl mb-10 text-green-700 select-none"
        case 2:
            return "text-4xl mb-10 text-blue-700 select-none" 
    }
}

watch(config, (newVal, oldVal) => {
    setBoard(config)
},{
    deep: true,		
})

</script>