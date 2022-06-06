const fs = require('fs')
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const openers = ['{', '[', '<', '(']
const closers = ['}', ']', '>', ')']

const syntaxDict = {
    '}': '{',
    ']': '[',
    '>': '<',
    ')': '(',
}

const errorTally = {
    '}': 0,
    ']': 0,
    '>': 0,
    ')': 0,
}

const checkLine = (line) => {
    const stack = []
    for (const char of line) {
        if (openers.includes(char)) stack.push(char)
        if (closers.includes(char)) {
            if (syntaxDict[char] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                const expectedChar =
                    closers[openers.indexOf(stack[stack.length - 1])]
                console.log(
                    `Error has occurred: Expected ${expectedChar} but found ${char} instead`
                )
                errorTally[char]++
                break
            }
        }
    }
}

// Corruption when an opener and closer are adjacent on the stack but not matching
const tallyScores = (paranthesis, bracket, curlybrace, anglebracket) => {
    let a = paranthesis * 3
    let b = bracket * 57
    let c = curlybrace * 1197
    let d = anglebracket * 25137
    return a + b + c + d
}

lines.forEach((line) => {
    checkLine(line)
})

console.log(
    tallyScores(
        errorTally[')'],
        errorTally[']'],
        errorTally['}'],
        errorTally['>']
    )
)
