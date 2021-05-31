/**
 * 类型注释
 *
 */
function sayHello(person) {
    return 'Hello,' + person.firstName + person.lastName;
}
var user = { firstName: 'jack', lastName: 'luo' };
document.body.innerHTML = sayHello(user);
/**
 * class
 */
var student = /** @class */ (function () {
    function student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return student;
}());
var user1 = new student('william', 'm', 'luo');
