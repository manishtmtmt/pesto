"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var node = new ListNode(value);
        node.next = this.top;
        this.top = node;
        return ++this.size;
    };
    Stack.prototype.pop = function () {
        if (this.top === null)
            return null;
        var poppedItem = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedItem;
    };
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Stack.prototype.print = function () {
        var elements = new Array(this.size);
        var current = this.top;
        var i = 0;
        while (current) {
            elements[i++] = current.value;
            current = current.next;
        }
        console.log(elements.reverse().join(" "));
    };
    return Stack;
}());
function evaluateRPN(array) {
    var stack = new Stack();
    for (var i = 0; i < array.length; i++) {
        if (!isNaN(Number(array[i]))) {
            stack.push(array[i]);
        }
        else {
            var firstNumber = stack.pop();
            var secondNumber = stack.pop();
            var output = eval("".concat(firstNumber, " ").concat(array[i], " ").concat(secondNumber));
            stack.push(output);
        }
    }
    return stack;
}
// main program
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter an array of tokens in RPN format (space-separated): ', function (input) {
        var array = input.trim().split(" ");
        console.log(array);
        var result = evaluateRPN(array);
        console.log("Output:");
        result.print();
        rl.close();
    });
}
main();
