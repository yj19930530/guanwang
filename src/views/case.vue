<template>
  <div id="case-container">
    <!-- back -->
    <div id="top-content-img">
      <img class="img-style" src="../image/case-bg.png" alt="pic" />
      <div class="img-text">
        <div>
          <span class="fz-30 fz-bold fc-fff">一点一滴·价值体现</span>
        </div>
        <div class="mar-30">
          <span class="fc-fff fz-10">在互联网的世界里，我们追求专业和创新</span>
        </div>
        <div class="mar-10">
          <span class="fc-fff fz-10">专属定制为企业客户提供创新且可持续的人性化解决方案</span>
        </div>
      </div>
    </div>
    <!-- qiye -->
    <div>
      <ul class="fl-bt" id="enterprise-list">
        <li class="enterprise-item-content">
          <img class="enterprise-item-img" src="../image/pic1.png" alt />
          <div class="text-title">
            <span class="fz-10 fc-333">企业名字</span>
          </div>
          <div class="text-slo">
            <span class="fz-8 fc-82">企业的slogan</span>
          </div>
        </li>
        <li class="enterprise-item-content">
          <img class="enterprise-item-img" src="../image/pic1.png" alt />
          <div class="text-title">
            <span class="fz-10 fc-333">企业名字</span>
          </div>
          <div class="text-slo">
            <span class="fz-8 fc-82">企业的slogan</span>
          </div>
        </li>
        <li class="enterprise-item-content">
          <img class="enterprise-item-img" src="../image/pic1.png" alt />
          <div class="text-title">
            <span class="fz-10 fc-333">企业名字</span>
          </div>
          <div class="text-slo">
            <span class="fz-8 fc-82">企业的slogan</span>
          </div>
        </li>
        <li class="enterprise-item-content">
          <img class="enterprise-item-img" src="../image/pic1.png" alt />
          <div class="text-title">
            <span class="fz-10 fc-333">企业名字</span>
          </div>
          <div class="text-slo">
            <span class="fz-8 fc-82">企业的slogan</span>
          </div>
        </li>
      </ul>
      <div class="fl-center loading-content">
        <img class="shuaxin-img" src="../image/shuaxin.png" alt="刷新" />
        <span class="fz-8 fc-666">加载更多案例</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
#case-container {
  height: 100%;
  /* overflow-y: scroll; */
}
#top-content-img {
  position: relative;
  width: 100%;
}
.img-style {
  width: 100%;
  height: auto;
}
.img-text {
  position: absolute;
  left: 6%;
  top: 50%;
}
.mar-30 {
  margin-top: 30px;
}
.mar-10 {
  margin-top: 6px;
}
#enterprise-list {
  margin: 100px auto;
  width: 1200px;
  min-width: 1200px;
}
.enterprise-item-content {
  width: 260px;
  box-shadow: 0 0 3px #999;
  padding-bottom: 20px;
}
.enterprise-item-img {
  width: 100%;
  height: 270px;
}
.text-title {
  padding: 10px 0 6px 20px;
}
.text-slo {
  padding-left: 20px;
}
.loading-content {
  margin: auto;
  width: 1200px;
  height: 50px;
  background-color: #eaeaea;
}
.shuaxin-img {
  cursor: pointer;
  width: 22px;
  height: 22px;
  margin-right: 6px;
}
</style>