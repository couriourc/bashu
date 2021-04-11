<template>
  <div class="swiper-container">
    <el-row type="flex" align="middle" justify="center">
      <img
        width="40px"
        :src="require('@/assets/images/leftBtn.png')"
        @click="prePage"
        @mouseenter="switchPage"
        @mouseleave="switchPage"
      />
      <el-carousel
        :arrow="showArrow"
        ref="carousel"
        :autoplay="isChange"
        type="card"
      >
        <el-carousel-item v-for="item in imgs" class="carouselItem" :key="item">
          <el-image :src="item" fit="cover" />
        </el-carousel-item>
      </el-carousel>
      <img
        width="40px"
        :src="require('@/assets/images/rightBtn.png')"
        class="arrow-right bg-purple-light"
        @click="nextPage"
        @mouseenter="switchPage"
        @mouseleave="switchPage"
      />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChange: true,
      showArrow: "never",
      throttle: true,
    };
  },
  props: {
    imgs: {
      default() {
        return [
          require("@/assets/images/dynamic.png"),
          require("@/assets/images/mingshu1.png"),
          require("@/assets/images/art.png"),
          require("@/assets/images/quyi.png"),
          require("@/assets/images/wudao.png"),
        ];
      },
    },
  },
  mounted() {

  },
  beforeDestroy() {
  },
  methods: {
    switchPage() {
      this.isChange = !this.isChange;
    },
    nextPage() {
      this.$refs.carousel.next();
    },
    prePage() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
.swiper-container {
  display: inline-block;
  width: 100%;
}

.arrow-left {
  text-align: right;
}

.arrow-right img,
.arrow-left img {
  width: 50px;
}

.el-carousel {
  width: 100%;
}

.carouselItem img {
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;

  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
