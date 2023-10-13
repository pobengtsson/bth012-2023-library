import { hardcodedlistreader } from './listreader.js'

describe('a hardocodedlistreader', () => {
  describe('when called', () => {
    it('returns 7 books', () => {
      expect(hardcodedlistreader()).toHaveLength(7)
    })
    it('returns books with titles', () => {
      expect(hardcodedlistreader().map((book) => !!book.title))
        .not.toContain(false)
    })
    it('returns books with author', () => {
      expect(hardcodedlistreader().map((book) => !!book.author))
        .not.toContain(false)
    })
  })
})
