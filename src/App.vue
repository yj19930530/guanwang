<template>
  <div id="app">
    <Header v-if="isRouterAlive" />
    <PhoneHeader v-if="phoneType" />
    <router-view />
    <Footer v-if="!phoneType" />
    <PhoneFooter v-if="phoneType" />
  </div>
</template>
<script>
import { isMobile } from "./utils/common";
import Header from "./components/header";
import Footer from "./components/footer";
import PhoneHeader from "./components/phoneHeader";
import PhoneFooter from "./components/phoneFooter";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      phoneType: isMobile(),
      isRouterAlive: true,
    };
  },
  components: {
    Header,
    Footer,
    PhoneHeader,
    PhoneFooter
  },
  mounted() {
    if (this.phoneType) {
      this.isRouterAlive = false;
    }
  },
  methods: {
    reload() {
      console.log('in')
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style>
@import "./styles/phoneFont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
</style>
