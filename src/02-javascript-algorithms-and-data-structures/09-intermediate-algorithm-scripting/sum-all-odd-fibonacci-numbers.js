function sumFibs(num) {
  let current = 1
  let last = 0
  let secondToLast = 0
  let sumOdds = 0

  while (current <= num) {
    if (current % 2 !== 0) sumOdds += current
    
    secondToLast = last
    last = current
    current = last + secondToLast
  }
  
  return sumOdds
}

sumFibs(4);

