<template>
  <div>
    <router-link to="/views/css">css</router-link>
    <br />
    <router-link to="/eReader">eReader</router-link>
    <br />
    <router-link to="/better">better</router-link>
    <br />
    <router-link to="/views/echarts">echarts</router-link>
    <br />
    <loading v-show="isShowLoading"></loading>
    <br />
    <better></better>
    <br />
    <router-link to="/demo">demo</router-link>
    <robot></robot>
    <editor></editor>
  </div>
</template>
<script>
import loading from './common/Loading';
import better from './better';
import robot from './fixed-robot';
import editor from '@/components/rich-text-editor/index';
export default {
  name: 'home',
  components: {
    loading,
    better,
    robot,
    editor
  },
  computed: {
    isShowLoading() {
      return this.$store.state.loading.isLoading;
    }
  }
};
</script>
