'use strict'

export function toRna(strand) {
  // Select an implementation:
  return toRna1(strand)
  // return toRna2(strand)
}

// Option 1: Use a switch statement
const toRna1 = strand =>
  [...strand]
    .map(n => {
      switch (n) {
        case 'A':
          return 'U'
        case 'C':
          return 'G'
        case 'G':
          return 'C'
        case 'T':
          return 'A'
        default:
          throw Error(`Invalid DNA nucleotide character: ${n}`)
      }
    })
    .join('')

// Option 2: Record nucleotide transcription rules in an object
const toRna2 = strand => {
  const transcribe = { A: 'U', C: 'G', G: 'C', T: 'A' }
  return strand
    .split('')
    .map(n => transcribe[n])
    .join('')
}
