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
  },
  menu: function () {
    return menu
  }
}

export function library (libraryReader) {
  if (libraryReader) {
    const bookList = libraryReader()
    menu.menuActions.Search = function () {
      return bookList
    }
  }
  return libraryObject
}

// if run as node index.js then say hello to the console
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(library())
}
