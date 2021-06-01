<template>
  <div id="case-container-box">
    <div class="case-banner-box mr-b-30">
      <img class="case-banner-img" src="../../image/newsbj.png" alt="banner" />
    </div>
    <div class="details-content">
      <span class="fz-m-15 text-line fz-400">{{deObj.title}}</span>
      <span class="fz-m-10 fc-999 mr-t-10">发布时间： {{dateTime(deObj.createTime)}}</span>
      <span
        class="fz-m-10 fc-999 mr-t-10"
      >{{deObj.resource}} &nbsp;&nbsp;&nbsp;&nbsp; 点击量：{{deObj.hits}}次</span>
      <div id="edit-content-box" class="edit-info mr-t-20"></div>
    </div>
  </div>
</template>
<script>
import { getNewsDetails } from "../../api/news";
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
      const pdom = document.getElementsByTagName("span");
      const imgDom = dom.getElementsByTagName("img");
      imgDom.forEach((item) => {
        item.style.width = "100%";
      });
      pdom.forEach((item) => {
        item.style.lineHeight = "2";
        item.style.fontSize = ".24rem";
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
.case-banner-box {
  position: relative;
  width: 100%;
  height: 4.88rem;
}
.fangkuai {
  width: 0.12rem;
  height: 0.12rem;
  background-color: #ffffff;
}
.case-banner-img {
  width: 100%;
  height: 4.88rem;
}
.details-content {
  display: flex;
  flex-direction: column;
  padding: 0 0.3rem;
}
.text-line {
  text-align: center;
}
.edit-info {
  display: flex;
  flex-direction: column;
}
</style>