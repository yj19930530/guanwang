<template>
  <div id="case-container-box">
    <div class="case-banner-box mr-b-50">
      <img class="case-banner-img" src="../../image/case-bg.png" alt="banner" />
      <div class="case-banner-center">
        <span class="fz-m-17 fz-bold fc-fff banner-title-spc">一点一滴·价值体现</span>
        <div class="fangkuai mr-t-20"></div>
        <span class="fz-m-11 fc-fff mr-t-20">在互联网的世界里，我们追求专业和创新</span>
        <span class="fz-m-11 fc-fff mr-t-10">专属定制为企业客户提供创新且可持续的人性化解决方案</span>
      </div>
    </div>
    <div class="case-qi-list">
      <div
        class="qi-item-item"
        v-for="(item,index) in caseList"
        :key="index"
        @click="toDetails(item)"
      >
        <img :src="item.imgUrl" alt="logo" />
        <span class="fz-m-14 mr-t-20">{{item.name}}</span>
        <span class="fz-m-11 mr-t-10">{{item.caseRemark}}</span>
      </div>
      <div class="fl-center get-more-news" @click="getMoreData" v-if="more">
        <img class="shuaxin" src="../../image/shuaxin.png" alt />
        <span class="fz-m-12 mr-l-10 fc-666">加载更多案例</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getCasePage } from "../../api/news";
export default {
  data() {
    return {
      caseList: [],
      total: 0,
      pageNo: 1,
      pageSize: 4,
      more: false,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    toDetails(row) {
      window.open(row.linkUrl);
    },
    getMoreData() {
      if (!this.more) return;
      this.pageNo++;
      getCasePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        this.caseList = [...this.caseList, ...res.data.list];
        if (this.caseList.length < this.total) {
          this.more = true;
        } else {
          this.more = false;
        }
      });
    },
    getList() {
      getCasePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        this.caseList = res.data.list;
        this.total = res.data.total;
        if (this.caseList.length < this.total) {
          this.more = true;
        } else {
          this.more = false;
        }
      });
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
.case-banner-center {
  position: absolute;
  left: 0.4rem;
  bottom: 0.5rem;
  display: flex;
  flex-direction: column;
}
.banner-title-spc {
  letter-spacing: 0.06rem;
}
.case-qi-list {
  margin: auto;
  width: 6.9rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.qi-item-item {
  margin-bottom: 0.3rem;
  padding-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  width: 3.36rem;
  border: 1px solid #828282;
}
.qi-item-item img {
  width: 100%;
  height: 3.5rem;
}
.qi-item-item span {
  margin-left: 0.26rem;
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