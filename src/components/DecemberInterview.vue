<template>
   <div style="background:#ECECEC; padding:20px;">
    <a-card
     title="2020-12-02 Interivew|无锡"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in topic1202" :key='index' class="liClass">
           {{item.index}}{{item.name}}；答案：<span style="color:blue">{{item.answer}} </span>
          </li>
        </ol>
        <a-button @click="testAxios">test axios</a-button>
      </div>
      </a-card>
       <a-card
     title="2020-12-02 Interivew|无锡"
      :bordered="false"
      style="width:98%;margin:0 auto">  
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in another" :key='index' class="liClass">
           {{item.index}}{{item.name}}；答案：<span style="color:blue">{{item.answer}} </span>
          </li>
        </ol>
       
      </div>
      </a-card>
  </div>
</template>
<script>
var arr=[[1,2],[3,4]];
var arrSet=[1,12,212,1,2,2,1,1,12,21,2122113,1,null,undefined,null]
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
        {name:"",answer:""},
        {name:"",answer:""}
      ]
    }
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
</style>