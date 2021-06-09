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
    </div>
</template>
<script>
import { debounce } from '../../libs/tools'
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
    name: 'search',
    data() {
        return {
            searchValue: '',
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
            cityList: [
                {
                    id: '204',
                    name: 'New York',
                },
                {
                    id: '205',
                    name: 'London',
                },
                {
                    id: '206',
                    name: 'Sydney',
                },
                {
                    id: '207',
                    name: 'Ottawa',
                },
                {
                    id: '208',
                    name: 'Paris',
                },
                {
                    id: '209',
                    name: 'Canberra',
                },
            ],
            model15: '',
        }
    },
    methods: {
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
    },
}
</script>
