<template>
  <div class="Like">
    <span class="iconfont icon-shangpu"></span>
    <div class="title">猜你喜欢</div>
    <div class="Blank"></div>

    <div class="commodity">
      <dd>
        <a href="#">
          <div class="dealcard-img"><img src="../../assets/img/KFC.jpg" /></div>
          
          <div class="dealcard">
            <div class="dealcard-block">
              <span class="kfc">
                <p class="k1">肯德基</p>
                <p class="k2">(软件园DT店)</p>
                <p class="k3">￥30</p>
                <p class="k4">起送</p>
              </span>
              <span class="Monthly">
                <p class="star"><img src="../../assets/img/stars.jpg" /></p>
                <p class="monthly">月销量<a style="color:#ff6666">10</a>笔</p>
                <p class="k5">￥3</p>
                <p class="distribution">配送</p>
              </span>
              <span class="Distance">
                <p class="distance">30分钟 | 1.5千米</p>
                <p class="hummingbird">
                  <span>蜂鸟专送</span>
                </p>
              </span>
            </div>
            <div class="Dotted"></div>

            <div class="dealcard-block1">
              <span class="Special">
                <p class="minus">
                  <a>减</a>
                </p>
                <p class="online">在线支付满30减8，满50减10，满90减14</p>
                <p class="general">共5个</p>
                <p class="icon"><img src="../../assets/img/xia.jpg" /></p>
              </span>
              <span class="Offer">
                <p class="offer">
                  <a>特</a>
                </p>
                <p class="online1">(不在其他活动同享)品质月，餐品仅其他特价</p>
              </span>
            </div>

          </div>

        </a>
      </dd>
    </div>
    <div class="Blank1"></div>

    
    <div class="commodity">
      <dd>
        <a href="###">
          <div class="dealcard-img"><img src="../../assets/img/KFC.jpg" /></div>
          
          <div class="dealcard">
            <div class="dealcard-block">
              <span class="kfc">
                <p class="k1">肯德基</p>
                <p class="k2">(软件园DT店)</p>
                <p class="k3">￥30</p>
                <p class="k4">起送</p>
              </span>
              <span class="Monthly">
                <p class="star"><img src="../../assets/img/stars.jpg" /></p>
                <p class="monthly">月销量<a style="color:#ff6666">10</a>笔</p>
                <p class="k5">￥3</p>
                <p class="distribution">配送</p>
              </span>
              <span class="Distance">
                <p class="distance">30分钟 | 1.5千米</p>
                <p class="hummingbird">
                  <span>蜂鸟专送</span>
                </p>
              </span>
            </div>
            <div class="Dotted"></div>

            <div class="dealcard-block1">
              <span class="Special">
                <p class="minus">
                  <a>减</a>
                </p>
                <p class="online">在线支付满30减8，满50减10，满90减14</p>
                <p class="general">共5个</p>
                <p class="icon"><img src="../../assets/img/xia.jpg" /></p>
              </span>
              <span class="Offer">
                <p class="offer">
                  <a>特</a>
                </p>
                <p class="online1">(不在其他活动同享)品质月，餐品仅其他特价</p>
              </span>
            </div>

          </div>

        </a>
      </dd>
    </div>
    <div class="Blank1"></div>
  </div>
</template>

<script>


export default {
  name: 'Like',
}
</script>


<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.Like{
    position relative
    margin-top 20px    
}
span{
    position absolute
    margin-left 20px
    font-size 38px
    line-height 58px
}
.title{
    height (58 / $rem)  
    font-size 23px
    color #878787
    line-height 58px  
    margin-left 76px
}
.Blank{
    position absolute
    width 100%
    height 1px
    background #cccccc
}

// fenge
.commodity{
  position relative
  height (246 / $rem)
}
dd{
  position absolute
  height (214 / $rem)
  width 100%
  margin-top 2px
}
.dealcard-img{
  position absolute
  margin-left 20px  
  height (214 / $rem)
  border-radius 2px
}
.dealcard{
  position absolute
  height (214 / $rem)
  width 594px
  margin-left 136px
}
.dealcard-block{
  position absolute
  width 100%
  height (134 / $rem)
}
.Dotted{
  position absolute
  width 100%
  height 1px
  border dashed 0.5px
  margin-top 140px
  color #cccccc
}
.dealcard-block1{
  position absolute
  width 100%
  height (96 / $rem)
  margin-top 142px
}
.kfc{
  position absolute
  margin 0px
  height (33 / $rem)
  width 100%
}
p{
  position absolute
}
.k1{
  position absolute
  font-size 32px
  line-height 44px
  letter-spacing 1px
  // font-weight bold
}
.k2{
  position absolute
  font-size 32px
  line-height 44px
  letter-spacing 1px
  margin-left 110px
}
.k3{
  position absolute
  font-size 32px
  line-height 44px
  letter-spacing 1px
  margin-left 440px
  color #ff6666
}
.k4{
  position absolute
  font-size 32px
  line-height 44px
  letter-spacing 1px
  margin-left 525px
}
.Monthly{
  position absolute
  margin 0px
  height (33 / $rem)
  width 100%
  margin-top 45px
}
.star{
  position absolute
  line-height 33px
}
.monthly{
  position absolute
  line-height 35px
  font-size 24px
  margin-left 172px
  color #8c8c8c
}
.k5{
  position absolute
  line-height 38px
  margin-left 450px
  color #ff6666
  font-size 33px
}
.distribution{
  position absolute
  font-size 32px
  line-height 35px
  margin-left 525px
}
.Distance{
  position absolute
  position absolute
  margin 0px
  height (24 / $rem)
  width 100%
  margin-top 100px
}
.distance{
  position absolute
  font-size 24px
  line-height 22px
  color #666666
}
.hummingbird{
  position absolute
  border 1px solid #3bd62b
  height 28px
  width 120px
  margin-left 460px
  border-radius 10px
}
.hummingbird span{
  position absolute
  color #3bd62b
  font-size 18px
  line-height 28px
  letter-spacing: 1px;
}
.Special{
  position absolute
  height (43 / $rem)
  width 100%
  margin 0
}
.minus{
  position absolute
  margin-top 15px
  height (28 / $rem)
  line-height 25px
  font-size 28px
  background  #f77a2e
  border-radius 4px
}
.minus a{
  color #ffffff
}
.online{
  position absolute
  height (43 / $rem)
  width 388px
  font-size 23px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  margin-left 52px
  color #999999
}
.general{
  position absolute
  height (43 / $rem)
  margin-left 480px
  font-size 23px
  color #999999
}
.icon{
  position absolute
  line-height 35px
  margin-left 548px
}
.Offer{
  position absolute
  height (43 / $rem)
  width 100%
  margin 0
  margin-top 55px
}
.offer{
  position absolute
  height (28 / $rem)
  line-height 23px
  font-size 28px
  background  #00bee5
  border-radius 4px
}
.offer a{
  color #ffffff
}
.online1{
  position absolute
  height (43 / $rem)
  width 388px
  font-size 23px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  margin-left 52px
  color #999999
  line-height 25px
}
.Blank1{
  position absolute
  background red
  width 100%
  height 1px
  background #cccccc
}
</style>
