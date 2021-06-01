<template>
  <footer id="footer-container">
    <div class="fl-center footer-title">
      <span class="fz-m-15">免费获取网站建设与品牌方案报价</span>
    </div>
    <input class="input-style fl-al fz-m-10" type="text" placeholder="告诉您的电话，我们联系您！" />
    <div class="box-style-content"></div>
    <input class="input-style fl-al fz-m-10" type="text" placeholder="描述您的需求：如网站、微信、APP等" />
    <div class="btn-content fl-center" @click="submitContact">
      <span class="fz-m-10 text-color">获取方案及报价</span>
    </div>
    <div class="fl-fo footer-bottom">
      <span class="fz-m-15">联系我们</span>
      <span class="fz-m-24 fc-2b mr-t-10">18980941908</span>
      <span class="fz-m-12 mr-t-20">邮箱：wwb@trunshare.com</span>
      <span class="fz-m-12 mr-t-10">地址：成都市高新区天府软件园E6-1</span>
      <a class="fz-m-10 mr-t-10 fc-999" href="http://www.beian.miit.gov.cn/">蜀ICP备20023892号</a>
    </div>
  </footer>
</template>
<script>
import { addConsulting } from "../api/news";
export default {
  data() {
    return {
      contactInfo: "",
      remark: "",
    };
  },
  methods: {
    submitContact() {
      if(this.contactInfo==='') return;
      if(this.remark==='') return;
      addConsulting({
        contactInfo: this.contactInfo,
        remark: this.remark,
      }).then(() => {
        alert("提交成功,稍后与您联系");
        this.contactInfo = "";
        this.remark = "";
      });
    },
  },
};
</script>
<style scoped>
#footer-container {
  padding-bottom: 0.58rem;
}
.footer-title {
  padding: 0.44rem;
}
.box-style-content {
  height: 0.3rem;
  visibility: hidden;
}
.input-style {
  margin: auto;
  padding-left: 0.2rem;
  width: 6.66rem;
  height: 0.7rem;
  border: 1px solid #999999;
  outline-color: #ffffff;
}
.btn-content {
  margin: 0.3rem auto;
  width: 6.9rem;
  height: 0.7rem;
  background-color: #333333;
}
.text-color {
  color: #ffffff;
}
.footer-bottom {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
</style>