import { library } from './library.js'
// import { jest } from '@jest/globals'

describe('a library', () => {
  describe('when started', () => {
    // it('reads the list of books', () => {
    //   const listreader = jest.fn().mockReturnValue([])
    //   library(listreader)
    //   expect(listreader).toHaveBeenCalled()
    // })
    it('prints a hello message', () => {
      expect(library().start()).toEqual('Welcome to our library')
    })
  })
  describe('when asked for menu', () => {
    it('prints a menu of options', () => {
      const menu = library().menu()
      const menuOption = Object.keys(menu)
      expect(menuOption).toEqual(['Search', 'Check out', 'Return'])
    })
    describe('when searches for a title', () => {
      it('should return a result', () => {
        expect(library().menu().Search('a title')).toEqual([])
      })
    })
  })
})
