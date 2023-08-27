"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var maxProductSubarray = function (nums) {
    var _a;
    if (nums.length === 0)
        return 0;
    var maxProduct = nums[0];
    var minProduct = nums[0];
    var result = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            _a = [minProduct, maxProduct], maxProduct = _a[0], minProduct = _a[1];
        }
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);
        result = Math.max(result, maxProduct);
    }
    return result;
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter an array of integers, separated by spaces: ", function (input) {
        var nums = input.trim().split(" ").map(Number);
        var result = maxProductSubarray(nums);
        console.log("Maximum product subarray: ".concat(result));
        rl.close();
    });
};
main();
