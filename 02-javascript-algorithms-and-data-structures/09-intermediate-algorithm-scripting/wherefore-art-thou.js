function whatIsInAName(collection, source) {
  // loop through collection, for each element/object
  /// loop through the keys in the source object
  ///- if the current element contains a property of key and the same value
  ///- check the next key of source
  ///- if the element has all key-value-pairs of source
  ///- add that element/object from the collection to an output array
  // after the loop, return the output array

  let output = [];

  for (let element of collection) {
    let elementHasAllKeyValuePairs = true;

    for (let key in source) {
      if (element.hasOwnProperty(key) && source[key] === element[key]) continue;
      elementHasAllKeyValuePairs = false;
    }

    if (elementHasAllKeyValuePairs) output.push(element);
  }

  return output;
}