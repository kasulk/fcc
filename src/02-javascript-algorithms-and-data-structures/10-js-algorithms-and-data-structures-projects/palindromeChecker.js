function palindrome(str) {
  const clearedStr = str.replace(/[\W_]/g, "").toLowerCase();

  return clearedStr === clearedStr.split("").reverse().join("");
}

palindrome("eye");
