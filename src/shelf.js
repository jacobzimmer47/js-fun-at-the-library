function shelfBook(title, bookShelves) {
  if (bookShelves.length <= 2){
    return bookShelves.unshift(title)
  }
}

function unshelfBook (title, bookShelves) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i].title.includes(title)) {
      return bookShelves.splice(i, 1)
    }
  }
}

function listTitles (bookShelves) {
  var titles = []
  for (var i = 0; i < bookShelves.length; i++) {
    titles.push(bookShelves[i].title)
  }
  return titles.join(', ')
}

function searchShelf (bookShelves, titles) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i].title === titles) {
      result = true
    }
    else {
      result = false
    }
  }
  return result
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};