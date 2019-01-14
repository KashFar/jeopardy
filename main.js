let Grid1 = new Grid({
  rows: 5, columns: 5
})

console.log(Grid1.findOneCell(1,1))
console.log(Grid1.findNearestNeighbors())
Grid1.findOneCell(1,4).swapStyle("old-cell", "new-cell")

// find neighbors goes in grid class. look at actual grid. to be able to 
//see around it. 