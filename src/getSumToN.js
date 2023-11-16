/**
 * Returns the sum of all numbers from 1 to n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

getSumToN();
