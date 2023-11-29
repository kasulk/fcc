function sumPrimes(num) {

 return Array(num)
    .fill('x')
    .map((_, i) => i + 1)
    .reduce((sum, num) => isPrime(num) ? sum + num : sum, 0)
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

sumPrimes(10);