function factorialize(num) {
  return Array(num)
    .fill('x')
    .map((_,i) => i+1)
    .reduce((acc, curr) => acc * curr, 1)
}

factorialize(5);