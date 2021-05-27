<template>
    <div id="app">
        <select v-model="selectItem" @change="selectFn($event)">
            <option v-for="(item, id) in items" :value="item.id" :key="id">{{
                item.name
            }}</option>
        </select>
        <div>您当前选的值是： {{ selectItem }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config: [{ name: 'jack', select: '001' }],
            selectItem: 'this.config.name',
            items: [
                { id: 11, name: '分类1' },
                { id: 22, name: '分类2' },
                { id: 33, name: '分类3' },
            ],
        }
    },
    methods: {
        selectFn(e) {
            console.log(e)
            console.log(e.target.selectedIndex) // 选择项的index索引
            console.log(e.target.value) // 选择项的value
            console.log(this.config[0].name)
        },
    },
}
</script>
