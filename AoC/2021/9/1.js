const fs = require('fs')
const grid = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const isUpValid = (y, x) => {
    if (y === 0) {
        return true
    }
    return grid[y - 1][x] > grid[y][x] ? true : false
}

const isDownValid = (y, x) => {
    if (y === grid.length - 1) {
        return true
    }
    return grid[y + 1][x] > grid[y][x] ? true : false
}

const isRightValid = (y, x) => {
    if (x === grid[0].length - 1) {
        return true
    }
    return grid[y][x + 1] > grid[y][x] ? true : false
}

const isLeftValid = (y, x) => {
    if (x === 0) {
        return true
    }
    return grid[y][x - 1] > grid[y][x] ? true : false
}

const isLowPoint = (y, x) => {
    if (!isUpValid(y, x)) return false
    if (!isDownValid(y, x)) return false
    if (!isRightValid(y, x)) return false
    if (!isLeftValid(y, x)) return false
    return true
}

let riskLevel = 0

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        if (isLowPoint(y, x)) {
            riskLevel += +grid[y][x] + 1
        }
    }
}

console.log(riskLevel)
