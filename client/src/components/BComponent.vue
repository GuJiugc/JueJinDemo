<!-- B组件 -->
<template>
    <div>
        BComponent: {{ str }}
    </div>
</template>
   
<script setup>
   import { onMounted, ref } from "vue"
   import $http from "@/axios.js"

   let str = ref("")
   function getTest() {
       $http.get("/test").then((res) => {
           str = res.data.data
       }).catch(() => {

       })
   }

   onMounted(() => {
       getTest()
   })
</script>
   
<style>
   
</style>