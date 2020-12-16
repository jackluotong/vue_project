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
            <p ref="showText">{{message}}</p>
            <p ref="showTextOne">old</p>
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
      checkData: '',
      message:'12'
    }
  },
  mounted() {
    console.log(this.myInstanceOf('1111', String));
    console.log(this.myInstanceOf(new String("111"), String));
    /**
     * nextTick 原理
     * 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
     */ 
    this.$nextTick(() => {//using this function after changed data

    })
    /**
     * == 和 ===?
     * === 不仅值要相等数据类型也要相等；
     */
    console.log(1=='1','------==------');
    console.log(1==='1','------===-------');
  },
  watch: {},
  methods: {
    
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      /**
       * $refs获取当前元素的ref,然后使用innerText来改变值
       * 或者使用{{value}}，用this.value来改变值，配合v-modle使用
       */
       
      this.visible = true;
      //get value
      let value = this.checkData;
      this.message=value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      this.myInstanceOf(this.message, typeof (this.message)); 
      if(navigator.onLine){
        alert('online')
      }
    },
    onClose() {
      this.visible = false;
    },
    /**
     * instanceOf 
     */
    myInstanceOf: function (left, right) {
      if (typeof left !== 'object' || left == null) return false;
      let proto = Object.getPrototypeOf(left);
      if (proto == null) return false;
      if (proto == right.prototype) return true;
      proto = Object.getPrototypeOf(proto)
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