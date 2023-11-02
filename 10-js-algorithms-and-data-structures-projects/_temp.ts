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
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  const output: string[] = [];

  for (let i = 0; i < reversedDigits.length; i++) {
    //
    const factor = Number("1" + "0".repeat(i));

    const digit = Number(reversedDigits[i]) * factor;
    let romanDigit = "";

    if (map.hasOwnProperty(digit)) {
      romanDigit += map[digit];
      //
    } else {
      if (digit > 5 * factor) {
        // romanDigit += "V";
        romanDigit += map[5 * factor];
      }
      //   romanDigit += "I".repeat(digit % 5);
      romanDigit += map[1 * factor].repeat((digit / factor) % 5);
    }
    output.push(romanDigit);
    console.log(output);
  }
  return output.reverse().join("");
}

convertToRoman(8);
// convertToRoman(36);
// convertToRoman(99);

// if digit % 5 is found in the map, return it
// else
