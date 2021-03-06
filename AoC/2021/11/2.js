const fs = require('fs')
const grid = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((line) => line.split('').map((num) => +num))

const flash = (y, x) => {
    // An indicator that it already flashed this round
    grid[y][x] = -1
    for (const dy of [-1, 0, 1]) {
        for (const dx of [-1, 0, 1]) {
            const yy = y + dy
            const xx = x + dx
            // Checking to see if its a valid point and if it already flashed
            if (
                0 <= yy &&
                yy < grid.length &&
                0 <= xx &&
                xx < grid[0].length &&
                grid[yy][xx] !== -1
            ) {
                grid[yy][xx]++
                if (grid[yy][xx] >= 10) {
                    flash(yy, xx)
                }
            }
        }
    }
}

const flashThemOctopi = () => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 10) {
                flash(y, x)
            }
        }
    }
}

const resetFlashes = () => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === -1) {
                grid[y][x] = 0
            }
        }
    }
}

const incrementOctopi = () => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            grid[y][x]++
        }
    }
}

const isAllFlash = () => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] !== 0) {
                return false
            }
        }
    }
    return true
}

const main = () => {
    const steps = 1000
    for (let i = 0; i < steps; i++) {
        incrementOctopi()
        flashThemOctopi()
        resetFlashes()
        if (isAllFlash()) {
            console.log(i + 1)
            break
        }
    }
}

main()
