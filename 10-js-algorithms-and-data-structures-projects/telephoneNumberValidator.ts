function telephoneCheck(str: string): boolean {
  // group 1: optional 1 and optional ' '
  // group 2: 3 digits or 3 digits in paretheses
  // group 3:
  /// either 1 optional '-' or ' '
  /// 3 digits
  /// either 1 optional '-' or ' '
  /// 4 digits

  return /^(1? ?)(\d{3}|\(\d{3}\))([- ]?\d{3}[- ]?\d{4})$/.test(str);
}

telephoneCheck("555-555-5555");
