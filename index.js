module.exports = {
  /**
   * Sum of two numbers.
   * @example
   * n1 = 1, n2 = 3, result = 4. 
   * @param {*} n1 Number one of the sum.
   * @param {*} n2 Number two of the sum.
   * @returns 
   */
  sum: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 + n2 : this.errorMessage();
  },
  /**
   * Subtraction of two numbers.
   * @example
   * n1 = 1, n2 = 3, result = -2. 
   * @param {*} n1 Number one of the subtraction.
   * @param {*} n2 Number two of the subtraction.
   * @returns 
   */
  subtract: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 - n2 : this.errorMessage();
  },
  /**
   * Multiplication of two numbers.
   * @example
   * n1 = 1, n2 = 3, result = 3. 
   * @param {*} n1 Number one of the multiplication.
   * @param {*} n2 Number two of the multiplication.
   * @returns 
   */
  multiply: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 * n2 : this.errorMessage();
  },
  /**
   * division of two numbers.
   * @example
   * n1 = 1, n2 = 3, result = 0.33. 
   * @param {*} n1 Number one of the division.
   * @param {*} n2 Number two of the division.
   * @returns 
   */
  divide: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 / n2 : this.errorMessage();
  },
  /**
   * Error message is trigger when some of the values is not numeric. 
   */
  errorMessage: function() {
    console.log('One of the two values is not numeric.');
  },
  /**
   * Check if type of values is numeric.
   * @param {*} n1
   * @param {*} n2
   */
  isNumber: function(n1, n2) {
    return typeof n1 === 'number' && typeof n2 === 'number'
  }
}
