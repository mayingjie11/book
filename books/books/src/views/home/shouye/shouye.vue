<template>
  <div class="shouye">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerList"  :key='index' >
              <img :src='item.image' alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "@/mock/index.js";
import Item from '@/components/item'
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.$http.get("/api/banner").then(res => {
      console.log(res.data.list);
      (this.bannerList = res.data.list),
            this.$nextTick(() => {
            new Swiper(".swiper-container", {
                autoplay: true,
                loop: true
            });
            });
    });
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>
.shouye {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 145px;
  background: pink;
}
.swiper-wrapper,
.swiper-slide,
img {
  width: 100%;
  height: 100%;
}
</style>