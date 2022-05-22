const fs = require("fs")
let lanternFishArr = fs
    .readFileSync("./input.txt", "utf-8")
    .split(",")
    .map((num) => +num)

const days = 80

for (let i = 0; i < days; i++) {
    lanternFishArr = lanternFishArr.map((fishState) => fishState - 1)
    lanternFishArr.forEach((fishState, index) => {
        // is giving birth
        if (fishState === -1) {
            // Reset fish state
            lanternFishArr[index] = 6
            // Create Baby
            lanternFishArr.push(8)
        }
    })
    console.log(lanternFishArr.length)
}
