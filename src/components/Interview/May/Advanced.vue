<template>
	<div style="background: #ececec; padding: 20px">
		<!-- all arithmetic from 2021.04.01 -->
		<a-card
			title="Interview"
			:bordered="false"
			style="width: 98%; margin: 0 auto"
		>
			<a-button @click="$router.push({ name: 'Advanced' })">
				查看高级程序设计</a-button
			>
			<div class="content">
				<ol>
					<li
						v-for="(item, index) in advanced"
						:key="index"
						class="liClass"
					>
						<span> 题目：{{ item.name }} </span>
						<p>
							<span> 答案： {{ item.answer }} </span>
						</p>
					</li>
				</ol>
			</div>
		</a-card>
	</div>
</template>
<script>
let advanced = require('../../../assets/Data/SummaryJavaScript/index.json')
export default {
	data() {
		return {
			advanced: advanced.SuperJs,
		}
	},
}
</script>
<style scoped>
/* .content {
  float: left;
} */
.liClass {
	text-align: left;
}
.title {
	font-size: 30px;
	color: brown;
	width: 300px;
	position: relative;
	animation: myfirst 5s;
}
p:hover {
	background-color: rgb(157, 255, 0);
	/* transform: scale(1.5); */
}
/* @keyframes myfirst {
	0% {
		background: red;
		left: 0px;
		top: 0px;
	}
	25% {
		background: yellow;
		left: 200px;
		top: 0px;
	}
	50% {
		background: blue;
		left: 200px;
		top: 200px;
	}
	75% {
		background: green;
		left: 0px;
		top: 200px;
	}
	100% {
		background: red;
		left: 0px;
		top: 0px;
	}
} */
</style>
