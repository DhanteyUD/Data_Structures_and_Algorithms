//*  Given an array of numbers, return two numbers that sum up to a given target (Two Sum Problem).

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }

        map.set(nums[i], i);
    }

    return [];
}


const nums = [11, 2, 15, 7];
const target = 9;
console.log(twoSum(nums, target));