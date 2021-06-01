<template>
  <header id="header-container" class="fl-bt">
    <img class="logo-style mr-l-30" src="../image/titlelogo.png" alt="logo" />
    <img class="menu-style mr-r-30" src="../image/menu.png" alt="menu" @click="menuList" />
    <div class="menu-list-box" :class="[!menuListType?'menu-height-show':'menu-height-none']">
      <div
        class="menu-item-style fl-al"
        v-for="(item,index) in navList"
        :key="item.name"
        @click="toPath(index)"
      >
        <span class="fz-m-15" :class="[item.type?'font-change-style':'fc-fff']">{{item.name}}</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuListType: true,
      navList: [
        {
          name: "网站首页",
          type: false,
          router: "/mobileHome",
        },
        {
          name: "成功案例",
          type: false,
          router: "/mobileCase",
        },
        {
          name: "业务范围",
          type: false,
          router: "/mobileBusiness",
        },
        {
          name: "新闻中心",
          type: false,
          router: "/mobileNews",
        },
        {
          name: "联系我们",
          type: false,
          router: "/mobileUs",
        },
      ],
    };
  },
  mounted() {
    const timer = setTimeout(() => {
      this.firstChange();
      clearTimeout(timer);
    }, 100);
  },
  methods: {
    menuList() {
      this.menuListType = !this.menuListType;
    },
    toPath(index) {
      this.navList.forEach((item, i) => {
        if (i === index) {
          if (!this.navList[i].type) {
            this.menuListType = true;
            this.$router.push(item.router);
            this.navList[i].type = true;
          }
        } else {
          this.navList[i].type = false;
        }
      });
    },
    firstChange() {
      const path = this.$route.path;
      if (path === "/") {
        this.navList[0].type = true;
        return this.$router.push("/mobileHome");
      }
      this.navList.forEach((item) => {
        if (item.router === path) {
          item.type = true;
        } else {
          item.type = false;
        }
      });
    },
  },
};
</script>
<style scoped>
#header-container {
  position: relative;
  width: 100%;
  height: 1.2rem;
}
.logo-style {
  width: 2.02rem;
  height: 0.54rem;
}
.menu-style {
  width: 0.44rem;
  height: 0.18rem;
}
.menu-list-box {
  overflow: hidden;
  z-index: 999999;
  transition: all 0.6s;
  position: absolute;
  right: 0;
  top: 1.2rem;
  width: 100%;
  background-color: #333;
  box-shadow: 0 0 4px #999999;
}
.menu-height-show {
  height: 6rem;
}
.menu-height-none {
  height: 0;
}
.menu-item-style {
  padding: 0.3rem 0;
  width: 6.9rem;
  border-bottom: 1px solid #fff;
  margin: auto;
}
.font-change-style {
  color: rgb(136, 156, 247);
}
</style>