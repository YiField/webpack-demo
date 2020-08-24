<template>
  <div id="ebook" class="ebook">
    <TitleBar :ifTitleAndMenuShow="ifTitleAndMenuShow"></TitleBar>
    <div class="reader-wrapper">
      <div id="epub-reader"></div>
      <div class="mask">
        <div class="left" @click="prevPage">
          <span class="icon iconfont icon-left_circle"></span>
        </div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage">
          <span class="icon iconfont icon-right_circle"></span>
        </div>
      </div>
    </div>
    <MenuBar
      :ifTitleAndMenuShow="ifTitleAndMenuShow"
      :fontSizeList="fontSizeList"
      :defaultFontSize="defaultFontSize"
      :themeList="themeList"
      :defaultTheme="defaultTheme"
      :bookAvailable="bookAvailable"
      :navigation="navigation"
      ref="menuBar"
      @setFontSize="setFontSize"
      @setTheme="setTheme"
      @onProgressChange="onProgressChange"
      @jumpTo="jumpTo"
    ></MenuBar>
  </div>
</template>
<script>
import Epub from "epubjs";
import TitleBar from "@/components/eReader/TitleBar";
import MenuBar from "@/components/eReader/MenuBar";
const DOWNLOAD_URL =
  "/static/machiavelli-history-of-florence-and-of-the-affairs-of-italy.epub";

export default {
  name: "eReader",
  data() {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 17 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 },
      ],
      defaultFontSize: 12,
      themeList: [
        {
          name: "default",
          style: {
            body: {
              color: "#000",
              background: "#fff",
            },
          },
        },
        {
          name: "eye",
          style: {
            body: {
              color: "#000",
              background: "#ceeaba",
            },
          },
        },
        {
          name: "night",
          style: {
            body: {
              color: "#fff",
              background: "#000",
            },
          },
        },
        {
          name: "gold",
          style: {
            body: {
              color: "#000",
              background: "rgb(241,236,226)",
            },
          },
        },
      ],
      defaultTheme: 0,
      // 图书是否处于可用状态
      bookAvailable: false,
      navigation:{}
    };
  },
  methods: {
    // 链接跳转页面
    jumpTo(href) {
      console.log("href", href);
      this.rendition.display(href);
      this.hideTitleAndMenu();
    },
    hideTitleAndMenu() {
      this.ifTitleAndMenuShow = false;
      this.$refs.menuBar.hideSetting();
      this.$refs.menuBar.hideContent();
    },
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      console.log("window", window.innerWidth, window.innerHeight);
      this.rendition = this.book.renderTo("epub-reader");
      this.rendition.display();

      //theme对象
      this.themes = this.rendition.themes;
      //字体设置
      this.setFontSize(this.defaultFontSize);
      // 注册主题
      this.registerTheme();

      this.setTheme(0);

      //获取locations对象
      // 通过epubjs钩子函数实现
      this.book.ready
        .then(() => {
          this.navigation = this.book.navigation;
          console.log(this.navigation);
          return this.book.locations.generate();
        })
        .then((result) => {
          this.locations = this.book.locations;
          this.bookAvailable = true;
        });
    },
    onProgressChange(progress) {
      const percentage = progress / 100;
      const location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
      this.rendition.display(location);
    },
    setTheme(index) {
      this.defaultTheme = index;
      this.themes.select(this.themeList[index].name);
    },
    registerTheme() {
      this.themeList.forEach((theme) => {
        this.themes.register(theme.name, theme.style);
      });
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
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting();
      }
    },
    setFontSize(fontSize) {
      this.defaultFontSize = fontSize;
      if (this.themes) {
        this.themes.fontSize(fontSize + "px");
      }
    },
  },
  mounted() {
    this.showEpub();
  },
  components: {
    TitleBar,
    MenuBar,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common.scss";
.ebook {
  position: relative;
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
        font-size: px2rem(80);
        @include center // background-color: aquamarine;;;;;;;;;;
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
        font-size: px2rem(80);
        @include center // background-color: violet;;;;;;;;;;
      }
    }
  }
}
</style>
