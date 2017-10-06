<template>
  <div class="mission">
    <tab class="tab" :line-width="0" defaultColor="#77c2c6" v-model="tab">
      <tab-item active-class="active">我负责的</tab-item>
      <tab-item active-class="active">我发起的</tab-item>
    </tab>
    <div>
      <div v-show="tab===0">我负责的</div>
      <div v-show="tab===1">我发起的</div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'

  export default {
    data () {
      return {
        tab: 0
      }
    },
    components: {
      Tab,
      TabItem
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .mission {
    .tab {
      width: 690px;
      left: 50%;
      margin: 18px 0 20px -345px;
      border: 2px solid #77c2c6;
      border-radius: 6px;
      background: #fff;
      .active {
        color: #fff;
        background: #77c2c6;
      }
    }
  }
</style>
