function mutation(arr) {
  // loop through second string, for each letter, 
  // if its not included in the first string, return false
  // after the loop, return true

  for (let letter of arr[1]) {
    if (!arr[0].toLowerCase().includes(letter.toLowerCase())) return false
  }

  return true
}

mutation(["hello", "hey"]);