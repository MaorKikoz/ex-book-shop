'use strict'

let books = [
    { id: 'bg4J78', title: 'The adventures of Lori Ipsi', price: 120 },
    { id: 'bg4J79', title: 'The adventures of Lori Ipsi 2', price: 121 },
    { id: 'bg4J80', title: 'The adventures of Lori Ipsi  3', price: 122 }
]


function getBooks() {
  return books
}

function removeBook(id) {
  books = books.filter(book => book.id !== id)
}

