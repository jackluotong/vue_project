<template>
  <div style="background:#ECECEC; padding:20px;">
    <a-card
      title="手写常见的API | 上部分"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <div class="partOne">
          <h4 class="textP">手写instanceOf </h4>
        </div>
        <div class="partTwo">
          <a-input
            class="input"
            placeholder="请输入数据"
            v-model="checkData"
            ref="inputVlue"
          />
        </div>
        <div>
          <a-button
            type="primary"
            @click="showDrawer"
          >
            check
          </a-button>
          <a-drawer
            title="Basic Drawer"
            placement="right"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
          >
            <p ref="showText">1</p>
          </a-drawer>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      checkData: ''
    }
  },
  mounted() {
    console.log(this.myInstanceOf('1111', String));
    console.log(this.myInstanceOf(new String("111"), String));
    this.$nextTick(() => {
      this.$refs.showText = '1222';
      this.showText = '1111'
    })

  },
  watch: {},
  methods: {
    myInstanceOf: function (left, right) {
      if (typeof left !== 'object' || left == null) return false;
      let proto = Object.getPrototypeOf(left);
      if (proto == null) return false;
      if (proto == right.prototype) return true;
      proto = Object.getPrototypeOf(proto)
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
      //get value
      let value = this.checkData;
      //use function
      this.myInstanceOf(value, typeof (value))
      alert(this.$refs.showText)
    },
    onClose() {
      this.visible = false;
    },
  }
}
</script>
<style scoped>
.partTwo,
.partOne {
  display: inline-block;
  padding-left: 10mm;
}
</style>