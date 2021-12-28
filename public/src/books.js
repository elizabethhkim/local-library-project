//helper function
const _findById = (array, id) => {
  return array.find((element) => element.id === id)
}


function findAuthorById(authors, id) {
  return _findById(authors, id)
}

function findBookById(books, id) {
  return _findById(books,id)
}

function partitionBooksByBorrowedStatus(books) {
  // return an arry with two arrays
  // first array: book objects that are checked out
  const borrowed = books.filter(book=>!book.borrows[0].returned) 
  // second array: book objects that are returned
  const returned = books.filter(book=>book.borrows[0].returned)
  // using shorthand to create a new array with two arrays
  return [borrowed,returned]

}

function getBorrowersForBook(book, accounts) {

  const bookBorrowers = book.borrows

  const matchingAcc = accounts.reduce((acc, account) => {
  // create conditional to test if account id is included in the borrows awway
    if (bookBorrowers.some(borrow=>borrow.id === account.id)) {

      // if true: push the account object in the acc array  
      acc.push(account)

      // use find method to find borrow object with matching id and create 'returned' key
      const hasBorrowed = bookBorrowers.find(borrow=>borrow.id === account.id)
      account["returned"] = hasBorrowed.returned
  } else {
      acc }  //else return the accumulator as is
  return acc
}, [])

  // slice to the first 10 elements
  return matchingAcc.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
