
/**
 * interface
 */
interface Person{
  firstName:string;
  lastName:string;
}
/**
 * 类型注释
 * 
 */

function sayHello(person:Person){
  return 'Hello,'+person.firstName+person.lastName  ;
}
let user={firstName:'jack',lastName:'luo'};
document.body.innerHTML=sayHello(user)

/**
 * class
 */
class student{
fullName:string;
constructor(public firstName,public middleInitial,public lastName){
  this.fullName=firstName+''+middleInitial+''+lastName;
  }
}
let user1=new student('william','m','luo');
