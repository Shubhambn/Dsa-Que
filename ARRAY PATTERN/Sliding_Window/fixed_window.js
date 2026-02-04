// 🧩 Problem
// Array:[2, 1, 5, 1, 3, 2]
// k = 3
// Question: 
//     Find the maximum sum of any continuous subarray of size 3


// const arr=[2, 1, 5, 1, 3, 2]
// console.log("Array:",arr)
let sum=0
function maxsumarr(arr,k=3){
    for (let i=0;i<k;i++){
        sum+=arr[i]
    }
    // console.log(sum)
    let maxval=sum
    let sumarr=sum
    for (let i=1;i+k-1<arr.length;i++){
        sumarr-=arr[i-1]
        console.log(sumarr)
        sumarr+=arr[i+k-1]
        console.log(sumarr)
        maxval=Math.max(maxval,sumarr)
        // console.log(maxval)
    }

    return maxval
}
console.log(maxsumarr([2, 1, 5, 1, 3, 2]))


// Time Complexity
// o(n) + o(n)[2 for loops]
// o(n)

// Space Complexity
