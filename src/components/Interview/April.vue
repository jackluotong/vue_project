<template>
  <div style="background: #ececec; padding: 20px">
    <!-- all arithmetic from 2021.04.01 -->
    <a-card
      title="Interview"
      :bordered="false"
      style="width: 98%; margin: 0 auto"
    >
      <div class="content">
        <ol>
          <li v-for="(item, index, id) in april" :key="id" class="liClass">
            {{ item.index }}{{ item.title }} <span>题目：</span> {{ item.name
            }}<br />答案：<span style="color: blue">{{ item.answer }}. </span>
          </li>
        </ol>
        <a-button @click="testOne" style="float: left">test one</a-button>
      </div>
    </a-card>
    <p>{{ message }}</p>
    <a-input v-model="message" placeholder="please input some thing."></a-input>
    <div class="div">
      <div class="div1">ue</div>
    </div>
  </div>
</template>

<script>
let aprilData=require('../../assets/Data//AprilData/index')
export default {
  data() {
    return {
      message: "",
      april: aprilData.april
    };
  },
  methods: {
    testOne: function() {
      let arr = new Array(1, 2, 3);
      let a = arr.push(1, 2, 4);
      let b = [1, 2, 3, 11, 22, 33];
      let c = [0];
      console.log(c.concat(b), a);
      setTimeout(() => {
        console.log(this);
      }, 10);
      //splice(开始位置， 删除的个数，元素) 实现增删改
      setTimeout(() => {
        console.log("setTimeout");
      }, 0);
      new Promise((resolve) => {
        //  console.log('resolve');
        setTimeout(() => {
          console.log("resolve in promise");
        }, 10);
        resolve("resolve is res?");
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
.content {
  float: left;
}
.liClass {
  text-align: left;
}
button {
  margin-left: 4px;
}
.btn {
  vertical-align: center;
  margin: 0 auto;
}
.div {
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  background: red;
}
.div1 {
  align-items: center; /* 水平居中 */
  align-self: center; /*垂直居中 */
  height: 100px;
  width: 100px;
  background: rgb(10, 82, 238);
}
</style>
