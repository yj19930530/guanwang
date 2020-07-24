<template>
  <div id="case-container">
    <!-- back -->
    <div id="top-content-img">
      <img class="img-style" src="../image/xiangji.png" alt="pic" />
      <div class="img-text">
        <div>
          <span class="fz-30 fz-bold fc-fff">独特的视角诠释品牌内涵</span>
        </div>
        <div class="mar-30">
          <span class="fc-fff fz-9">以独特的视角诠释品牌的内涵，彰显产品优势，打造企业形象。</span>
        </div>
        <div class="mar-30 lin-heng"></div>
      </div>
    </div>
    <!-- tab -->
    <div id="news-tabs-box">
      <div class="fl-al">
        <div
          class="fl-center news-tabs-item"
          :class="[leftTabsType?'tabs-back-color':'']"
          @click="tabsChange(1)"
        >
          <span class="fz-25">行业动态</span>
        </div>
        <div
          class="fl-center news-tabs-item"
          :class="[rightTabsType?'tabs-back-color':'']"
          @click="tabsChange(2)"
        >
          <span class="fz-25">开发问题</span>
        </div>
      </div>
    </div>
    <div class="new-list-box fl-co">
      <div
        class="news-item-box fl-bt"
        v-for="item in 4"
        :key="item"
        :class="[item===1?'news-item-box2':'']"
      >
        <img class="news-item-img" src="../image/picture1.png" alt />
        <div class="news-item-rigth">
          <div class="fl-bt news-item-title">
            <span class="fz-17">网站建设对于企业的重要作用有哪些呢？</span>
            <span class="fz-17 fc-666">2020-7-8</span>
          </div>
          <div class="news-item-atic">
            <span
              class="fz-11"
            >网站建设对于企业有哪些重要作用：1、有利于提升企业形象。网站的形象代表着企业网上的品牌形象，大众在网上了解一个企业的方式就是访问该公司的网站…[ 详细 ]</span>
          </div>
        </div>
      </div>
      <div class="get-more-news fl-center">
        <img src="../image/shuaxin.png" class="mr-r-10" alt />
        <span>加载更多新闻</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftTabsType: true,
      rightTabsType: false
    };
  },
  methods: {
    tabsChange(type) {
      if (type === 1) {
        this.leftTabsType = true;
        this.rightTabsType = false;
      } else {
        this.rightTabsType = true;
        this.leftTabsType = false;
      }
    }
  }
};
</script>
<style scoped>
@import "../styles/css/new.css";
#news-tabs-box {
  margin-top: -4px;
  min-width: 1200px;
}
.img-text {
  position: absolute;
  left: 6%;
  top: 50%;
}
</style>