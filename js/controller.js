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
                    <button>Read</button>
                    <button>Update</button>
                    <button onclick="onRemoveBook('${tempId}')">Delete</button>
                 </td>
            </tr>
        `
    })

    elBookList.innerHTML = strHtmls.join('')
}

function onRemoveBook(id) {
    console.log(id);
    
  removeBook(id)
  renderBooks()
}