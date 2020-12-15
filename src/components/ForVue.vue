<template>
  <div style="background:#ECECEC; padding:20px;">
    <a-card
      title="refs&watch"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <input
          type="text"
          ref="input1"
        />
        <button
          @click="add"
          ref="opt1"
        >{{ value }}</button>
      </div>
    </a-card>
    <a-card
      title="指令&修饰符"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <p>常见指令有:v-if/else,v-on=@,v-bind=:,v-for,v-model...</p>
        <p>常见修饰符有：prevent</p>
      </div>
    </a-card>
    <a-card
      title="computed&watch"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <p>{{ fullname }}</p>
        <a-divider>watch</a-divider>
        <p>Ask a yes/no quesion: <input
            type="text"
            v-model="question"
          /></p>
        <p>{{ answer }}</p>
        <p ref="old">new</p>
        <P ref="new">{{ old }}</P>
      </div>
    </a-card>
    <a-card
      title=" Class&Style绑定&条件渲染"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <p :style="styleObject">我是用对象做的样式绑定</p>
        <a-divider>条件渲染</a-divider>
        <p v-if="active">v-if</p>
        <p>v-if vs v-show
          v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

          v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

          相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

          一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，
          则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
        </p>
        <p>v-for 具有比 v-if 更高的优先级</p>
      </div>
    </a-card>

    <a-card
      title="列表渲染"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <ul>
          <li
            v-for="(item,index) in items"
            :key="index"
          >
            {{index}}:{{item.name}}
          </li>
        </ul>
        <ul>
          <li
            v-for="(value,name,index) in object"
            :key="index"
          >
            {{index}}:{{name}}:{{value}}
          </li>
        </ul>
        <a-divider>数组</a-divider>
        <p>push()
          pop()
          shift()
          unshift()
          splice()
          sort()
          reverse()</p>
      </div>
    </a-card>
    <a-card
      title="事件处理"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <a-button
          type="primary"
          @click="clickOne"
        >
          Primary
        </a-button>
        <a-button
          type="primary"
          @click="say('what')"
        >
          Primary
        </a-button>
        <a-divider>事件修饰符</a-divider>
        <p>.stop/prevent/capture/self/once/passive</p>
      </div>
    </a-card>
    <a-card
      title="表单输入绑定"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <p>{{messageOne}}</p>
        <input
          type="text"
          v-model="messageOne"
          placeholder="edit me"
        >
        <input
          type="checkbox"
          id="jack"
          value="jack"
          v-model="checkedNames"
        >
        <label for="jack">jack</label>
        <input
          type="checkbox"
          id="jack"
          value="jackluo"
          v-model="checkedNames"
        >
        <label for="jack">jackluo</label>
        <hr>
        <span>checked names:{{checkedNames}}</span>
      </div>
    </a-card>
    <a-card
      title="深入了解组件"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <p><a href="https://www.cnblogs.com/july-sunny/p/11687008.html">通过 Prop 向子组件传递数据</a></p>
        <p><a href="https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E9%80%92%E9%9D%99%E6%80%81%E6%88%96%E5%8A%A8%E6%80%81-Prop">
            $emit</a></p>
        <a-divider>Prop</a-divider>
        <h2>传递静态或动态 Prop</h2>
        <h2>单向数据流</h2>
        <h2>prop验证|验证类型可以是：String/Number/Boolean/Array/Object/Date/Function/Symbol</h2>
        <h1><a href="https://www.jianshu.com/p/7024d34a144a">插槽slot</a></h1>
        <p>为了子组件中更好的传值</p>
      </div>
    </a-card>
    <a-card
      title="动态组件 & 异步组件"
      :bordered="false"
      style="width:98%;margin:0 auto"
    >
      <div class="content">
        <button @click="show = !show">
          Toggle render
        </button>
        <transition name="slide-fade">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </a-card>
    <a-card
      title="深入响应式原理"
      :bordered="false"
      style="width:98%;margin:0 auto"
      @click="vueSenior"
    >
      <div></div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 'rigion',
      firstName: 'luo',
      lastName: 'William',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      old: '',
      styleObject: {
        color: 'red',
        fontsize: '40px',
      },
      active: true,
      items: [//v-for 遍历数组 item in items，遍历对象 value in object
        { name: 'jack' },
        { name: 'william' }
      ],
      object: {
        title: 'man',
        author: 'jackluo',
        publish: 'sh'
      },
      name: 'Vue.js',
      messageOne: 'hello',
      checkedNames: [],
      show: true,
    }
  },
  watch: {
    value(newName, oldName) {
      console.log('this is new name' + newName)
      console.log('this is old name' + oldName)
    },
    question(newQuestion, oldQuestion) {
      this.answer = 'Wating for you...'
      this.$nextTick(function () {
        this.$refs.new.value = newQuestion
        this.old = oldQuestion
        console.log('new value' + this.$refs.new.value)
      })
      console.log(newQuestion, oldQuestion)
    },
  },
  methods: {
    add: function () {
      console.log(this.$refs.input1.value)
      let s = this.$refs.input1.value
      if (!s) {
        alert('please input value.')
        return false
      } else {
        let that = this
        console.log(that)
        that.value = that.$refs.input1.value
        this.$nextTick(function () {
          console.log(that.$refs.opt1.innerText)
        })
      }
    },
    clickOne: function (event) {
      alert(this.name)
      if (event) {
        alert(event.target.tagName)
        console.log(event);
      }
    },
    say: function (message) {
      alert(message)
    },
    vueSenior: function () {
      window.open('https://cn.vuejs.org/v2/guide/reactivity.html');
    }
  },
  computed: {
    fullname: function () {
      return this.firstName + ',' + this.lastName
    },
  },
}
</script>
<style scoped>
.content {
  text-align: left;
}
</style>
