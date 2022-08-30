function createLibrary (name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook (book) {
  if (book.genre === 'fantasy' ) {
    fantasy.push(book)
  }
  return book
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};