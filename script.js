/* eslint-disable */
// ask if function can be put anywhere in the file

class Grid {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.array = []
    this.container = document.getElementById('Grid')
    this.createGrid()
    this.drawGrid()
  }
  // Put create grid and draw grid here
  createGrid() {
    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      console.log(rowIndex)
    }
  }
  drawGrid() {
    for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
      console.log(columnIndex)
    }
  }
};

let Grid1 = new Grid({
  rows: 5, columns: 5
})

// find neighbors goes in grid class. look at actual grid. to be able to see around it. 

class Cell {
  constructor(rowIndex, columnIndex) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.createCells()
  }
  //insert create cells function here. can put datasets or classes and formatting  for each cell. each cell makes a div
  createCells() {
    let cellDiv = document.createElement('div')
    cellDiv.classList.add("cell");
  }

}
// push the row indexes into the array and cell class can pull.


