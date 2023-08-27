"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var canPartition = function (nums) {
    // calculate the total sum of the numbers in the number set
    var totalSum = nums.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    // if the total sum is odd, it cannot be divided into two equal subsets, so return false
    if (!(totalSum % 2 === 0))
        return false;
    // calculate teh target sum for each sumbset, which is half of the total sum
    var targetSum = totalSum / 2;
    // create a dynamic programming array dp to store the results
    var dp = new Array(targetSum + 1).fill(false);
    // initialize dp[0] as true since an empty subset can have a sum of 0.
    dp[0] = true;
    // iterate through each number in the number set
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        // iterate from the target sum down to the current number
        for (var j = targetSum; j >= num; j--) {
            // check if including the current number can reach the current sum
            dp[j] = dp[j] || dp[j - num];
        }
    }
    // return dp[targetSum]
    return dp[targetSum];
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the set of positive integers as a space-separated string: ', function (input) {
        var nums = input.trim().split(" ").map(Number);
        var result = canPartition(nums);
        console.log("The given set of positive integers ".concat(JSON.stringify(nums), " can").concat(result ? '' : ' not', " be partitioned into two equal subsets"));
        rl.close();
    });
};
main();
