/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(number) {
  return number.valueOf();
}

getNumberValue();
