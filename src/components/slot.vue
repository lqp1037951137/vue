<template>
  <div>
    <slot  name="index">slot</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.index++;
    // }, 1000);
  }
};
</script>

<style scoped>

</style>
