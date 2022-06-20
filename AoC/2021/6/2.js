const fs = require("fs")
let lantern_fishies = fs
    .readFileSync("./input.txt", "utf-8")
    .split(",")
    .reduce(
        (acc, value) => {
            return { ...acc, [value]: ++acc[value] }
        },
        {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
        }
    )

const days = 256
for (let i = 0; i < days; i++) {
    const copy = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
    }
    for (const [key, value] of Object.entries(lantern_fishies)) {
        if (key === "0") {
            copy[6] += value
            copy[8] += value
            continue
        }
        copy[+key - 1] += value
    }
    lantern_fishies = copy
}

const sum = Object.values(lantern_fishies).reduce((acc, val) => {
return acc + val
}, 0)


console.log(sum)
