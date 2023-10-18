function fearNotLetter(str) {
  // create a variable containing the alphabet
  // if the alphabet contains the input string, return undefined
  // else 
  // find the index of the first letter of the input string in the alphabet
  // create a slice from the alphabet
  // from the first letter of the input string until the length of the input string
  // for each letter in the slice from the alphabet
  // check if it equals the corresponding letter in the input string
  // if not return it

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if (alphabet.includes(str)) return undefined

  const start = alphabet.indexOf(str[0])
  const end = start + str.length
  
  return alphabet
    .slice(start, end)
    .split('')
    .filter((letter, i) => letter !== str[i])[0]
}

fearNotLetter("abce");