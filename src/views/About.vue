<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Practice/>
  </div>
</template>

<script>
import Practice from '@/components/Practice.vue';

export default {
  name:'About',
  components:{
    Practice
  }
}
</script>