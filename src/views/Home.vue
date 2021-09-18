<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-05-01 08:11:10
 * @LastEditors: william
 * @LastEditTime: 2021-09-17 11:10:11
 * @For What?: 
-->
<template>
    <div class="home">
        <ForNextTick />
    </div>
</template>

<script>
// @ is an alias to /src
import ForNextTick from '../components/pages/ForNextTick'
export default {
    name: 'Home',
    components: {
        ForNextTick,
    },
    mounted() {
        console.log('this is mounted')
        this.testClass()
    },
    methods: {
        testClass() {
            class A {
                constructor(name) {
                    this.name = name
                    this.say = () => {
                        console.log(name)
                    }
                }
            }
            class B extends A {}
            let a = new A('jack')
            let b = new B()
            console.log(a, b)
            a.say()
            class C {
                say(name) {
                    console.log(name)
                }
            }
            let c = new C()
            c.say('jack')
            console.log(c)
        },
    },
}
</script>
