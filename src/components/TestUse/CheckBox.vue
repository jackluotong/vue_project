<style lang="scss" scoped>
#myCanvs {
    border: 1px solid rgb(3, 3, 3);
}
.text-test {
    width: 100px;
    height: 100px;
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        // word-break: break-all;
        // display: -webkit-box;
    }
}
</style>
<template>
    <div>
        <div class="text-test">
            <p>
                {"header":{"signInfo":"/JMqPTWqUdxOmz0uMNVuSoR0Ir/n1Mf6KX8du4ONgHU=","source":"EB-WSM","uuid":"88daf6f39a9549e79ef6eecbe3771415","reqSeq":"202011202101005861"},"body":{"signdata":"NULL","imgstr":"true","imgtyp":"jpeg","type":"idCardF"}}
            </p>
        </div>
        <div>
            <h1>防抖的应用（debonuce）</h1>
            <input type="text" @keyup="keyUpClick" />
        </div>
        <div>
            <h1>截流的应用（throttle）</h1>
        </div>
        <div>
            <p
                ref="testRef"
                id="test01"
                v-show="checkAllGroup.indexOf('西瓜') > -1"
            >
                11112
            </p>
        </div>
        <user
            :usertick="userName"
            :title="title"
            :columns="columns"
            :confData="confData"
        />
        <span v-if="0 > 1">
            {{ nameComputed }}
        </span>
        <div>
            <canvas id="myCanvs" width="800" height="800"> </canvas>
        </div>
        <a-button @click="push">push array</a-button>
        <h1 ref="domRef">nameFor</h1>
        <a-button type="error" @click="textAxios">test axios</a-button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { debounce } from '../../libs/tools'
import User from '../ForPackage/Test'
import { testProxy } from '../../api/test'
import axios from 'axios'
/*
    debounce 防抖 多次提交只执行一次 按钮提交 搜索框联想场景  防抖1秒 连续点按钮10秒，在11秒的时候，执行一次
    throttle 截流  节流是每隔固定时间执行一次  节流1秒 连续点按钮10秒，每秒执行一次，共执行10次
*/
const throttle = (function() {
    let timer = 0
    return function(callback, time) {
        clearTimeout(timer)
        timer = setTimeout(callback, time)
    }
})()
export default {
    // name: 'search',
    components: {
        User,
    },
    data() {
        return {
            nameFor: 'nameFor',
            computed: [1, 2, 3, 4],
            searchValue: '',
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
            columns: [
                {
                    title: '角色名称',
                    key: 'roleName',
                    tooltip: true,
                    width: 300,
                    align: 'center',
                },
                {
                    title: '角色code',
                    key: 'roleCode',
                    width: 300,
                    align: 'center',
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center',
                },
            ],
            confData: [
                { roleName: 'jack', roleCode: 'luo', id: '001' },
                { roleName: 'jack', roleCode: 'li', id: '002' },
                { roleName: 'jack', roleCode: 'wang', id: '003' },
                { roleName: 'jack', roleCode: 'shi', id: '004' },
            ],
            myTestObject: {
                sex: 'boy',
                name: 'luo',
                age: 26,
                child: { name: 'samll luo', age: 0, sex: 'boy' },
            },
        }
    },
    methods: {
        textAxios() {
            /*  testProxy().then((res) => {
                console.log(res)
            }) */
            this.axios()
        },
        axios() {
            axios.get('http://localhost:3031/api1/man').then((res) => {
                console.log(res)
            })
        },
        keyUpClick() {},
        push() {
            this.computed.push('0624')
        },
    },
    mounted() {
        window.my = this
        /*  this.$nextTick(() => {
            this.nameFor = 'created'
        }) */
        let person = {
            _name: 'jack11',
            get name() {
                alert(this._name)
                return this._name
            },
            set name(params) {
                this._name = params
                alert(this._name)
            },
        }
        /*  person.name
        person.name = 'jack luo' */
        let student = {
            name: 'red',
            age: 26,
        }
        for (let i in student) {
            // for in  using loop array
            console.log(i)
        }
        console.log(
            Object.keys(person),
            '0000',
            Object.getOwnPropertyNames(person),
            Object.keys(student).map((item) => {
                return student[item]
            })
        )
    },
    watch: {
        computed(value) {
            //can not watch array function not include in vue
            console.log(value)
        },
        columns: {
            handler(value) {
                console.log(value)
            },
            deep: true,
        },
        'myTestObject.child'(value) {
            console.log(value)
            console.log(this.myTestObject)
        },
        myTestObject: {
            handler(value) {
                console.log(value)
            },
            deep: true,
        },
    },
    computed: {
        userName() {
            return 'jack+父组件给的值'
        },
        nameComputed() {
            return this.computed.includes(1) === true ? 1 : this.computed
        },
        title() {
            return 'jack luo'
        },
    },
    created() {
        /* this.axios
            .get(' http://yang.cn1.utools.club/dcenter/application/queryAppAll')
            .then((res) => {
                console.log(res)
            }) */
        /*   console.log(
            this.cityList.forEach((item, id, x) => {
                // 当前值 索引 总共
                console.log(item, 'second', id, x)
            })
        ) */
        /*   this.$nextTick(() => {
            console.log(this.$refs)
        }) */
        console.log(this.$refs)
        let data = this.confData.filter((item) => {
            if (item.id === '001') {
                return item
            }
        })
        console.log(data)
    },
}
</script>
