<template>
    <div class="FatherDiv">
        <h1>我是父组件的标题</h1>  
        <input v-model='parentMsg'/>
       <p>通过子组件传过来的值：{{num}}</p>
       <p>从store中拿到的值：{{this.$store.state.count}}</p>
       <a-button @click='storage'>sessionStorage</a-button>
        <div class='SonInFather'>
            <Child :title='parentMsg' @sendToFather='FatherFun' />
        </div>
    </div>
</template>
<script>
import Child from './Child'
 let st=window.sessionStorage
 let ls=window.localStorage
export default {
   
    data () {
        return {
            parentMsg:'通过父组件给子组件传的String',
            num:''
        }
    },
    components:{
        Child,
    },
    mounted(){
        console.log(st.getItem('value'))
        console.log(ls.getItem('value'));
    },
    methods: {
        FatherFun(data){
            this.num=data.num
            console.log(data.num);
        },
        /**
         * 存储数据用sessionStorage
         * setItem('key','value')
         */
         storage(){
            console.log('存储');
            st.setItem('value','000')
            ls.setItem('value','this is localStorage 000')
        },
      
    }
}
</script>
<style scoped>
.FatherDiv{
    background-color: rgb(211, 204, 238);
    height: 400px;
    margin: 10px;
}
.SonInFather{
    margin: 400px;
}
</style>