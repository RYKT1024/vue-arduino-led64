<template>
<div class="mt-0 fixed bg-gray-50 h-full w-full">
    <div class="bg-tricolor p-6 h-48" style="--bg-color-1: #ff7878; --bg-color-2: #d1ff9d; --bg-color-3: #75b5ff;">
    <Menu  ref="menu" :switch="switchLED" :setIPcomp="setIPcomp" class="shadow-xl shadow-blue h-full" />
    </div>
    <div class="pt-8 pl-5 pr-5">
    <mode-list :configs="configs" :select="selectLED" :setConfig="setConfig" class="shadow-lg rounded-xl bg-white" />
    </div>
    <div class="overlay" v-if="ip_entry" @click="setIPcomp(false)">
        <ip-entry v-if="ip_entry" :setIPaddress="setIPaddress" @click.stop/>
    </div>
    <div class="overlay" v-if="config_box" @click="setConfig(undefined, false)">
        <config-box v-if="config_box"
                    :config="configs[selected]" @click.stop/>
    </div>
</div>
</template>

<script setup>
import Menu from "@/components/Menu.vue"
import ModeList from "@/components/ModeBox.vue"
import IpEntry from "@/components/IpEntry.vue"
import ConfigBox from "@/components/ConfigBox.vue"

import { ref, reactive } from "vue"
import api from "@/api"

const selected = ref(-1);
const configs = reactive([]);
const menu = ref(null);
const ip_entry = ref(false);
const config_box = ref(false);

const selectLED = (index) => {
    selected.value = index
    configs.forEach((_, i) => {
        configs[i].selected = (i == index ? true : false)
    })
    const json = {
        mode: "set",
        config: {onboard: index}
    }
    api.set(JSON.stringify(json))
}

const setIPaddress = (ipAddress) => {
  if(!ipAddress){
    ipAddress = "192.168.31.234"
  }
  api.setup(ipAddress)
  api.config()
  .then(res => {
    configs.length = 0
    Object.values(res.data).forEach(function (value) {
        var colors = []
        Object.keys(value).forEach(function (key) {
            if(key.includes("color"))
                colors.push(value[key])
        });
        configs.push({mode:value.mode, speed:value.speed, colors:colors, selected:false})
    });
    setIPcomp(false)
    menu.value.isConnected = true
  })
}

const setConfig = (index, bool) => {
    if(index!=undefined)
        selected.value = index
    config_box.value = bool
}

const setIPcomp = (bool) => {
    ip_entry.value = bool
}

const switchLED = () => {
    const json = {
        mode: "switch",
    }
    api.set(JSON.stringify(json));
}
</script>

<style scoped>
.overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.35); /* 半透明黑色背景 */
display: flex;
align-items: center;
justify-content: center;
z-index: 999; /* 确保遮罩在最顶层 */
}
</style>