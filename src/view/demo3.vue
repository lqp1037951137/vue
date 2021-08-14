<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-image
        v-for="(img, index) in imageList"
        lazy-load
        :key="index"
        :src="img"
        width="100%"
        height="auto"
      ></van-image>
    </van-list>
  </div>
</template>

<script>
import { Image, List } from "vant";
export default {
  components: {
    "van-image": Image,
    "van-list": List
  },
  data() {
    return {
      imageList: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg"
      ],
      finished: false,
      loading: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.imageList.push(
          "https://img01.yzcdn.cn/vant/apple-1.jpg",
          "https://img01.yzcdn.cn/vant/apple-2.jpg",
          "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "https://img01.yzcdn.cn/vant/apple-4.jpg"
        );
        this.loading = false;
        if (this.imageList.length >= 20) {
          this.finished = true;
        }
      }, 2000);
    }
  }
};
</script>

<style scoped></style>
