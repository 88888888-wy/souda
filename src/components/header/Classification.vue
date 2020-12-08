<template>
  <div class="Classification">
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(1).jpg" />
        <div class="Text">美食外卖</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(2).jpg" />
        <div class="Text">甜品饮品</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(3).jpg" />
        <div class="Text">果蔬生鲜</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(4).jpg" />
        <div class="Text">超市便利</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(5).jpg" />
        <div class="Text">鲜花蛋糕</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img style="margin-left:22px" src="../../assets/img/Classification(6).jpg" />
        <div class="Text">品牌馆</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(7).jpg" />
        <div class="Text">小吃夜宵</div>
      </router-link>
      <router-link class="item" to="/swiper">
        <img src="../../assets/img/Classification(8).jpg" />
        <div class="Text">全部分类</div>
      </router-link>
    <div class="Blank"></div>
  </div>
</template>

<script>
export default {
  name: "Classification"
};
</script>


<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.Classification {
  display flex
  flex-wrap wrap
}
.item {
  width (25%)
  box-sizing border-box
  height (130 / $rem)
  text-align center
}
img {
  margin-top 10px
  width 70px
  height 50px
  //vertical-align: middle;
}
.Text {
  //margin-top 15px
  font-size 24px
  letter-spacing 2px
}
.Blank {
  width 100%
  height 1px
  background #f0f0f0
}
</style>