function sentenceToCamelCase(sentence) {
  const kebabCase = sentence.split(' ').map(word=>word[0].toUpperCase() + word.substring(1)).join('')
  const camelCase = kebabCase[0].toLowerCase() + kebabCase.substring(1)

  return camelCase
}

const sentence = 'Create a Module Script'

console.log('touch ' + sentenceToCamelCase(sentence) + '.js')