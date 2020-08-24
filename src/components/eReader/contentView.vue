<template>
  <transition name="slide-right">
    <div class="content">
      <div class="content-wrapper" v-if="bookAvailable">
        <div
          class="content-item"
          v-for="(item, index) in navigation.toc"
          :key="index"
          @click="jumpTo(item.href)"
        >
          <span class="text">{{ item.label }}</span>
        </div>
      </div>
      <div class="empty" v-else>
        记载中...
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    ifShowContent: Boolean,
    bookAvailable: Boolean,
    navigation: Object,
  },
  methods: {
    jumpTo(href) {
      this.$emit("jumpTo", href);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.content {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 102;
  width: px2rem(800);
  height: 100%;
  padding-top: px2rem(80);
  .content-wrapper {
    .content-item {
      color: #666;
      position: relative;
      padding-left: px2rem(30);
      .text {
        display: inline-block;
        height: px2rem(80);
        line-height: px2rem(80);
        font-size: px2rem(50);
      }
      ::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        border-bottom: 1px solid rgba(155, 151, 151, 0.555);
      }
    }
  }
}
</style>
