/* eslint-disable */
// ask if function can be put anywhere in the file

class Grid {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.cellArray = []
    this.container = document.getElementById('Grid')
    this.createGrid()
  }
  // Put create grid and draw grid here. make a column then make each cell, then another, and keep looping
  createGrid() {
    for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
      let columnElement = document.createElement('div')
      columnElement.classList.add("column");

      for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
        let cellObject = new Cell(rowIndex,columnIndex)
        // cell instances defined above
        columnElement.appendChild(cellObject.cellDiv)
        this.cellArray.push(cellObject)
        console.log(this.cellArray)
        // console.log(cellObject)
      }
      this.container.appendChild(columnElement)
    }

  };
  findOneCell(rowIndex, columnIndex){
    console.log(this.cellArray)
    let foundCell = this.cellArray.find(function (element) {
      console.log(rowIndex)
      return (element.rowIndex === rowIndex && element.columnIndex === columnIndex)
    })
    return foundCell
  }
  findNearestNeighbors (cellObject){
    
  }
  //callback function that tests the cell for column and row indexes
}

