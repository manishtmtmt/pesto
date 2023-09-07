"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function buildTree(nodes) {
    if (nodes.length === 0)
        return null;
    var root = new TreeNode(nodes[0]);
    var queue = [root];
    var index = 1;
    while (index < nodes.length) {
        var currentNode = queue.shift();
        if (nodes[index] !== null) {
            currentNode.left = new TreeNode(nodes[index]);
            queue.push(currentNode.left);
        }
        index++;
        if (index < nodes.length && nodes[index] !== null) {
            currentNode.right = new TreeNode(nodes[index]);
            queue.push(currentNode.right);
        }
        index++;
    }
    return root;
}
function inOrderTraversal(root, result) {
    if (result === void 0) { result = []; }
    if (root !== null) {
        inOrderTraversal(root.left, result);
        result.push(root.value);
        inOrderTraversal(root.right, result);
    }
    return result;
}
function constructMinHeap(arr, start, end) {
    if (start > end)
        return null;
    var mid = Math.floor((start + end) / 2);
    var root = new TreeNode(arr[mid]);
    root.left = constructMinHeap(arr, start, mid - 1);
    root.right = constructMinHeap(arr, mid + 1, end);
    return root;
}
function printInOrder(root) {
    if (root) {
        printInOrder(root.left);
        process.stdout.write(root.value + " ");
        printInOrder(root.right);
    }
}
function convertToMinHeap(root) {
    var values = inOrderTraversal(root);
    values.sort(function (a, b) { return a - b; });
    return constructMinHeap(values, 0, values.length - 1);
}
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the elements of the binary tree in in-order traversal, separated by spaces: ", function (input) {
        var nums = input
            .trim()
            .split(" ")
            .map(function (element) {
            return element === "-1" ? null : parseInt(element, 10);
        });
        var tree = buildTree(nums);
        var minHeap = convertToMinHeap(tree);
        process.stdout.write("Converted Min Heap (In-Order Traversal):");
        printInOrder(minHeap);
        process.stdout.write("\n");
        rl.close();
    });
};
main();
