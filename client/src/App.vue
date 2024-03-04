<template>
  <!-- <AComponent></AComponent>
  <BComponent></BComponent> -->
<el-button type="primary" @click="test">测试按钮</el-button>
<hr>
<el-upload
  :http-request="diyUploadRequest"
  >
    <el-button type="primary">Click to upload</el-button>
  </el-upload>
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

function diyUploadRequest(options) {
  let formData = new FormData()
  const headers = { 'content-type': 'multipart/form-data'};
  formData.append("file", options.file)

  $http({
    url: "/uploadFile",
    headers,
    method: "post",
    data: formData
  }).then(res => {

  })
}
</script>

<style scoped>

</style>
