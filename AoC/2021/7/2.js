const fs = require("fs")
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split(",")
    .map((num) => +num)
    .sort((a, b) => a - b)

const mostFuelEfficient = (min, max) => {
    const sums = []
    for (let i = min; i < max; i++) {
        const sum = input.reduce((acc, value) => {
            let sumA = 0
            for (let j = 0; j <= Math.abs(i - value); j++) {
                sumA += j
            }
            return acc + sumA
        }, 0)
        sums.push(sum)
    }
    return Math.min(...sums)
}

console.log(mostFuelEfficient(Math.min(...input), Math.max(...input)))

