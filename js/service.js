'use strict'

let books = [
    { id: 'bg4J78', title: 'The adventures of Lori Ipsi', price: 120 },
    { id: 'bg4J79', title: 'The adventures of Lori Ipsi 2', price: 121 },
    { id: 'bg4J80', title: 'The adventures of Lori Ipsi  3', price: 122 }
]


function getBooks() {
  return books
}

function getBook(id) {
  var book = books.find(book => book.id === id)
  return book
}

function removeBook(id) {
  books = books.filter(book => book.id !== id)
}

function updatePrice(id, newPrice) {
  console.log(id, newPrice);
  var book = getBook(id)
  book.price = newPrice
}

function addBook(title, price) {
  var newId = makeId()
  var newBook = { id: newId, title: title, price: price }
  books.push(newBook)
}
