import { library } from './library.js'
import { jest } from '@jest/globals'

describe('a library', () => {
  describe('when started', () => {
    it('reads the list of books', () => {
      const listreaderMock = jest.fn().mockReturnValue([])
      library(listreaderMock)
      expect(listreaderMock).toHaveBeenCalled()
    })
    it('prints a hello message', () => {
      expect(library(jest.fn()).start()).toEqual('Welcome to our library')
    })
  })
  describe('when asked for menu', () => {
    let actions
    const aBook = {
      title: 'existing title'
    }
    beforeEach(() => {
      const mock = jest.fn().mockReturnValue([aBook])
      actions = library(mock).menu.menuActions
    })
    it('prints a menu of options', () => {
      const menu = library(jest.fn()).menu.menuActions
      const menuActions = Object.keys(menu)
      expect(menuActions).toEqual(['Search', 'Borrow', 'Return'])
    })
    describe('when search for a title', () => {
      describe('that does not exist in the library', () => {
        it('returns empty result', () => {
          expect(actions.Search('a title')).toEqual([])
        })
      })
      describe('that does exist in the library', () => {
        it('returns a book with the same title', () => {
          expect(actions.Search('existing title'))
            .toContainEqual({ title: 'existing title' })
        })
      })
    })
    describe('when search for a substring in a title', () => {
      describe('when it does not find a match', () => {
        it('returns an empty list', () => {
          const actual = actions.Search('something that wont match')
          expect(actual).toHaveLength(0)
        })
      })
      describe('when a match is found', () => {
        it('returns a list with the matching book', () => {
          const actual = actions.Search('sting ti')
          expect(actual).toContain(aBook)
        })
        describe('when borrow the found book', () => {
          let borrowedBook
          beforeEach(() => {
            borrowedBook = actions.Borrow(aBook)
          })
          it('can still be found when searching', () => {
            expect(actions.Search('existing')).toContain(aBook)
          })
          it('search result shows its on loan', () => {
            expect(actions.Search('existing')[0].returnDate).not.toBeUndefined()
          })
          it('book has return date in three weeks', () => {
            const inThreeWeeks = Date.now() + 1000 * 60 * 60 * 24 * 21 - 100
            const actual = borrowedBook.returnDate.getTime()
            expect(actual).toBeGreaterThan(inThreeWeeks)
          })
          describe('when returning the book', () => {
            it('has no returnDate', () => {
              actions.Return(borrowedBook)
              const bookInLibrary = actions.Search('existing')[0]
              expect(bookInLibrary.returnDate).toBeUndefined()
            })
          })
        })
      })
    })
  })
})
