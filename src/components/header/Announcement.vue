<template>
  <div class="Announcement">
    <div class="periphery">
      <p style="width:100%;text-align:center">周边在吃啥</p>
    </div>
    <div class="Article"></div>
    <div class="bao">
      <div ref="notice" class="notice">
        <ul ref="list" class="list">
          <li>
            <span class="su">|</span>
            <img src="../../assets/img/头像.jpg" />
            <!-- <div class="su">|</div> -->
            <p class="line-limit-length">**3 4小时前点了大闸蟹+啤酒+什么什么什么123456789</p>
            <i class="iconfont icon-you"></i>
          </li>

          <li>
            <span class="su">|</span>
            <img src="../../assets/img/头像.jpg" />
            <p class="line-limit-length">**5 6小时前点了大闸蟹+啤酒+什么什么什么123456789</p>
            <i class="iconfont icon-you"></i>
          </li>

          <li>
            <span class="su">|</span>
            <img src="../../assets/img/头像.jpg" />
            <p class="line-limit-length">**7 8小时前点了大闸蟹+啤酒+什么什么什么123456789</p>
            <i class="iconfont icon-you"></i>
          </li>
        </ul>
      </div>
      <!-- <div class="Blank"></div> -->
    </div>
    <div class="Blank"></div>
  </div>
</template>

<script>
export default {
  name: "Announcement",
  data() {
    return {};
  },
  mounted() {
    let iNow = 0;
    let list = this.$refs.list;
    let size = list.getElementsByTagName("li").length;
    let OHeight = this.$refs.notice.offsetHeight;
    setInterval(function() {
      iNow++;
      iNow = iNow >= size ? 0 : iNow;
      list.style.top = -iNow * OHeight + "px";
    }, 2000);
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.Announcement {
  height (98 / $rem)
  position relative
}

.periphery {
  position absolute
  font-size 25px
  height (98 / $rem)
  line-height 98px
  width 185px
  font-weight bold
  letter-spacing 3px
  color #e73d26
}

.Article {
  position absolute
  width 1px
  height 35px
  margin-left 175px
  margin-top 32px
  background #cccccc
}
.su {
  position absolute
  width 2px
  height 22px
  margin-left 62px
  color #999999
}

// 上下轮播滚动
.bao {
  position relative
  width 560px
  float right
  height (98 / $rem)
}
img {
  position absolute
  border 1px solid black
  width 50px
  height 50px
  margin-top 20px
  border-radius 50%
  overflow hidden
}
.notice {
  height (98 / $rem)
  position relative
  overflow hidden
}
.list {
  transition 1s
  width 100%
  position absolute
  top 0px
}
li {
  list-style none
  height (98 / $rem)
  line-height 98px
  font-size 25px
}
.Blank {
  position absolute
  margin-top 100px
  width 100%
  height 20px
  background #f0f0f0
  //border 1px solid black 
}

.list p{
  position absolute
  color #989898
  margin-left 80px
}
.line-limit-length {
  max-width 400px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
}
.icon-you {
  position relative
  font-size 1rem
  margin-left 495px
  color #999999
}
</style>