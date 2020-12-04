<template>
   <div style="background:#ECECEC; padding:20px;">
    <a-card
     title="2020-12-02 Interivew|无锡"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in topic1202" :key='index' class="liClass">
           {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
        <a-button @click="testAxios">test axios</a-button>
      </div>
      </a-card>
       <a-card
     title="2020-12-03 Interivew|Begin"
      :bordered="false"
      style="width:98%;margin:0 auto">  
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in another" :key='index' class="liClass">
           {{item.index}}{{item.name}}<br>答案：<span style="color:blue">{{item.answer}}. </span>
          </li>
        </ol>
       
      </div>
      </a-card>
       <a-card
     title="HTML/CSS Operate"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content"> 
           <div class="centerVerticalHorizontal">
              <p><a href="https://blog.csdn.net/weixin_37580235/article/details/82317240#%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%92%8C%E5%AE%BD%E5%BA%A6%E7%9A%84%E5%85%83%E7%B4%A0"> block element/located in center</a></p>
          </div>
      </div>
      </a-card>
  </div>
</template>
<script>
var arr=[[1,2],[3,4]];
var arrSet=[1,12,212,1,2,2,1,1,12,21,2122113,1,null,undefined,null]
 const nums=[12,12,122,1,11,23,232]
export default {
  data(){
    return{
      topic1202:[
        {name:'MVVM的理解以及优缺点？',answer:'1'},
        {name:'InstanceOf和typeOf的区别？',answer:'前者返回true/false，后者返回类型'},
        {name:'cookie,localstorage,sessionstorage的区别？',answer:'https://www.cnblogs.com/TigerZhang-home/p/8665348.html'},
        {name:'性能优化？',answer:'1'},
        {name:' 兼容性问题？',answer:'1'},
        {name:'跨域问题？',answer:'1'},
       ],
      another:[
        {name:"从输入URL到页面展示发生了什么？",answer:""},
        {name:"12-03：水平垂直居中？",answer:""},
        {name:"12-03：es6中数组和对象新增的方法？",answer:""},
        {name:"12-04: 值类型和引用类型的区别？",answer:""},
        {name:"12-03：深拷贝和浅拷贝？",answer:"浅拷贝就是对对象进行浅层次的复制，只复制一层对象的属性，并不包括对象里面的引用类型数据 深拷贝是对对象以及对象的所有子对象进行拷贝，也就是说新拷贝对象的子对象里的属性也不会影响到原来的对象"},
        {name:"12-04: 值类型和引用类型的区别？",answer:"值类型的数据存储在栈中，函数运行完成后变量销毁，复制是深复制，不能添加属性和方法，值的比较。|引用类型的存储在堆中，运行完不会销毁，复制是浅复制，可添加属性和方法，引用地址的比较。"},
        {name:"12-04: 事件循环机制?(宏任务/微任务)",answer:"宏任务：script主代码，setTimeout,setInterval,I/O,UI渲染/微任务：promise.then"},
        {name:"12-04: 行内元素和块级元素的区别？",answer:"行内元素都在水平方向上排列/块级元素都在垂直方向排列，行内元素盒模型属性不同/行内(span,a,i,b)块级(p,h1,table,div,li)"},
        {name:"12-04: 跨域问题？为什么会有跨域问题？怎么解决？",answer:"因为浏览器的同源策略(协议域名端口相同)才会出现跨域问题/jsonp,cors,nginx反向代理接口跨域,node.js中间件代理跨域,location.hash+iframe,window.name+iframe,postMessage,WebSocket"},
        {name:"12-04: 浏览器兼容性问题？为什么？怎么办？",answer:""},
        {name:"12-04: 回流和重绘？为什么？怎么办？",answer:"回流是元素的规模尺寸，布局，隐藏等改变而需要重新构建/重绘元素的外观，风格，而不会影响布局的"},
        {name:"",answer:""},
      ]
    }
  },
  computed:{

  },
  watch:{

  },
  mounted(){
    var str=" ad da ad   "
    console.log(arr);
    console.log( this.lowerDimension(arr));
    console.log(this.clearSpace(str));
    this.closeBag();
    console.log([...new Set(arrSet)]);
   
    function takeOut(arr){
      let res=arr.filter((item,index)=>{
        return arr.indexOf(item)===index
      })
      console.log(res);
    }
    takeOut(arrSet);
    console.log(this.checkType(122));
  },
  created(){
    console.log(this.checkType('122'));
    let name=localStorage.key(1);
    let value=localStorage.getItem(name);
    console.log(value);
    this.filterFun();
    this.mapFun();
    this.reduceFun();
    this.allFun();
    this.constructionFun()
  },
  methods:{ 
    /**
     * array lower dimension
     */
     lowerDimension:function(obj){
     return Array.prototype.concat.apply([],obj); 
    },
    /**
     * test ajax visit local json file
     */
     testAxios:function(){
   
      this.axios.get('http://localhost:8081/assets/test.json').then(res=>{
        if(res.data.code==200){
          res.data.results
        }
      }).catch(err=>{
        this.$message({
          type:'error',
          message:err,
          })
      })
    },
    /**
     * clear the space of string before and after
     */
    clearSpace:function(str){
      if(str & typeof str==="string"){
        return str.replace(/(^s*)|(s*)$/g,"");
      }else{
         this.$message({
          type:'error',
          message:'type error',
          })
      }
    },
    /**
     * close bag
     */
    closeBag:function(){
      for(let j=0;j<=10;j++){
        (function(i){
          setTimeout(()=>{
            console.log(i);
          },1000)
        })(j)
      }
    },
    /**
     * check type of the data
     */
    checkType:function(params) {
      return Object.prototype.toString.call(params)
    },
    /**
     * 深拷贝和浅拷贝
     */

    /**
     * filter filter the data from your condition
     */
    filterFun:function(){
       let newNums=nums.filter(n=>{
        return n<12;
      });
      console.log(newNums);
    },
    /**
     * map
     */
    mapFun:function(){
      let newNums=nums.map(n=>{
        return n*10;
      })
      console.log(newNums);
    },
    /**
     * reduce
     */
    reduceFun:function(){
      let newNums=nums.reduce((preValue,n)=>{
        return preValue+n;
      },0)
      console.log(newNums);
    },
    /**
     * all reduce+fliter+map
     */
    allFun:function(){
      let all=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n)
      console.log(all);
    },
    /**
     * construction evaluation
     */
    constructionFun:function(){
      const point=[12,234,2]
      const [x,y,z]=point
      console.log(x,y,z);

      /**
       * for of 
       */
      for(const num of nums){
        console.log('for of +'+num);
      }
      /**
       * includes 
       * setTimeout(function(),timer)
       */
      if(nums.includes(1223))
      {
        console.log('includes 1223');
      }else{
        setTimeout(()=>{this.$message({
          type:'default',
          message:'not include.'
        })},1000) 
      }
      clearTimeout()
     },
     /**
      * 
      */
  }
}
</script>
<style scoped>
.content{
   float: left;
}
.liClass{
text-align: left;
}
.centerVerticalHorizontal{
    /*
    
    */
    justify-content: left;
    display: flex;
}
</style>