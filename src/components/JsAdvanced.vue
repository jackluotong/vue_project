<template>
  <div style="background:#ECECEC; padding:20px;">
    <a-card
      title="手写常见的API | 上部分"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <div class="partOne">
          <h4 class="textP">手写instanceOf </h4>
        </div>
        <div class="partTwo">
          <a-input
            class="input"
            placeholder="请输入数据"
            v-model="checkData"
            ref="inputVlue"
          />
        </div>
        <div>
          <a-button
            type="primary"
            @click="showDrawer"
          >
            check
          </a-button>
          <a-drawer
            title="Basic Drawer"
            placement="right"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
          >
            <p ref="showText">{{message}}</p>
            <p ref="showTextOne">old</p>
           </a-drawer>
        </div>
      </div>
    </a-card>
    <a-card
     title="手写常见的数组API | 上部分"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div>
        <h4>手写map</h4>
      </div>
    </a-card>
    </div>
</template>
<script>
let obj = {
  a: function() {
    console.log(this);
  }
}
let func = obj.a;
export default {
  data() {
    return {
      visible: false,
      checkData: '',
      message:'12'
    }
  },
  mounted() {
    console.log(this.myInstanceOf('1111', String));
    console.log(this.myInstanceOf(new String("111"), String));
    this.forEachFun()
    this.judgeIncluded()
    this.arrFun()
    let array1=[1,2,[12,2112,1213],[12,[121,[1212]]]]
    console.log(this.redFun(array1),'====reduce====');
    while(array1.some(Array.isArray)){
      array1=[].concat(...array1)
    }
    func();
    /**
     * nextTick 原理
     * 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
     */ 
    this.$nextTick(() => {//using this function after changed data

    })
    /**
     * == 和 ===?
     * === 不仅值要相等数据类型也要相等；
     */
    console.log(1=='1','------==------');
    console.log(1==='1','------===-------');
  },
  watch: {},
  methods: {
    
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      /**
       * $refs获取当前元素的ref,然后使用innerText来改变值
       * 或者使用{{value}}，用this.value来改变值，配合v-modle使用
       */
       
      this.visible = true;
      //get value
      let value = this.checkData;
      this.message=value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      this.myInstanceOf(this.message, typeof (this.message)); 
      if(navigator.onLine){
        console.log('online');
      }
    },
    onClose() {
      this.visible = false;
    },
    /**
     * instanceOf 
     */
    myInstanceOf: function (left, right) {
      if (typeof left !== 'object' || left == null) return false;
      let proto = Object.getPrototypeOf(left);
      if (proto == null) return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      if (proto == right.prototype) return true;
      proto = Object.getPrototypeOf(proto)
    },
    /**
     * 原型链
     * 每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。
     * 当函数经过new调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个__proto__属性，指向构造函数的原型对象。
     * 原型链
     * JavaScript对象通过__proto__ 指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条, 即原型链。
     */

    /**
     * js如何实现继承？
     * call 原型链 extends 
     */
  
    // Parent1:function(){
    //   this.name='parent1'
    // },
    // Child1:function(){
    //   this.Parent1.call(this);
    //   this.type='Child1'
    // },

    /**
     * forEach中return是无效的
     */
    forEachFun:function(){
      let nums=[12,312,1]
      nums.forEach((item,index)=>{
        console.log(item,index);
      })
    },
    /**
     * js判断数组中是否包含某个值
     * indexOf includes find  findIndex
     */
    judgeIncluded:function(){
      var arr=[12,121,232]
     if(arr.includes(1211)){
       console.log('包括');
     }else{
       console.log('不包括');
     }
     console.log(arr.indexOf(2)); 
    },
    /**
     *数组扁平化，降为数组
     flat replace+split
     */
    arrFun:function(){
      let arr=[1,2,[12,2112,1213],[12,[121,[1212]]]]
      let str=JSON.stringify(arr)
      arr=arr.flat(Infinity)
      console.log(arr);

      let arr1=str.replace(/(\[\])/g,'').split(',')
      console.log(arr1);
    },
    /**
     * reduce
     * 
     */
    redFun:function(array){
      return array.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?this.redFun(cur):cur);
      },[])

    },

    /**
     * 数组中的高阶函数 map reduce filter sort
     */
   
   /**
    * 实现new效果
    */
   newOperator:function(ctor,...args){
     if(typeof ctor !=='function'){
       throw 'newOperator function the first param must be a function';
     }
     let obj=Object.create(ctor.prototype);                                                                                                                                                                                                                                                                                                                                                
     let res=ctor.apply(obj,args);
     let isObject=typeof res === 'object'&&res!==null;
     let isFunction=typeof res==='function';
     return isObject||isFunction?res:obj;
   },
   /**
    * 浅拷贝
    * 手动实现，assign，concat，slice，展开运算符，
    */

   /**
    * 深拷贝
    * Json.parse(JSON.stringfy())
    */
   
   /**
    * js 内存机制 -数据是如何存储的？
    * boolean null undefined number string symbol bigint 存储在栈中
    * 闭包变量是存在堆内存中的。
    * 引用类型的数据存储在堆中
    */

   /**
    * V8 引擎如何进行垃圾内存的回收？
    * 
    */

   /**
    * 如何理解EventLoop——宏任务和微任务
    * macroTask:渲染事件，用户交互事件，js脚本执行，网络请求 setTimeout/interval
    * microTask:MutationObserver、Promise.then(或.reject) 以及以 Promise
    *  为基础开发的其他技术(比如fetch API), 还包括 V8 的垃圾回收过程
    * 
    */

   /**
    * 如何理解EventLoop——node.js
    * 
    */
   /**
    * JS异步编程有哪些方案？为什么会出现这些方案？
    */
  }
}
</script>
<style scoped>
.partTwo,
.partOne {
  display: inline-block;
  padding-left: 10mm;
}

</style>