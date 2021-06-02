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
        <div>
            <Checkbox-group v-model="social" @on-change="select">
                <Checkbox label="twitter">
                    <Icon type="social-twitter"></Icon>
                    <span>Twitter</span>
                </Checkbox>
                <Checkbox label="facebook">
                    <Icon type="social-facebook"></Icon>
                    <span>Facebook</span>
                </Checkbox>
                <Checkbox label="github">
                    <Icon type="social-github"></Icon>
                    <span>Github</span>
                </Checkbox>
                <Checkbox label="snapchat">
                    <Icon type="social-snapchat"></Icon>
                    <span>Snapchat</span>
                </Checkbox>
            </Checkbox-group>
        </div>
        <div>
            <a-checkbox-group @change="onChange">
                <a-row>
                    <a-col :span="8">
                        <a-checkbox
                            v-for="(label, index) in userInfo"
                            :key="index"
                        >
                            {{ label.name }}
                        </a-checkbox>
                    </a-col>
                    <a-col :span="8">
                        <a-checkbox value="B">
                            助理
                        </a-checkbox>
                    </a-col>
                    <a-col :span="8">
                        <a-checkbox value="C">
                            销售
                        </a-checkbox>
                    </a-col>
                    <a-col :span="8">
                        <a-checkbox value="D">
                            无权限
                        </a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
        </div>
        <div>
            <a-checkbox-group
                :options="userInfo"
                :default-value="label"
                @change="onChange11"
            />
            <br />
        </div>
        <div>
            <div>
                <div :style="{ borderBottom: '1px solid #E9E9E9' }">
                    <a-checkbox
                        :indeterminate="indeterminate"
                        :checked="checkAll"
                        @change="onCheckAllChange"
                    >
                        Check all
                    </a-checkbox>
                </div>
                <br />
                <a-checkbox-group
                    v-model="checkedList"
                    :options="plainOptions"
                    @change="onChange"
                />
            </div>
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
        const plainOptions = ['Apple', 'Pear', 'Orange']
        const defaultCheckedList = ['Apple', 'Orange']
        return {
            data: JSON.parse(JSON.stringify(data)),
            social: [
                { value: 1, label: 'twitter' },
                { value: 2, label: 'facebook' },
                { value: 3, label: 'github' },
                { value: 4, label: 'snapchat' },
            ],
            userInfo: [
                { label: 'jack', value: '001' },
                { label: 'jack1', value: '0011' },
            ],
            label: '',
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
            plainOptions,
        }
    },

    methods: {
        onChange(checkedList) {
            this.indeterminate =
                !!checkedList.length &&
                checkedList.length < this.plainOptions.length
            this.checkAll = checkedList.length === this.plainOptions.length
            console.log(checkedList)
        },
        onCheckAllChange(e) {
            Object.assign(this, {
                checkedList: e.target.checked ? this.plainOptions : [],
                indeterminate: false,
                checkAll: e.target.checked,
            })
        },
        onChange11(data) {
            console.log('checked = ', data)
        },
        onChange1(data) {
            const label = this.userInfo.map((item) => {
                return item.label
            })
            this.label = label
            console.log(data, JSON.stringify(this.label))
        },
        select(data) {
            console.log(data)
        },
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
        translate(json) {
            let result = {}
            for (const item of json) {
                let index = Object.keys(result).findIndex(
                    (k) => k === item.userCode
                )
                let roleName = item.roles.map((r) => r.roleName).toString()
                if (index === -1) {
                    result[item.userCode] = roleName
                } else {
                    result[item.userCode] = `${
                        result[item.userCode]
                    }+${roleName}`
                }
            }
            return result
        },
    },
    mounted() {
        const label = this.userInfo.map((item) => {
            return item.label
        })
        this.label = label
        const arr = [
            {
                userId: '1399681552238100481',
                userCode: 'yangzixu',
                roles: [],
            },
            {
                userId: '1399738511058321409',
                userCode: 'yangziixu',
                roles: [],
            },
            {
                userId: '1399903055210721282',
                userCode: 'lisi',
                roles: [],
            },
            {
                userId: 'aaa',
                userCode: 'zhangsan',
                roles: [
                    {
                        roleId: 'bbb',
                        roleCode: 'test_role_b',
                        roleName: '测试角色B',
                    },
                    {
                        roleId: 'aaa',
                        roleCode: 'test_role',
                        roleName: '测试角色',
                    },
                ],
            },
        ]
        console.log(this.translate(arr))
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
