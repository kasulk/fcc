function smallestCommons(arr) {
  // loop through all integers between both input numbers
  // start with the smaller number
  // for each integer between both numbers
  // calculate the new smallest common multiple by
  // dividing their product by their greatest common divisor

  // as long as b is not 0 (i.e. a is not dividible by b)
  /// replace b with the result of a modulo b
  /// and replace a with the former value of b
  /// after the inner loop, return a
  // after the outer loop, return the smallest common multiple

  const [start, end] = arr.sort((a, b) => a - b);
  let smallestCommonMultiple = start;

  for (let i = start; i <= end; i++) {
    smallestCommonMultiple =
      (smallestCommonMultiple * i) /
      greatesCommonDivisor(smallestCommonMultiple, i);
    console.log(smallestCommonMultiple);
  }

  return smallestCommonMultiple;
}

function greatesCommonDivisor(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

smallestCommons([2, 10]);
