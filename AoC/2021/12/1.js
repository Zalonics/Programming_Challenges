let fs = require('fs')
let input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

const createAdjacenyList = () => {
    const adjacenyList = {}
    input.forEach((caveLink) => {
        const [_, a, b] = caveLink.match(/(\w+)-(\w+)/)
        if (!adjacenyList[a]) {
            adjacenyList[a] = new Set()
        }
        if (!adjacenyList[b]) {
            adjacenyList[b] = new Set()
        }
        adjacenyList[a].add(b)
        adjacenyList[b].add(a)
    })
    return adjacenyList
}

const solve = () => {
    const visited = new Set('start')
    const start = 'start'
    const ans = 0
    const Q = []
    while (Q.length > 0) {}
}

const adjacenyList = createAdjacenyList()
console.log(adjacenyList)
