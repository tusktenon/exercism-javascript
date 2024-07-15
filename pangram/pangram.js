'use strict'

export const isPangram = sentence => {
  const found = Array.from({ length: 26 }, () => false)

  ;[...sentence.toLowerCase()]
    .map(c => c.codePointAt(0) - 'a'.codePointAt(0))
    .filter(x => 0 <= x && x < 26)
    .forEach(x => (found[x] = true))

  return found.every(x => x)
}
