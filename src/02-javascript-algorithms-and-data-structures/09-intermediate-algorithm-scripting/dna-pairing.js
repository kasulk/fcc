function pairElement(str) {
  // create a map object
  // loop through the input string, for each character
  // create an inner array
  // with the character as its first element
  // and its corresponding pairing element as the second element
  // after the loop
  // return the resulting outer array

  const nucleobasePairMap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split("").map((char) => [char, nucleobasePairMap[char]]);
}

pairElement("GCG");
