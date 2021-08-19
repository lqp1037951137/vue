<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
 data () {
   const a = res=>res;
    return {
      msg: a('Welcome to Your Vue.js App')
    }
  }
}
</script>

<style>

</style>
