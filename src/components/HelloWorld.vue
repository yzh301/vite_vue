<!--
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-01-11 10:25:22
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-01-11 17:45:33
 * @FilePath: \vite_vue\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
import variables from "@/assets/styles/variables.module.scss";
console.log(variables.bgColor)  
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card" :style="{ 'background-color': variables.bgColor }">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style  lang="scss" scoped>
.read-the-docs {
  color: #888;
  background-color: $BgColor;
}
</style>
