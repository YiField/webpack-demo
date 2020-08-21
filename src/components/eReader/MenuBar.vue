<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="ifTitleAndMenuShow"
        :class="{ 'hide-box-shadow': ifSettingShow || !ifTitleAndMenuShow }"
      >
        <div class="icon-wrapper">
          <span class="icon iconfont icon-menu"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-adjust"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-light-on" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-font" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size" v-if="showTag === 0">
          <div
            class="preview"
            :style="{ fontSize: fontSizeList[0].fontSize + 'px' }"
          >
            A
          </div>
          <div class="select">
            <div
              class="select-wrapper"
              v-for="(item, index) in fontSizeList"
              :key="index"
              @click="clickfontSize(item.fontSize)"
            >
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div
            class="preview"
            :style="{
              fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px',
            }"
          >
            A
          </div>
        </div>
        <div class="setting-theme" v-else-if="showTag === 1">
          <div class="setting-theme-item" v-for="(item,index) in themeList" :key="index" @click="clickTheme(index)">
            <div class="preview" :style="{background: item.style.body.background}" :class="{'no-border':item.style.body.background !=== '#fff'}"></div>
            <div class="text">{{item.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifSettingShow: false,
      showTag: 0
    };
  },
  methods: {
    showSetting(tag) {
      this.ifSettingShow = true;
      this.showTag = tag;
    },
    hideSetting() {
      this.ifSettingShow = false;
    },
    clickfontSize(fontSize) {
      this.$emit("setFontSize", fontSize);
    },
    clickTheme(theme){
      console.log(theme)
      this.$emit("setTheme",theme);
    }
  },
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false,
    },
    fontSizeList: {
      type: Array,
      default: [],
    },
    defaultFontSize: {
      type: Number,
      default: 12,
    },
    themeList: {
      type: Array,
    },
    defaultTheme: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.menu-bar {
  position: relative;
  .menu-wrapper {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(90);
    background: #fff;
    box-shadow: 0 px2rem(-16) px2rem(16) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
    }
    &.hide-box-shadow {
      box-shadow: none;
    }
  }
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(90);
    left: 0;
    width: 100%;
    height: px2rem(120);
    background: #fff;
    box-shadow: 0 px2rem(-16) px2rem(16) rgba(0, 0, 0, 0.15);
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 px2rem(80);
        @include center;
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          z-index: 101;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: px2rem(10);
            border-left: px2rem(1) solid #ccc;
            .point {
              position: absolute;
              top: px2rem(-16);
              left: px2rem(-16);
              width: px2rem(40);
              height: px2rem(40);
              border-radius: 50%;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 px2rem(6) px2rem(6) rgba(0, 0, 0, 0.15);
              background: #fff;
              @include center;
              .small-point {
                width: px2rem(15);
                height: px2rem(15);
                background-color: #000;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .setting-theme {
      width: 100%;
      display: flex;
      .setting-theme-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: px2rem(10);
        box-sizing: border-box;
        z-index: 101;
        .preview {
          flex: 0 0 px2rem(60);
          border: px2rem(1) solid #ccc;
          &.no-border {
            border:none;
          }
        }
        .text {
          flex: 0 0 px2rem(60);
          font-size: px2rem(32);
          color: #333;
          @include center;
        }
      }
    }
  }
}
</style>
