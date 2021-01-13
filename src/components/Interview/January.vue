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

    <!-- js part -->
    <div style="paddingTop:10px">
      <a-card
        title="2021-01-05 Interivew"
        :bordered="false"
        style="width:98%;margin:0 auto;paddingTop:10px"
      >
        <div style="float:left;">
          <a-button @click='insertSortTest()'>插入排序</a-button>
          <a-button @click='insertSortTest()'>冒泡排序</a-button>
          <p>{{array}}</p>
          <p>{{afterValue}}</p>
          <a-button @click='flat()'>flat</a-button>
          <a-button @click='deleteIt()'>数组超过两次的去重</a-button>
          <a-button @click='chained()'>链式调用</a-button>
          <a-button @click='bird()'>Bird</a-button>
        </div>
      </a-card>
    </div>
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
        { name: '数组的去重排序？', answer: '去重:set,sort,includes,hasOwenProperty,filter,indexOf,递归,map;排序:冒泡，选择，快排，希尔，递归，插入，桶' }, { name: 'poistion的属性有哪几种？', answer: '' },
        { name: '回流和重绘？', answer: '回流是当几何属性发生改变时产生的；重绘是当样式等外观发生改变时产生的' },
        { name: 'poistion的属性有哪几种？', answer: 'fixed,sticky,relative,absolute,static' },
        { name: 'canvas?', answer: '' },
        { name: '定义函数的方式？', answer: '函数声明，函数表达式' },
        { title: '01-08面试', name: ' ？', answer: '' },
        { name: 'let var const 的差距？', answer: '' },
        { name: '堆栈的差距？', answer: '' },
        { title: '01-12面试', name: ' vue-router的原理？', answer: '' },
        { name: 'vuex中同步和异步是怎么操作的？', answer: '' },
        { name: '描述你在项目中遇到的问题以及如何解决的？', answer: '' },
        { name: '封装一个组件以及函数要考虑到什么？', answer: '' },
        { name: 'localStorage,sessionStorage,cookie有什么区别？', answer: '' },
        { title: '01-12面试', name: ' http协议？', answer: '' },
        { name: 'tcp udp的区别？', answer: '' },
        { name: '跨域怎么处理？以及jsonp', answer: 'nginx，jsonp，cros，localstorage，sessionstorage，jsonp原理：利用src属性来实现跨域' },
        { name: 'react 和vue的区别？', answer: '' },
        { name: 'react中的virtual dom 以及diff？', answer: '' },
        { name: 'websocket？', answer: '双向协议，http只能是客户端给服务端，服务器向客户端，建立在tcp只上，不受同源策略限制，' },
        { title: '01-13面试', name: ' http协议？', answer: '' },
        { name: 'vuex和全局变量的差别？', answer: '' },
        { name: 'js中的编译是什么意思？', answer: '' },
        { name: '强类型和若类型的语言差异？', answer: '' },
        { name: 'vuex和全局变量的差别？', answer: '' },
        { name: 'vuex和全局变量的差别？', answer: '' },

      ],
      array: [1, [12, [23232, [2323]]], [12313], [54], [546], [687, [120]]],
      afterValue: '',

    }
  },
  methods: {
    insertSortTest: function () {
      let array = [1, 0, 12, 122, 1231, 3123213213, 8]
      let a = this.insertSort(array)
      console.log(a.toString());//数组转换为字符串的方法：toString,join,
      console.log(a.join(','));//split
    },
    /**
     * 算法排序类
     * 冒泡排序 O(n2)
     */
    bubbling: function (array) {
      const { length } = array;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]]
          }
        }
      }
      return array;
    },
    /**
     * 选择排序 O(n2)
     */
    selectionSort: function (array) {
      const { length } = array;
      let indexMin;
      for (let i = 0; i < length; i++) {
        indexMin = 1;
        for (let j = i; j < length; j++) {
          if (array[indexMin] > array[j]) indexMin = j;
        }
        if (i != indexMin) {
          [array[indexMin], array[i]] = [array[i], array[indexMin]]
        }
      }
      return array;
    },
    /**
     * 插入排序
     */
    insertSort: function (array) {
      const { length } = array
      let temp;
      for (let i = 0; i < length; i++) {
        let j = i;
        temp = array[i]
        while (j > 0 && array[j - 1] > temp) {
          array[j] = array[j - 1];
          j--;
        }
        array[j] = temp;
      }
      return array;
    },
    /**
    * 归并排序
    */

    /**
    * 计数排序
    */

    /**
    * 桶排序
    */

    /**
    * 基数排序
    */
    flat: function () {
      let str = JSON.stringify(this.array)
      this.afterValue = str;
    },
    deleteIt: function (array) {
      let _array = []
      let __array = []
      // let array = [1, 11, 11, 1, 1, 22, 22, 222, 22, 3, 3, 4, 3]
      debugger
      if (Array.isArray(array)) {
        array.forEach((item, index) => {
          if (_array.indexOf(item) === -1) {
            _array.push(item)
          } else {
            if (__array.indexOf(item) === -1) {
              __array.push(item)
            } else {
              array.splice(index, 1)
            }
          }
        });
        console.log(array);
      } else {
        alert('not array')
      }
    },
    chained: function () {
      function chained1(str) {
        console.log('Hello,I`m' + str);
      }
      chained1('jack');
      chained1.prototype.eat = function () {
        alert('eat')
        return this;
      }
      chained1.prototype.sleep = function () {
        setTimeout(() => {
          alert('sleep')
        }, 1000);
        return this;
      }
      let fun = new chained1()
      fun.eat().sleep()
    },
    deleteIt1: function () {
      debugger;
      let array = [1, 11, 11, 1, 1, 22, 22, 222, 22, 3, 3, 4, 3]
      this.deleteIt(array)
    },
    bird: function () {
      function Bird(name) {
        this.name = name;
        this.run = function () {
          console.log('${name},run');
          return this;
        }
        this.eat = function () {
          console.log('${name},eat');
          return this;
        }
      }
      let bird = new Bird('jack')
      bird.run().eat()
    },

  }
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