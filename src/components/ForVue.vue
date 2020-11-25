<template>
    <div>for vue
        <div class="partOne">
            <p>虚拟dom</p>
             <input type="text" ref="input1">
            <button @click="add" ref="opt1">{{value}}</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'rigion',
             
        }
    },
    watch:{
        value(newName,oldName){
            console.log('this is new name'+newName);
            console.log('this is old name'+oldName); 
        }
    },
    methods:{
     add:function(){
      console.log(this.$refs.input1.value);
       let s=this.$refs.input1.value;
       if(!s){
           alert('please input value.')
           return false;
       }else{
        let that=this;
        console.log(that);
        that.value=that.$refs.input1.value;
        this.$nextTick(function(){
        console.log(that.$refs.opt1.innerText);
        })
       } 
     },
    },
}
</script>
<style scoped>
.partOne{ 
    background-color: #eaeaee;
    width: 98%;
    height:500px;
    margin: 0 auto;
}
</style>