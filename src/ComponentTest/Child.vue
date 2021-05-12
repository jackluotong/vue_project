<template>
    <div class="SonDiv">
        <h1>我是子组件的标题</h1> 
        <a-card>
                      <p>父组件给子组件传的name：{{title}}</p>
                      <p>父组件给子组件传的name：{{numbers}}</p>
        </a-card>  
        <hr/>
        <a-card>
                  <el-button @click="sendToFather()">子组件给父组件传参</el-button>
                  <input v-model='inputDataName' placeholder="请输入要传给父组件的名字"/>
                  <input v-model='inputDataNum' placeholder="请输入要传给父组件的数字"/>
                  <a-button @click="test">parent</a-button>
        </a-card>
    </div>
</template>
<script>
export default {
    props:{//是子组件访问父组件数据的唯一接口
        title:{
            type:String,
            default:'我是子组件的默认值'
        },
        numbers:{
              type:Number,
              default:1
        }
    },
    data () {
        return {
            value:this.title,
            inputDataName:'',
            inputDataNum:'',
            testChildren:'children'
        }
    },
    watch:{
    },
    mounted(){
    },
    methods: {
        sendToFather(){
            const data={
                num:this.inputDataNum,
                name:this.inputDataName
            }
            this.$emit('sendToFather',data)
        },
        test:function() {
            //  this.$pa.value+1
            // console.log(this.$parent.value)
            // this.$parent.value=1
            let a=1
            this.$parent.testFather(a)
        },
        testSon:function(){
              alert('son component.')
        }
    },
}
</script>
<style scoped>
.SonDiv{
    background-color: blanchedalmond;
    margin: 10px;
    vertical-align: middle;/**垂直居中 */
    text-align: center;
}
</style>