function frankenSplice(arr1, arr2, n) {
  return arr2.toSpliced(n, 0, ...arr1)
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);