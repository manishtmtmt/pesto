"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var eggDrop = function (eggs, floors) {
    // create a dynamic programming matrix dp to store the result
    var dp = new Array(eggs + 1)
        .fill(null)
        .map(function () { return new Array(floors + 1).fill(0); });
    // initialize the base case:
    for (var i = 1; i <= eggs; i++) {
        dp[i][0] = 0;
        dp[i][1] = 1;
    }
    for (var j = 1; j <= floors; j++) {
        dp[1][j] = j;
    }
    // fill the rest of the matrix using dynamic programming
    for (var i = 2; i <= eggs; i++) {
        for (var j = 2; j <= floors; j++) {
            dp[i][j] = Infinity;
            // iterate through all possible floors k to drop the egg, from 1 to j
            for (var k = 1; k <= j; k++) {
                var breaks = dp[i - 1][k - 1];
                var doesNotBreak = dp[i][j - k];
                var attempts = 1 + Math.max(breaks, doesNotBreak);
                dp[i][j] = Math.min(dp[i][j], attempts);
            }
        }
    }
    return dp[eggs][floors];
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the number of eggs and number of floor as integer in space-separated format: ", function (input) {
        var _a = input.trim().split(" ").map(Number), eggs = _a[0], floors = _a[1];
        var result = eggDrop(eggs, floors);
        console.log("Minimum number of attempts: ".concat(result));
        rl.close();
    });
};
main();
