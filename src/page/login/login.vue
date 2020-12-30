<template>
  <div class="box">
    <div class="login">
      <h3 class="center">登录</h3>
      <div class="center">
        <el-input placeholder="请输入内容" v-model="user" clearable></el-input>
      </div>
      <div class="center">
        <el-input
          placeholder="请输入密码"
          v-model="pass"
          clearable
          show-password
        ></el-input>
      </div>
      <div class="center">
        <el-button type="primary">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {
        user:'',
        pass:''
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {},
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, rgb(74, 41, 55), rgb(37, 51, 85));
}
.login {
  width: 430px;
  height: 260px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
}
.center{
    text-align: center;
    margin: 10px;
}

</style>