<template>
<div class="pl-5 pr-5">
  <div class="card w-full h-auto bg-white text-black shadow-xl shadow-green-200">
    <div class="card-body text-center">
      <h2 class="card-title text-7xl mb-10 mt-2 ml-8">Server IP address</h2>
      <div class="card-actions flex flex-row items-center w-full mb-2">
        <textarea v-model="ipAddress" class="textarea text-6xl textarea-info w-8/12 h-28 rounded-3xl pt-6 mr-7 ml-6 pl-6" placeholder="192.168.31.234"></textarea>
        <button @click="setIPaddress(ipAddress)" class="btn bg-blue-700 text-white h-28 w-3/12 text-6xl rounded-3xl pb-1">Accept</button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({setIPaddress: Function})

const ipAddress = ref("");
const setIPaddress = props.setIPaddress

</script>