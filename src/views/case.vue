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
      <ul id="enterprise-list">
        <li
          class="enterprise-item-content"
          v-for="(item,index) in tableList"
          :key="index"
          @click="toDetails(item)"
        >
          <img class="enterprise-item-img" :src="item.imgUrl" alt />
          <div class="text-title">
            <span class="fz-10 fc-333">{{item.name}}</span>
          </div>
          <div class="text-slo">
            <span class="fz-8 fc-82">{{item.caseRemark}}</span>
          </div>
        </li>
      </ul>
      <div class="fl-center loading-content" v-if="more" @click="getMoreData">
        <img class="shuaxin-img" src="../image/shuaxin.png" alt="刷新" />
        <span class="fz-8 fc-666 cu-p-style">加载更多案例</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getCasePage } from "../api/news";
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 4,
      tableList: [],
      total: 0,
      more: false,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getMoreData() {
      if (!this.more) return;
      this.pageNo++;
      const { data } = await getCasePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
      if (data.list.length) {
        this.tableList = [...this.tableList, ...data.list];
      } else {
        this.more = false;
      }
      if (this.tableList.length === this.total) {
        this.more = false;
      } else {
        this.more = true;
      }
    },
    toDetails() {
      // window.open(row.linkUrl);
    },
    async getList() {
      const { data } = await getCasePage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
      this.tableList = data.list;
      this.total = data.total;
      if (this.tableList.length >= this.total) {
        this.more = false;
      } else {
        this.more = true;
      }
    },
  },
};
</script>
<style scoped>
#case-container {
  height: 100%;
  padding-bottom: 150px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
  width: 1200px;
  min-width: 1200px;
}
.enterprise-item-content {
  margin-bottom: 30px;
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
  padding-right: 20px;
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
.cu-p-style {
  cursor: pointer;
}
</style>