const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const decodedValue = ([first, second]) =>
  10 * COLORS.indexOf(first) + COLORS.indexOf(second)

// An interesting community solution by slaymance:
// https://exercism.org/tracks/javascript/exercises/resistor-color-duo/solutions/slaymance
// Overkill for this particularly problem, it would be an elegant approach if
// more than two colors were involved.
export const decodedValueAlt = colors =>
  Number(
    colors
      .slice(0, 2)
      .map(color => COLORS.indexOf(color))
      .join(''),
  )
