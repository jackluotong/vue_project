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
      <p>全局前置首位</p>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.content {
  text-align: left;
}
</style>