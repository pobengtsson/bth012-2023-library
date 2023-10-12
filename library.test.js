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
      expect(library().start()).toEqual('Welcome to our library')
    })
  })
  describe('when asked for menu', () => {
    it('prints a menu of options', () => {
      const menu = library().menu().menuActions
      const menuActions = Object.keys(menu)
      expect(menuActions).toEqual(['Search', 'Check out', 'Return'])
    })
    describe('when search for a title', () => {
      describe('that does not exist in the library', () => {
        it('returns empty result', () => {
          const actions = library().menu().menuActions
          expect(actions.Search('a title')).toEqual([])
        })
      })
      describe('that does exist in the library', () => {
        it('returns a book', () => {
          const listreaderMockHasBook = jest.fn().mockReturnValue([{}])
          const actions = library(listreaderMockHasBook).menu().menuActions
          expect(actions.Search('existing title')).toContainEqual({})
        })
        it('returns a book with the same title', () => {
          const listreaderMockHasBook = jest.fn().mockReturnValue([{}])
          const actions = library(listreaderMockHasBook).menu().menuActions
          expect(actions.Search('existing title')).toContainEqual({})
        })
      })
    })
  })
})
