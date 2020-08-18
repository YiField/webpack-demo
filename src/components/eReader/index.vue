<template>
  <div id="ebook" class="ebook">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="left">
        <span class="fa fa-arrow-left"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="fa fa-shopping-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="fa fa-ellipsis-h"></span>
        </div>
      </div>
    </div>
    <div class="reader-wrapper">
      <div id="epub-reader"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
      <div class="icon-wrapper">
        <span class="fa fa-ad"></span>
      </div>
      <div class="icon-wrapper">
        <span class="fa fa-ad"></span>
      </div>
      <div class="icon-wrapper">
        <span class="fa fa-ad"></span>
      </div>
      <div class="icon-wrapper">
        <span class="fa fa-ad"></span>
      </div>
    </div>
  </div>
</template>
<script>
import Epub from "epubjs";
const DOWNLOAD_URL =
  "/static/machiavelli-history-of-florence-and-of-the-affairs-of-italy.epub";
export default {
  name: "eReader",
  data() {
    return {
      ifTitleAndMenuShow: false,
    };
  },
  methods: {
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      this.rendition = this.book.renderTo("epub-reader", {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      this.rendition.display();
    },
    prevPage() {
      if (this.rendition) {
        console.log("prev");
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        console.log("next");
        this.rendition.next();
      }
    },
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
    }
  },
  mounted() {
    this.showEpub();
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common.scss";
.ebook {
  position: relative;
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(48);
    background: #fff;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    display: flex;
    .left {
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        display: inline-block;
        flex: 0 0 px2rem(60);
        @include center;
      }
    }
  }
  .reader-wrapper {
    .mask {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      .left {
        flex: 0 0 px2rem(100);
        // background-color: aquamarine;
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
        // background-color: violet;
      }
    }
  }
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(48);
    background: #fff;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
    }
  }
}
</style>
