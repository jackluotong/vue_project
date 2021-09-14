<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-08-10 00:13:26
 * @LastEditors: william
 * @LastEditTime: 2021-09-14 00:33:51
 * @For What?: for including interview knowledge.
-->
<template>
    <div>
        1
        <son :testData="testData" @transport="fatherFun"></son>
    </div>
</template>

<script>
import Son from './son'
let mixin = {
    created() {
        console.log('mixin')
    },
}
export default {
    components: {
        Son,
    },
    mixins: [mixin],
    data() {
        return {
            testData: '1s',
        }
    },
    methods: {
        fatherFun(data) {
            this.$store.dispatch('testActions', 12) //change action
            console.log(data, this.$store)
        },
    },
    created() {
        console.log('not mixin', this)
    },
}
</script>

<style lang="less" scoped></style>
