<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Practice/>
    <a-button @click='TransferValueFatherPage()'>testFatherToSon</a-button>
    <a-button @click='TransferValueSonPage()'>testSonToFather</a-button>
  </div>
</template>

<script>
import Practice from '@/components/Practice.vue';

export default {
  name:'About',
  components:{
    Practice
  },
  methods: {
    TransferValueFatherPage(){
     this.$router.push({
       path:'/Father',
       name:'Father',
       query:{
         id:1
       }
       })
    },
    TransferValueSonPage(){
      this.$router.push({
        path:'/Son',
        name:'Son',
        query:{
          id:2
        }
      })
    }
  },
}
</script>