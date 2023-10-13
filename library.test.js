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
    beforeEach(() => {
      const aBook = {
        title: 'existing title'
      }
      const mock = jest.fn().mockReturnValue([aBook])
      actions = library(mock).menu.menuActions
    })
    it('prints a menu of options', () => {
      const menu = library(jest.fn()).menu.menuActions
      const menuActions = Object.keys(menu)
      expect(menuActions).toEqual(['Search', 'Check out', 'Return'])
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
      describe('when i does not find a match', () => {
        it('returns an empty list', () => {
          const actual = actions.Search('something that wont match')
          expect(actual).toHaveLength(0)
        })
      })
    })
  })
})
