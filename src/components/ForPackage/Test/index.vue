<template>
    <div>
        <span>Test common component</span>

        <h1 :user="usertick"></h1>
        <h3>从父组件拿过来的值:{{ usertick }}</h3>
        <Table
            highlight-row
            stripe
            :columns="columns"
            :data="confData"
            style="margin-top: 5px"
        >
            <template slot-scope="{ row, index }" slot="action">
                <div>
                    <Button
                        type="primary"
                        size="small"
                        style="margin-right: 5px"
                        @click="edit(index, row)"
                        >编辑</Button
                    >
                    <Button
                        type="error"
                        size="small"
                        style="margin-right: 5px"
                        @click="del(index, row)"
                        >删除</Button
                    >
                </div>
            </template>
        </Table>
    </div>
</template>
<script>
import { Table, Button } from 'iview'
export default {
    components: {
        Table,
        Button,
    },
    props: {
        usertick: {
            type: String,
            default: 'xxxx',
        },
        title: {
            type: String,
            default: '父组件传给子组件',
        },
        columns: {
            type: Array,
        },
        confData: {
            type: Array,
        },
    },
    data() {
        return {}
    },
    methods: {
        edit(e, row) {
            console.log(e, row)
        },
        del(index, row) {
            console.log(index, row)
        },
    },
    mounted() {
        console.log(this.$props)
    },
}
</script>
