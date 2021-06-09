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
<<<<<<< HEAD
        <div>
            <Select v-model="model15" prefix="ios-home" style="width:200px">
                <Option
                    v-for="item in cityList"
                    :value="item.id"
                    :key="item.id"
                    >{{ item.name }}</Option
                >
            </Select>
        </div>
=======
        <Input
            v-model.trim="searchValue"
            type="text"
            class="search"
            style="width:80%;margin-left:10%"
            @on-enter="keyPress"
            @on-focus="keyUp"
        >
        </Input>
>>>>>>> e1d872005ab884c7114374226b02645ea635c966
    </div>
</template>
<script>
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
