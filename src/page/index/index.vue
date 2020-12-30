<template>
  <div >
    <el-container class="wrap">
      <!-- 侧导航 -->
      <el-aside width="200px" class="left">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="rgb(21,23,31)"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened router
          >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页&emsp;&emsp;</span>
            </el-menu-item>
            <el-submenu index="88">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/menu">菜单管理</el-menu-item>
                <el-menu-item index="/role">角色管理</el-menu-item>
                <el-menu-item index="/manage">管理员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="89">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商城管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/cate">商品分类</el-menu-item>
                <el-menu-item index="/specs">商品规格</el-menu-item>
                <el-menu-item index="/goods">商品管理</el-menu-item>
                <el-menu-item index="/member">会员管理</el-menu-item>
                <el-menu-item index="/banner">轮播图管理</el-menu-item>
                <el-menu-item index="/seckill">秒杀活动</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      

      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <!-- 设置面包屑 -->
             <el-breadcrumb separator-class="el-icon-arrow-right" class="marginBottom">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
             </el-breadcrumb>
             <!-- 二级路由出口 -->
             <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {};
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.wrap {
  width: 100vw;
  height: 100vh;
}
.left {
  background: rgb(21, 23, 31);
}
.marginBottom{
    margin-bottom: 10px;
}
</style>