/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  const lengthValue = String(value).length;
  const lastDigit = Number(
    String(value)
      .split('')
      .filter((_, index) => index === lengthValue - 1)
  );
  return lastDigit;
}
getLastDigit();
