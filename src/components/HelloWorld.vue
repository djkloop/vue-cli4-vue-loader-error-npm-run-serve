<template>
  <div class="hello">
    <h1>{{ props?.msg }}</h1>
    <button class="dyVarStyle" style="margin-bottom: 10px;">我是第一个按钮</button>
    <TestDemo @emit-click="useEmitClick" />
  </div>
</template>

<script lang="ts" setup>

import { ref } from "vue";

import TestDemo from "./Test"

interface IProps {
  msg: string
}

const props = defineProps<IProps>()
  const bgColor = ref('red')

const useEmitClick = () => {
  console.log("--->")
  bgColor.value = bgColor.value === 'red' ? 'blue': 'red'
}




</script>

<style >
.dyVarStyle {
  background: v-bind(bgColor);
}
</style>
