<template>
  <div class="Header">
    <div class="item">
      <router-link class="left" to="/swiper">
        <!-- <span class="iconfont icon-location"></span> -->
        <span class="iconfont icon-location"></span>
      </router-link>
      <span class="name">成都</span>
    </div>

    <!-- <router-link class="item" to="/swiper">
      <span class="name">成都</span>
    </router-link>-->

    <div class="item">
      <span class="subject">嗖哒外卖</span>
    </div>

    <router-link class="item right" to="/swiper">
      <span class="iconfont icon-fangdajingchazhao"></span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>


<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.Header {
  height: (88 / $rem);
  background: #ff5656;
  text-align: center;
  display: flex;
  top: 0;
}

.item {
  position: flex;
  display: flex;
  flex: 1;
  text-align: center;
  // flex-direction column
}

.left {
  margin-left: 30px;
}

.icon-location {
  font-size: (50 / $rem);
  color: white;
  line-height: 88px;
}

.name {
  font-size: (40 / $rem);
  color: white;
  font-weight: lighter;
  margin-left: 18px;
  line-height: 88px;
}

.subject {
  line-height: 88px;
  font-size: (40 / $rem);
  color: white;
  width: 100%;
  text-align: center;
}

.icon-fangdajingchazhao {
  font-size: (55 / $rem);
  font-weight: bold;
  color: white;
  line-height: 88px;
  margin-left: 172px;
}
</style>