<template>
    <div style="background: #ececec; padding: 20px">
        <div></div>
        <!-- all arithmetic from 2021.04.01 -->
        <a-card
            title="Interview"
            :bordered="false"
            style="width: 98%; margin: 0 auto"
        >
            <a-button @click="$router.push({ name: 'Advanced' })"
                >查看高级程序设计</a-button
            >
            <div class="content">
                <ol>
                    <li
                        v-for="(item, index) in may"
                        :key="index"
                        class="liClass"
                    >
                        <div class="titleFather">
                            <p class="title">
                                {{ item.index }}{{ item.title }}
                            </p>
                        </div>

                        <span>
                            题目： {{ item.name }}
                            <br />
                        </span>
                        答案：
                        <span style="color: blue">{{ item.answer }}.</span>
                        <br />
                        <input type="text" placeholder @keyup="enter" />
                    </li>
                </ol>

                <p>
                    {{ nickName }}，{{ age }},{{ count }} realName:{{
                        realName
                    }}
                </p>
                <button @click="testMapMutations">testMapMutations</button>
            </div>
            <!--  <input type="text" v-model="test">
      <span>{{test}}</span>-->
            <input
                type="text"
                :value="test"
                @input="test = $event.target.value"
            />
            <!-- v-model=:+@input -->
            <h6>{{ test }}</h6>
            <span v-for="(item, index) in arr" :key="index">{{ item }}</span>
            <a-button @click="change()">change arr</a-button>
            <a-button @click="testSwitch">testSwitch</a-button>
            <a-button @click="testAxios">testAxios</a-button>
            <p>1, {{ re }}</p>
            <a-button @click="reFun">1</a-button>
            <p>1,{{ reFun() }}</p>
            <a-card>
                <span>fullName:{{ fullName }}</span>
                <span>firstName:{{ firstName }}</span>
                <input type="text" v-model="firstName" />
                <input type="text" v-model="test1" />
            </a-card>
        </a-card>
        <p slot="test">我是一个slot测试</p>
        <span v-for="(item, key) in testObj" :key="key">{{ item }}</span>
        <br />
        <input type="file" value="select files" />
        <div>
            <button @click="testAxiosExport">test axios</button>
            <button @click="$router.push({ name: 'test' })">
                test user system.
            </button>
        </div>
    </div>
</template>

<script>
/**
 * export 导出的在导入的时候用{}
 * export default 导出的在导入的时候不用{}
 */
// import axios from '../../../libs/axios'
import test, { S } from '../../../assets/test'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { log } from '../../../CommonFunction/CommonFunction'
// let Test=require('../../../assets/test')
let jsonData = require('../../../assets/Data/MayData/index') //json对象中的数组
export default {
    components: {},
    data() {
        return {
            may: jsonData.may,
            test: 'test v-model',
            arr: [11, 22, 33, 44],
            obj: { name: 'jack' },
            a: '122',
            b: '10',
            c: '',
            firstName: '11',
            lastName: '2',
            test1: '1',
            testObj: { name: 'jack', age: 26 },
        }
    },
    mounted() {
        test.a(1)
        //     Test.a(111)
        console.log(test, 'test', S)
    },
    computed: {
        /*
        单个引入方法
        */
        // nickName(){return this.$store.state.nickName},
        /*
        针对较多的属性
        用mapState等这种辅助函数的时候，前面的方法名和获取的属性名是一致的。
    */
        ...mapState(['nickName', 'age', 'count']),
        ...mapGetters(['realName']),
        re: function() {
            return Number(this.a) + Number(this.b)
        },
        fullName: {
            get: function() {
                return this.lastName + this.firstName
            },
            set: function(val) {
                console.log(val, 'new')
                // let names=newValue.split(',')
                // this.firstName=names[0]
                // this.lastName=names[names.length-1]
            },
        },
    },
    watch: {
        firstName: function(newValue, old) {
            console.log('newValue', newValue, 'old', old)
        },
        test1() {
            console.log(this.test1)
        },
    },
    methods: {
        enter(event) {
            if (event.keyCode !== 13) return
            log(1111)
            console.log(JSON.parse(JSON.stringify(jsonData)))
        },
        reFun: function() {
            return Number(this.a) + Number(this.b)
        },
        ...mapMutations({ testMapMutations: 'increment' }),
        change: function() {
            // this.arr.join(',') //第一位是：开始，第二位是：删除，第三位是：插入元素
            this.$nextTick(() => {
                //直接修改被监听不到 使用$set
                this.arr[0] = '09'
            })
            // this.$set(this.arr, 0, '09')
            /*
                  数组中重写的方法来做响应式：push、pop、shift、unshift、splice、sort、reverse
                  更改数组不是响应式的，所以用$set来改变数组
                  Vue2 中的变化侦测实现对 Object 及 Array 分别进行了不同的处理，Objcet 使用了
                  Object.defineProperty API ，Array 使用了拦截器对 Array 原型上的能够改变数据的方法进行拦截。虽然也实现了数据的变化侦测，但存在很多局限 ，比如对象新增属性无法被侦测，以及通过数组下边修改数组内容，也因此在 Vue2 中经常会使用到 $set 这个方法对数据修改，以保证依赖更新。
                  Vue3 中使用了 es6 的 Proxy API 对数据代理，没有像 Vue2 中对原数据进行修改，只是加了代理包装，因此首先性能上会有所改善。其次解决了 Vue2 中变化侦测的局限性，可以不使用 $set 新增的对象属性及通过下标修改数组都能被侦测到。
            */
            /*
                针对数组 字符串 对象的一些方法
           */
        },
        testSwitch: function() {
            switch (new Date().getDay()) {
                case 1:
                    return console.log('one')
                case 2:
                    return console.log('two')
                default:
                    break
            }
            /* this.$set(this.obj, 'num', '18')
			this.$delete(this.obj, 'name')
			console.log(this.obj) */
            this.$nextTick(() => {
                //  this.testObj.sex='boy1'
                this.testObj.sex = 'jerry'
                this.arr[0] = '21211sss'
            })

            /* this.$set(this.testObj,'gg','yes')
                 //多个赋值
                  
                  this.testObj=Object.assign({},this.testObj,{school:'sspu',abstract:'uk'})
                  console.log(this.testObj,'this.testObj')
                    */
            // this.$delete(this.testObj,'name')
        },
        testAxios() {
            // axios
            //     .get('/static/index.json')
            //     .then((res) => {
            //         console.log(res)
            //     })
            //     .catch((e) => console.log(e))
        },
        async testAxiosExport() {
            // const res=await axios.get('http://localhost:8080/api1/students')
            // // this.axios.get('http://localhost:8080/api1/students').then(res=>console.log(res))
            // console.log(res)
            console.log(this.name)
        },
    },
}
</script>
<style scoped>
/* .content {
  float: left;
} */
.liClass {
    text-align: left;
}
.title {
    font-size: 30px;
    color: brown;
    width: 300px;
    position: relative;
    animation: myfirst 5s;
}
p:hover {
    background-color: rgb(157, 255, 0);
    transform: scale(1.5);
}
@keyframes myfirst {
    0% {
        background: red;
        left: 0px;
        top: 0px;
    }
    25% {
        background: yellow;
        left: 200px;
        top: 0px;
    }
    50% {
        background: blue;
        left: 200px;
        top: 200px;
    }
    75% {
        background: green;
        left: 0px;
        top: 200px;
    }
    100% {
        background: red;
        left: 0px;
        top: 0px;
    }
}
</style>
