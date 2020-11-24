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
  name: 'HomeCuttime',
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