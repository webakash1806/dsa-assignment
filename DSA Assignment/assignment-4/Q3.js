function transpose(matrix) {
    const transpose = Array(matrix[0].length)
        .fill(0)
        .map(() => Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = transpose(matrix);
console.log(result);
