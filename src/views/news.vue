<template>
  <div id="case-container">
    <!-- back -->
    <div id="top-content-img">
      <img class="img-style" src="../image/xiangji.png" alt="pic" />
      <div class="img-text">
        <div>
          <span class="fz-30 fz-bold fc-fff">独特的视角诠释品牌内涵</span>
        </div>
        <div class="mar-30">
          <span class="fc-fff fz-9">以独特的视角诠释品牌的内涵，彰显产品优势，打造企业形象。</span>
        </div>
        <div class="mar-30 lin-heng"></div>
      </div>
    </div>
    <!-- tab -->
    <div id="news-tabs-box">
      <div class="fl-al">
        <div
          class="fl-center news-tabs-item"
          :class="[leftTabsType?'tabs-back-color':'']"
          @click="tabsChange(1)"
        >
          <span class="fz-25">行业动态</span>
        </div>
        <div
          class="fl-center news-tabs-item"
          :class="[rightTabsType?'tabs-back-color':'']"
          @click="tabsChange(2)"
        >
          <span class="fz-25">开发问题</span>
        </div>
      </div>
    </div>
    <div class="new-list-box fl-co">
      <div
        class="news-item-box fl-ft"
        v-for="(item,index) in newsList"
        :key="index"
        :class="[item===1?'news-item-box2':'']"
        @click="getInfoDetails(item)"
      >
        <img class="news-item-img" :src="item.imgUrl" alt />
        <div class="news-item-rigth" style="margin-left:20px">
          <div class="fl-bt news-item-title">
            <span class="fz-17">{{item.title}}</span>
            <span class="fz-17 fc-666">{{dateTime(item.createTime)}}</span>
          </div>
          <div class="news-item-atic">
            <span class="fz-11">{{reText(item.listInfo)}}</span>
          </div>
        </div>
      </div>
      <div class="get-more-news fl-center cu-p-style" v-if="more" @click="getMoreData">
        <img src="../image/shuaxin.png" class="mr-r-10" alt />
        <span>加载更多新闻</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsPage, newsCount } from "../api/news";
export default {
  data() {
    return {
      leftTabsType: true,
      rightTabsType: false,
      newsList: [],
      total: 0,
      pageNo: 1,
      pageSize: 4,
      newsType: 1,
      more: false,
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    reText(text) {
      if (text.length > 80) {
        text = text.substring(0, 80);
        return text + " ...[详细]";
      } else {
        return text;
      }
    },
    async getInfoDetails(row) {
      if (row.jumpState === 1) {
        await newsCount({
          id: row.id,
        });
        this.$router.push(`/newsDetails?id=${row.id}`);
      } else {
        window.open(row.linkUrl);
      }
    },
    tabsChange(type) {
      if (type === 1) {
        if (this.leftTabsType) return;
        this.leftTabsType = true;
        this.rightTabsType = false;
      } else {
        if (this.rightTabsType) return;
        this.rightTabsType = true;
        this.leftTabsType = false;
      }
      this.newsType = type;
      this.pageNo = 1;
      this.getNewsList();
    },
    async getMoreData() {
      if (!this.more) return;
      this.pageNo++;
      const { data } = await getNewsPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        newsType: this.newsType,
      });
      if (data.list.length) {
        this.newsList = [...this.newsList, ...data.list];
      }
      if (this.newsList.length === this.total) {
        this.more = false;
      } else {
        this.more = true;
      }
    },
    async getNewsList() {
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
@import "../styles/css/new.css";
#news-tabs-box {
  margin-top: -4px;
  min-width: 1200px;
}
.img-text {
  position: absolute;
  left: 6%;
  top: 50%;
}
.cu-p-style {
  cursor: pointer;
}
</style>