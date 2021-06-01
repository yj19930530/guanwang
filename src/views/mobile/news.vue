<template>
  <div id="case-container-box">
    <div class="case-banner-box">
      <img class="case-banner-img" src="../../image/xwzxbj2.png" alt="banner" />
      <div class="case-banner-center">
        <span class="fz-m-17 fz-bold fc-fff banner-title-spc">独特的视角诠释品牌内涵</span>
        <span class="fz-m-11 fc-fff mr-t-20">以独特的视角诠释品牌的内涵，彰显产品</span>
        <span class="fz-m-11 fc-fff mr-t-10">优势，打造企业形象。</span>
        <div class="henggang"></div>
      </div>
    </div>
    <div class="fl-al mr-b-20">
      <div
        class="news-tab fz-m-12 fl-center"
        :class="leftType?'change-color':'default-color'"
        @click="tabChange('left')"
      >行业动态</div>
      <div
        class="news-tab fz-m-12 fl-center"
        :class="rightType?'change-color':'default-color'"
        @click="tabChange('right')"
      >开发常见问题</div>
    </div>
    <div class="news-box">
      <News v-for="(item,index) in newsList" :key="index" :itemObj="item" />
      <div class="fl-center get-more-news mr-t-30" @click="getMoreData" v-if="more">
        <img class="shuaxin" src="../../image/shuaxin.png" alt />
        <span class="fz-m-12 mr-l-10 fc-666">加载更多新闻</span>
      </div>
    </div>
  </div>
</template>
<script>
import News from "../../components/phoneNews";
import { getNewsPage } from "../../api/news";
export default {
  data() {
    return {
      leftType: true,
      rightType: false,
      total: 0,
      pageNo: 1,
      pageSize: 4,
      newsType: 1,
      more: false,
      newsList: [],
    };
  },
  components: {
    News,
  },
  mounted() {
    this.getList();
  },
  methods: {
    getMoreData() {
      if (!this.more) return;
      this.pageNo++;
      getNewsPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        newsType: this.newsType,
      }).then((res) => {
        this.newsList = [...this.newsList, ...res.data.list];
        if (this.newsList.length < this.total) {
          this.more = true;
        } else {
          this.more = false;
        }
      });
    },
    async getList() {
      const { data } = await getNewsPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        newsType: this.newsType,
      });
      this.newsList = data.list;
      this.total = data.total;
      if (this.newsList.length === this.total) return (this.more = false);
      this.more = true;
    },
    tabChange(type) {
      switch (type) {
        case "left": {
          if (this.leftType) return;
          this.rightType = false;
          this.leftType = true;
          this.newsType = 1;
          this.pageNo = 1;
          this.getList();
          break;
        }
        case "right": {
          if (this.rightType) return;
          this.rightType = true;
          this.leftType = false;
          this.newsType = 2;
          this.pageNo = 1;
          this.getList();
          break;
        }
        default: {
          break;
        }
      }
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
.case-banner-img {
  width: 100%;
  height: 4.88rem;
}
.case-banner-center {
  position: absolute;
  left: 0.4rem;
  bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}
.banner-title-spc {
  letter-spacing: 0.06rem;
}
.henggang {
  margin-top: 0.22rem;
  width: 1.22rem;
  height: 0.06rem;
  background-color: #ffffff;
}
.news-tab {
  width: 50%;
  height: 0.7rem;
}
.change-color {
  background-color: #f7f7f7;
}
.default-color {
  background-color: #e4e4e4;
}
.news-box {
  border-top: 1px solid #e4e4e4;
  margin: auto;
  width: 6.9rem;
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