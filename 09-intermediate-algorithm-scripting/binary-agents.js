function binaryAgent(str) {
  // for each binary in the input string
  // reverse the binary
  // loop through each digit of each binary
  /// multiply the current digit by 2 to the power of the digits index
  /// add it to a sum
  /// from this resulting sum aka char code
  /// convert it to a char
  // return the joined chars as a string

  return str
    .split(" ")
    .map((binaryNum) =>
      String.fromCharCode(
        binaryNum
          .split("")
          .reverse()
          .reduce((sum, binaryDigit, i) => sum + Number(binaryDigit) * 2 ** i,0)
      )
    )
    .join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
