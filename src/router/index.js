import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = () => import('../page/login/login');
const index = () => import('../page/index/index');
const menu = () => import('../page/menu/menu');

export const indexRouter = [
  {
    path:'menu',
    name:'菜单管理',
    component:()=>import('../page/menu/menu')
  },{
    path:'role',
    name:'角色管理',
    component:()=>import('../page/role/role')
  },{
    path:'manage',
    name:'管理员管理',
    component:()=>import('../page/manage/manage')
  },{
    path:'cate',
    name:'商品分类',
    component:()=>import('../page/cate/cate')
  },{
    path:'specs',
    name:'商品规格',
    component:()=>import('../page/specs/specs')
  },{
    path:'goods',
    name:'商品管理',
    component:()=>import('../page/goods/goods')
  },{
    path:'member',
    name:'会员管理',
    component:()=>import('../page/member/member')
  },{
    path:'banner',
    name:'轮播图管理',
    component:()=>import('../page/banner/banner')
  },{
    path:'seckill',
    name:'秒杀活动',
    component: () => import("../page/seckill/seckill")
  }
]

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: index,
      children:[
        {
          path:'',
          component:()=>import('../page/home/home')
        },
        ...indexRouter
      ]
    }
  ]
})
