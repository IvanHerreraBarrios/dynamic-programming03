/*function hi() {
    hi()
}

hi()*/

/*
function print(x) {
    console.log(x)
    if (x < 10) {
        print(x + 1)
    }
}


print(1)
*/

//factorial
/*
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact
}
*/
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

/**
 * fibonacci 1 1 2 3 5 8 13
 */

/*
function fib(n) {
    if (n < 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
*/

var memo = {0:1, 1:1};
function fib(n) {
    if (memo[n]) {
        return memo[n];
    }

    memo[n-1] = fib(n-1);
    memo[n-2] = fib(n-2);

    return memo[n-1] + memo[n-2];
}

console.log(fib(70));