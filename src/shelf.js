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
module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};