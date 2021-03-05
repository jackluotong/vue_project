<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <!-- <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu> -->
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />Vue</span>
            <a-menu-item key="1" @click="vueClick">
             Fundamental
            </a-menu-item>
            <a-menu-item key="2" @click="vueRouterClick">
              VueRouter
            </a-menu-item>
            <a-menu-item key="3" @click="vuexClick">
             Vuex
            </a-menu-item>
            <!-- <a-menu-item key="4">
              option4
            </a-menu-item> -->
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />JavaScript</span>
            <a-menu-item key="5" @click="jsFundamental">
               Fundamental
            </a-menu-item>
            <a-menu-item key="6" @click="$router.push({name:'JsAdvanced'})">
             Advanced
            </a-menu-item>
            <!-- <a-menu-item key="7">
              option7
            </a-menu-item>
            <a-menu-item key="8">
              option8
            </a-menu-item> -->
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" /> ReactSeries</span>
            <a-menu-item key="9">
             React
            </a-menu-item>
            <a-menu-item key="10">
             ReactNative
            </a-menu-item>     
          </a-sub-menu>
         
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="notification" />Interview</span>
            <a-menu-item key="20" @click="$router.push({name:'DecemberInterview'})">
            December
            </a-menu-item>
             <a-menu-item key="21" @click="$router.push({name:'January'})">
             January
            </a-menu-item> 
             <a-menu-item key="22" @click="$router.push({name:'March'})">
             March
            </a-menu-item> 
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
        面试知识总结 
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
  
export default {
    components:{
       
    },
    name:'InterviewVue',
    data() {
    return {
        collapsed: false,
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
    $route(to,from){
        console.log(to,from);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
    vueClick(){
      this.$router.push({
        name:'ForVue',
        query:{
          id:this.id,
         }
      }) 
    },
   vueRouterClick:function(){
    //  this.$router.go(3)
     this.$router.push({
       path:'/forRouter',
     })
    },
    vuexClick:function(){
      this.$router.push({
        name:'ForVuex',
      })
    },
    jsFundamental:function(){
      this.$router.push({
        name:'JsFundamental',
      })
    },
    jsAdvanced:function(){
      this.$router.push({
        name:'JsAdvanced',
      })
      for(var i=0;i<3;i++){
        setTimeout(() => {
          console.log(i);
        }, 10);
      }
    },
   
    desperate:function(){
      alert('Desperate?')
    },
  },
}
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>