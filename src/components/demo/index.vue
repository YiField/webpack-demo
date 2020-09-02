<template>
  <div class="demo" v-pinch="pinchCtrl"></div>
</template>

<script>
export default {
  methods: {
    pinchCtrl(e) {
      console.log(e)
      if (e === 'pinch') {
        console.log('捏合');
      }
      if (e === 'pinchout') {
        console.log('扩大');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 500px;
  background-color: yellowgreen;
}
</style>
