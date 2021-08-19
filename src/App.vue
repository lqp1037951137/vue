<template>
  <div id="app">
    <div class="main">
      <div class="left" v-bind:class="openMenu ? ' left-o' : ' left-c'">
        <img
          class="menu"
          @click="openMenu = !openMenu"
          src="./assets/Menu.png"
          alt=""
          width="50"
          height="50"
        />
        <transition name="fade">
          <template v-if="openMenu">
            <div>
              <span class="title">图表</span>
              <ul>
                <li
                  v-for="(item, index) in menuData"
                  :key="item"
                  :class="{ active: index === selectMenuIndex }"
                  @click="clickMenu(index)"
                >
                  <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
          </template>
        </transition>
      </div>
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
      openMenu: true,
      // menuData: ["标题1", "标题2", "标题3", "标题4", "标题5"],
      menuData: [
        {
          name: "标题1",
          path: "/"
        },
        {
          name: "标题2",
          path: "/page2"
        },
        {
          name: "标题3",
          path: "/page3"
        },
        {
          name: "标题4",
          path: "/"
        },
        {
          name: "标题5",
          path: "/"
        }
      ],
      selectMenuIndex: 0
    };
  },
  methods: {
    clickMenu(index) {
      this.selectMenuIndex = index;
      // switch(index){
      //   case 0:
      //     this.$route.
      // }
    }
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
  position: relative;
}

.left-o {
  flex: 10;
}
.left-c {
  flex: 3;
}
.title {
  color: white;
  padding: 10px 15px;
  font-size: 16pt;
  display: block;
}
.menu {
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  float: right;
  right: 0;
  top: 0px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
ul {
  margin-top: 20px;
}

ul li {
  color: rgb(207, 207, 207);
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}

ul li.active,
ul li.active a {
  background: #1c2634;
  color: white;
}
ul li a {
  color: rgb(207, 207, 207);
  width: 100%;
  height: 100%;
  display: block;
}
a:link {
  text-decoration: none; /* 指正常的未被访问过的链接*/
}

a:visited {
  text-decoration: none; /*指已经访问过的链接*/
}

a:hover {
  text-decoration: none; /*指鼠标在链接*/
}

a:active {
  text-decoration: none; /* 指正在点的链接*/
}
</style>
