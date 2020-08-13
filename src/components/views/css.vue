<template>
  <div>cssssss
    <div class="box">多重边框</div>
  </div>
</template>
<script>
export default {
  name:'css',
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  margin: 15px;
  background: yellowgreen;
  border-radius: 5px;
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, 6);
}
</style>
