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

const bracketVal = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
}

const isCorruptedLine = (line) => {
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
                return true
            }
        }
    }
    return false
}

const checkLine = (line) => {
    const stack = []
    for (const char of line) {
        if (openers.includes(char)) stack.push(char)
        if (closers.includes(char)) {
            if (syntaxDict[char] === stack[stack.length - 1]) {
                stack.pop()
            }
        }
    }
    const missing = stack
        .map((char) => {
            return closers[openers.indexOf(char)]
        })
        .reverse()
    console.log(`Complete by adding ${missing.join('')}`)
    const completionScore = missing.reduce((acc, val) => {
        return acc * 5 + bracketVal[val]
    }, 0)
    return completionScore
}

const completionScores = []
lines
    .filter((line) => !isCorruptedLine(line))
    .forEach((line) => {
        completionScores.push(checkLine(line))
    })
completionScores.sort((a, b) => a - b)
console.log(completionScores[Math.floor(completionScores.length / 2)])
