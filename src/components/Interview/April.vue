
<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- all arithmetic from 2021.04.01 -->
    <a-card
      title="Interview"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index,id) in april"
            :key='id'
            class="liClass"
          >
            {{item.index}}{{item.title}} <span>题目：</span> {{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      april:[
        {title:'04.01 X公司面试',name:'spa与mpa的差别？具体是什么？',answer:''},
        {name:'vue的单向数据流？',answer:''},
        {name:'从url输入到页面呈现？',answer:''},
        {name:'垂直居中？水平居中？',answer:''},
        {name:'promise的原理？',answer:''},
        {name:'事件流？',answer:''},
        {name:'浏览器的缓存',answer:'强缓存协商缓存'},
        {title:'04.06 X公司面试',name:'js的垃圾回收机制？',answer:''},
        {name:'什么场景下要规避闭包？',answer:'setTimeout 回调函数'},
        {name:'为什么const定义的对象可以改变？',answer:'如果是基本数据类型再次修改会报错,如果是object是引用类型的不变的是其指针,但是属性可以改变的'},
        {name:'垂直居中？水平居中？',answer:''},
        {name:'rem？rem原理？',answer:''},
        {name:'v-if v-show的使用场景？以及区别？',answer:''},
        {name:'微前端？',answer:''},
      ]
    }
  },
}
</script>
<style scoped>
.content {
	float: left;
}
.liClass {
	text-align: left;
}
button {
	margin-left: 4px;
}
.btn {
	vertical-align: center;
	margin: 0 auto;
}
</style>