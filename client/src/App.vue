<template>
<el-button type="primary" @click="test">测试按钮</el-button>
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

</style>
