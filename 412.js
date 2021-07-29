/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const a = [];
  for(let i = 1; i <= n; i++) a[i - 1] = i + '';
  for(let i = 1; i * 3 <= n; i++) a[i * 3 - 1] = 'Fizz';
  for(let i = 1; i * 5 <= n; i++) a[i * 5 - 1] = 'Buzz';
  for(let i = 1; i * 15 <= n; i++) a[i * 15 - 1] = 'FizzBuzz';
  return a;
};