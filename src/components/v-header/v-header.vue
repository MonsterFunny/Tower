<template>
  <div class="v-header vux-1px-b">
    <h1 >{{title}}</h1>
  </div>
</template>

<script>
  export default {
//    props: {
//      title: String
//    }
    computed: {
      title () {
        return this.$store.state.headerTitle
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-header {
    height: 128px;
    h1 {
      position: relative;
      top: 66px;
      font-size: 32px;
      text-align: center;
      line-height: 32px;
    }
  }
</style>
