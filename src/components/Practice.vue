<template>
  <div>
    <p>this is a test for components transfer value.</p>
    <p v-show="show1">{{msg}}</p>
    <button @click="click()">skip router</button>
    <a :href="url">click</a>
    <ol v-for="(item,index) in list" :key=item>{{index+1}}.{{item}}</ol>
    <input type="text" v-model="content">
    <p>content:{{content}}</p>
    <p>this</p>
  </div>
</template>
<script>
export default {
  name:'practice',
  data(){
    return{
       msg:'apple',
       url:'https://blog.csdn.net/wo_921110/article/details/83339298',
       show1:false,
       list:['tom','jack','william'],
       content:"dad",
    }
   },
  mounted(){
    console.log('practice is mounted');
  },
  methods:{
    click:function(){
      this.$router.push({
        path:'/another',
        query:{
          id:this.id,
        }
      })
    }
  }
  /*
  点击事件：v-on=@
  绑定：v-bind=:
  v-text,v-html,v-show,v-for,v-if,v-else,v-model,v-once
  */
}
</script>