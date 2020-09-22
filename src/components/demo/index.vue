<template>
  <div>
    <!-- <div class="demo" v-pinch="pinchCtrl"></div> -->
    <modal></modal>
    <tooltip></tooltip>
    <button @click="isMember = !isMember">{{isMember?'我不想要会员了，哼':'我要成为会员'}}</button>
    <component :is="userComponentName" title="component就是好用哟"></component>

    <p>假装这是一个商城首页</p>
    <button @click="shuffle">随机切换模块顺序</button>
    <component
      :is="item.imstance"
      v-for="(item,index) in componentImstances"
      :info="item"
      :key="index"
    ></component>
  </div>
</template>

<script>
import Modal from './mixinModal';
import Tooltip from './mixinTooltip';
// import UserInfo from './user-info';
// import MemberInfo from './member-info';
export default {
  name: 'demo',
  components: {
    Modal,
    Tooltip
    // UserInfo,
    // MemberInfo
  },
  data() {
    return {
      isMember: false,
      moduleList: [
        {
          type: 'bargin',
          title: '砍价',
          startTime: '2019-12-01',
          endTime: '2019-01-01'
        },
        {
          type: 'seckill',
          title: '秒杀',
          startTime: '2019-12-05',
          endTime: '2019-01-01'
        },
        {
          type: 'limit',
          title: '限购',
          startTime: '2019-12-07',
          endTime: '2019-01-01'
        },
        {
          type: 'group',
          title: '团购',
          startTime: '2019-12-11',
          endTime: '2019-01-01'
        }
      ]
    };
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
    },
    shuffle() {
      console.log('shuffle')
      let { moduleList } = this;
      let resultArr = [];
      while (moduleList.length >= 0) {
        let index = Math.floor(Math.random() * moduleList.length);
        // resultArr.push(moduleList[index]);
        moduleList.splice(index, 1);
      }
      this.moduleList = resultArr;
    }
  },
  computed: {
    userComponentName() {
      let { isMember } = this;
      // return isMember ? 'member-info' : 'user-info';
      let component = isMember ? 'member-info' : 'user-info';
      // 动态import的形式导入了子组
      return () => import(`./${component}`);
    },
    componentImstances() {
      let { moduleList } = this;
      //array.map严格模式下不能使用caller arguments ，import语法应该有使用到
      return moduleList.map(item => {
        item.imstance = () => import(`./${item.type}`);
        return item;
      });
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
