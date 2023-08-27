"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var longestPalindromicSubsequence = function (str) {
    // get the length of the string
    var n = str.length;
    // create a dynamic programming array dp of size n x n to store the results.
    var dp = new Array(n).fill(0).map(function () { return new Array(n).fill(0); });
    // initialize the base case: a single character is a palindrome of length 1: dp[i][i] = 1 for all i.
    for (var i = 0; i < n; i++)
        dp[i][i] = 1;
    // fill the dynamic programming array by considering all possoble subproblems
    // iterate over the subsequence length len from 2 to n
    for (var len = 2; len <= n; len++) {
        // iterate over the start indices i from 0 to n - len
        for (var i = 0; i < n - len + 1; i++) {
            // calculate the end index j as i + len - 1
            var j = i + len - 1;
            // if the characters at both ends are the same, increment the length of the palindromic subsequence by 2: dp[i][j] = dp[i + 1][j - 1] + 2
            dp[i][j] =
                str[i] === str[j] && len === 2
                    ? 2
                    : str[i] === str[j]
                        ? dp[i + 1][j - 1] + 2
                        : Math.max(dp[i][j - 1], dp[i + 1][j]);
        }
    }
    return dp[0][n - 1];
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter a string: ", function (input) {
        var result = longestPalindromicSubsequence(input);
        console.log("Length of the longest palindromic subsequence: ".concat(result));
        rl.close();
    });
};
main();
