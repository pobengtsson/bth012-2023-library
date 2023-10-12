const menu = {
  'Search': function () {
    return []
  },
  'Check out': null,
  'Return': null
}

const libraryObject = {
  start: function () {
    return 'Welcome to our library'
  },
  menu: function () {
    return menu
  }
}

export function library () {
  return libraryObject
}

// if run as node index.js then say hello to the console
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(library())
}
