<template>
  <div id="case-container-box">
    <div class="case-banner-box">
      <img class="case-banner-img" src="../../image/bj.png" alt="banner" />
      <div class="case-banner-center fl-center">
        <span class="fz-m-17 fz-bold fc-fff banner-title-spc">更用心、更负责、更快速、更全面</span>
        <span class="fz-m-11 fc-fff mr-t-20">我们提供高端品牌网站建设、集团网站建设、营销型网站建设、手机</span>
        <span class="fz-m-11 fc-fff mr-t-10">网站设计、品牌广告设计服务、以及其他应用开发</span>
      </div>
    </div>
    <div class="business-list-content" v-for="(item,index) in busList" :key="index">
      <div class="business-item-top">
        <span class="fz-m-17">{{item.title}}</span>
        <div class="mr-t-30 fl-al">
          <div class="fl-al bus-item-width">
            <div class="yuandian"></div>
            <span class="fz-m-11 mr-l-10">{{item.name}}</span>
          </div>
          <div class="fl-al bus-item-width">
            <div class="yuandian"></div>
            <span class="fz-m-11 mr-l-10">{{item.name2}}</span>
          </div>
        </div>
        <div class="mr-t-30 fl-al">
          <div class="fl-al bus-item-width">
            <div class="yuandian"></div>
            <span class="fz-m-11 mr-l-10">{{item.name3}}</span>
          </div>
          <div class="fl-al bus-item-width">
            <div class="yuandian"></div>
            <span class="fz-m-11 mr-l-10">{{item.name4}}</span>
          </div>
        </div>
      </div>
      <img class="business-item-img" v-if="index===0" src="../../image/wzjs.png" alt="img" />
      <img class="business-item-img" v-if="index===1" src="../../image/ydd.png" alt="img" />
      <img class="business-item-img" v-if="index===2" src="../../image/xxsj.png" alt="img" />
      <img class="business-item-img" v-if="index===3" src="../../image/hyyy.png" alt="img" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      busList: [
        {
          title: "[WEBSITE DESIGN] 高端网站建设",
          name: "品牌网站建设",
          name2: "集团网站建设",
          name3: "企业网站建设",
          name4: "响应式网站建设",
        },
        {
          title: "[MOBILE TERMINAL] 移动端开发",
          name: "H5创意设计",
          name2: "小程序开发",
          name3: "微信开发",
          name4: "APP开发",
        },
        {
          title: "[BRAND IMAGE DESIGN] 品牌形象设计",
          name: "品牌LOGO设计",
          name2: "品牌VI设计",
          name3: "产品包装设计",
          name4: "基础物料设计",
        },
        {
          title: "[INDUSTRY APPLICATION] 行业应用开发",
          name: "软件平台开发",
          name2: "移动APP开发",
          name3: "电商平台开发",
          name4: "行业应用开发",
        },
      ],
    };
  },
};
</script>
<style scoped>
.case-banner-box {
  position: relative;
  width: 100%;
  height: 4.88rem;
}
.case-banner-img {
  width: 100%;
  height: 4.88rem;
}
.case-banner-center {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.banner-title-spc {
  letter-spacing: 0.06rem;
}
.yuandian {
  width: 0.1rem;
  height: 0.1rem;
  background-color: #828282;
  border-radius: 50%;
}
.business-item-top {
  padding-top: 0.78rem;
  padding-left: 0.4rem;
  padding: 0.78rem 0 0.7rem 0.4rem;
  display: flex;
  flex-direction: column;
}
.business-item-img {
  width: 100%;
  height: 4.1rem;
}
.bus-item-width {
  width: 2rem;
}
</style>