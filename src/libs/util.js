/*
 * @Author: your name
 * @Date: 2021-06-09 21:56:13
 * @LastEditTime: 2021-07-29 21:08:47
 * @LastEditors: william
 * @Description: In User Settings Edit
 * @FilePath: \vue_project\src\libs\util.js
 */
export const test = () => {
    /**
     * @description:
     * @param {*}
     * @return {*}
     */
}
/**
 * @name:flatten array
 * @test:
 * @msg:first make array flatten second unique array third sort array
 * @param {*array}
 * @return {*flatten}
 */

export const flattenReduce = (array) => {
    if (Array.isArray(array)) {
        return array.reduce((result, item) => {
            return Array.from(
                new Set(
                    result.concat(
                        Array.isArray(item) ? flattenReduce(item) : item
                    )
                )
            ).sort()
        }, [])
    } else {
        alert('不是数组')
    }
}
export const flattenSplit = (array) => {
    return array
        .toString()
        .split(',')
        .map((item) => {
            return Number(item)
        })
}
/**
 * @name: array unique
 * @test:
 * @msg:
 * @param {*}
 * @return {*}
 */

/**
 * @name:array sort
 * @test:
 * @msg:
 * @param {*}
 * @return {*}
 */
