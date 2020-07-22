<template>
  <div id="home-page-container">
    <!-- 轮播图 -->
    <div id="pic-play-content">
      <ul id="img-content">
        <li class="img-item">
          <img class="image-style" src="@/image/pic1.png" alt />
          <div class="text-content fl-fo">
            <span class="fz-32 fz-bold fc-fff">和谐诚信走天下</span>
            <div class="title-img-style">
              <span class="fz-32 fz-bold fc-fff">专业共赢创未来</span>
            </div>
            <div class="line-style"></div>
            <div class="text-item-so">
              <span class="fc-fff fz-9">我们立足于以人为中心的设计思维，凭借专业严谨的流程与方法，深入细致的研究与洞察整合用户需求、商业需求及技术可行性 。</span>
            </div>
          </div>
        </li>
        <li class="img-item">
          <img class="image-style" src="@/image/pic2.png" alt />
          <div class="img-item-two fl-co2">
            <img src="../image/sfcx.png" class="mar-top-150" alt />
            <span class="fz-30 fc-fff fz-bold mar-top-50">品牌识别 系统塑造 创新表情 提升价值</span>
            <span class="fz-15 fc-fff mar-top-50">立体化服务体系，多维度提升品牌资产价值</span>
          </div>
        </li>
      </ul>
      <!-- 轮播图下面的的按钮 -->
      <div class="switch-img-content fl-ar">
        <img @click="leftChange" src="../image/leftjiao.png" alt />
        <span class="fc-7d">|</span>
        <img @click="rightChange" src="../image/rightjiao.png" alt />
      </div>
    </div>
    <div id="app-details-content" class="fl-co">
      <div class="fl-co app-title-text">
        <span class="fz-25 fc-333">更用心、更负责、更快速、更全面</span>
        <span class="fz-9 fc-333 app-mar-top1">我们提供高端品牌网站建设、集团网站建设、营销型网站建设、手机网站设计、品牌广告设计服务、以及其他应用开发</span>
      </div>
      <div class="app-container fl-al">
        <div class="fl-co2 app-item-container">
          <span class="fz-13 app-mar-top2">高端网站建设</span>
          <div class="app-item-img app-mar-top3">
            <img src="../image/picture1.png" alt />
          </div>
          <div class="app-item-box app-mar-top2">
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">品牌网站建设</span>
            </div>
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">集团网站建设</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">企业网站建设</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">响应式网站建设</span>
            </div>
          </div>
        </div>
        <div class="fl-co2 app-item-container">
          <span class="fz-13 app-mar-top2">移动端开发</span>
          <div class="app-item-img app-mar-top3">
            <img src="../image/picture2.png" alt />
          </div>
          <div class="app-item-box app-mar-top2">
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">H5创意设计</span>
            </div>
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">小程序开发</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">微信开发</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">APP开发</span>
            </div>
          </div>
        </div>
        <div class="fl-co2 app-item-container">
          <span class="fz-13 app-mar-top2">品牌形象设计</span>
          <div class="app-item-img app-mar-top3">
            <img src="../image/picture3.png" alt />
          </div>
          <div class="app-item-box app-mar-top2">
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">品牌logo设计</span>
            </div>
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">品牌vi设计</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">产品包装设计</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">基础物料设计</span>
            </div>
          </div>
        </div>
        <div class="fl-co2 app-item-container">
          <span class="fz-13 app-mar-top2">行业应用开发</span>
          <div class="app-item-img app-mar-top3">
            <img src="../image/picture4.png" alt />
          </div>
          <div class="app-item-box app-mar-top2">
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">软件平台开发</span>
            </div>
            <div class="app-item-name fl-al">
              <div class="yuan-style"></div>
              <span class="fz-7">移动APP开发</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">电商平台开发</span>
            </div>
            <div class="app-item-name fl-al app-mar-top4">
              <div class="yuan-style"></div>
              <span class="fz-7">行业应用开发</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about-us-container" class="fl-al">
      <div class="about-us-left">
        <div class="fl-fo top-back-content">
          <span class="fz-25">关于我们</span>
          <span class="fz-8 app-mar-top1">成都四方创享网络科技有限责任公司</span>
          <div
            class="fz-9 us-details-text app-mar-top5"
          >是一家专注于智能化行业软件研发以及信息化整体解决方案提供商，主营业务包括APP开发、网站开发、行业软件定制、小程序/公众号制作、外包服务等领域；为客户提供互动营销咨询 、策划、设计、制作、开发、维护到营销整合等一站式网络形象解决方案。</div>
        </div>
        <div class="bottom-back-content">
          <img src="../image/picture7.png" alt />
          <div class="bottom-back-position">
            <span class="fz-13 fc-fff">以独特的视角诠释品牌的内涵</span>
            <div class="fz-9 app-mar-top5 box-wdith fc-fff">我们帮助品牌成长，为品牌提升价值。四方创享不遗余力地为客户提供专业靠谱的服务。</div>
          </div>
        </div>
      </div>
      <div class="fl-fo about-us-right">
        <img class="img-style-log" src="../image/picture5.png" alt />
        <img class="img-style-log" src="../image/picture6.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      picWidth: 0,
      wWidth: 100,
      imgLength: 2,
      count: 1
    };
  },
  mounted() {
    this.handleTimer();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    handleTimer() {
      // this.wWidth = document.body.clientWidth;
      const imgBox = document.getElementById("img-content");
      this.timer = setInterval(() => {
        this.count++;
        if (this.count < 3) {
          this.picWidth -= this.wWidth;
        } else {
          this.picWidth += this.wWidth;
          this.count = 1;
        }
        imgBox.style.left = this.picWidth + "%";
      }, 5000);
    },
    leftChange() {
      clearInterval(this.timer);
      const imgBox = document.getElementById("img-content");
      if (this.count !== 1) {
        this.picWidth += this.wWidth;
        this.count = 1;
      }
      imgBox.style.left = this.picWidth + "%";
      this.handleTimer();
    },
    rightChange() {
      clearInterval(this.timer);
      const imgBox = document.getElementById("img-content");
      if (this.count !== 2) {
        this.picWidth -= this.wWidth;
        this.count = 2;
      }
      imgBox.style.left = this.picWidth + "%";
      this.handleTimer();
    }
  }
};
</script>
<style scoped>
#home-page-container {
  min-width: 1200px;
  height: 100%;
}
#pic-play-content {
  height: 50vw;
  position: relative;
  overflow: hidden;
}
#img-content {
  width: 200%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s;
}
.img-item {
  position: relative;
}
.image-style {
  width: 100%;
  height: auto;
}
.switch-img-content {
  width: 20%;
  height: 11%;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 17;
  box-shadow: 0 0 4px #999;
}
.switch-img-content img {
  cursor: pointer;
}
.text-content {
  position: absolute;
  left: 10%;
  bottom: 35%;
  z-index: 7;
}
.text-item-so {
  margin-top: 20px;
  width: 70%;
}
.title-img-style {
  margin-top: 10px;
  padding-bottom: 20px;
  width: 450px;
  border-bottom: 3px solid #ffb626;
}
.img-item-two {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.mar-top-50 {
  margin-top: 50px;
}
.mar-top-150 {
  margin-top: 190px;
}
.app-title-text {
  margin-top: 80px;
}
.app-mar-top1 {
  margin-top: 70px;
}
.app-container {
  margin-top: 86px;
}
.app-mar-top2 {
  margin-top: 30px;
}
.app-mar-top3 {
  margin-top: 30px;
}
.app-mar-top4 {
  margin-top: 30px;
}
.app-mar-top5 {
  margin-top: 50px;
}
.app-item-box {
  overflow: hidden;
}
.app-item-name {
  float: left;
  width: 50%;
}
.app-item-img img {
  width: 180px;
  height: 180px;
}
.app-item-container {
  width: 276px;
  height: 428px;
  margin-right: 2px;
  border: 1px solid #828282;
}
.app-item-img {
  border: 1px dashed #333333;
}
.yuan-style {
  margin-left: 18px;
  margin-right: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #828282;
}
#about-us-container {
  margin-top: 250px;
  width: 100%;
}
.about-us-left {
  width: 72%;
}
.about-us-right {
  width: 28%;
}
.us-details-text {
  width: 50%;
}
.top-back-content {
  height: 400px;
  padding-left: 50px;
}
.bottom-back-content {
  position: relative;
  height: 400px;
}
.bottom-back-content img{
  width: 100%;
  height: 100%;
}
.bottom-back-position {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-left: 50px;
  padding-top: 90px;
}
.img-style-log {
  height: 400px;
}
.box-wdith {
  width: 30%;
}
</style>