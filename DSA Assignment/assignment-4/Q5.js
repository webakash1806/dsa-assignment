function ladderOfCoins(n) {
    let row = 1

    while (n >= row) {
        n -= row
        row++
    }

    return row - 1
}

const n = 5
const result = ladderOfCoins(n)
console.log(result)