
<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- interview part from march -->
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
        { title: '03.01(某内资)', name: '行内元素和块级元素？', answer: '' },
        { name: '伪类和伪元素的区别？', answer: '' },
        { name: 'vue中作用域slot', answer: '' },
        { name: 'vue中render是做什么的？', answer: '' },
        { name: 'webpack中的loader和plugin的区别？/dependencies和devDependencies区别？', answer: '' },
        { name: 'vue中render是做什么的？', answer: '' },
        { name: 'vue双向绑定详解？m<=>v', answer: '' },
        { name: 'cros需要做那些配置？', answer: '' },
        { name: 'promise原理以及all的时候需要传什么参数？', answer: '' },
        { name: '垂直水平居中的方式？', answer: '' },
        { title: '03.02律商联讯(外资)', name: 'css样式优先级？', answer: '' },
        { name: 'es5继承？', answer: '' },
        { name: 'js中的宏任务和微任务？', answer: '' },
        { name: 'expert和expert default的区别？', answer: '' },
        { name: 'es6新特性？', answer: '' },
        { name: '数据库索引原理？索引加在哪里？sql怎么优化查询？', answer: '' },
        { title: '03.04美团面试', name: 'package-lock.json是做什么的？需要上传到git嘛？', answer: '' },
        { name: 'cdn和dns有什么区别？', answer: '' },
        { name: 'css垂直居中和水平垂直居中？', answer: '' },
        { name: '数组的降维？', answer: '' },
        { name: 'prototype怎么应用？', answer: '' },
        { name: 'http常见状态码？1 2 3 4 5 ', answer: '' },
        { name: '为什么要用node作为中间件？', answer: '' },
        { name: 'Vue中组件的', answer: '' },
        { name: '事件循环？', answer: '' },

      ],
    }
  },
  methods: {
    testFun: {
      //       (async function () {
      //   console.log('start')
      //   await sleep(10000);
      //   console.log(new Date());
      // })(); 

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
</style>