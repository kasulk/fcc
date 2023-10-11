function diffArray(arr1, arr2) {
  // filter the first array, 
  // only return elements, that are not included in the second array
  // filter the second array,
  // only return element, that are not included in the first array
  // return both results in a new array

  return [
    ...arr1.filter(num => !arr2.includes(num)),
    ...arr2.filter(num => !arr1.includes(num))
  ];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);