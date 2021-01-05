<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- js part -->
    <a-card
      title="2021-01-05 Interivew"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index,id) in interview"
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
  data(){
    return{
      interview:[
        {title:'01-05中安科技面试',name:'router中如果找不到当前路径怎么处理？',answer:''},
        {name:'http了解的怎么样？状态码？里面的方法？',answer:''},
        {name:'算法有那些了解？排序有哪些？快排怎么实现？',answer:''}

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
</style>