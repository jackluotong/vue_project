<template>
   <div style="background:#ECECEC; padding:20px;">
    <a-card
     title="2020-12-02 Interivew|无锡"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in topic" :key='index' class="liClass">
           {{item.index}}{{item.name}}；答案：<span style="color:blue">{{item.answer}} </span>
          </li>
        </ol>
        <a-button @click="testAxios">test axios</a-button>
      </div>
      </a-card>
  </div>
</template>
<script>
var arr=[[1,2],[3,4]];
export default {
  data(){
    return{
      topic:[
        {name:'MVVM的理解以及优缺点？',answer:'1'},
        {name:'InstanceOf和typeOf的区别？',answer:'前者返回true/false，后者返回类型'},
        {name:'cookie,localstorage,sessionstorage的区别？',answer:'https://www.cnblogs.com/TigerZhang-home/p/8665348.html'},
        {name:'性能优化？',answer:'1'},
        {name:' 兼容性问题？',answer:'1'},
        {name:'跨域问题？',answer:'1'},
       ]
    }
  },
  mounted(){
    var str=" ad da ad   "
    console.log(arr);
    console.log( this.lowerDimension(arr));
    console.log(this.clearSpace(str));
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
    }
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