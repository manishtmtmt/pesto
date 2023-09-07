"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function isMinHeap(arr) {
    var n = arr.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        var leftChild = 2 * i + 1;
        var rightChild = 2 * i + 2;
        if (leftChild < n && arr[i] > arr[leftChild])
            return false;
        if (rightChild < n && arr[i] > arr[rightChild])
            return false;
    }
    return true;
}
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the space-separated elements of an array: ", function (input) {
        var nodes = input.trim().split(" ").map(Number);
        var result = isMinHeap(nodes);
        console.log(result);
        rl.close();
    });
};
main();
