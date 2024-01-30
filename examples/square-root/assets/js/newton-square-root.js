

/**
 * Newton's method to calculate square root
 *
 * @param Number n - the number which the square root should be calculated
 * @param Number tolerance - The error margin accepted (Default 1e-7) (precision/accuracy)
 * @param Number maxIterations - The max number of iterations (Default 1e7) (number of iteration allowed.
 *                               It serves as safety mechanism to prevent the algo from infinite loop in case
 *                               if it doesnt converge to a solution)
 */

// Square Root Algorithm
let newtonSqrt = function (n, tolerance, maxIterations) {
  tolerance = tolerance || 1e-7;
  maxIterations = maxIterations || 1e7;

  // max and min value for the sq root of given number 'n'
  let upperBound = n;
  let lowerBound = 0;

  let i = 0;
  let square, x;
  do {
    i++;
    x = (upperBound - lowerBound) / 2 + lowerBound;
    square = x * x;
    if (square < n) lowerBound = x;
    else upperBound = x;
    // abs (absolute value) to remove the negative sign in case if it has negative sign
  } while (Math.abs(square - n) > tolerance && i < maxIterations); 

  // Checks if the number is a perfect square to return the exact root
  let roundX = Math.round(x);
  if (roundX * roundX === n) x = roundX;

  return x;
};

// Implementation
const num = 25;
const sqroot = newtonSqrt(num);
console.log(`The Square root of ${num} is ${sqroot}`);

// BIG O Notation
// Time complexity - O(log(n))
// Space complexity - O(1)

// Newton-Raphson method to iteratively approximate the square root of a number n.
// It narrows down the search range using upper and lower bounds & stops when the desired precision is
// achieved or the maximum number of iterations is reached.
