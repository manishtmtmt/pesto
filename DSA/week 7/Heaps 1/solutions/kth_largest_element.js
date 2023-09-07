"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var MinHeap = /** @class */ (function () {
    function MinHeap(capacity) {
        this.heap = [];
        this.capacity = capacity;
    }
    MinHeap.prototype.push = function (item) {
        if (this.heap.length === this.capacity) {
            this.heap.pop();
        }
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    };
    MinHeap.prototype.pop = function () {
        var item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return item;
    };
    MinHeap.prototype.peek = function () {
        return this.heap[0];
    };
    MinHeap.prototype.extractMin = function () {
        var min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
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
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        var smallestIndex = index;
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[rightChildIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (smallestIndex !== index) {
            _a = [
                this.heap[smallestIndex],
                this.heap[index],
            ], this.heap[index] = _a[0], this.heap[smallestIndex] = _a[1];
            this.heapifyDown(smallestIndex);
        }
    };
    return MinHeap;
}());
function findKthLargest(nums, k) {
    var minHeap = new MinHeap(k);
    for (var i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }
    for (var i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.push(nums[i]);
        }
    }
    return minHeap.peek();
}
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the space-separated elements of the array: ", function (input) {
        var nums = input.trim().split(" ").map(Number);
        rl.question("Enter the value of K: ", function (input) {
            var k = parseInt(input, 10);
            var result = findKthLargest(nums, k);
            console.log("The ".concat(k, "th largest element is: ").concat(result));
            rl.close();
        });
    });
}
main();
