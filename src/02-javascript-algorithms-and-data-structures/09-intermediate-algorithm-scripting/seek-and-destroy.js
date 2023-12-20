function destroyer(arr, ...args) {
  // add a rest parameter to the function definition
  // filter the initial array
  // only return elements that are not included in the args array
  // return the resulting array

  return arr.filter(num => !args.includes(num))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);