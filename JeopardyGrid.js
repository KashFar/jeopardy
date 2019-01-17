class JeopardyGrid extends Grid {
  constructor(columns, rows, cellSize, categoryIDs, jeopardyCategoryULR =
    super(columns, rows, cellSize)
    this.categoryIDs = categoryIDs
    this.jeopardyCategoryURL = jeopardyCategoryURL
    this.playerPoints = 0

    this.categories = this.getCategories()
}

async getCategories() {
  cost categoryPromises = this.categoryIDs.map(id => {
    return fetch(this.jeopardyCategoryULR + id).then(res => res.json())
  })
  this.categories = await Promize.all(categoryPromises)

  this.assignCategories

  assignCategories(){
    let clueNumber = 6
    //need question, input box and a submit button.
    for (let i = 0; i < this.categories.length; i++) {
      for (let j = 1; j < clueNumber; j++) {
        const clue = this.categories[i][j]  // so we can use 100 to 600 after we multiply i and j. to keep values same use -1 here 
        let cellElement = this.cellGrid[i][j].cellElement

        let clueValue = clue.value

        let catQuestionText = document.createTextNode(clueValue)
        cellElement.appendChild(catQuestionText)

        const boundClickHandler = this.unboundClickHandler.bind(this, clue)
        cellElement.addEventListener('click', boundClickHandler)
      } else {
        clueNumber++
      }
    })
  }
}
}
unboundClickHandler(clue){
  // const clue = this.categories[i][j], this needs to be deleted to be able to use clue as a parameter
  let clueQuestion = clue.question
  let clueAnswer = clue.answer
  let clueValue = clue.value

  const userAnswer = prompt(clueQuestion)  // can't use this. with event listeners
  // the this. would become the cell you are clicking on now. not the Jgrid that it was all this time.

  if (userAnswer.toLowerCase() === clueAnswer.toLowerCase()) {
    this.playerPoints += Number(clueValue)
    alert(`Your answer is correct. You now have: ${this.playerPoints} +  points.`)

    // could have an h1 and h2 divs showing divs constantly. instead of having an alert.
    // you would just change the calue in that html div on the side. to show the points. 
    // we are not yet organized in terms of difficulty values yet. just by points.
  } else {
    this.playerPoints -= Number(clueValue)
    alert(`Your answer is incorrect. You now have: ${this.playerPoints} +  points.`)
    alert(`The correct answer is: ${clueAnswer}`)
  }
}
}