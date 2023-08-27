"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var costMatrix;
    var i = 0;
    rl.question('Enter the number of rows and columns in space-separated format: ', function (input) {
        var _a = input.trim().split(" ").map(Number), rows = _a[0], cols = _a[1];
        costMatrix = new Array(rows).fill(0);
        console.log('Enter the rows in space-separated format:');
        rl.on('line', function (input) {
            costMatrix[i++] = input.trim().split(" ").map(Number);
            if (i === rows)
                rl.close();
        });
    });
    rl.on('close', function () {
        console.log(costMatrix);
    });
};
main();
