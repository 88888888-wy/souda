<template>
  <div class="Takeout">
    <Header></Header>
    <Swiper></Swiper>
    <Classification></Classification>
    <Announcement></Announcement>
    <Food></Food>
    <Periphery></Periphery>
    <Like></Like>
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import Swiper from "../components/header/Swiper.vue";
import Classification from "../components/header/Classification.vue";
import Announcement from "../components/header/Announcement.vue";
import Food from "../components/header/Food.vue";
import Periphery from "../components/header/Periphery.vue";
import Like from "../components/header/Like.vue";

export default {
  name: "Takeout",
  components: {
    Header,
    Swiper,
    Classification,
    Announcement,
    Food,
    Periphery,
    Like
  }
};
</script>


<style lang="stylus" scoped>
// .swiper-pagination-bullet {
//   background #fefffd
// }
</style>