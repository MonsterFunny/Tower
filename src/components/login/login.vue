<template>
  <div class="login">
    <header class="login-header">
      <h1>tower</h1>
    </header>
    <div class="login-body">
      <x-button type="primary" class="btn-item"  @click.native="pushRouter">登录</x-button>
      <p class="forget">密码忘记了?</p>
      <p class="register">没有账户?<span>立即注册</span></p>
    </div>
    <group class="login-content">
      <x-input type="text" is-type="email" :value="user" placeholder="邮箱" @on-blur="getUser"></x-input>
      <x-input type="password" v-model="password" :min="6" :max="8" placeholder="密码" @on-blur="getPassword"></x-input>
    </group>
  </div>
</template>

<script>
  import { Group, XButton, XInput } from 'vux'
//  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        login: {
          user: '',
          password: '',
          nickName: ''
        }
      }
    },
    components: {
      Group,
      XButton,
      XInput
    },
    computed: {
      user: {
        get () {
          return this.$store.state.login.user
        },
        set (value) {
          this.$store.commit('updateUser', value)
        }
      },
      password: {
        get () {
          return this.$store.state.login.password
        },
        set (value) {
          this.$store.commit('updatePassword', value)
        }
      }
    },
    methods: {
      getUser (value) {
        let end = value.indexOf('@')
        this.login.user = value
        this.login.nickName = value.substr(0, end)
        localStorage.setItem('user', value)
        localStorage.setItem('nickname', this.login.nickName)
      },
      getPassword (value) {
        this.login.password = value
        localStorage.setItem('password', value)
      },
      pushRouter () {
//        return '/user/' + this.login.nickName + '/team'
        this.$router.push('/user/' + this.login.nickName + '/team')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    .login-header {
      width: 750px;
      height: 440px;
      background: rgb(119, 194, 198);
      h1 {
        padding-top: 134px;
        text-align: center;
        color: #fff;
        font-size: 86px;
      }
    }
    .login-body {
      width: 750px;
      height: 894px;
      text-align: center;
      font-size: 22px;
      color: rgb(186,186,186);
      .btn-item {
        top: 212px;
        width: 630px;
        height: 100px;
        background: rgb(119, 194, 198);
      }
      .forget {
        position: relative;
        top: 242px;
        /*font-size: 22px;*/
        /*color: rgb(186,186,186);*/
      }
      .register {
        position: relative;
        top: 434px;
        span {
          color: rgb(119,194,198);
        }
      }
    }
    .login-content {
      position: absolute;
      top: 340px;
      width: 630px;
      left: 50%;
      margin-left: -315px;
      z-index: 3;
      input.weui-input {
        height: 98px;
      }
    }
  }

</style>
