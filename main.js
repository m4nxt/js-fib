"use strict";
const ps = require("prompt-sync");
const prompt = ps();

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

const inp = prompt("Enter integer (max 1476): ");
console.log("The fibonacci sequence of " + inp + " is " + fib(inp));
prompt("Press enter to exit . . .");