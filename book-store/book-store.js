// Inspired by anurat's solution:
// https://exercism.org/tracks/javascript/exercises/book-store/solutions/anurat

const PRICE_PER_BOOK = [0, 800, 760, 720, 640, 600]

export function cost(books) {
  return books.length === 0 ? 0 : costHelper(getCounts(books))
}

function costHelper(counts) {
  if (counts[0] === counts[counts.length - 1])
    return counts.reduce((sum, c) => sum + c) * PRICE_PER_BOOK[counts.length]

  let price = Infinity
  for (let s = 1; s < counts.length; s++) {
    price = Math.min(
      price,
      s * PRICE_PER_BOOK[s] + costHelper(removeSet(counts, s)),
    )
  }
  return price
}

function getCounts(books) {
  return books
    .reduce((counts, book) => {
      counts[book] = (counts[book] ?? 0) + 1
      return counts
    }, [])
    .filter(x => x)
    .sort((a, b) => b - a)
}

function removeSet(counts, setSize) {
  return counts
    .map((x, i) => (i < setSize ? x - 1 : x))
    .filter(x => x > 0)
    .sort((a, b) => b - a)
}
