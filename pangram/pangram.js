'use strict'

export function isPangram(sentence) {
  // Select an implementation:
  return isPangram1(sentence)
}

// My solution
function isPangram1(sentence) {
  const found = Array.from({ length: 26 }, () => false)

  ;[...sentence.toLowerCase()]
    .map(c => c.codePointAt(0) - 'a'.codePointAt(0))
    .filter(x => 0 <= x && x < 26)
    .forEach(x => (found[x] = true))

  return found.every(x => x)
}

// The Dig Deeper solutions:
// https://exercism.org/tracks/javascript/exercises/pangram/dig_deeper

// The `every` with `includes` approach (the fastest of the three):
// https://exercism.org/tracks/javascript/exercises/pangram/approaches/every-includes
function isPangram2(sentence) {
  const lowered = sentence.toLowerCase()
  return [...'abcdefghijklmnopqrstuvwxyz'].every(c => lowered.includes(c))
}

// The `Set` with `size` approach (about 75% slower):
// https://exercism.org/tracks/javascript/exercises/pangram/approaches/set-size
function isPangram3(input) {
  return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26
}

// The bit field approach (about 45% slower):
// https://exercism.org/tracks/javascript/exercises/pangram/approaches/bitfield
const A_LCASE = 97
const A_UCASE = 65
const ALL_26_BITS_SET = 67108863

function isPangram4(input) {
  let phrasemask = 0
  ;[...input].forEach(letter => {
    if (letter >= 'a' && letter <= 'z')
      phrasemask |= 1 << (letter.charCodeAt(0) - A_LCASE)
    else if (letter >= 'A' && letter <= 'Z')
      phrasemask |= 1 << (letter.charCodeAt(0) - A_UCASE)
  })
  return phrasemask === ALL_26_BITS_SET
}
