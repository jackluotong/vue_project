<template>
    <div>
        <div
            style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;"
        >
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll"
                >全选</Checkbox
            >
        </div>
        <Checkbox-group
            v-model="checkAllGroup"
            @on-change="checkAllGroupChange"
        >
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </Checkbox-group>
        <div>
            <Select
                v-model="model8.label"
                clearable
                style="width:200px"
                @on-change="selectEd"
            >
                <Option
                    v-for="(item, index) in cityList"
                    :value="item.value"
                    :key="index"
                    >{{ item.label }}</Option
                >
            </Select>
        </div>
        <Input
            v-model.trim="searchValue"
            type="text"
            class="search"
            style="width:80%;margin-left:10%"
            @on-enter="keyPress"
            @on-focus="keyUp"
        />
        <div>
            <h1>
                防抖的应用（debonuce）
            </h1>
            <input type="text" @keyup="keyUpClick" />
        </div>
        <div>
            <h1>
                截流的应用（throttle）
            </h1>
        </div>
        <div>
            <p
                ref="testRef"
                id="test01"
                v-show="checkAllGroup.indexOf('西瓜') > -1"
            >
                11112
            </p>
            <p v-show="cityList.includes('北京市')">v-show</p>
        </div>
        <user :user="userName" />
        <span>
            {{ nameComputed }}
        </span>
        <span :user="userName"></span>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { debounce } from '../../libs/tools'
import User from '../ForPackage/Test'
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
            computed: [1, 2, 3, 4],
            searchValue: '',
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市',
                },
                {
                    value: 'shanghai',
                    label: '上海市',
                },
                {
                    value: 'shenzhen',
                    label: '深圳市',
                },
                {
                    value: 'hangzhou',
                    label: '杭州市',
                },
                {
                    value: 'nanjing',
                    label: '南京市',
                },
                {
                    value: 'chongqing',
                    label: '重庆市',
                },
            ],
            model8: {
                value: 'chongqing',
                label: '重庆市',
            },

            options: [
                {
                    id: 1,
                    value: '选项1',
                    label: '黄金糕',
                },
                {
                    id: 2,
                    value: '选项2',
                    label: '双皮奶',
                },
                {
                    id: 3,
                    value: '选项3',
                    label: '蚵仔煎',
                },
                {
                    id: 4,
                    value: '选项4',
                    label: '龙须面',
                },
                {
                    id: 5,
                    value: '选项5',
                    label: '北京烤鸭',
                },
            ],
            value5: {
                id: 5,
                value: '选项5',
                label: '北京烤鸭',
            },
            model15: '',
        }
    },
    methods: {
        selectEd(e) {
            console.log(e)
        },
        keyUpClick(e) {
            // debounce(this.getValue(e.target.value), 1000)
            return new Promise((resolve, reject) => {
                this.getValue(e.target.value)
                    .then((res) => {
                        console.log(res)
                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        getValue(value) {
            return new Promise((resolve, reject) => {
                console.log(value)
                resolve(value)
            }).then((res) => console.log(res))
        },
        keyUp(e) {
            console.log(e.target.value)
        },
        keyPress(e) {
            console.log(e.keyCode)
        },
        handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false
            } else {
                this.checkAll = !this.checkAll
            }
            this.indeterminate = false

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜']
            } else {
                this.checkAllGroup = []
            }
        },
        checkAllGroupChange(data) {
            if (data.length === 3) {
                this.indeterminate = false
                this.checkAll = true
            } else if (data.length > 0) {
                this.indeterminate = true
                this.checkAll = false
            } else {
                this.indeterminate = false
                this.checkAll = false
            }
        },
        judge() {
            this.model15 = 'Canberra'
        },
    },
    mounted() {
        this.judge()
        console.log(
            this.cityList.map((item) => {
                return item.label
            })
        )
    },
    computed: {
        userName() {
            return 'jack'
        },
        nameComputed() {
            return this.computed.includes(1) === true ? 1 : this.computed
        },
    },
    created() {
        /* this.axios
            .get(' http://yang.cn1.utools.club/dcenter/application/queryAppAll')
            .then((res) => {
                console.log(res)
            }) */
        console.log(
            this.cityList.forEach((item, id, x) => {
                // 当前值 索引 总共
                console.log(item, 'second', id, x)
            })
        )
    },
}
</script>
