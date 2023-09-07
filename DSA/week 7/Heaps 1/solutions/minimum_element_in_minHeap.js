"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var MinHeap = /** @class */ (function () {
    function MinHeap(capacity) {
        this.heap = [];
        this.capacity = capacity;
    }
    MinHeap.prototype.push = function (value) {
        if (this.heap.length === this.capacity) {
            this.heap.pop();
        }
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
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
    MinHeap.prototype.pop = function () {
        var item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return item;
    };
    MinHeap.prototype.heapifyDown = function (index) {
        var _a;
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        var smallest = index;
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = index;
        }
        if (smallest !== index) {
            _a = [
                this.heap[smallest],
                this.heap[index],
            ], this.heap[index] = _a[0], this.heap[smallest] = _a[1];
            this.heapifyDown(smallest);
        }
    };
    MinHeap.prototype.peekMin = function () {
        return this.heap[0];
    };
    return MinHeap;
}());
function findMin(nums) {
    var minHeap = new MinHeap(nums.length);
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        minHeap.push(num);
    }
    return minHeap.peekMin();
}
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the space-separated elements of the array: ", function (input) {
        var nums = input.trim().split(" ").map(Number);
        var result = findMin(nums);
        console.log("Minimum element: ".concat(result));
        rl.close();
    });
}
main();
