function spinalCase(str) {
  // loop through input string
  // if the letter is uppercase,
  // add a dash before it
  // after the loop
  // replace everything that is not a word character (including underscores) with a dash
  // replace all double dashes with a single dash
  // remove dashes from beginning and end
  // return the result in lowercase

  return str
    .split("")
    .map((char) => (/[A-Z]/.test(char) ? "-" + char : char))
    .join("")
    .replace(/[\W_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");
