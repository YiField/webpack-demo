<template>
<div>modal</div>
</template>

<script>
import mixins from './mixin'

export default {
  mixins:[mixins],
  created() {
    console.log('modal')
  }
}
</script>

<style lang='less' scoped>
</style>