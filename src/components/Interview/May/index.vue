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
          <li v-for="(item, index) in may" :key="index" class="liClass">
                <div class="titleFather">
                        <p class="title">
                          {{ item.index }}{{ item.title }}
                        </p>
                </div>
              
             <span>题目： {{ item.name }}<br /></span>
                   答案：<span style="color: blue">{{ item.answer }}. </span>
          </li>
        </ol>
         <p>       
                 {{nickName}}，{{age}},{{count}}
                 realName:{{realName}}
         </p>

            <button @click="testMapMutations">testMapMutations</button>
      </div>
    </a-card>
    </div>
</template>

<script>
/**
 * export 导出的在导入的时候用{}
 * export default 导出的在导入的时候不用{}
 */
import test,{S} from '../../../assets/test'
import {mapState,mapGetters,mapMutations} from 'vuex'

// let Test=require('../../../assets/test')
let jsonData=require('../../../assets/Data/MayData/index')//json对象中的数组
export default {
    data () {
        return {
              may:jsonData.may,
        }
    },
    mounted(){
          test.a(1)
      //     Test.a(111)
          console.log(test,'test',S);
    },
    computed:{
        /* 
        单个引入方法
        */
    // nickName(){return this.$store.state.nickName},
    /* 
        针对较多的属性
        用mapState等这种辅助函数的时候，前面的方法名和获取的属性名是一致的。
    */
        ...mapState(['nickName','age','count']),
        ...mapGetters(['realName']),
       
    },
    methods:{
         ...mapMutations({testMapMutations:'increment'}),

    }
}
</script>
<style scoped>
/* .content {
  float: left;
} */
.liClass {
  text-align: left;
}
.title{
      font-size: 30px;
      color: brown;  
      width: 300px;
      position:relative;
      animation:myfirst 5s;
}
p:hover{
      background-color: rgb(157, 255, 0);
      transform: scale(1.5);
}
@keyframes myfirst
{
	0%   {background:red; left:0px; top:0px;}
	25%  {background:yellow; left:200px; top:0px;}
	50%  {background:blue; left:200px; top:200px;}
	75%  {background:green; left:0px; top:200px;}
	100% {background:red; left:0px; top:0px;}
}

</style>