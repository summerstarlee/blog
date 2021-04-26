const maxSumArray = arrs => {
    let ans = arrs[0]
    let sum = 0
    for(let num of arrs) {
        if(sum + num > num) {
            sum = sum + num
        } else {
            sum = num
        }

        ans = Math.max(ans, sum)
    }

    return ans;
}


const arr = [1,2,3]
console.log(maxSumArray(arr));