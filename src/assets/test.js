const { prototype } = require("core-js/fn/dict");

/**
 * (async function () {
  console.log('start')
  await sleep(10000);
  console.log(new Date());
})(); 
 */
// (async function () {
//   console.log('start')
//   let str=''
//   this.prototype.sleep=function (str) {

//     setTimeout(console.log('start'),
//      str)
//   }
//   await sleep(10000);
//   console.log(new Date());
// })(); 
let arr = [1, 2, [3, 4], 5, 6, 1, [1, 2, [9, 0]]];
arr += '';
arr = arr.split('.')
console.log(arr);