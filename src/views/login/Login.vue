<template>
  <div class="login-box">
    <br />
    <br />
    <input type="text" placeholder="用户名" v-model="username" />
    <br />
    <br />
    <input type="text" placeholder="密码" v-model="password" />
    <br />
    <br />
    <button @click="getLogin">登陆</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    getLogin() {
      this.$axios
        .get("/getLogin", {
          params: { username: this.username, password: this.password }
        })
        .then(res => {
          if (res.data.code === 0) {
            window.localStorage.token = res.data.token;
            window.location.href = "/home";
          } else {
            alert(res.data.msg);
          }
        });
    }
  }
};
</script>

<style lang="scss">
.login-box {
  width: 100%;
  height: 100%;
  input {
    width: 70%;
    height: 35px;
    margin-left: 15%;
  }
}
</style>