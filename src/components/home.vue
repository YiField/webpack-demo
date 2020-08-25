<template>
  <div>
    <router-link to="/views/css">css</router-link>
    <br />
    <router-link to="/eReader">eReader</router-link>
    <br />
    <router-link to="/better">better</router-link>
    <br />
    <loading v-show="isShowLoading"></loading>
    <br>
    <better></better>
  </div>
</template>
<script>
import loading from "./common/Loading";
import better from "./better"
export default {
  name: "home",
  components: {
    loading,
    better
  },
  computed: {
    isShowLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
};
</script>
