"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var uniquePath = function (rows, columns) {
    // create a dynamic programming array dp of size rows x columns to store the results
    var dp = new Array(rows).fill(0).map(function () { return new Array(columns).fill(0); });
    for (var i = 0; i < rows; i++) {
        dp[i][0] = 1;
    }
    for (var j = 0; j < columns; j++) {
        dp[0][j] = 1;
    }
    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < columns; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[rows - 1][columns - 1];
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the number of rows and the number of columns separated by space: ", function (input) {
        var _a = input.trim().split(" ").map(Number), rows = _a[0], columns = _a[1];
        var result = uniquePath(rows, columns);
        console.log("The total number of unique paths is ".concat(result, "."));
        rl.close();
    });
};
main();
