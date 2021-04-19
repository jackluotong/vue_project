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
					<li
						v-for="(item, index, id) in april"
						:key="id"
						class="liClass"
					>
						{{ item.index }}{{ item.title }} <span>题目：</span>
						{{ item.name }}<br />答案：<span style="color: blue"
							>{{ item.answer }}.
						</span>
					</li>
				</ol>
				<a-button @click="testOne" style="float: left"
					>test one</a-button
				>
			</div>
		</a-card>
		<p>{{ message }}</p>
		<a-input
			v-model="message"
			placeholder="please input some thing."
		></a-input>
		<div class="div">
			<div class="div1"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			april: [
				{
					title: '04.01 X公司面试',
					name: 'spa与mpa的差别？具体是什么？',
					answer: '',
				},
				{ name: 'vue的单向数据流？', answer: '' },
				{ name: '从url输入到页面呈现？', answer: '' },
				{ name: '垂直居中？水平居中？', answer: '' },
				{ name: 'promise的原理？', answer: '' },
				{ name: '事件流？', answer: '' },
				{ name: '浏览器的缓存', answer: '强缓存协商缓存' },
				{
					title: '04.06 X公司面试',
					name: 'js的垃圾回收机制？',
					answer: '',
				},
				{
					name: '什么场景下要规避闭包？',
					answer: 'setTimeout 回调函数',
				},
				{
					name: '为什么const定义的对象可以改变？',
					answer:
						'如果是基本数据类型再次修改会报错,如果是object是引用类型的不变的是其指针,但是属性可以改变的',
				},
				{ name: '垂直居中？水平居中？', answer: '' },
				{ name: 'rem？rem原理？', answer: '' },
				{ name: 'v-if v-show的使用场景？以及区别？', answer: '' },
				{ name: '微前端？', answer: '' },
				{
					title: '04.07 X公司面试',
					name: 'flex布局实现垂直水平居中？需要知道其中的宽度嘛？',
					answer: '',
				},
				{
					name: 'keep-alive缓存失效问题？',
					answer: ' ',
				},
				{
					name: ' 路由导航首位的应用？',
					answer: '  ',
				},
				{ name: 'mvvm mvc的区别？', answer: '' },
				{ title: '04.12花柱面试', name: 'vuex中的缓存？', answer: '' },
				{ name: 'keep-alive的原理？', answer: '' },
				{
					title: '04.19面试',
					name: 'vue中的data为什么是函数？',
					answer: '',
				},
				{ name: 'es6 7新特性？', answer: '' },
				{ name: '数组字符串的一些api？', answer: '' },
				{ name: '事件循环？', answer: '' },
				{ name: 'js如何判断数组？', answer: '' },
				{ name: '深拷贝和浅拷贝？', answer: '' },
				{ name: 'pc端兼容性问题？', answer: '' },
				{ name: '组件的封装？', answer: '' },
				{ name: '操作DOM BOM?', answer: '' },
			],
		}
	},
	methods: {
		testOne: function () {
			let arr = new Array(1, 2, 3)
			let a = arr.push(1, 2, 4)
			let b = [1, 2, 3, 11, 22, 33]
			let c = [0]
			console.log(c.concat(b), a)
			setTimeout(() => {
				console.log(this)
			}, 10)
			//splice(开始位置， 删除的个数，元素) 实现增删改
			setTimeout(() => {
				console.log('setTimeout')
			}, 0)
			new Promise((resolve) => {
				//  console.log('resolve');
				setTimeout(() => {
					console.log('resolve in promise')
				}, 10)
				resolve('resolve is res?')
			}).then((res) => {
				console.log(res)
			})
		},
	},
}
</script>
<style scoped>
.content {
	float: left;
}
.liClass {
	text-align: left;
}
button {
	margin-left: 4px;
}
.btn {
	vertical-align: center;
	margin: 0 auto;
}
.div {
	display: flex;
	justify-content: center;
	height: 200px;
	width: 200px;
	background: red;
}
.div1 {
	align-items: center; /* 水平居中 */
	align-self: center; /*垂直居中 */
	height: 100px;
	width: 100px;
	background: rgb(10, 82, 238);
}
</style>
