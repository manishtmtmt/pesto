"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var MinHeapNode = /** @class */ (function () {
    function MinHeapNode(value, arrayIndex, elementIndex) {
        this.value = value;
        this.arrayIndex = arrayIndex;
        this.elementIndex = elementIndex;
    }
    return MinHeapNode;
}());
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.push = function (node) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    };
    MinHeap.prototype.pop = function () {
        if (this.heap.length === 0)
            return undefined;
        if (this.heap.length === 1)
            return this.heap.pop();
        var root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    };
    MinHeap.prototype.heapifyUp = function (index) {
        var _a;
        var parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 &&
            this.heap[index].value < this.heap[parentIndex].value) {
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
        var smallest = index;
        if (leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex].value < this.heap[smallest].value) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex].value < this.heap[smallest].value) {
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
    MinHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    return MinHeap;
}());
function mergeSortedArrays(arr) {
    var result = [];
    var heap = new MinHeap();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            heap.push(new MinHeapNode(arr[i][0], i, 0));
        }
    }
    while (!heap.isEmpty()) {
        var minNode = heap.pop();
        result.push(minNode.value);
        var nextElementIndex = minNode.elementIndex + 1;
        if (nextElementIndex < arr[minNode.arrayIndex].length) {
            heap.push(new MinHeapNode(arr[minNode.arrayIndex][nextElementIndex], minNode.arrayIndex, nextElementIndex));
        }
    }
    return result;
}
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    var arr = [];
    rl.question("Enter the number of sorted arrays k: ", function (input) {
        var k = parseInt(input, 10);
        console.log("Enter the elements separated by space:");
        rl.on("line", function (input) {
            arr.push(input.trim().split(" ").map(Number));
            if (arr.length === k) {
                rl.close();
            }
        });
    });
    rl.on("close", function () {
        var result = mergeSortedArrays(arr);
        console.log("Merged sorted array: ".concat(JSON.stringify(result)));
    });
};
main();
