const menu = {
  menuActions: {
    Search: function () {
      return []
    },
    Borrow: null,
    Return: null
  }
}

const libraryObject = {
  start: function () {
    return 'Welcome to our library'
  }
}


export function library (libraryReader) {
  const bookList = libraryReader()
  menu.menuActions.Search = function (titlePart) {
    return bookList.filter((book) => book.title.indexOf(titlePart) !== -1)
  }
  menu.menuActions.Borrow = function (book) {
    const msSecs = Date.now() + 1000 * 60 * 60 * 24 * 21
    book.returnDate = new Date(msSecs)
    return book
  }
  menu.menuActions.Return = function (book) {
    delete book.returnDate
  }
  libraryObject.menu = menu
  return libraryObject
}

// if run as node index.js then say hello to the console
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(library(() => []).start())
}
