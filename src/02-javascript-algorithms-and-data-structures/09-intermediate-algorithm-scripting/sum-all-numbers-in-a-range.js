function sumAll(arr) {
  // sort the input array
  // loop through array, from first element to last
  // add each number to a sum variable
  // after the loop, return the sum

  let sum = 0
  const [start, end] = arr.slice().sort((a,b) => a - b)

  for (let i = start; i <= end; i++) {
    sum += i
  }

  return sum
}

sumAll([1, 4]);