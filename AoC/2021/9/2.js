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

const lowPoints = []
for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        if (isLowPoint(y, x)) {
            lowPoints.push([y, x])
        }
    }
}
console.log(lowPoints)

const visitAllNeighbors = (y, x) => {
    let output = []
    let currentPoint = +grid[y][x]
    let candidate

    const isValid = (currentPoint, candidate) => {
        if (candidate > currentPoint && candidate !== 9) {
            return true
        }
    }

    //Down
    if (y !== grid.length - 1) {
        candidate = +grid[y + 1][x]
        if (isValid(currentPoint, candidate)) output.push([y + 1, x])
    }
    //Up
    if (y !== 0) {
        candidate = +grid[y - 1][x]
        if (isValid(currentPoint, candidate)) output.push([y - 1, x])
    }
    //Right
    if (x !== grid[0].length - 1) {
        candidate = +grid[y][x + 1]
        if (isValid(currentPoint, candidate)) output.push([y, x + 1])
    }
    //Left
    if (x !== 0) {
        candidate = +grid[y][x - 1]
        if (isValid(currentPoint, candidate)) output.push([y, x - 1])
    }
    return output
}

// const visited = new Set()

// for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid[0].length; x++) {
//         if (!visited.has(`${y},${x}`) && grid[y][x] != '9') {
//             let size = 0
//             let queue = []
//             queue.push(`${y},${x}`)
//             while (queue.length !== 0) {
//                 if (visited.has(`${y},${x}`)) {
//                     continue
//                 }
//                 visited.add(`${y},${x}`)
//                 size++
//                 const neighbors = visitAllNeighbors(y, x)
//                 neighbors.forEach(([y,x]) => {
//                     if
//                 })
//             }
//         }
//     }
// }
