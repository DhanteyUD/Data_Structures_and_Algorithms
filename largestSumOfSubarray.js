//* Find the largest sum of a contiguous subarray (Kadane’s Algorithm).

// Using for-of loop:
function maxSumOfSubarray(array) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let num of array) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Using for loop:
function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumOfSubarray(nums)); 