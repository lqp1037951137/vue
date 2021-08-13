<template>
  <div>
    <van-image
      v-for="img in imageList"
      lazy-load
      :key="img"
      :src="img"
      width="100%"
      height="auto"
    ></van-image>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    "van-image": Image
  },
  data() {
    return {
      imageList: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg"
      ]
    };
  }
};
</script>

<style scoped></style>
