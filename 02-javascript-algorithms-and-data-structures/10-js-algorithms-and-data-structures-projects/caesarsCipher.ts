function rot13(str: string): string {
  // create a variable with all uppercase letters
  // for each character in the input string
  // if it is a letter
  /// add 13 to its index, apply modulo 26, in case it overflows
  /// and replace it with the resulting letter of the alphabet variable
  // else, just return the character
  // after the loop, return the result as string

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str
    .split("")
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        const newIndex = (alphabet.indexOf(char) + 13) % 26;
        return alphabet[newIndex];
      }
      return char;
    })
    .join("");
}

rot13("SERR PBQR PNZC");
