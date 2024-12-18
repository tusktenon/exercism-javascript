// Option 1: Use a default argument
// export const twoFer = (name = 'you') => `One for ${name}, one for me.`

// Option 2: Use the nullish-coalescing operator
export const twoFer = name => `One for ${name ?? 'you'}, one for me.`
