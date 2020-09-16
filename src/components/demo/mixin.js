 const toggle = {
   data() {
     return {
       isShowing: false
     }
   },
   methods: {
     toogleShow() {
       console.log('toggleshow from mixin')
       this.isShowing = !this.isShowing;
     }
   },
 }
 export default toggle