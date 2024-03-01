<!-- A组件 -->
<template>
     <div>
        AComponent: {{ str }}
     </div>
</template>
    
<script setup>
    import { onMounted, ref } from "vue"
    import $http from "@/axios.js"

    let str = ref("")
    function getTest() {
        $http.get("/test").then((res) => {
            str.value = res.data.data
        }).catch(() => {

        })
    }

    onMounted(() => {
        getTest()
    })
</script>
    
<style>
    
</style>