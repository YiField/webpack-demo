<template>
  <div>tooltip</div>
</template>

<script>
import mixins from './mixin';

export default {
  mixins: [mixins],

  created() {
    console.log('created', this.isShowing);
  },
  mounted() {
    console.log('mouted', this.isShowing);
    this.toogleShow();
  },
  methods: {
    toogleShow() {
      console.log('toggleshow from components')
    }
  },

};
</script>

<style lang='less' scoped>
</style>