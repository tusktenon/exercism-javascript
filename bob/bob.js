export function hey(message) {
  // Select an implementation:
  return hey2(message)
}

// Option 1: Use chained conditional operators
function hey1(message) {
  const trimmed = message.trim()
  if (trimmed === '') return 'Fine. Be that way!'

  const question = trimmed.endsWith('?')
  const yelling = /\p{Lu}/u.test(trimmed) && !/\p{Ll}/u.test(trimmed)

  return question && yelling
    ? "Calm down, I know what I'm doing!"
    : question
      ? 'Sure.'
      : yelling
        ? 'Whoa, chill out!'
        : 'Whatever.'
}

// Option 2: Use a switch statement
function hey2(message) {
  const trimmed = message.trim()
  if (trimmed === '') return 'Fine. Be that way!'

  const question = trimmed.endsWith('?')
  const yelling = /\p{Lu}/u.test(trimmed) && !/\p{Ll}/u.test(trimmed)

  switch (true) {
    case question && yelling:
      return "Calm down, I know what I'm doing!"
    case question:
      return 'Sure.'
    case yelling:
      return 'Whoa, chill out!'
    default:
      return 'Whatever.'
  }
}
