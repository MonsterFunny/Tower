<template>
  <div class="v-footer vux-1px-t">
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in iconList" @click="getActive(item,index)" :class="[index == activeIndex ? 'active':'']">
        <div class="icon-item">
          <i class="icon iconfont" :class="['icon-'+index]"></i>
        </div>
        <div class="name">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        iconList: {
          'mission': '任务',
          'project': '项目',
          'dynamic': '动态',
          'calendar': '日历',
          'more': '更多'
        },
        activeIndex: 'mission'
      }
    },
    methods: {
      getActive (item, index) {
        const end = this.$route.path.lastIndexOf('/') + 1
        const path = this.$route.path.substr(0, end)
        this.activeIndex = index
        this.$router.push(path + index)
        this.$store.commit('updateHeaderTitle', item)
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-footer {
    position: fixed;
    bottom: 0;
    width: 750px;
    .nav {
      display: flex;
      .nav-item {
        flex: 1;
        height: 98px;
        text-align: center;
        color: rgb(204,204,204);
        &.active {
          color: rgb(119,194,198);
        }
        .icon-item {
          height: 66px;
          line-height: 66px;
          .icon {
            font-size: 36px;
          }
        }
        .name {
          height: 32px;
          font-size: 22px;
          line-height: 32px;
        }
      }
    }
  }

</style>
