<template>
  <div class="Swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img style="width:135%" src="../../assets/img/1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img style="width:135%" src="../../assets/img/2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img style="width:135%" src="../../assets/img/3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img style="width:135%" src="../../assets/img/4.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img style="width:135%" src="../../assets/img/5.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="Blank"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        initialSlide: 1
        // Some Swiper option/callback...
      }
    };
  }
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   }
  // },
  // mounted() {
  //   //console.log("Current Swiper instance object", this.swiper);
  //   this.$refs.mySwiper.$swiper.slideTo(1, 1000, false);
  // }
};
</script> 

<style lang="stylus" scoped>
>>>.swiper-pagination-bullet {
  background: #fefffd;
  width: 15px;
  height: 15px;
}

img {
  vertical-align: middle;
}

.Blank {
  height: 20px;
  background #f0f0f0
}
</style>