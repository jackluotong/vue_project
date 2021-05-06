<template>
    <div>
            <p>       
                 {{nickName}}，{{age}},{{count}}
                 realName:{{realName}}
            </p>

            <button @click="testMapMutations">testMapMutations</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    data () {
        return {
            
        }
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
         ...mapMutations({testMapMutations:'increment'})
    }
}
</script>
