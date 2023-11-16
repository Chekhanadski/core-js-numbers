/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(index) {
  const sum = [0, 1];
  if (index > 1) {
    for (let i = 2; i <= index; i += 1) {
      sum[i] = sum[i - 1] + sum[i - 2];
    }
  }

  return sum[index];
}

getFibonacciNumber();
