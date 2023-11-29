
function chunkArrayInGroups(arr, size) {
  // loop through input array
  // push every element into an inner array
  /// until size is reached or 
  /// the current element is the last in the array
  // then push this inner array into an outer array
  // reset the inner array and i
  // after the outer loop, return outer array

  const outerArray = []
  let innerArray = []
  let i = 0

  for (let element of arr) {
    innerArray.push(element)
    i++

    if (i === size || element === arr[arr.length-1]) {
      outerArray.push(innerArray)
      innerArray = []
      i = 0
    }
  }

  return outerArray
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);