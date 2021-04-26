//实现promise串行
//一个封装的延迟函数，然后一个装有 延迟函数 的数组，
//需求就是在开始执行时依次等待 3, 2, 1 秒，并在之后打印对应输出
//输出如下

/*
wait 3000ms // 等待3s
promise 1
wait 2000ms // 等待2s
promise 2
wait 1000ms // 等待1s
promise 3
*/

//封装的延迟函数
const createPromise = (time, id) =>
    () =>
new Promise(solve =>{
console.log(`wait ${time}ms`);
setTimeout(() => {
console.log("promise", id); solve('done');
            }, time) });
//一个装有 延迟函数 的数组
let promiseArr = [
createPromise(3000, 1),
createPromise(2000, 2),
createPromise(1000, 3)
]
function iteratorPromise(promiseArr){
// TODO: 编写代码
    promiseArr.reduce((cur, next) => {
        return cur.then(next)
    }, Promise.resolve())
}
// iteratorPromise(promiseArr);

const find = (nums, target) => {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if(target === nums[mid]) {
            return mid
        }
        if(nums[mid] < target) {
            start = mid + 1
        }else if(nums[mid] > target) {
            end = mid - 1
        }
    }
    return -1
}

const arr = [0, 2, 3, 4, 6, 10]

console.log(find(arr, 4))

