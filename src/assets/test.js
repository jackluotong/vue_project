

/**
 * (async function () {
  console.log('start')
  await sleep(10000);
  console.log(new Date());
})(); 
 */
(async function () {
  console.log('start')
 
  
  console.log(new Date());
})(); 
let arr = [1, 2, [3, 4], 5, 6, 1, [1, 2, [9, 0]]];
arr += '';
arr = arr.split('.')
console.log(arr);
const test={
      a:function(a){
            console.log('module a',a);
      }
}
// const Test={
//       a:function(a){
//             console.log('module a',a);
//       }
// }

export default  test
export const S='1'