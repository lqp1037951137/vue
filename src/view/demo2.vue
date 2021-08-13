<template>
  <div>
    <diy-slot>
      <template v-slot:index></template>
    </diy-slot>
  </div>
</template>

<script>
import { ImagePreview, Toast } from "vant";
import slot from "@/components/slot";
export default {
  components: {
    "diy-slot": slot
  },
  data() {
    return {};
  },
  mounted() {
    ImagePreview({
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg"
      ],
      showIndicators: true,
      onClose: () => Toast("关闭了"),
      onChange: index => Toast(index),
      onScale:(index,scale) => console.log(index)
    });
  },
  methods: {}
};
</script>

<style scoped>

</style>
