<template>
  <div id="home-page-container">
    <div class="home-banner-box">
      <div id="home-page-banner">
        <div class="banner-img-one">
          <img src="../../image/pic1.png" alt="banner" />
          <div class="banner-center-text">
            <span class="fz-m-17 fc-fff fz-400">和谐诚信走天下 专业共赢创未来</span>
          </div>
        </div>
        <div class="banner-img-one">
          <img src="../../image/pic2.png" alt="banner" />
          <div class="banner-two-text fl-co">
            <img class="logo-text-two" src="../../image/sfcx.png" alt="logo" />
            <span class="fz-m-17 fz-bold mr-t-30 fc-fff">品牌识别 系统塑造 创新表情 提升价值</span>
            <span class="fz-m-11 mr-t-20 fc-fff">立体化服务体系，多维度提升品牌资产价值</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-page-content">
      <div class="page-title fl-co mr-b-40">
        <span class="fz-m-15">更用心、更负责、更快速、更全面</span>
        <span class="fz-m-12 mr-t-30">我们提供高端品牌网站建设、集团网站建设、</span>
        <span class="fz-m-12 mr-t-10">营销型网站建设、手机网站设计、品牌广告设计服务、以</span>
        <span class="fz-m-12 mr-t-10">及其他应用开发</span>
      </div>
      <div class="page-app-box">
        <div class="app-item" v-for="(item,index) in appList" :key="index">
          <span class="fz-m-13 mr-t-40">{{item.title}}</span>
          <img
            class="app-item-img mr-t-50"
            v-if="index===0"
            src="../../image/picture1.png"
            alt="logo"
          />
          <img
            class="app-item-img mr-t-50"
            v-if="index===1"
            src="../../image/picture2.png"
            alt="logo"
          />
          <img
            class="app-item-img mr-t-50"
            v-if="index===2"
            src="../../image/picture3.png"
            alt="logo"
          />
          <img
            class="app-item-img mr-t-50"
            v-if="index===3"
            src="../../image/picture4.png"
            alt="logo"
          />
          <div class="app-item-box">
            <div class="fl-al mr-t-40">
              <div class="yuandian"></div>
              <span class="fz-m-11 mr-l-16">{{item.oneApp}}</span>
            </div>
            <div class="fl-al mr-t-10">
              <div class="yuandian"></div>
              <span class="fz-m-11 mr-l-16">{{item.twoApp}}</span>
            </div>
            <div class="fl-al mr-t-10">
              <div class="yuandian"></div>
              <span class="fz-m-11 mr-l-16">{{item.threeApp}}</span>
            </div>
            <div class="fl-al mr-t-10 mr-b-40">
              <div class="yuandian"></div>
              <span class="fz-m-11 mr-l-16">{{item.fourApp}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page-about-box">
        <span class="fz-m-15">关于我们</span>
        <span class="fz-m-12 mr-t-40">成都四方创享网络科技有限责任公司</span>
        <span
          class="fz-m-12 mr-t-40 describe-lienhit"
        >是一家专注于智能化行业软件研发以及信息化整体解决方案提供商，主营业务包括APP开发、网站开发、行业软件定制、小程序/公众号制作、外包服务等领域；为客户提供互动营销咨询 、策划、设计、制作、开发、维护到营销整合等一站式网络形象解决方案。</span>
        <div class="about-bottom mr-t-30">
          <img class="img-dute-style" src="../../image/dute.png" alt />
          <div class="about-bottom-center">
            <span class="fz-m-15 fc-fff">以独特的视角诠释品牌的内涵</span>
            <div class="fz-m-12 fc-fff mr-t-30">我们帮助品牌成长，为品牌提升价值。四方创享不遗余力地为客户提供专业靠谱的服务。</div>
          </div>
        </div>
      </div>
      <div class="page-news-box">
        <div class="page-news-title fl-center fz-m-15">新闻资讯 让价值共享</div>
        <News v-for="(item,index) in newsList" :key="index" :itemObj="item" />
        <div class="fl-center get-more-news mr-t-30" @click="getMoreData" v-if="more">
          <img class="shuaxin" src="../../image/shuaxin.png" alt />
          <span class="fz-m-12 mr-l-10 fc-666">加载更多新闻</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsPage } from "../../api/news";
import News from "../../components/phoneNews";
export default {
  data() {
    return {
      timer: null,
      bannerLenght: 2,
      count: 1,
      wWidth: 0,
      appList: [
        {
          title: "高端网站建设",
          oneApp: "品牌网站建设",
          twoApp: "集团网站建设",
          threeApp: "企业网站建设",
          fourApp: "响应式网站建设",
        },
        {
          title: "移动端开发",
          oneApp: "H5创意设计",
          twoApp: "小程序开发",
          threeApp: "微信开发",
          fourApp: "APP开发",
        },
        {
          title: "品牌形象设计",
          oneApp: "品牌LOGO设计",
          twoApp: "品牌VI设计",
          threeApp: "产品包装设计",
          fourApp: "基础物料设计",
        },
        {
          title: "行业应用开发",
          oneApp: "软件平台开发",
          twoApp: "移动APP开发",
          threeApp: "电商平台开发",
          fourApp: "行业应用开发",
        },
      ],
      total: 0,
      pageNo: 1,
      pageSize: 4,
      newsList: [],
      more: false,
    };
  },
  mounted() {
    this.handleTimer();
    this.getNewsList();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  components: {
    News,
  },
  methods: {
    getMoreData() {
      if (!this.more) return;
      this.pageNo++;
      getNewsPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        this.newsList = [...this.newsList, ...res.data.list];
        if (this.newsList.length < this.total) {
          this.more = true;
        } else {
          this.more = false;
        }
      });
    },
    getNewsList() {
      getNewsPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        this.newsList = res.data.list;
        this.total = res.data.total;
        if (this.newsList.length < this.total) {
          this.more = true;
        } else {
          this.more = false;
        }
      });
    },
    handleTimer() {
      const dom = document.getElementById("home-page-banner");
      this.timer = setInterval(() => {
        this.count++;
        if (this.count < 3) {
          this.wWidth -= 100;
        } else {
          this.count = 1;
          this.wWidth += 100;
        }
        dom.style.left = this.wWidth + "%";
      }, 5000);
    },
  },
};
</script>
<style scoped>
#home-page-container {
  overflow: hidden;
}
.home-banner-box {
  position: relative;
  width: 100%;
  height: 4.88rem;
}
.banner-img-one {
  position: relative;
  width: 100%;
  height: 4.88rem;
}
.banner-img-one img {
  width: 100%;
  height: 100%;
}
#home-page-banner {
  transition: all 1s;
  width: 200%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: 0;
  top: 0;
}
.banner-center-text {
  display: flex;
  width: 2.44rem;
  height: 1.02rem;
  line-height: 1.4;
  z-index: 999;
  position: absolute;
  bottom: 0.94rem;
  left: 0.3rem;
  border-bottom: 2px solid #ffb626;
}
.banner-two-text {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.96rem;
  right: 0;
}
.logo-text-two {
  width: 0.82rem !important;
  height: 0.82rem !important;
}
.home-page-content {
  margin: 0.38rem auto;
  width: 6.9rem;
}
.title-text {
  width: 5.98rem;
  text-align: center;
}
.page-app-box {
  margin-bottom: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3.42rem;
  border: 1px solid #828282;
}
.yuandian {
  width: 0.08rem;
  height: 0.08rem;
  background-color: #828282;
  border-radius: 50%;
}
.app-item-img {
  width: 2.3rem;
  height: 2.24rem;
}
.page-about-box {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.about-bottom {
  position: relative;
  width: 100%;
  height: 2.96rem;
}
.img-dute-style {
  width: 6.9rem;
  height: 100%;
}
.about-bottom-center {
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 5.28rem;
}
.describe-lienhit {
  line-height: 1.6;
}
.page-news-box {
  margin: auto;
  width: 6.9rem;
}
.page-news-title {
  height: 1rem;
  border-bottom: 1px solid #e4e4e4;
}
.shuaxin {
  width: 0.36rem;
  height: 0.34rem;
}
.get-more-news {
  width: 100%;
  height: 0.7rem;
  background-color: #eaeaea;
}
</style>