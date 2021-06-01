<template>
  <div id="case-container">
    <!-- back -->
    <div id="top-content-img">
      <img class="img-style" src="../image/newsbj.png" alt="pic" />
    </div>
    <div class="details-content">
      <div class="fl-center title-content">
        <span class="fz-24">{{deObj.title}}</span>
      </div>
      <div class="fl-center title-bottom-box">
        <span class="fz-8 fc-999 mr-r-50">发布时间: {{dateTime(deObj.createTime)}}</span>
        <span class="fz-8 fc-999 mr-r-50">来源：{{deObj.resource}}</span>
        <span class="fz-8 fc-999">点击量：{{deObj.hits}}次</span>
      </div>
      <div id="edit-content-box"></div>
    </div>
  </div>
</template>
<script>
import { getNewsDetails } from "../api/news";
export default {
  data() {
    return {
      delId: "",
      deObj: {},
    };
  },
  mounted() {
    this.delId = this.$route.query.id;
    this.getDetai();
  },
  methods: {
    async getDetai() {
      const { data } = await getNewsDetails({
        id: this.delId,
      });
      this.deObj = data;
      const dom = document.getElementById("edit-content-box");
      dom.innerHTML = data.info;
      const pdom = document.getElementsByTagName("p");
      pdom.forEach((item) => {
        item.style.lineHeight = "2";
      });
    },
    dateTime(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
<style scoped>
#case-container {
  height: 100%;
}
#top-content-img {
  position: relative;
  width: 100%;
}
.img-style {
  width: 100%;
  height: auto;
}
.us-text {
  letter-spacing: 10px;
}
.us-text2 {
  letter-spacing: 20px;
}
.mar-30 {
  margin-top: 40px;
}
.mar-10 {
  margin-top: 6px;
}
.bolan-img-style {
  margin-top: 20px;
}
.details-content {
  position: relative;
  top: -158px;
  margin: auto;
  width: 1200px;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background-color: #fff;
}
.title-content {
  padding: 60px 0 30px 0;
  font-weight: 400;
  border-bottom: 1px dashed #333333;
}
.title-bottom-box {
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
}
.mr-r-50 {
  margin-right: 80px;
}
#edit-content-box {
  padding: 38px 50px;
}
p {
  line-height: 2;
}
</style>