<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ForNextTick/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ForNextTick from '../components/pages/ForNextTick'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    ForNextTick
  },
  mounted(){
    console.log('this is mounted');
  }
}
</script>
