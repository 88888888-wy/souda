<template>
  <div id="app">
    <div id="nav">
      <router-link class="item active-class" exact tag="div" to="/takeout">
        <span class="iconfont icon-waimai"></span>
        <span class="name">外卖</span>
      </router-link>
      <router-link class="item active-class" tag="div" to="/order">
        <span class="iconfont icon-dingdan"></span>
        <span class="name">订单</span>
      </router-link>
      <router-link class="item active-class" tag="div" to="/user">
        <span class="iconfont icon-wode-copy"></span>
        <span class="name">我的</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus" scoped>
@import './common/stylus/variable.styl';
.router-link-active .iconfont
    color #ff5f5f
#app
    width (750 / $rem)
#nav
    z-index 1
    height (98 / $rem)
    background white
    position fixed
    width 100%
    bottom 0
    display flex
    border-top 1px solid #cccccc
    .item
      flex 1
      text-align center
      display flex
      flex-direction column
      .iconfont
        font-size (56 / $rem)
      .name
        font-size (20 / $rem)
</style>