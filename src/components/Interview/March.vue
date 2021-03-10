
<template>
  <div style="background:#ECECEC; padding:20px;">
    <!-- interview part from march -->
    <a-card
      title="2021-03 Interivew"
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
        <!-- <img :src='img'/> -->
      </div>
    </a-card>

    <!-- cliclk function -->
    <a-card
      title="2021-03 Interivew"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <a-button
          type='primary'
          @click='promiseFun'
          class="btn"
        >promise test</a-button>
        <a-button
          type='primary'
          @click='promiseChain'
          class="btn"
        >promise chain use</a-button>
      </div>
    </a-card>
    <!-- photo and other -->
    <a-card
      title="2021-03 Interivew"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <img :src='img' />
      </div>
    </a-card>
  </div>

</template>
<script>

export default {
  data() {
    return {
      interview: [
        { title: '03.01(某内资)', name: '行内元素和块级元素？', answer: '行内元素有span,a,i,b无法设置padding margin/块级元素自成一行p,h,div,li' },
        { name: '伪类和伪元素的区别？', answer: '伪类是比如:after,:hover,逻辑上存在却无需标识/伪元素是虚拟的,比如first,逻辑上存在但是dom中不存在' },
        { name: 'vue中作用域slot', answer: '' },
        { name: 'vue中render是做什么的？', answer: '把virtual dom变为true dom' },
        { name: 'webpack中的loader和plugin的区别？/dependencies和devDependencies区别？', answer: '' },
        { name: 'vue双向绑定详解？m<=>v', answer: 'view=>model用事件监听;model=>view,observer(劫持并监听所有属性，如果有变动的，就通知订阅者。)+watcher(可以收到属性的变化通知并执行相应的函数，从而更新视图)+compile(可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。)' },
        { name: 'cros需要做那些配置？', answer: '服务端设置 Access-Control-Allow-Origin 就可以开启 CORS' },
        { name: 'promise原理以及all的时候需要传什么参数？', answer: 'promise使用回调函数，把回调函数封装在内部；all的时候把所有的promise放在数组中入参' },
        { name: '垂直水平居中的方式？', answer: '第一种父元素相对布局，子元素绝对布局+外边距，第二种flex布局，第三种父元素相对布局,子元素绝对布局+transform，第四种 表格' },
        { title: '03.02律商联讯(外资)', name: 'css样式优先级？', answer: '!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性' },
        { name: 'es5继承？', answer: 'prototype实现，组合/寄生/' },
        { name: 'js中的宏任务和微任务？', answer: 'marcotask——ui rendering i/o setTimeout setInterval  /microtask-promise process.nextTick' },
        { name: 'expert和expert default的区别？', answer: '' },
        { name: 'es6新特性？', answer: '' },
        { name: '数据库索引原理？索引加在哪里？sql怎么优化查询？', answer: '' },
        { title: '03.04美团面试', name: 'package-lock.json是做什么的？需要上传到git嘛？', answer: '是用来记录安装包的版本，需要上传' },
        { name: 'cdn和dns有什么区别？', answer: 'cdn:内容分发网络,让用户能够更快速的得到请求的数据/dns:将域名转换为ip地址' },
        { name: 'css垂直居中和水平垂直居中？', answer: '' },
        { name: '数组的降维？', answer: 'arr+= " "arr=arr.split(","),flat,递归,stack,reduce,concat' },
        { name: 'prototype怎么应用？', answer: '做一些继承,给对象里添加属性和方法' },
        { name: 'http常见状态码？1 2 3 4 5 ', answer: '1代表信息类；2代表成功类；3代表重定向类；4代表客户端错误；5代表服务端错误' },
        { name: '为什么要用node作为中间件？', answer: '1.在工程上的应用：统一了标准，引入了组件化、自动化；2.在服务端的应用：ssr,serverless，多端适配' },
        { name: 'Vue中的组件', answer: '组件注册，传值' },
        { name: '事件循环？', answer: '执行栈和事件队列' },
        { title: '03.09面试', name: '首屏渲染速度怎么加快？', answer: '' },
        { name: '算法排序？以及时间空间复杂度？', answer: '' },


      ],
      img: require('../../assets/mvvm.png')//做图片动态绑定的时候需要用require
    }
  },
  methods: {
    promiseFun: function () {
      let run = function () {
        let _promise = new Promise(function (resolve, reject) {
          setTimeout(() => {
            let rand = Math.random()
            if (rand > 0.5) {
              resolve('resolve' + rand)
            } else {
              reject('reject' + rand)
            }
          }, 1000);
        })
        return _promise
      }
      run()
    },
    promiseChain: function () {
      function run_a() {
        return new Promise(function (resolve,) {
          resolve('step1')
        })
      }
      function run_b(data_a) {
        return new Promise(function (resolve,) {
          console.log(data_a);
          resolve('step2')
        })
      }
      function run_c(data_b) {
        return new Promise(function (resolve,) {
          console.log(data_b);
          resolve('step3')
        })
      }
      //continue use it.
      run_a().then(function (data) {
        return run_b(data)
      }).then(function (data) {
        return run_c(data)
      }).then(function (data) {
        console.log(data);
      })
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