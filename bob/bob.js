export function hey(message) {
  const trimmed = message.trim()
  if (trimmed.length === 0) return 'Fine. Be that way!'
  const question = trimmed.endsWith('?')
  const yelling = /\p{L}/u.test(trimmed) && !/\p{Ll}/u.test(trimmed)
  return question && yelling
    ? "Calm down, I know what I'm doing!"
    : question
      ? 'Sure.'
      : yelling
        ? 'Whoa, chill out!'
        : 'Whatever.'
}
