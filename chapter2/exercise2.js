for (let n = 1; n <= 100; n++) {
  console.log(((n % 3 == 0) ? 'Fizz' : '') + ((n % 5 == 0) ? 'Buzz' : '') || n);
}
