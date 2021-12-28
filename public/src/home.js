function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned)
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
/*
- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.
*/

// use reduce to increase count for each genre
  const result = books.reduce((acc, book) => {
  let name = book.genre
  // conditional if accumulator array includes the given genre
    if (acc.some(item=>item.name === name)) {
  // if conditional true, loop through the accumulator array, find the name and add to the count
    for (let item of acc) {
      (item.name === name) ? (item.count++) : (item.count+=0)
        }   
      } else { 
  // if the acc does not include the genre, set count = 1 and push the object into the acc array
        let count = 1
        acc.push({name,count})}
      return acc
  }, [])

  return result.sort((genreA, genreB) => genreB.count - genreA.count).slice(0,5)

}

function getMostPopularBooks(books) {
  /*Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed. */

  books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  const topBooks = books.slice(0,5)
  const booksInArray = topBooks.map(book=> {
    const name = book.title
    const count = book.borrows.length
    return {name, count}
  })
  return booksInArray
}


function getMostPopularAuthors(books, authors) {

// use forEach to go through each element of the authors array
authors.forEach((author) => {
  // filter the books array to those with the matching author IDs
  const authorsBooks = books.filter(book=>book.authorId === author.id)
  // create the 'count' key and create a value equal to the sum of the total borrows 
  author ['count'] = authorsBooks.reduce((total, book) => total + book.borrows.length, 0)
  })

// we now have the keys and values we need for our new array objects. sort the authors array based on the count key and slice to select the top five
authors.sort((authorA, authorB) => authorB.count - authorA.count)
topAuthors = authors.slice(0,5)

// use map to create a new array with the authors first and last name, and the count
const authorsInArray = topAuthors.map(author=> {
  const name = `${author.name.first} ${author.name.last}`
  const count = author.count
  return {name, count}
})
return authorsInArray
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
