function steamrollArray(arr) {
  // for each element in the input array
  // if it is itself an array
  /// call this function again with the current element as argument
  /// push the result to an output variable
  // if the element is not an array, 
  /// just push it to the output variable
  // after the loop, return the output variable
  
  const flatArr = [];

  arr.forEach((element) =>
    Array.isArray(element)
      ? flatArr.push(...steamrollArray(element))
      : flatArr.push(element)
  );

  return flatArr;
}
