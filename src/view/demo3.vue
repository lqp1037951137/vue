<template>
  <div><img v-for="img in imageList" v-lazy="img" :key="img"/></div>
</template>

<script>
export default {};
</script>

<style scoped></style>
