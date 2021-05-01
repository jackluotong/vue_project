<template>
    <div>
        <p>{{this.$store.state.count}}</p>
        <p ref='testRefs'>{{message}}</p>
         <p v-if="msg1">不用nexttick：{{msg1}}</p>
         <p v-if="msg2">用nexttick：{{msg2}}</p>

        <!-- <p>test nexttick: {{message}} </p>   -->
        <button @click="notUseNextTick">notUseNextTick</button>
        <button @click="$router.push({ name: 'March' })">router</button>

    </div>
</template>

<script>
export default {
    data () {
        return {
            message:'我是原来的值',
            msg1:'',
            msg2:'',
        }
    },
       
    methods: {
        notUseNextTick(){
            this.message='我是要改变的值'
            this.msg2=this.$store.state.count
            this.msg1=this.$refs.testRefs.innerHTML

            this.$nextTick(()=>{
                this.msg2=this.$refs.testRefs.innerHTML
            })

            this.$store.commit('increment')
        }
    }
}
</script>