/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(num) {
  const strNum = String(num);
  let sum = 0;
  for (let i = 0; i < strNum.length; i += 1) {
    sum += +strNum[i];
  }

  return sum;
}

getSumOfDigits();
