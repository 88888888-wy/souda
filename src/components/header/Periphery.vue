<template>
  <div class="Periphery">
      <div class="special">
          <ul>
              <li class="da">天天特价</li>
              <li class="xiao">周边热卖食品5折起</li>
          </ul>
      </div>
      <span><img src="../../assets/img/tejia.jpg" /></span>
      <div class="Blank"></div>
  </div>
</template>

<script>
export default {
  name: 'Periphery',
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.Periphery{
    margin-top 2px
    position relative
    height (128 / $rem)
}
.special{
    position absolute
    height (128 / $rem)
}
ul{
    position absolute
    width 360px
    height (128 / $rem)
}
.da{
    margin-top 20px
    margin-left 20px
    font-size 33px
    letter-spacing 2px
    color #ff8504
}
.xiao{
    margin-left 20px
    font-size 23px
    letter-spacing 1px
    color #999999
}
span{
    position absolute
    height (128 / $rem)
    margin-left 360px
}
img {
    margin-top 15px
}
li{
    list-style none 
}
.Blank{
    position absolute
    background #f0f0f0
    height 20px
    width 100%
    margin-top 128px
}
// .Periphery {
//     position relative
//     margin-top 5px
//     height (128 / $rem)
// }
// .tian {
//     font-size 34px
//     letter-spacing 2px
//     width 145px
//     margin-left 20px
//     margin-top 25px
//     color #ff8503
// }
// .zhou {
//     font-size 23px
//     letter-spacing 1px
//     width 207px
//     margin-left 20px
//     color #989898    
// }
// .NO1 {
//     position absolute
//     height (128 / $rem)
//     margin-top -102px
//     margin-left 360px
//     width 393px
// }
// .NO1 img {
//     margin-top 17px
// }
// .Blank {
//     position absolute
//     margin-top 30px
//     height 20px
//     width 100%
//     background #f0f0f0
// }
</style>