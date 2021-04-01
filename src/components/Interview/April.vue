
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
        {name:'浏览器的缓存',answer:''},
        {name:'从url输入到页面呈现？',answer:''},
        {name:'从url输入到页面呈现？',answer:''},
        {name:'从url输入到页面呈现？',answer:''},
        {name:'从url输入到页面呈现？',answer:''},

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