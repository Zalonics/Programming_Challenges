const fs = require("fs")
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split(",")
    .map((num) => +num)
    .sort((a, b) => a - b)

let median
if (input.length % 2 == 0) {
    let a = input[input.length / 2]
    let b = a - 1
    median = Math.ceil((a + b) / 2)
} else {
    median = input[Math.floor(input.length / 2)]
}

const sum = input.reduce((acc, value) => {
    let x = Math.abs(value - median)
    return acc + x
}, 0)

console.log(sum)
