const fs = require('fs')

const grid = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((line) => line.split('').map((num) => +num))

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

const getLowPoints = () => {
    const lowPoints = []
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (isLowPoint(y, x)) {
                lowPoints.push([y, x])
            }
        }
    }
    return lowPoints
}

const getBasinSizeGivenPoint = (y, x) => {
    const visited = new Set()
    const queue = []
    queue.push([y, x])
    while (queue.length !== 0) {
        let [y, x] = queue[0]
        // Queue up Neighbors
        const isBeingVisited = (y, x) => {
            if (grid[y][x] === 9) {
                return false
            }
            if (visited.has(`${y},${x}`)) {
                return false
            }
            return true
        }
        const checkTopNeighbor = (y, x) => {
            if (y === 0) {
                return
            }
            if (isBeingVisited(y - 1, x)) {
                queue.push([y - 1, x])
                visited.add(`${y},${x}`)
            }
        }
        const checkBottomNeighbor = (y, x) => {
            if (y === grid.length - 1) {
                return
            }
            if (isBeingVisited(y + 1, x)) {
                visited.add(`${y},${x}`)
                queue.push([y + 1, x])
            }
        }
        const checkRightNeighbor = (y, x) => {
            if (x === grid[0].length - 1) {
                return
            }
            if (isBeingVisited(y, x + 1)) {
                queue.push([y, x + 1])
            }
        }
        const checkLeftNeighbor = (y, x) => {
            if (x === 0) {
                return
            }
            if (isBeingVisited(y, x - 1)) {
                queue.push([y, x - 1])
            }
        }
        visited.add(`${y},${x}`)

        checkTopNeighbor(y, x)
        checkBottomNeighbor(y, x)
        checkLeftNeighbor(y, x)
        checkRightNeighbor(y, x)
        // Dequeue Initial Point and
        queue.shift()
    }
    return [...visited].length
}

const lowPoints = getLowPoints()
const basins = lowPoints
    .reduce((acc, [y, x]) => {
        return [...acc, getBasinSizeGivenPoint(y, x)]
    }, [])
    .sort((a, b) => b - a)
const [a, b, c] = basins
console.log(a * b * c)
