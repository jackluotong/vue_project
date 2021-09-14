<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-09-13 22:55:45
 * @LastEditors: william
 * @LastEditTime: 2021-09-14 00:00:42
 * @For What?: test props 
-->
<template>
    <div>
        我的小时候
        {{ testData }}
        <hr />
        子组件给父组件传值
        <input type="text" v-model="toFather" />
        <button @click="transport">to father</button>
    </div>
</template>
<script>
export default {
    name: 'Son',
    props: {
        testData: {
            testData: String,
        },
    },
    data() {
        return {
            toFather: '',
        }
    },
    methods: {
        transport() {
            const data = {
                name: this.toFather,
            }
            this.$emit('transport', data)
            console.log('transport')
        },
    },
}
</script>
