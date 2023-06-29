function distinctIntegers(nums1, nums2) {
    const set1 = new Set()
    const set2 = new Set()

    for (let num of nums1) {
        set1.add(num)
    }

    for (let num of nums2) {
        set2.add(num)
    }

    const result1 = []
    const result2 = []

    for (let num of nums1) {
        if (!set2.has(num)) {
            result1.push(num)
        }
    }

    for (let num of nums2) {
        if (!set1.has(num)) {
            result2.push(num)
        }
    }

    return [result1, result2]
}

const nums1 = [1, 2, 3]
const nums2 = [2, 4, 6]

const result = distinctIntegers(nums1, nums2)
console.log(result)
