function translatePigLatin(str) {
  const consonantRegEx = new RegExp(/^[^aeiou]+/);
  const strBeginsWithConsonant = consonantRegEx.test(str);

  return strBeginsWithConsonant
    ? str.replace(consonantRegEx, "") + str.match(consonantRegEx) + "ay"
    : str + "way";
}
