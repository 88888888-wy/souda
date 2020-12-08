<template>
  <div class="Food">
    <div class="internal">
      <div class="full">
        <span>
          <img src="../../assets/img/zuo.jpg" />
        </span>
        <ul>
          <li class="da">满减店铺</li>
          <li class="xiao">大额满减来袭</li>
        </ul>
      </div>
    </div>
    <div class="separated"></div>
    <div style="margin-left:375px" class="internal">
      <div class="full">
        <span>
          <img src="../../assets/img/you.jpg" />
        </span>
        <ul>
          <li class="da">热销菜品</li>
          <li class="xiao">大家都爱吃</li>
        </ul>
      </div>
    </div>
    <div class="Blank"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.Food {
  position relative
  margin-top 22px
  height (128 / $rem)
}

.internal {
  position absolute
  height (128 / $rem)
}

.full {
  position absolute
  width 374px
  height (128 / $rem)
}

ul {
  height (128 / $rem)
  align-items center
  width 185px
}

.da {
  margin-top 20px
  margin-left 20px
  font-size 33px
  letter-spacing 2px
  color #ff8504
}

.xiao {
  margin-left 20px
  font-size 23px
  letter-spacing 1px
  color #999999
}

li {
  list-style none
}

span {
  position absolute
  height (128 / $rem)
  margin-left 185px
}
img{
  margin-top 15px
}
.separated{
  position absolute
  width 1px
  height 100%
  background #cccccc
  margin-left 375px  
}
.Blank{
  position absolute
  background #cccccc
  height 1px
  width 100%
  margin-top 128px
}
</style>