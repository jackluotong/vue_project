/**
 * debounce
 *
 */

export const debounce = (fn, wait) => {
    let timer = 0
    let timeStamp = 0
    let context, args

    let run = () => {
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
    let clean = () => {
        clearTimeout(timer)
    }

    return function() {
        context = this
        args = arguments
        let now = new Date().getTime()

        if (now - timeStamp < wait) {
            console.log('reset', now)
            clean()
            run()
        } else {
            console.log('set', now)
            run()
        }
        timeStamp = now
    }
}
