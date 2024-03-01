<template>
  <AComponent></AComponent>
  <BComponent></BComponent>
<el-button type="primary" @click="test">测试按钮</el-button>
</template>

<script setup>
import $http from "./axios.js"
import { ElMessage } from 'element-plus'
import AComponent from "./components/AComponent.vue";
import BComponent from "./components/BComponent.vue";

function test() {
  $http.get("/test").then(async (res) => {

  }).catch(err => {
    // 接口出错时，做一些逻辑处理
    ElMessage.warning("err:" + err)
  })
}
</script>

<style scoped>

</style>
