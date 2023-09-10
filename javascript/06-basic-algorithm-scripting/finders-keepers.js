function findElement(arr, func) {
  for (let element of arr) {
    if (func(element)) return element
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);