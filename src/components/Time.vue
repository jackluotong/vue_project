<template>
  <div class="container">
    <div class="box">
      <div class="header">小米闪购</div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="product-area">
            <div class="con-tit">
              抢购
            </div>
            
          <div class="desc">距离结束还有</div>
          <div class="time-wrapper">
            <div class="time-box">{{hour}}</div>
            <i class="ii">:</i>
            <div class="time-box">{{minute}}</div>
            <i class="ii">:</i>
            <div class="time-box">{{second}}</div>
          </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="product-area">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="product-area">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="product-area">
          </div>
        </el-col>
      </el-row>
    </div>       
     <el-button>
     {{nowTime}}
  </el-button>
  </div>
 
</template>

<script>

export default {
  
  data () {
    return {
      hours: 0,
      minutes: 1,
      seconds: 0,
      nowTime:'',
    }
  },
  methods: {
    num (n) {
      return n < 10 ? '0' + n : '' + n
    },
    cutTimeDown () {
      var that = this
      var timer = window.setInterval(function () {
        if (that.seconds === 0 && that.minutes !== 0) {
          that.seconds = 59
          that.minutes -= 1
        } else if (that.hours !== 0 && that.minutes === 0 && that.seconds === 0) {
          that.seconds = 59
          that.minutes = 59
          that.hours -= 1
        } else if (that.hours === 0 && that.minutes === 0 && that.seconds === 0) {
          that.seconds = 0
          window.clearInterval(timer)
        } else {
          that.seconds -= 1
        }
      }, 1000)
    },
    //显示当前时间（年月日时分秒）
    timeFormate(timeStamp) {
      let mydate=new Date();
      let myddy=mydate.getDay();
      let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date +"日"+weekday[myddy]+" "+hh+":"+mm+':'+ss ;
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,1000);
      this.clear()
    },
    clear(){
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    //判断类型
    judgeType(){
      let s=undefined;
      console.log(typeof(s));
    },
    //转换类型
    transferType(){
      let s='10.0001';
      console.log(parseInt(s));
    },
    //数组
    arrayFun(){
      let arr=new Array();
      arr=[12,'w',true,null,122]
      arr.splice(1111121,0,1)//push unshift splice
      console.log(arr);
      arr.forEach((item,index)=>{
        console.log(item,index);
      })
      //#region 
      /**
       * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

        map() 方法按照原始数组元素顺序依次处理元素。

        map() 不会对空数组进行检测。

        map() 不会改变原始数组。
       */
      //#endregion
    let arrOne=[1,2,3,1,2]
     function forMap(num){
       return num*10;
     } 
     console.log(arrOne.map(forMap));
    function sum(){
      let sum=0;
      for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
      }
      console.log(sum);
    }
    sum(1,2,3,4)
    
    /**
     * 一个函数作为参数转递，此函数称回调函数
     */
    function f1(fn){
     console.log('i ');
     fn();
    }
    function f2(){
      console.log('u');
    }
    f1(f2);
   
    /**
     * 创建对象的方式
     * 工厂模式
     * 自定义构造函数
     * 字面量方式创建
     */

    /**
     * json对象
     */
    let json=[ 
     {"name":"jack",'sex':'man','age':'25'},
     {"name":"jack1",'sex':'man1','age':'251'},
    ]
    let jsonNo={
      'name':'william',
      'location':'shanghai'
    }
    for(var key in json){
      console.log(key,json[key]);
      console.log(json[key].name);
    }
    for(let key in jsonNo){
      console.log(key,jsonNo[key]);
      console.log(new Date().toLocaleTimeString());
    }
    /**
     * 值类型的值存储在哪里？ 栈中存储具体的值
     * 引用类型的值存储在哪里？栈存放地址和堆中存放代码块
     * 内置对象：Math，Date，String，Array，Object
     */

    /**
     * 字符串常见方法
     * charAt:检查位置
     * concat：hebing
     * indexOf:索引位置
     * replace
     * slice
     * 
     */
    let s='hello world'
    console.log(s.charAt(8));
  
     }
  },
  watch: {
    second: {
      handler (newVal) {
        this.num(newVal)
      }
    },
    minute: {
      handler (newVal) {
        this.num(newVal)
      }
    },
    hour: {
      handler (newVal) {
        this.num(newVal)
      }
    }
  },
  computed: {
    second: function () {
      return this.num(this.seconds)
    },
    minute: function () {
      return this.num(this.minutes)
    },
    hour: function () {
      return this.num(this.hours)
    }
  },
  mounted () {
    this.cutTimeDown()
    this.nowTimes()
    this.clear()
    this.judgeType()
    this.transferType()
    this.arrayFun()
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  padding: 0 1.46rem 0 1.8rem
  margin-top: .2rem
  background: #ccc
.box
  height: 5.5rem
  .header
    padding: .2rem 0
.product-area
  height: 3.4rem
  text-align: center
  background: #fff
  .con-tit
    padding-top: .5rem
    color: red
  .img
    padding-top: .2rem
  .desc
    padding-top: .2rem
    font-size: 16px
    color: #b0b0b0
  .time-wrapper
    padding: .2rem .2rem 0 .65rem
    .ii
      font-size: 46px
      float: left
    .time-box
      margin: 5px
      width: 46px
      height: 46px
      background: #605751
      color: #fff
      font-size: 24px
      line-height: 46px
      float: left
</style>