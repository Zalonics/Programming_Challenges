const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const REGEX_GET_DISPLAY_NUMBERS = /\| (\w+) (\w+) (\w+) (\w+)/

const arrOfSegments = input.map(line => {
    const [_match, a, b, c, d] = line.match(REGEX_GET_DISPLAY_NUMBERS)
    return [a.sort(), b.sort(), c.sort(), d.sort()]
})

const dict = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
}

arrOfSegments.forEach(segments => {
    for (const segment of segments) {
        if (segment.length === 2) {
            dict['1']++
        }
        if (segment.length === 4) {
            dict['4']++
        }
        if (segment.length === 3) {
            dict['7']++
        }
        if (segment.length === 7) {
            dict['8']++
        }
    }
}
)

const sum = Object.values(dict).reduce((acc, value) => {
    return acc + value
}, 0)

console.log(sum)
