<script setup>
import axios from 'axios'
import { ref } from 'vue';
let navList = ref()
axios.get("lua.json").then(res => {
  navList.value = res.data
})

</script>

<template>
  <div>
    <RootNav :list="navList" />
  </div>
</template>

<style scoped></style>
