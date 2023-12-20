function myReplace(str, before, after) {
  // if the first character of the before string is uppercase,
  // make sure the first letter of the after string is uppercase too
  // else convert the after string to lowercase
  // find the first occurrence of the before string in str
  // replace it with the after string and return the result

  let matchedAfter;

  if (/[A-Z]/.test(before[0])) {
    matchedAfter = after[0].toUpperCase() + after.slice(1);
  } else {
    matchedAfter = after.toLowerCase();
  }

  return str.replace(before, matchedAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
