
let categoryIDs = [1,4,3,13, 16]

let jeopardyGrid = new jeopardyGrid (5, 5, 150, categoryIDs)

jeopardyGrid.updateDOM(document.body, jeopardyGrid.boardElement)


//Grid1.findOneCell(1,1).swapStyle("old-cell", "new-cell")

// Grid1.findOneCell(1,4).findNearestNeighbors()

// console.log(Grid1.findOneCell(1,1))
// find neighbors goes in grid class. look at actual grid. to be able to 
//see around it. 