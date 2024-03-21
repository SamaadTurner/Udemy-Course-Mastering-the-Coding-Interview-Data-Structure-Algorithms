let calculations = 0; // Variable to keep track of the number of calculations performed

function fibonacci() {
    let cache = {}; // Object to store computed Fibonacci numbers for reuse

    // Inner function to calculate Fibonacci numbers using memoization
    return function fib(n) {
        calculations++; // Increment calculations count for each function call

        if (n in cache) { // If Fibonacci number for 'n' is already calculated, return it from cache
            return cache[n];
        } else {
            if (n < 2) { // Base cases: Fibonacci of 0 or 1 is the number itself
                return n;
            } else {
                // Recursive step: Calculate Fibonacci number for 'n' using previously computed values
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n]; // Return computed Fibonacci number and store it in cache
            }
        }
    }
}

const fasterFib = fibonacci(); // Create a memoized Fibonacci function
console.log(fasterFib(10)); // Compute and print Fibonacci number for input 10
console.log('we did ' +calculations + ' calculations');


// Comments:

// 1. calculations variable counts the number of function calls made during Fibonacci calculations.
// 2. fibonacci() function returns an inner function (fib) that calculates Fibonacci numbers using memoization.
// 3. cache object stores computed Fibonacci numbers for reuse.
// 4. If the Fibonacci number for n is already in the cache, it's returned directly to avoid redundant computation.
// 5. Base cases are handled for Fibonacci numbers 0 and 1.
// 6. For other values of n, Fibonacci numbers are computed recursively using previously calculated values.
// 7. Each recursive call increments the calculations count.
// 8. fasterFib is assigned the memoized Fibonacci function.
// 9. The Fibonacci number for input 10 is calculated and printed.


// cons:

// To sacfifice and get a better time complexity, we give up space (cache = {})