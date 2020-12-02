<template>
   <div style="background:#ECECEC; padding:20px;">
    <a-card
     title="2020-12-02 Interivew|无锡"
      :bordered="false"
      style="width:98%;margin:0 auto">
      <div class="content"> 
        <ol>
          <li v-for="(item,index) in topic" :key='index'>
           {{item.index}}{{item.name}}{{item.answer}}
          </li>
        </ol>
        <a-button @click="testAxios">test axios</a-button>
      </div>
      </a-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      topic:[
        {name:'MVVM的理解以及优缺点？',answer:'1'},
        {name:''}
      ]
    }
  },
  methods:{
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
    }
  }
}
</script>
<style scoped>
.content{
   float: left;
}
</style>