export default {
  install(Vue, options) {
    Vue.directive('pinch', {
      bind(el, binding, vnode, oldVnode) {
        let touchFlag = false;
        let touchInitSpacing = 0;
        let touchNowSpacing = 0;
        console.log('bind');
        el.addEventListener('touchstart', e => {
          console.log('touchstart');
          if (e.touches.length > 1) {
            touchFlag = true;
            touchInitSpacing = Math.sqrt(e.touches[0].clientX - e.touch);
          } else {
            touchFlag = false;
          }
        });
        el.addEventListener('touchmove', e => {
          if (e.touches.length > 1 && touchFlag) {
            touchNowSpacing = Math.sqrt(
              (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
                (e.touches[0].clientY - e.touches[1].clientY) ** 2
            );
          }
        });
        el.addEventListener('touchend', () => {
          if (touchFlag) {
            touchFlag = false;
            if (touchInitSpacing - touchNowSpacing > 0) {
              binding.value('pinchin');
            } else {
              binding.value('pinchout');
            }
          }
        });
      }
    });
  }
};
