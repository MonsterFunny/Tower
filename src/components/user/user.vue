<template>
    <div class="user">
      <!--<v-header></v-header>-->
      <router-view></router-view>
      <!--<v-footer></v-footer>-->
    </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import VFooter from 'components/v-footer/v-footer'

  export default {
    components: {
      VHeader,
      VFooter
    }
  }
</script>

<style scoped lang="scss">

</style>
