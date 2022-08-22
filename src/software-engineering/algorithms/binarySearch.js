module.exports = function binarySearch(haystack, needle) {
  let fromIndex = 0
  let toIndex = haystack.length - 1
  let midIndex = Math.floor(fromIndex + (toIndex - fromIndex) / 2)

  do {
    if (haystack[midIndex] === needle) {
      return midIndex
    } else if (haystack[midIndex] > needle) {
      toIndex = midIndex
    } else {
      fromIndex = midIndex + 1
    }

    midIndex = Math.floor(fromIndex + (toIndex - fromIndex) / 2)
  } while (fromIndex < toIndex)

  return -1
}
