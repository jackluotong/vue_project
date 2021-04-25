
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
          <a-button @click="copy()">拷贝</a-button>
          <a-button @click='sortFunc()'>排序</a-button>
          <a-button v-on='checkOutput()'>输出</a-button>
        </div>
        <!-- 父组件 -->
        <div>
          <div>父组件的toCity{{toCity}}</div>
          <train-city @showCityName='updateCity' :sendData='toCity'></train-city>
        </div>
      </a-card>
      <div >
        <p class='test'>1111111111111111111111111111111111122测试超出部分怎么实现省略号...</p>
        </div>
    </div>
  </div>

</template>
<script>
import  TrainCity from './March'
export default {
  name:'index', 
  components:{
    TrainCity,
  },
  data() {
    return {
      toCity:'shanghai',
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
        { name: '数组的去重排序？', answer: '去重:set,sort,includes,hasOwenProperty,filter,indexOf,递归,map;排序:冒泡，选择，快排，希尔，递归，插入，桶' }, 
        { name: '回流和重绘？', answer: '回流是当几何属性发生改变时产生的；重绘是当样式等外观发生改变时产生的' },
        { name: 'poistion的属性有哪几种？', answer: 'fixed,sticky,relative,absolute,static' },
        { name: 'canvas?', answer: '' },
        { name: '定义函数的方式？', answer: '函数声明，函数表达式' },
        { title: '01-08面试', name: ' ？', answer: '' },
        { name: 'let var const 的差距？', answer: '' },
        { name: '堆栈的差距？', answer: '' },
        { title: '01-12面试', name: ' vue-router的原理？', answer: 'hash：hashchange，history：pushState与replaceState ' },
        { name: 'vuex中同步和异步是怎么操作的？', answer: 'state getters mutations actions modules,mutations为同步 actions是异步' },
        { name: '描述你在项目中遇到的问题以及如何解决的？', answer: '' },
        { name: '封装一个组件以及函数要考虑到什么？', answer: '' },
        { name: 'localStorage,sessionStorage,cookie有什么区别？', answer: '' },
        { title: '01-12面试', name: ' http协议？', answer: '' },
        { name: 'tcp udp的区别？', answer: '' },
        { name: '跨域怎么处理？以及jsonp', answer: 'nginx，jsonp，cros，localstorage，sessionstorage，jsonp原理：利用src属性来实现跨域' },
        { name: 'react 和vue的区别？', answer: '' },
        { name: 'react中的virtual dom 以及diff？', answer: '' },
        { name: 'websocket？', answer: '双向协议，http只能是客户端发起，建立在tcp只上。不受同源策略限制，' },
        { title: '01-13面试', name: ' http协议？', answer: '' },
        { name: 'vuex和全局变量的差别？', answer: '' },
        { name: 'js中的编译是什么意思？', answer: '语法分析js引擎检查你的代码有没有什么低级的语法错误预编译预编译简单理解就是在内存中开辟一些空间，存放一些变量与函数遇到函数时 预编译什么时候发生?遇到函数的时候其实只有在执行函数的时候才会预编译那一部分解释执行执行代码' },
        { name: '强类型和若类型的语言差异？', answer: '强类型语言是需要提前声明数据类型弱类型不需要' },
        { title: '01-20叮咚买菜面试', name: ' jsonp的原理？', answer: '动态添加一个<script>标签，而script标签的src属性是没有跨域的限制的' },
        { name: '图片懒加载的原理？', answer: 'src属性决定是否加载照片=》可视区的判断：getBoundingClientRect()//获取元素大小以及位置' },
        { name: 'cors中后端需要配置什么？', answer: 'CORS背后的基本思想是使用自定义的HTTP头部允许浏览器和服务器相互了解对方，从而决定请求或响应成功与否.' },
        {name:'跨域问题？',answer:'jsonp,CORS,Nginx,window.postMessage,window.name,document.domain,后台配置解决跨域'},
        { name: '解构赋值中怎么取最后一个值？', answer: '' },
        { title: '01-20MicroFocus面试', name: ' button以及input中的button的区别？', answer: '在表单以外的地方使用<button>标签，表现为正常的按钮，可以用做事件触发器;在表单中使用<button>标签，但未指定type属性值，会像type值为submit的input控件一样完成表单提交动作;' },
        { name: '数组中的对象拿到值如何比较？', answer: '' },
        { title: '01.26面试', name: 'vue的双向绑定以及m怎么到v,v怎么到m', answer: '' },
        { name: '浏览器的缓存？', answer: '在客户端和服务端通讯的时候，浏览器第一次向服务器发起该请求后拿到请求结果，会根据响应报文中HTTP头的缓存标识，决定是否缓存结果，是则将请求结果和缓存标识存入浏览器缓存中' },
        { name: '浏览器的缓存中的etag？', answer: '' },
        { name: 'link,import区别？', answer: 'link的同时被加载，import的当前页面加载完毕时被加载' },
        { name: 'px em rem？', answer: '因此一般不用于响应式网站,' },
        { title: '01.28面试', name: '数据结构与算法？队列？广度优先算法', answer: '            ' },
        { name: '成千上万条数据怎么优化？', answer: '从数据上处理：分页分表，比如前端可以把数据分页展示，后端也分段吐数据从渲染上解决，异步渲染，比如进入页面先不渲染，然后加载好页面再渲染，局部渲染：只渲染目前可见区域的数据，再渲染次屏数据，还有性能瓶颈，可以考虑web worker 做压缩和解码，也可以考虑离屏canvas做预渲染，减少网络耗时：压缩数据，gzip等' },
        { name: '项目中遇到的难点以及怎么解决的？', answer: '' },
        { name: '二叉树分层次遍历？', answer: '' },
        { name: '虚拟dom？', answer: '' },
        { name: 'diff算法？', answer: '' },

        { title: '01.29合合面试', name: 'vue中的mixin？', answer: '' },
        { name: 'vue2为什么不能监听数组？是如何解决的？', answer: '出于性能的考虑，数据一般会被频繁的改动，每次的改动都需要遍历整个数组，给数组属性重新observe，这样会极大的消耗性能，因此在Vue2中hack了Array上的一些方法' },
        { name: 'vue3是如何监听数组的？', answer: 'Proxy来进行对象、数组的代理；只能对属性拦截，对象或数组监测时必须遍历，另一个是对对象本身的劫持' },
        { name: 'jsonp的原理？', answer: '' },
        { name: 'nginx反向代理原理？', answer: '' },
        { name: '跨域是发生在浏览器还是服务器？', answer: '浏览器' },
        { name: 'spa页面的优缺点？', answer: '优点:一次加载完成，不会因为用户的操作而进行页面的重新加载或跳转，前后端分离 减少开发效率。架构清晰，减轻服务器的压力；缺点：对SEO并不友好，可能出现首屏加载时间过长的问题，页面复杂度提高。复杂逻辑程度成倍。' },
        { name: 'nextick原理？', answer: '响应式并不是数据发生变化之后 DOM 立即变化，' },
        { name: 'h5新增的操作dom的api？', answer: '' },
        { name: 'computed和watch的区别？', answer: 'computed：支持缓存，只有依赖数据发生改变，才会重新进行计算，不支持异步，一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed，如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。watch：不支持缓存，数据变，直接会触发相应的操作，watch支持异步，监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值，' },
        { name: 'computed的缓存机制？', answer: '' },
        { name: '父子组件执行生命周期顺序？', answer: '父组件把子组件包括在里面' },
        { name: 'SPA和MPA的区别？', answer: '' },

        { title: '01.29哈罗出行面试', name: 'css中的position？以及其中的relative与absolute的区别', answer: '' },
        { name: 'css中的flex布局？', answer: '' },
        { name: 'new操作符做了什么？', answer: '' },
        { name: 'js事件循环机制？以及宏微任务执行顺序？', answer: '' },
        { name: 'promise原理？', answer: '' },
        { name: '数组的splice方法？', answer: '' },
        { name: '箭头函数的this指向？', answer: '' },
        { name: '普通函数的this指向？', answer: '' },
        { name: 'es6新特性？', answer: '' },
        { name: '行内元素和块级元素？', answer: '' },

      ],
      array: [1, [12, [23232, [2323]]], [12313], [54], [546], [687, [120]]],
      afterValue: '',
    }
  },
  methods: {
    updateCity(data){
      this.toCity=data.cityName
      alert('toCity',this.toCity)
    },
    /**
     * check the value of output
     */
    checkOutput: function () {
      var a = 1;
      function b() {
        a = 10;
        // return
        //  function c(){
        //    console.log(a);
        //  } 

      }
      var arrFunc = function () {
        //a json arrary
        let arrOne = [1, 2, 3, 4, 5, 6]
        let arrTwo = [
          { name: 'jack', age: 26 },
          { name: 'jerry', age: 27 },
          { name: 'william', age: 28 },
          { name: 'jacky', age: 29 },
        ]
        let newArray = arrTwo.find((item) => {
          if (item.age > 27) {
            return item;
          }
        })
        console.log(newArray);
        console.log(arrOne);
        for (let i = 0; i < arrTwo.length; i++) {
          let arrNew = []
          let j = 0
          if (arrTwo[i].age > 26) {
            arrNew[j++] = arrTwo[i]
          }
          console.log(arrNew);
        }
      }
      arrFunc()
      b()
      console.log(a);
    },
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
    copy: function () {
      /**
       * 实现浅拷贝的方法
       * slice assign concat ... 手写
       */
      let arr = [1, 2, 3]
      let newArr = arr;
      newArr[0] = 100;
      console.log(arr);
      //浅拷贝
      console.log('浅拷贝开始');
      let newArr1 = arr.slice()
      newArr1[0] = 101;
      console.log(arr);

      //有对象的嵌套，那么浅拷贝不能完成
      // console.log('浅拷贝中对象层次的拷贝');
      // let arr1=[1,2,{val:3}]
      // let newArr2=arr.slice()
      // newArr2[2].val=4
      // console.log(arr1);
      /**
       * 实现深拷贝的方法  json.parse(json.stringfy())
       */
      console.log('开始实现深拷贝');

    },
    sortFunc: function () {
      var staffs = [{ name: 'AA', age: 40 }, { name: 'BB', age: 50 }, { name: 'DD', age: 40 }, { name: 'CC', age: 40 }, { name: 'EE', age: 45 }];

      for (let i = 0; i < staffs.length; i++) {
        for (let j = 0; j < staffs.length - 1 - i; j++) {
          if (staffs[j].age > staffs[j + 1].age) {
            [staffs[j + 1], staffs[j]] = [staffs[j], staffs[j + 1]]
          }
        }
      }
      console.log(staffs);
      return staffs;
    }
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
.test{
 overflow: hidden;
 text-overflow:ellipsis;
 white-space: nowrap;
 width:120px;
}
</style>