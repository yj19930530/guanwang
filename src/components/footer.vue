<template>
  <footer id="footer-container" class="fl-co">
    <div>
      <span class="fz-23">免费获取网站建设与品牌方案报价</span>
    </div>
    <div class="form-content fl-center">
      <input v-model="contactInfo" class="input-style" type="text" placeholder="告诉您的电话，我们联系您！" />
      <input
        v-model="remark"
        class="input-style mar-10-footer"
        type="text"
        placeholder="描述您的需求：如网站、微信、APP等"
      />
      <div class="get-price-btn fl-center mar-10-footer" @click="submitContact">
        <span class="fc-fff">获取方案及报价</span>
      </div>
    </div>
    <div class="fl-center mar-40">
      <div class="fl-center">
        <img src="../image/dianhua.png" alt />
        <span class="fz-15 mar-10">18980941908</span>
      </div>
      <div class="fl-center mar-150">
        <img src="../image/youxiang.png" alt />
        <span class="fz-15 mar-10">wwb@trunshare.com</span>
      </div>
      <div class="fl-center mar-150">
        <img src="../image/dizhi.png" alt />
        <span class="fz-15 mar-10">成都市高新区天府软件园E6-1</span>
      </div>
    </div>
    <div class="mar-30">
      <a class="fz-8 fc-999" href="http://www.beian.miit.gov.cn/">蜀ICP备20023892号</a>
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
      if (this.contactInfo === "") return;
      if (this.remark === "") return;
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
  min-width: 1200px;
  margin-top: 50px;
  padding-bottom: 140px;
}
.form-content {
  margin-top: 60px;
  width: 100%;
}
.input-style {
  padding-left: 20px;
  width: 350px;
  height: 50px;
  border: 1px solid #999;
  outline-color: #d12e2e;
  border-radius: 4px;
}
.get-price-btn {
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-color: #333;
  border-radius: 4px;
}
.get-price-btn:hover {
  background-color: #d12e2e;
}
.mar-10 {
  margin-left: 10px;
}
.mar-150 {
  margin-left: 100px;
}
.mar-40 {
  margin-top: 40px;
}
.mar-10-footer {
  margin-left: 10px;
}
</style>