function arraySum(nums) {
    nums.sort((a, b) => a - b)

    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i]
    }

    return maxSum
}

const nums = [1, 4, 3, 2];
const result = arraySum(nums)
console.log(result)
