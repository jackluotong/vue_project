<template>
    <div class="FatherDiv">
        <h1>我是父组件的标题</h1>
        <input v-model="parentMsg" placeholder="输入给子组件的name" />
        <input v-model="number" placeholder="输入给子组件的num" />
        <hr />
        <p>通过子组件传过来的值num:{{ num }}</p>
        <p>通过子组件传过来的值name:{{ name }}</p>
        <a-button @click="storage">sessionStorage</a-button>
        <div class="SonInFather">
            <Child
                :title="parentMsg"
                :numbers="number"
                @sendToFather="FatherFun"
                ref="child"
            />
        </div>
        <div>
            <h1>
                test user component
            </h1>
            <user :user="user" />
        </div>
    </div>
</template>
<script>
import Child from './Child'
import User from '../components/ForPackage/Test'
let st = window.sessionStorage
let ls = window.localStorage
export default {
    data() {
        return {
            parentMsg: '',
            num: '',
            name: '',
            number: 1,
            value: '1',
            user: 'JACK????',
        }
    },
    components: {
        Child,
        User,
    },
    mounted() {
        console.log(st.getItem('value'))
        console.log(ls.getItem('value'))
    },
    methods: {
        FatherFun(data) {
            ;(this.num = data.num), (this.name = data.name)
        },
        /**
         * 存储数据用sessionStorage
         * setItem('key','value')
         */
        storage() {
            /* 
                  子组件调用父组件的方法/拿值
                  this.$parent/refs...
               */
            this.$refs.child.testSon()
            console.log(this.$refs.child._data.testChildren.toString())
            console.log(this.$children[1])
            st.setItem('value', '000')
            ls.setItem('value', 'this is localStorage 000')
        },
        testFather: function(str) {
            alert('father component.', str)
        },
    },
}
</script>
<style scoped>
.FatherDiv {
    background-color: rgb(211, 204, 238);
    height: 400px;
    margin: 10px;
}
.SonInFather {
    margin: 400px;
}
</style>
