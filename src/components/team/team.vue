<template>
    <div class="team">
      <header class="team-header">
        <router-link tag="div" class="router-item" to="/login">退出登录</router-link>
        <h1>请选择你的团队</h1>
      </header>
      <div class="team-body"></div>
      <div class="team-content">
        <ul>
          <li class="team-item" :class="[index>0?'vux-1px-t':'']" v-for="(item,index) in teamList" @click="getTeam(item)">{{item}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {XButton} from 'vux'
  export default {
    data () {
      return {
        teamList: [
          'team1',
          'team2'
        ]
      }
    },
    components: {
      XButton
    },
    methods: {
      getTeam (item) {
        const nick = localStorage.getItem('nickname')
        this.$router.push('/user/' + nick + '/team/' + item + '/mission')
      }
    }
  }
</script>

<style scoped lang="scss">
  .team {
    .team-header {
      width: 750px;
      height: 440px;
      background: rgb(119, 194, 198);
      font-size: 32px;
      color: #fff;
      h1 {
        padding-top: 234px;
        text-align: center;
        color: #fff;
        font-size: 32px;
        line-height: 32px;
      }
      .router-item {
        position: relative;
        top: 54px;
        left: 32px;
        color: #fff;
        font-size: 32px;
        line-height: 32px;
      }
    }
    .team-body {
      width: 750px;
      height: 894px;
    }
    .team-content {
      position: absolute;
      top: 340px;
      width: 630px;
      left: 50%;
      margin-left: -315px;
      z-index: 3;
      background: #fff;
      box-shadow: 0 0 20px rgba(255,255,255,0.5);
      .team-item {
        height: 120px;
        list-style: none;
        color: #77c2c6;
        text-align: center;
        font-size: 24px;
        line-height: 120px;
        /*border-top: 1px solid #000;*/
      }
    }
  }
</style>
