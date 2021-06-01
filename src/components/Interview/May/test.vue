<template>
    <div class="custom-tree-container">
        <el-button @click="addParent" v-if="data.length == 0 ? true : false"
            >新增一级</el-button
        >
        <div class="block">
            <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
            >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <span>
                        <el-button
                            type="text"
                            size="mini"
                            icon="el-icon-circle-plus"
                            @click="() => append(data)"
                        >
                            新增子级菜单
                        </el-button>
                        <el-button
                            type="text"
                            size="mini"
                            icon="el-icon-delete-solid"
                            @click="() => remove(node, data)"
                        >
                            删除
                        </el-button>
                        <el-button
                            type="text"
                            size="mini"
                            icon="el-icon-s-tools"
                            @click="() => edit(node, data)"
                        >
                            编辑
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </div>
    </div>
</template>
<script>
let id = 1000

export default {
    data() {
        const data = [
            {
                id: 1,
                label: '一级 1',
                children: [
                    {
                        id: 4,
                        label: '二级 1-1',
                        children: [
                            {
                                id: 9,
                                label: '三级 1-1-1',
                            },
                            {
                                id: 10,
                                label: '三级 1-1-2',
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                label: '一级 2',
                children: [
                    {
                        id: 5,
                        label: '二级 2-1',
                    },
                    {
                        id: 6,
                        label: '二级 2-2',
                    },
                ],
            },
        ]
        return {
            data: JSON.parse(JSON.stringify(data)),
        }
    },

    methods: {
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] }
            if (!data.children) {
                this.$set(data, 'children', [])
            }
            data.children.push(newChild)
        },

        remove(node, data) {
            const parent = node.parent
            const children = parent.data.children || parent.data
            const index = children.findIndex((d) => d.id === data.id)
            children.splice(index, 1)
        },
        edit(node, data) {
            console.log(node.childNodes.length, data.label)
        },
    },
}
</script>

<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    font-size: 14px;
    padding-right: 8px;
}
</style>
