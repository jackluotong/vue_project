<template>
    <div>
        <span>Test common component</span>
        <span :src="userName"></span>
    </div>
</template>
<script>
export default {
    props: {
        userName: {
            type: String,
            default: 'xxxx',
        },
    },
    mounted() {
        console.log(this.userName)
    },
}
</script>
