function findAccountById(accounts, id) {
  const matchingAccount = accounts.find(account=>account.id === id)
  return matchingAccount
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()?1:-1))
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const allBorrowed = books.reduce((acc, book) => {
    const bookBorrows = book.borrows
    for(let item of bookBorrows) {
      item.id === account.id ? acc++ : acc+=0
    }
    return acc
    }, 0)
  return allBorrowed
  }


function getBooksPossessedByAccount(account, books, authors) {
  // return an array containing book objects with author object included as well
  // match account id with the book borrows array initial index
  const matchingBooks = books.filter(book=>book.borrows[0].id === account.id)

  // find authorId in authors array and include in the objects within our final array
  matchingBooks.forEach((book) => {
    let matchingAuthor = authors.find(author=>author.id === book.authorId)
    book.author = matchingAuthor
  })
  return matchingBooks 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
