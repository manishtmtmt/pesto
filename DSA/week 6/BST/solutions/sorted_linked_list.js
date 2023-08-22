"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TreeNode = /** @class */ (function () {
    function TreeNode(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (data) {
        var node = new TreeNode(data);
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    };
    BST.prototype.insertNode = function (node, newNode) {
        if (newNode.data <= node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BST.prototype.inorderTraversal = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
        return result;
    };
    return BST;
}());
// main program
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var bst = new BST();
    rl.question("Enter the value of nodes separated by space: ", function (input) {
        var arr = input.trim().split(" ").map(Number);
        arr.forEach(function (element) { return bst.insert(element); });
        var sortedTree = bst.inorderTraversal(bst.root, []);
        console.log("Sorted binary search tree:");
        console.log(sortedTree);
        rl.close();
    });
}
main();
