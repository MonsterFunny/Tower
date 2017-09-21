<template>
  <div class="login">
    <header class="login-header">
      <h1>tower</h1>
    </header>
    <div class="login-body">
      <input type="button" value="登录">
      <p></p>
    </div>
<!--
    <Form :model="formItem" :rules="formRule" ref="form" class="login-content">
      <FormItem prop="user">
        <Input type="text" v-model="formItem.user" placeholder="邮箱"></Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formItem.password" placeholder="密码"></Input>
      </FormItem>
    </Form>
-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
/*
        formItem: {
          user: '',
          password: ''
        },
        formRule: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
*/
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
    }
    .login-content {
      position: absolute;
      top: 350px;
      width: 630px;
      left: 50%;
      margin-left: -315px;
      /*background: #000;*/
      z-index: 3;
    }
  }
</style>
