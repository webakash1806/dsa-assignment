function firstUnqChar(s) {
    const charFreq = {}

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (charFreq[char] === 1) {
            return i
        }
    }

    return -1
}

console.log(firstUnqChar("leetcode"))
console.log(firstUnqChar("loveleetcode"))
console.log(firstUnqChar("aabb"))