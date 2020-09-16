<template>
  <div>
    <!-- <div class="demo" v-pinch="pinchCtrl"></div> -->
    <modal></modal>
    <tooltip></tooltip>
  </div>
</template>

<script>
import Modal from './mixinModal';
import Tooltip from './mixinTooltip';
export default {
  name: 'demo',
  components: {
    Modal,
    Tooltip
  },
  methods: {
    pinchCtrl(e) {
      console.log(e);
      if (e === 'pinch') {
        console.log('捏合');
      }
      if (e === 'pinchout') {
        console.log('扩大');
      }
    }
  },
  // created() {
  //   console.log('created', this);
  // },
  // mounted() {
  //   console.log('mouted', this);
  // }
};
</script>


<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 500px;
  background-color: yellowgreen;
}
</style>
