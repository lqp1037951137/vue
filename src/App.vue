<template>
  <div id="app">
    <div class="main">
      <div class="left" v-bind:class="openMenu ? ' left-o' : ' left-c'"></div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const a = res => res;
    return {
      openMenu: true
    };
  }
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
  background: rgb(120, 121, 122);
  display: flex;
}
.left {
  background: #2a384c;
  height: 100%;
  transition: flex 0.3s ease;
}

.left-o {
  flex: 10;
}
.left-c {
  flex: 3;
}
</style>
