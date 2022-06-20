const isConnected = [
  [1,1,0],
  [1,1,0],
  [0,0,1],
]

const findCircleNum = (matrix) => {
  let circles = 0
  const visited = new Set()

  const dfs = (i) => {
    for (let j=0; j<matrix.length; j++) {
      if (matrix[i][j] === 1 && !visited.has(j)) {
        visited.add(j)
        dfs(j)
      }
    }
  }

  for (let i=0; i<matrix.length; i++) {
    if (!visited.has(i)) {
      circles++
      dfs(i)
    }
  }
  return circles
}

console.log(findCircleNum(isConnected))

const findProvinces = (matrix) => {
  let provinces = 0
  const visited = new Set()


}









