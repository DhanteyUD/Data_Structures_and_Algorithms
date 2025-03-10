//* Find the largest sum of a contiguous subarray (Kadane’s Algorithm).

function maxSumOfSubarray(array) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let num of array) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumOfSubarray(nums)); 