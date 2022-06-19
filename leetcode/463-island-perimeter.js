const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
]
/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    let perimeter = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += countSides(i, j)
            }
        }
    }
    return perimeter
}

function isEmptySquare(r, c) {
    if (r < 0 || r > grid.length - 1) return true
    if (c < 0 || c > grid[0].length - 1) return true
    if (grid[r][c] === 0) return true

    return false
}

function countSides(r, c) {
    let sides = 0
    if (isEmptySquare(r - 1, c)) sides++
    if (isEmptySquare(r + 1, c)) sides++
    if (isEmptySquare(r, c - 1)) sides++
    if (isEmptySquare(r, c + 1)) sides++
    return sides
}
