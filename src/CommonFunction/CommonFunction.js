let commonFun = {
	throttle: function(fn, interval) {
		let last = 0
		return function(...args) {
			let context = this
			let now = +new Date()
			// 还没到时间
			if (now - last < interval) return
			last = now
			fn.apply(context, args)
		}
	},
	debounce: function(fn, delay) {
		let timer = null
		return function(...args) {
			let context = this
			if (timer) clearTimeout(timer)
			timer = setTimeout(function() {
				fn.apply(context, args)
			}, delay)
		}
	},
}
