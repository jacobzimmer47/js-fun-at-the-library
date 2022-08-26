function createTitle(titleIdea) {
  var bookIdea = titleIdea
  return `The ${bookIdea}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
} 

function saveReview(customerReview, reviews) {
  if (!reviews.includes(customerReview)){
    reviews.push(customerReview)
  }
  return reviews
}

function calculatePageCount(bookTitle) {
  for(var i = 0; i < bookTitle.length; i++){
    return bookTitle.length * 20
  }
}




function writeBook(title, bookCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book
}

function editBook(newPageCount) {

  }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}