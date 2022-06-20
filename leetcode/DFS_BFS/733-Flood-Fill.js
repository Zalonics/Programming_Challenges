//https://leetcode.com/problems/flood-fill/
const image = [
  [1,1,1],
  [1,1,0],
  [1,0,1],
]

const sr = 1 
const sc = 1
const color = 2

/**
 * @param {number[][]} image
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
const isValidPoint = (image,row,col) => {
  if (row === -1 || row === image.length) {
    return false 
  }
  if (col === -1 || row === image[0].length) {
    return false
  }
  return true
}

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const floodFill = (image,sr,sc,color) => {
  const visited = new Set()
  const queue = [[sr,sc]]
  const target = image[sr][sc]

  while (queue.length !== 0) {
    for (const r of [-1,0,1]) {
      for (const c of [-1,0,1]) {
        let [row, col] = queue[0]
        row += r
        col += c
        // If its not N,W,S,E in other words cant be NW,SE,SW,NE or Out of bounds
        if ((r !== 0 && c !==0) || !isValidPoint(image,row,col)) {
          continue
        }
        if (!visited.has(`${row}:${col}`) && image[row][col] === target) {
          visited.add(`${row}:${col}`) 
          image[row][col] = color
          queue.push([row,col])
        }
      }
    }
    queue.shift()
  }
}

floodFill(image, sr, sc, color)
console.table(image)
