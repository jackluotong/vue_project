<template>
  <div style="background:#ECECEC; padding:20px;">
    <a-card
     title="VueRouter |基础"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content">
         <p>嵌套路由</p>
        <p>编程式的导航</p>
        <p><a href="https://www.jianshu.com/p/758bde4d9c2e">router和route的区别？</a> </p>
      </div>
    </a-card>

     <a-card
     title="VueRouter |进阶"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content">
      <p>导航守卫</p>
      <p>全局前置首位
         router.beforeEach((to, from, next) => {
      // ...
      })</p>
      <p>导航守卫分为：组件内，全局的，单个路由独享。</p>
      <p>路由元信息。</p>
      <p>数据获取。</p>
      <p>路由懒加载。</p>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  methods:{
    parentClick:function(e){
      console.log('====================================');
      console.log(e);
      console.log('====================================');
    }
  }
}
</script>
<style scoped>
.content {
  text-align: left;
}
</style>