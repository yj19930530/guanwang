<template>
  <div id="home-page-container">
    <div id="pic-play-content">
      <ul id="img-content">
        <li class="img-item">
          <img class="image-style" src="@/image/pic1.png" alt />
        </li>
        <li class="img-item">
          <img class="image-style" src="@/image/pic2.png" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      picWidth: 0,
      wWidth: 0,
      imgLength: 2,
      count: 1
    };
  },
  mounted() {
    this.handleTimer();
  },
  methods: {
    handleTimer() {
        this.wWidth = document.documentElement.clientWidth;
        const imgBox = document.getElementById("img-content");
        this.timer = setInterval(() => {
          this.count++;
          if (this.count < 3) {
            this.picWidth -= this.wWidth;
          } else {
            this.picWidth += this.wWidth;
            this.count = 1;
          }
          imgBox.style.left = this.picWidth + "px";
        }, 2000);
    }
  }
};
</script>
<style scoped>
#home-page-container {
  height: 100%;
}
#pic-play-content {
  height: 100%;
  position: relative;
  overflow: hidden;
}
#img-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s;
}
.img-item {
  /* float: left; */
}
.image-style {
  /* width: 100%; */
  height: auto;
}
</style>