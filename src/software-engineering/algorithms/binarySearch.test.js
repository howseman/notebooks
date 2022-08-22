const binarySearch = require('./binarySearch')

describe('binarySearch', () => {
  const haystack = [1, 3, 5, 7, 8, 9, 11, 13, 14, 15, 17, 19, 22, 25, 26, 27, 29, 31, 35, 39 ] // .length = 20

  describe('When `needle` argument is found in provided array', () => {
    it('Should return the array\'s index (provided array has an even number of items)', () => {
      let result = binarySearch(haystack, 8)
      expect(result).toBe(4)
      
      result = binarySearch(haystack, 29)
      expect(result).toBe(16)
    })
  
    it('Should return the array\'s index (provided array has an odd number of items)', () => {
      result = binarySearch(haystack.slice(0, haystack.length - 1), 8)
      expect(result).toBe(4)
  
      result = binarySearch(haystack.slice(0, haystack.length - 1), 29)
      expect(result).toBe(16)
    })
  })

  describe('When `needle` argument is NOT found in provided array', () => {
    it('Should return -1', () => {
      const result = binarySearch(haystack, 20)
      expect(result).toBe(-1)
    })
  })
})
