<template>
  <div class="page-news" @click="getToDetails">
    <span class="fz-m-15">{{listItem.title}}</span>
    <span class="fz-m-12 mr-t-10 fc-666">{{dateTime(listItem.createTime)}}</span>
    <p class="fz-m-12 mr-t-20 text-p-style">{{reText(listItem.listInfo)}}</p>
  </div>
</template>
<script>
import { newsCount } from "../api/news";
export default {
  data() {
    return {};
  },
  props: {
    itemObj: {
      type: Object,
    },
  },
  computed: {
    listItem() {
      return this.itemObj;
    },
  },
  methods: {
    async getToDetails() {
      await newsCount({
        id: this.listItem.id,
      });
      if (this.listItem.jumpState === 1) {
        await newsCount({
          id: this.listItem.id,
        });
        this.$router.push(`/mobileNewsDetails?id=${this.listItem.id}`);
      } else {
        window.open(this.listItem.linkUrl);
      }
    },
    reText(text) {
      if (text.length > 53) {
        text = text.substring(0, 53);
        return text + " ...";
      } else {
        return text;
      }
    },
    dateTime(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 >= 10 ? date.getMonth()+1 : "0" +( date.getMonth()+1);
      let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
<style scoped>
.page-news {
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0;
  border-bottom: 1px solid #e4e4e4;
}
.text-p-style {
  line-height: 1.6;
}
</style>