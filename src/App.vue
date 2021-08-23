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
                  :key="item.name"
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
          path: "/page4"
        },
        {
          name: "标题5",
          path: "/page5"
        },
        {
          name: "标题6",
          path: "/page6"
        }
      ],
      selectMenuIndex: 0
    };
  },
  methods: {
    clickMenu(index) {
      this.selectMenuIndex = index;
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100vw;
 
  height: 100vh;
  background: rgb(120, 121, 122);
  display: flex;
}
.left {
  background: #2a384c;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
}
.left-o {
  flex: 10;
  min-width: 120px;
}
.left-c {
  flex: 3;
  min-width: 50px;
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
  transition: all 0.5s;
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
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
