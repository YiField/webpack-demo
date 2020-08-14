<template>
  <div class="">
    <!-- 边框：不会响应鼠标事件：hover或者点击;设置border-sizing:border-box可响应 -->
    <div class="multiple-border box-text m-t">多重边框</div>
    <!-- outline -->
    <div class="outline-border box-text m-t">outline</div>
    <div class="background-position-border m-t"></div>
    <div class="background-origin-border m-t"></div>
    <div class="calc-background-position-border m-t"></div>
    <div class="outline-background-border m-t"></div>
    <!-- 条纹 -->
    <!-- 德国国旗 -->
    <div class="germany-flag m-t"></div>
    <!-- 法国国旗 -->
    <div class="french-flag m-t"></div>

    <!-- 地址栏红蓝分割线 -->
    <div class="fengexian-border m-t"></div>
    <!-- 信封边框样式 -->
    <div class="envelope-border m-t">
      My name is 大C
    </div>
    <!-- 蚂蚁行军边框 -->
    <div class="ant-border m-t"></div>
  </div>
</template>
<script>
export default {
  name: "css",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.ant-border {
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        black 0,
        black 25%,
        transparent 0,
        transparent 50%
      )
      0% 0% / 0.6em 0.6em;
  animation: ants 10s linear infinite;
}
@keyframes ants {
  to {
    background-position: 100% 100%;
  }
}
.envelope-border {
  text-align: center;
  line-height: 70px;
  box-sizing: padding-box;
  width: 200px;
  height: 70px;
  background: #fff;
  border: 5px solid transparent;
  border-image: 5
    repeating-linear-gradient(
      -45deg,
      #ff6c6c 0,
      #ff6c6c 10%,
      transparent 0,
      transparent 15%,
      #1989fa 0,
      #1989fa 25%,
      transparent 0,
      transparent 30%
    );
}
.fengexian-border {
  background: #dcf3ae;
  width: 200px;
  height: 100px;
  position: relative;
}
.fengexian-border::before {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  /* 这里的语法在CSS4中可能会被简化 */
  background: repeating-linear-gradient(
    -45deg,
    #ff6c6c 0,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background-size: 80px;
  content: "";
}
.fx {
  display: flex;
  div {
    flex: 0 0 auto;
  }
}
.french-flag {
  width: 130px;
  height: 78px;
  background: linear-gradient(
    to right,
    #002590 0,
    #002590 33.3%,
    #ffffff 33.3%,
    #ffffff 66.6%,
    #db3c3f 66.6%,
    #db3c3f 100%
  );
  background-size: 100% 100%;
}
.germany-flag {
  width: 130px;
  height: 78px;
  background: linear-gradient(
    #000 0,
    #000 33.3%,
    #cc2a1d 33.3%,
    #cc2a1d 66.6%,
    #f8cf47 66.6%,
    #f8cf47 100%
  );
  background-size: 100% 100%;
}
.outline-background-border {
  // 描边（outline）不会跟着元素的圆角走（因而显示出直角），但box-shadow却是会
  margin: 20px;
  width: 100px;
  height: 100px;
  background: #d9c2bc;
  border-radius: 10px;
  box-shadow: 0 0 0 5px #655;
  outline: 10px solid #655;
}
.calc-background-position-border {
  width: 200px;
  height: 120px;
  border-radius: 8px;
  background: url(https://i.loli.net/2020/08/08/jWNPK6e3ucf47LV.png) no-repeat
    right bottom/50px #6a99bf;
  background-position: calc(100% - 20px) calc(100% - 10px);
}
.background-origin-border {
  box-sizing: border-box;
  width: 200px;
  height: 120px;
  border-radius: 8px;
  background: url(https://i.loli.net/2020/08/08/jWNPK6e3ucf47LV.png) no-repeat
    right bottom/50px #6a99bf;
  padding: 10px;
  background-origin: content-box; //默认是以padding-box 为准的
  background-clip: content-box;
  border: 1px solid #000;
}
.background-position-border {
  background: url(https://i.loli.net/2020/08/08/jWNPK6e3ucf47LV.png) no-repeat
    right bottom/50px #6a99bf;
  background-position: right 15px bottom 15px;
  width: 200px;
  height: 120px;
  border-radius: 8px;
}
.outline-border {
  width: 100px;
  height: 100px;
  margin: 5px;
  background: yellowgreen;
  border-radius: 5px;
  outline: 1px dashed deeppink;
  outline-offset: -10px;
}
.multiple-border {
  width: 100px;
  height: 100px;
  margin: 15px;
  background: yellowgreen;
  border-radius: 5px;
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, 6);
}
.multiple-border:hover {
  background: blueviolet;
}
.box-text {
  text-align: center;
}
.m-t {
  margin-top: 30px;
}
</style>
