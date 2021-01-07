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
  data() {
    return {
      interview: [
        { title: '01-05中安科技面试', name: 'router中如果找不到当前路径怎么处理？', answer: '' },
        { name: 'http了解的怎么样？状态码？里面的方法？', answer: '' },
        { name: '算法有那些了解？排序有哪些？快排怎么实现？', answer: '' },
        { title: '01-05外滩soho面试', name: '性能优化怎么做？', answer: '' },
        { name: '防抖节流？', answer: '' },
        { name: 'vue组件封装', answer: '' },
        { name: '项目详细描述', answer: '' },
        { title: '01-06九亭欸福特面试', name: ' ？', answer: '' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        { name: 'mvvm？', answer: '' },
        { name: '输入url到显示？', answer: '' },
        { name: '回流和重绘？', answer: '' },
        { name: '$.this 和$(this)的区别？', answer: '' },
        { title: '01-06花旗外包面试', name: ' ？', answer: '' }, 
        { name: '文档流？', answer: '' },
        { name: '数组的去重排序？', answer: '去重:set,sort,includes,hasOwenProperty,filter,indexOf,递归,map;排序:冒泡，选择，快排，希尔，递归，插入，桶' },        { name: 'poistion的属性有哪几种？', answer: '' },
        { name: '回流和重绘？', answer: '回流是当几何属性发生改变时产生的；重绘是当样式等外观发生改变时产生的' },
        { name: 'poistion的属性有哪几种？', answer: 'fixed,sticky,relative,absolute,static' },
        { name: 'canvas?',answer:''},
        { name: '定义函数的方式？',answer:'函数声明，函数表达式'},
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