/**
 * 基础静态类型和对象静态类型
 * 对象类型 数组类型 类类型 函数类型
 */
const count1:number=11;
const myName:string='jack';

const obj:{
    name:string,
    age:number
}={
    name:'jack',
    age:26
}

const objs:string[]=['jack','william','jerry']

class Person{}
const jerry:Person=new Person()
const meet:()=>string=()=>{return 'meet'}
