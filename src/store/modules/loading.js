const state = {
  isLoading: false, // 是否开启动画
  loadMask: false, // 是否需要全局遮罩层, 默认无
  loadOpacity: true // 遮罩层是否不透明， 默认有（无则表示完全透明）
}
const getters = {}
const actions = {}
const mutations = {
  showLoading(state, info) {
    console.log('showloading-mutations', state, info)
    state.isLoading = true;
  },
  hideLoading(state, info) {
    console.log('hideloading-mutations', state, info)
    state.isLoading = false;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}