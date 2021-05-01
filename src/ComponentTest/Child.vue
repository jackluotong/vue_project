<template>
    <div class="SonDiv">
        <h1>我是子组件的标题</h1>    
        <p>父组件给子组件传的值：{{title}}</p>
        <p>{{this.$store.state.count}}</p>

        <hr/>
        <el-button @click="sendToFather(toFatherValue)">子组件给父组件传参</el-button>
        <input v-model='toFatherValue' placeholder="请输入要传给父组件的值"/>
    </div>
</template>
<script>
export default {
    props:{//是子组件访问父组件数据的唯一接口
        title:{
            type:String,
            default:'我是子组件的默认值'
        }
    },
    data () {
        return {
            value:this.title,
            toFatherValue:''
        }
    },
    
    mounted(){
    },
    methods: {
        sendToFather(toFatherValue){
            const data={
                num:toFatherValue
            }
            this.$emit('sendToFather',data)
        }
    },
}
</script>
<style scoped>
.SonDiv{
    background-color: blanchedalmond;
    height: 400px;
    margin: 10px;
    vertical-align: middle;/**垂直居中 */
    text-align: center;
}
</style>