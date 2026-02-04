// 🧩 Problem
// Array: [2, 1, 5, 1, 3, 2]
// k = 3
// Question:
// Find the maximum sum of any continuous subarray of size k

function maxSumSubarray(arr, k = 3) {
    // Edge case: if array length is smaller than k
    if (arr.length < k) return null;

    // Step 1: Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Step 2: Slide the window
    for (let i = 1; i <= arr.length - k; i++) {
        windowSum -= arr[i - 1];        // remove element leaving the window
        windowSum += arr[i + k - 1];    // add element entering the window
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2]));
