function convertHTML(str) {

  return str.split('').map(char => {

    if (char === '&') return '&amp;'
    if (char === '<') return '&lt;'
    if (char === '>') return '&gt;'
    if (char === '"') return '&quot;'
    if (char === "'") return '&apos;'

    return char

  }).join('')
  
}

convertHTML("Dolce & Gabbana");