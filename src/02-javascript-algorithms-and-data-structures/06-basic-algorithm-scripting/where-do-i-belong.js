function getIndexToIns(arr, num) {
  // loop through sorted array
  // if num <= element, return i
  // after the loop, return arr.length

  arr.sort((a, b) => a - b)
  
  for (let i = 0; i <= arr.length; i++) {
    if (num <= arr[i]) return i
  } 
  return arr.length
}

