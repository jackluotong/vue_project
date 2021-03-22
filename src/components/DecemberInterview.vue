<template>
  <div style="background:#ECECEC; padding:20px;">

    <!-- js part -->
    <a-card
      title="2020-12-03 Interivew|JsPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in jsPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
        <p><a href="https://blog.csdn.net/weixin_37580235/article/details/82317240#%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%92%8C%E5%AE%BD%E5%BA%A6%E7%9A%84%E5%85%83%E7%B4%A0"> block element/located in center</a></p>
      </div>
    </a-card>
    <!-- css part -->
    <a-card
      title="2020-12-07 Interivew|CssPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in cssPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>

      </div>
    </a-card>
    <!-- vue part -->
    <a-card
      title="2020-12-07 Interivew|VuePart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in vuePart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
      <p>父组件调用子组件的方法</p>
      <ForRouter ref="myChild"></ForRouter>
      <a-button @click="fatherToSon">父组件调用子组件的方法</a-button>
    </a-card>
    <!-- react part -->
    <a-card
      title="2020-12-21 Interivew|ReactPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in reactPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>
    <!-- protocol part -->
    <a-card
      title="2020-12-07 Interivew|TcpPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in TcpPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>
    <!-- http part -->
    <a-card
      title="2020-12-07 Interivew|HttpPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in HTTPPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>
    <!-- arithmetic part -->
    <a-card
      title="2020-12-07 Interivew|ArithmeticPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in arithmeticPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>
    <!-- webpack part -->
    <a-card
      title="2020-12-07 Interivew|WebpackPart"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ol>
          <li
            v-for="(item,index) in webpackPart"
            :key='index'
            class="liClass"
          >
            {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
      </div>
    </a-card>
    <a-button @click="testAxios">test axios</a-button>
    <div
    v-for='currency in axiosData'
    :key='currency.index'
    >
   {{currency.description}}
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </div>
  </div>
</template>
<script>
var arr = [[1, 2], [3, 4]];
var arrSet = [1, 12, 212, 1, 2, 2, 1, 1, 12, 21, 2122113, 1, null, undefined, null]
const nums = [12, 12, 122, 1, 11, 23, 232]
import ForRouter from './ForRouter'
export default {
  component: {
    ForRouter
  },

  data() {
    return {
      jsPart: [
        { name: "从输入URL到页面展示发生了什么？", answer: "拼接字符串-查找缓存-dns解析-tcp连接-服务器响应- https://juejin.cn/post/6869279683230629896" },
        { name: "12-03：es6中数组和对象新增的方法？", answer: "数组方法:map,set,reduce,filter,some,every,find,flat,;对象:对象简写,assign,super,属性名表达式" },
        { name: "12-03：深拷贝和浅拷贝？", answer: "浅拷贝就是对对象进行浅层次的复制，只复制一层对象的属性，并不包括对象里面的引用类型数据,实现方式:concat/assign(二级之前)/slice/.../;深拷贝是对对象以及对象的所有子对象进行拷贝，也就是说新拷贝对象的子对象里的属性也不会影响到原来的对象，实现方式:Json.parse,递归" },
        { name: "12-04: 值类型和引用类型的区别？", answer: "值类型的数据存储在栈中，函数运行完成后变量销毁，不能添加属性和方法，值的比较。|引用类型的存储在堆中，运行完不会销毁，有深浅复制，可添加属性和方法，引用地址的比较。" },
        { name: "12-04: 事件循环机制?(宏任务/微任务)", answer: "宏任务：script主代码，setTimeout,setInterval,I/O,UI渲染/微任务：promise.then" },
        { name: "12-04: 行内元素和块级元素的区别？", answer: "行内元素都在水平方向上排列/块级元素都在垂直方向排列，行内元素盒模型属性不同/行内(span,a,i,b)块级(p,h1,table,div,li)" },
        { name: "12-04: 跨域问题？为什么会有跨域问题？怎么解决？", answer: "因为浏览器的同源策略(协议域名端口相同)才会出现跨域问题/jsonp,cors,nginx反向代理接口跨域,node.js中间件代理跨域,location.hash+iframe,window.name+iframe,postMessage,WebSocket" },
        { name: "12-04: 浏览器兼容性问题？为什么？怎么办？", answer: "照片有间距，margin，padding等不统一；设置为0；因为浏览器内核解析代码的方式不同" },
        { name: "12-05：es6新特性中的map/set有用过嘛？", answer: "" },
        { name: "12-05：setTimeout与prommise谁先执行？(宏任务微任务)", answer: "promise先执行，因为是微任务，setTimeout是宏任务，在所有代码块执行完后执行微任务" },
        { name: "12-05：const 声明的值能不能改变？", answer: "值类型的存在栈stack中，引用类型的在堆heap中" },
        { name: 'MVVM的理解以及优缺点？', answer: '1' },
        { name: 'InstanceOf和typeOf的区别？', answer: '前者返回true/false，后者返回类型' },
        { name: 'cookie,localstorage,sessionstorage的区别？', answer: 'https://www.cnblogs.com/TigerZhang-home/p/8665348.html' },
        { name: '性能优化？', answer: 'html/css/js分开陈述' },
        { name: 'promise的出现？以及怎么使用？', answer: '处理异步请求状况，地狱回调函数而出现;三种状态(pending/resolved/rejected;);方法(race,then,all)' },
        { name: '浏览器缓存策略', answer: '缓存类型/缓存header/缓存过程' },
        { name: "this 的理解？", answer: "全局上下文默认this指向window,箭头函数中指向最近的非箭头函数，" },
        { name: "如何理解Bigint？", answer: "因为超过number表达是数字无法表示所以出现了bigint,在后面加n即可" },
        { name: "数据类型检测？", answer: "typeof除了null都可以,但是对于引用类型除函数都显示object;instanceOf返回true/false;prototype.toString.call" },
        { name: "闭包的理解？", answer: "当前环境中存在指向父级的作用域，适用场景：保护变量，协调异步代码" },
        { name: "原型链的理解？", answer: "向上查找_proto_" },
        { name: "js如何实现继承？", answer: "prototype+call/call/apply(参数是数组)/prototype" },
        { name: "对象/数组/方法/的浅拷贝？", answer: "assign/slice/concat" },
        { name: "vue3相比vue2做了哪些优化？", answer: "" },
        { name: 'vue-router的底层原理？', answer: '' },
        { name: 'webpack的用法以及底层原理？', answer: '' },
        { name: '封装一个方法你要考虑的要素？', answer: '' },
        { name: 'react 和react dom的作用？', answer: 'react:react的一些语法api;react-dom:把虚拟dom改变为真实dom' },
        { name: 'redux的使用？', answer: '' },
        { name: '手写promise？', answer: '' },
        { name: 'ts中常用的api？以及比js的优点？', answer: '' },
        { name: 'spa首页白屏怎么解决？', answer: '出现的原因：加载过多，网络延迟，文件体积过大' },
        { name: 'js 渲染十万条数据卡顿优化方法', answer: 'window.requestAnimationFrame(callback) /document.createdocumentfragment()' },
        { name: '设计模式有哪些？介绍一下工厂模式？', answer: '' },
        { name: '浏览器和服务器是怎么交互的？请求的时候返回什么？', answer: '' },
        { name: '性能优化？协议层？打包层？代码层？', answer: '' },
        { name: '原型和原型链的区别？各自在什么时候使用？', answer: '' },
        { name: '浏览器的缓存机制？', answer: '' },
        { name: 'js 渲染十万条数据卡顿优化方法', answer: 'window.requestAnimationFrame(callback) /document.createdocumentfragment()' },
        { name: '设计模式有哪些？介绍一下工厂模式？', answer: '' },
        { name: '浏览器和服务器是怎么交互的？请求的时候返回什么？', answer: '' },
        { name: '箭头函数的this指向哪里？对象？函数', answer: '' },
        { name: '怎么判断对象是否相等', answer: '' },
        { name: 'slice怎么用？', answer: '' },
        { name: '内存泄漏是什么？', answer: '用动态存储分配函数动态开辟的空间，在使用完毕后未释放，结果导致一直占据该内存单元。直到程序结束。(其实说白了就是该内存空间使用完毕之后未回收)即所谓内存泄漏。' },
        { name: '那些东西可以造成内存泄漏？怎么防止？', answer: '造成：意外的全局变量，被遗忘的计时器或者回调函数，脱离dom的引用，闭包，' },
        { name: 'seo怎么优化？', answer: '' },
        { name: '浏览器的缓存机制？etag是干嘛的？', answer: '缓存类型：强缓存，协商缓存；缓存位置：service worker，memory cahce，disk cache，push cache；' },
        { name: '浏览器的本地存储？', answer: '' },
        { name: 'settimeout为什么不是很精确的执行？', answer: '' },
        { name: '前端部署问题？', answer: '' }
      ],
      cssPart: [
        { name: "12-03：水平垂直居中？", answer: "absolute+-margin/transform;flex;grid;" },
        { name: "12-04: 回流和重绘？为什么？怎么办？", answer: "回流是元素的规模尺寸，布局，隐藏等改变而需要重新构建/重绘元素的外观，风格，而不会影响布局的" },
        { name: "12-05：行内元素和块级元素的区别？ ", answer: "给行内元素设置margin/padding无效果" },
        { name: "poistion有哪几种？效果和用法？", answer: "" },
        { name: "css选择器优先级？", answer: "!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性" },
        { name: '弹性布局？垂直居中？水平居中？' },
        { name: 'bfc?', answer: '' },
        { name: 'position中的各种布局？', answer: '' },
      ],
      vuePart: [
        { name: "12-05： $set？", answer: "为data中的某一个对象添加一个属性，this.$set(obj, key, value)" },
        { name: "12-05： 双向数据绑定的原理，怎么监听View层的变化？", answer: "" },
        { name: "对keep-alive的了解？", answer: "以使被包含的组件保留状态，或避免重新渲染," },
        { name: "路由/照片懒加载", answer: "" },
        { name: "$nextTick?原理？", answer: "功能：更新数据后让回调函数作用于更新后的DOM ；结合js的运行机制+能力检测+根据能力检测以不同方式执行回调队列+执行回调队列" },
        { name: "vue模板编译原理？", answer: "生成ast树->优化->codegen" },
        { name: "vue中的diff算法？", answer: "根据key来做检查，渲染那些改变的，" },
        { name: '虚拟dom以及key属性的作用？', answer: '' },
        { name: 'ssr了解嘛？', answer: '' },
        { name: 'vue中的性能优化？', answer: '' },
        { name: 'router和route的区别？', answer: 'router:router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，/route:相当于当前正在跳转的路由对象。。可以从里面获取name,path,params,query' },
        { name: 'vue-cli的源码理解？', answer: '' },
        { name: 'vue中定义一个过滤器', answer: '' },
        { name: 'vue中父子组件的方法互相调用？', answer: '父调用子：this.$refs;子调用父：this.$parent' },
        { name: 'vue3.0的原理？', answer: '' },
        { name: '监听对象和监听数组有什么区别？', answer: '' },
        { name: 'v-if和v-show的区别？', answer: 'v-if条件渲染来决定，可以在template中使用，性能损耗高，显示隐藏是把dom元素整个的添加或删除' },
        { name: '父子组件钩子执行顺序？', answer: '组件的调用顺序都是先父后子,渲染完成的顺序是先子后父,组件的销毁操作是先父后子,销毁完成的顺序是先子后父' },
        { name: 'hash 和 history路由实现原理？', answer: 'location.hash / history.pushState()和history.replaceState()' },
        { name: '', answer: '' }
      ],
      reactPart: [
        { name: "react 如何避免重复渲染？", answer: "" },
        { name: "如何理解react虚拟dom？", answer: "" },
        { name: "react如何实现数据的双向绑定？", answer: "" },
        { name: "props,state", answer: "" },
      ],
      TcpPart: [
        { name: "TCP 和 UDP 的区别", answer: "" },
        { name: "TCP 的三次握手和四次挥手", answer: "" },
        { name: '浏览器和服务器交互原理？', answer: '' },
        { name: 'Tcp报文头部的字段？', answer: '' },
        { name: '浏览器和服务器交互原理？', answer: '' },

      ],
      HTTPPart: [
        { name: "http请求的方法？", answer: "GET, POST 和 HEAD,OPTIONS, PUT, DELETE, TRACE 和 CONNECT" },
        { name: 'uri和url的区别？', answer: 'url是uri的子集' },
        { name: '如何理解http状态码？', answer: '1 变更；2 状态成功；3 永久重定向；4 错误；5 错误' },
        { name: 'http的特点？缺点？', answer: '' },//我也不知道是对还是错要学会去爱也要学会去治愈自己在受伤中成长及时止损;
        { name: '如何处理表单中提交的数据？', answer: '' },
        { name: 'http缓存以及缓存代理？', answer: '' },
        { name: '什么是跨域？浏览器如何响应拦截？如何解决？', answer: 'scheme host post都相同则为同源；解决方法：cors jsonp nginx ' },
      ],
      arithmeticPart: [
        { name: "算法排序有哪些？时间复杂度以及空间复杂度？", answer: "" },
        { name: "二叉树？图？最短路径？", answer: "" },
        { name: "判断链表是否有环？环的入口？节点个数？", answer: "" },
      ],
      webpackPart: [
        { name: '核心概念？', answer: 'entry,output,loader,plugins' },
        { name: 'webpack中的haah是做什么的？', answer: '' }
      ],
      interviewThinking: [
        { name: '2020-12-23 陆家嘴富汇大厦(轮胎公司)', answer: '个人发展最重要自己优秀才是王道，坚持，坚持。' }
      ],
      axiosData:null,
      loading:true,
    }
  },
  computed:{

  },
  watch:{

  },
  filters:{
  currencydecimal(value){
  return value.toFixed(2)
}
  },
  mounted() {
    var str = " ad da ad   "
    console.log(arr);
    console.log(this.lowerDimension(arr));
    console.log(this.clearSpace(str));
    this.closeBag();
    console.log([...new Set(arrSet)]);

    function takeOut(arr) {
      let res = arr.filter((item, index) => {
        return arr.indexOf(item) === index
      })
      console.log(res);

    }
    takeOut(arrSet);
    console.log(this.checkType(122));
    const p1 = {
      name: 'jackluo',
      age: 27
    };
    const p2 = this.test(p1);
    console.log('-------out p1 and p2-------');
    console.log(p2);
    console.log(p1);
    // window.requestAnimationFrame
    Promise.resolve().then(() => {
      console.log('promise.then');//2
      setTimeout(() => {
        console.log('setTimeout'); //5
      });
    })
    setTimeout(() => {
      console.log('setTimeout1');//3
      Promise.resolve().then(() => {
        console.log('promise.then1');//4
      })
      console.log(this, '--------------');
    })
    console.log('start');//1 宏任务执行完毕执行微任务
    this.protoFun();
  },
  created() {
    console.log(this.checkType('122'));
    let name = localStorage.key(1);
    let value = localStorage.getItem(name);
    console.log(value);
    this.filterFun();
    this.mapFun();
    this.reduceFun();
    this.allFun();
    this.constructionFun()
  },
  methods: {
    /**
     * array lower dimension
     */
    lowerDimension: function (obj) {
      return Array.prototype.concat.apply([], obj);
    },
    /**
     * test ajax visit local json file
     */
    testAxios: function () {
      this.$axios({
        method:'get',
        url:'https://api.coindesk.com/v1/bpi/currentprice.json',
        data:''//给后端传数据
      })
      .then((response)=>{
        this.axiosData= response.data.bpi//拿到的值去做处理
        console.log(this.axiosData,'axiosData');
      })
      .catch((err) => {
        this.$message({
          type: 'error',
          message: err,
        })
      })
      .finally(()=>{
        this.loading=false
        this.$message({
          type:'right',
          message:'request was overed.'
        })
        })

      /**
       * get and post
       * get  请求可缓存 有长度限制 不应该在处理敏感数据 请求被保存在历史记录中 数据在url中可见
       * post 不能被缓存 数据不会保存在历史记录中 无限制 也允许二进制 比较安全 数据不在url中
       */
      
      // this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json') 
      // .then(response => {
      //     this.axiosData= response.data.bpi
      //     console.log(this.axiosData,'axiosData');
      // })
      // .catch(err => {
      //   this.$message({
      //     type: 'error',
      //     message: err,
      //   })
      //   .finally(()=>{this.loading=false})
      
    },
    /**
     * clear the space of string before and after
     */
    clearSpace: function (str) {
      if (str & typeof str === "string") {
        return str.replace(/(^s*)|(s*)$/g, "");
      } else {
        this.$message({
          type: 'error',
          message: 'type error',
        })
      }
    },
    /**
     * close bag
     */
    closeBag: function () {
      for (let j = 0; j <= 10; j++) {
        (function (i) {
          setTimeout(() => {
            console.log(i);
          }, 1000)
        })(j)
      }
    },
    /**
     * check type of the data
     */
    checkType: function (params) {
      return Object.prototype.toString.call(params)
    },
    /**
     * 深拷贝和浅拷贝
     */

    /**
     * filter filter the data from your condition
     */
    filterFun: function () {
      let newNums = nums.filter(n => {
        return n < 12;
      });
      console.log(newNums);
    },
    /**
     * map
     */
    mapFun: function () {
      let newNums = nums.map(n => {
        return n * 10;
      })
      console.log(newNums);
    },
    /**
     * reduce
     */
    reduceFun: function () {
      let newNums = nums.reduce((preValue, n) => {
        return preValue + n;
      }, 0)
      console.log(newNums);
    },
    /**
     * all reduce+fliter+map
     */
    allFun: function () {
      let all = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
      console.log(all);
    },
    /**
     * construction evaluation
     */
    constructionFun: function () {
      const point = [12, 234, 2]
      const [x, y, z] = point
      console.log(x, y, z);

      /**
       * for of 
       */
      for (const num of nums) {
        console.log('for of +' + num);
      }
      /**
       * includes 
       * setTimeout(function(),timer)
       */
      if (nums.includes(1223)) {
        console.log('includes 1223');
      } else {
        setTimeout(() => {
          this.$message({
            type: 'default',
            message: 'not include.'
          })
        }, 1000)
      }
      clearTimeout()
    },
    /**
     * hack stack 
     */
    hackFun: function () {

    },
    /**
     * stack heap run 
     */
    test: function (person) {
      person.age = 26;
      person = {
        name: 'williamluo',
        age: 18,
      }
      return person;
    },
    /**
     * array api
     */
    arrFun: function () {

    },
    /**
     * father component use son function
     */
    fatherToSon: function () {
      this.$refs.myChild.parentClick('heheh')
    },
    /**
     * prototype
     */
    protoFun: function () {
      const double = number => number * 2;
      setTimeout(() => {
        console.log(double(12));
      }, 1000)

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

</style>