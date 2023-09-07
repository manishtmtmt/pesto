"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.push = function (value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    };
    MinHeap.prototype.pop = function () {
        var root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return root;
    };
    MinHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    MinHeap.prototype.heapifyUp = function (index) {
        var _a;
        var parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
            _a = [
                this.heap[parentIndex],
                this.heap[index],
            ], this.heap[index] = _a[0], this.heap[parentIndex] = _a[1];
            this.heapifyUp(parentIndex);
        }
    };
    MinHeap.prototype.heapifyDown = function (index) {
        var _a;
        var leftChildIndex = index * 2 + 1;
        var rightChildIndex = index * 2 + 2;
        var smallest = index;
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            _a = [
                this.heap[smallest],
                this.heap[index],
            ], this.heap[index] = _a[0], this.heap[smallest] = _a[1];
            this.heapifyDown(smallest);
        }
    };
    return MinHeap;
}());
function buildMinHeap(nums) {
    try {
        var minHeap = new MinHeap();
        for (var i = 0; i < nums.length; i++) {
            minHeap.push(nums[i]);
        }
        return minHeap;
    }
    catch (error) {
        console.log("🚀 ~ file: sort_array_using_minHeap.ts:77 ~ buildMinHeap ~ error:", error);
        return null;
    }
}
function sortArray(nums) {
    var result = [];
    var minHeap = buildMinHeap(nums);
    while (!minHeap.isEmpty()) {
        var minElement = minHeap.pop();
        result.push(minElement);
    }
    return result;
}
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the elements of the array, separated by spaces: ", function (input) {
        var nums = input.trim().split(" ").map(Number);
        var result = sortArray(nums);
        console.log(result);
        rl.close();
    });
};
main();
// MBLHA10BSFHF37600
