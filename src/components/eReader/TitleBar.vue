<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="left" @click="goBack">
        <span class="icon iconfont icon-left"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon iconfont icon-shopbag"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-mine"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-more_android"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: px2rem(100);
  font-size: px2rem(50);
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
</style>
