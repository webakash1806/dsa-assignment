function move(nums) {
    let i = 0
    let j = 0
    while (j < nums.length) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
        j++
    }

    while (i < nums.length) {
        nums[i] = 0
        i++
    }
}

const nums = [0, 1, 0, 12, 3]
move(nums)
console.log(nums)