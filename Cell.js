class Cell {
  constructor(rowIndex, columnIndex) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.cellDiv = this.createCells()
  }
  //insert create cells function here. can put datasets or classes and formatting  for each cell. each cell makes a div
  createCells() {
    let cellDiv = document.createElement('div')
    cellDiv.classList.add("old-cell")
    return cellDiv
  }
  swapStyle(oldClass, newClass){
    this.cellDiv.classList.add(newClass)
    this.cellDiv.classList.remove(oldClass) 
  }
  // findNeightbors(){

  // }
  // setAsClicked(){

  // }
  // setDefaultStyles(){
    
  // }
}