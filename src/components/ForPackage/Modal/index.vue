<template>
    <div>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <solt>
          
      </solt>
    </a-modal>
    </div>
</template>
<script>
export default {
    props:{
        visible:{
            type:String,
        }
    },
    methods:{
        handleOk(e){
            console.log(e)
        }
    }
}
</script>