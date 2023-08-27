"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var climbStairs = function (steps) {
    // create a dynamic programming array dp to store the results.
    var dp = new Array(steps + 1).fill(-1);
    // initialize the base cases: dp[1] = 1 and dp[2] = 2
    dp[1] = 1;
    dp[2] = 2;
    // fill the rest of the array using dynamic programming
    for (var i = 3; i <= steps; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[steps];
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the number of steps: ", function (input) {
        var steps = +input;
        var numberOfWays = climbStairs(steps);
        console.log("Number of the distinct ways to climb the stairs is ".concat(numberOfWays, "."));
        rl.close();
    });
};
main();
