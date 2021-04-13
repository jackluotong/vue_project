/**
 * 静态类型 变量类型以及属性都是不可以改变的
 * interface
 */
let count:number=2;

interface person{
    userName:string,
    age:number
}
const jack:person={
    userName:'jack',
    age:26
}
console.log(jack.age);
