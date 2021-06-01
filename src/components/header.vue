<template>
  <header id="top-header-container">
    <div id="header-content" class="fl-bt">
      <img class="logo-style" src="@/image/logo.png" alt="logo" />
      <nav class="fl-al">
        <div class="fl-bt" id="nav-item-content">
          <div class="fl-al" v-for="(item,index) in navList" :key="index">
            <div
              class="nav-item"
              :class="[item.type?'nav-item-choose':'']"
              @click="chnageType(index)"
            >
              <span class="fz-10" :class="[item.type?'fc-2c':'']">{{item.name}}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "网站首页",
          type: false,
          router: "/homePage"
        },
        {
          name: "成功案例",
          type: false,
          router: "/case"
        },
        {
          name: "业务范围",
          type: false,
          router: "/business"
        },
        {
          name: "新闻中心",
          type: false,
          router: "/news"
        },
        {
          name: "联系我们",
          type: false,
          router: "/contactUs"
        }
      ]
    };
  },
  mounted() {
    const timer = setTimeout(() => {
      this.firstChange();
      clearTimeout(timer);
    }, 100);
  },
  methods: {
    firstChange() {
      const path = this.$route.path;
      if (path === "/") return (this.navList[0].type = true);
      this.navList.forEach(item => {
        if (item.router === path) {
          item.type = true;
        } else {
          item.type = false;
        }
      });
    },
    chnageType(index) {
      this.navList.forEach((item, i) => {
        if (i === index) {
          if (!this.navList[i].type) {
            this.$router.push(item.router);
            this.navList[i].type = true;
          }
        } else {
          this.navList[i].type = false;
        }
      });
    }
  }
};
</script>
<style scoped>
#top-header-container {
  width: 100%;
  height: 108px;
}
#header-content {
  height: 100%;
  padding: 0 100px;
}
.nav-item {
  cursor: pointer;
  padding-bottom: 10px;
}
.nav-item:hover {
  color: #2c82b3 !important;
}
.nav-item-choose {
  border-bottom: 1px solid #2c82b3;
}
#nav-item-content {
  margin-right: 50px;
  width: 582px;
}
.logo-style {
  width: 168px;
  height: 44px;
}
</style>