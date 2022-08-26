function shelfBook(title, bookShelves) {
if (bookShelves.length <= 2){
  return bookShelves.unshift(title)
}
}
module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};