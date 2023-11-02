function convertToRoman(num: number): string {
  // check length of input number
  // loop through digits
  //? or reverse input number?

  const numStr = num.toString();
  const reversedDigits = num.toString().split("").reverse();
  const map = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
  };
  const output: string[] = [];

  for (let i = 0; i < reversedDigits.length; i++) {
    //
    const digit = Number(reversedDigits[i]);
    let romanDigit = "";

    if (map.hasOwnProperty(digit)) {
      romanDigit += map[digit];
      //
    } else {
      if (digit > 5) {
        romanDigit += "V";
      }
      romanDigit += "I".repeat(digit % 5);
    }
    output.push(romanDigit);
    // console.log(output);
  }
}

convertToRoman(8);
// convertToRoman(36);
// convertToRoman(99);

// if digit % 5 is found in the map, return it
// else
