'use strict'

function onInIt() {
 renderBooks()
}

function renderBooks() {
  const elBookList = document.querySelector('tbody')
    const books = getBooks()

    const strHtmls = books.map(book => {
        console.log(book);
        const tempId = book.id
        
        return `
            <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button onclick="onReadBook('${tempId}')">Read</button>
                    <button onclick="onUpdateBook('${tempId}')">Update</button>
                    <button onclick="onRemoveBook('${tempId}')">Delete</button>
                 </td>
            </tr>
        `
    })

    elBookList.innerHTML = strHtmls.join('')
}

function onRemoveBook(id) {
    
  removeBook(id)
  renderBooks()
}



function onUpdateBook(id) {
    console.log(id);
    var newPrice = +prompt('Enter a new price for this book.')
    updatePrice(id, newPrice)
    renderBooks()
}

function onAddBook() {
    var title = prompt('Please name the book.')
    var price = +prompt('Please price the book')
    addBook(title, price)
    renderBooks()
}

function onReadBook(id) {
    console.log(id);
    const elDetailsModal = document.querySelector('.details-modal')
    const elDetails = elDetailsModal.querySelector('pre')
     
    const book = getBook(id)
    const json = JSON.stringify(book, null, 4)

    elDetails.innerText = json
    elDetailsModal.showModal()
}

