<template>
<div class="container">
  <el-button type="primary" @click="test">测试按钮</el-button>
</div>
</template>

<script setup>
import $http from "./axios.js"
import { ElNotification } from 'element-plus'

function test() {
  $http.get("/test").then(async (res) => {
    ElNotification({
      title: 'Success',
      message: 'This is a success message',
      type: 'success',
    })
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style scoped>
.container {
  height: 90vh;
}
</style>
