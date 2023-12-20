function dropElements(arr, func) {
  // for each element of the input array
  // if the function returns true
  // return all elements from that index on to the end
  // after the loop, return an empty array

  for (let i = 0; i < arr.length; i++) { 
    if (func(arr[i])) return arr.slice(i)
  }

  return []
}


dropElements([1, 2, 3], function(n) {return n < 3; });