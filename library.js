const menu = {
  menuActions: {
    Search: function () {
      return []
    },
    'Check out': null,
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
  menu.menuActions.Search = function (title) {
    return bookList.filter((book) => book.title === title)
  }
  libraryObject.menu = menu
  return libraryObject
}

// if run as node index.js then say hello to the console
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(library(() => []).start())
}
