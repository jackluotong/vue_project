<style scoped lang="scss">
.liClass {
    text-align: left;
}
.title {
    font-size: 30px;
    color: brown;
    width: 300px;
    position: relative;
    animation: myfirst 5s;
}
p:hover {
    background-color: rgb(157, 255, 0);
    transform: scale(1.5);
}
.first {
    background-color: rgb(128, 31, 0);
    padding: 20px;
    li {
        color: blue;
    }
}
</style>
<template>
    <div class="first">
        <a-card
            title="Interview"
            :bordered="false"
            style="width: 98%; margin: 0 auto"
        >
            <div class="content">
                <ol>
                    <li
                        v-for="(item, index) in june"
                        :key="index"
                        class="liClass"
                    >
                        <div class="titleFather">
                            <p class="title">
                                {{ item.index }}{{ item.title }}
                            </p>
                        </div>

                        <span>
                            题目： {{ item.name }}
                            <br />
                        </span>
                        答案：
                        <span style="color: blue">{{ item.answer }}.</span>
                        <br />
                    </li>
                </ol>
            </div>
        </a-card>
    </div>
</template>
<script>
let jsonData = require('../../../assets/Data/JuneData/index.json')
export default {
    data() {
        return {
            june: jsonData.june,
        }
    },
    created() {},
}
</script>
