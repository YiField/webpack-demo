<template>
  <div>
    better
    <button @click="toggleLoading">loading</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnWeekday() {
      let string = "今天是星期";
      let date = new Date().getDate();
      let dateArr = ["天", "一", "二", "三", "四", "五", "六"];
    },
    toggleLoading() {
      if (this.isloaded) {
        console.log("hide loading");
        this.$store.commit('hideLoading')
      } else {
        console.log("show loading");
        this.$store.commit('showLoading')
        console.log(this.isloaded)
      }
    },
  },
  computed: {
    isloaded() {
      return this.$store.state.loading.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped></style>
