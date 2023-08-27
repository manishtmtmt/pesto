"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = this.right = null;
    }
    return TreeNode;
}());
var buildTree = function (nodes) {
    if (nodes.length === 0)
        return null;
    var root = new TreeNode(nodes[0]);
    var queue = [root];
    var i = 1;
    while (i < nodes.length) {
        var currentNode = queue.shift();
        if (nodes[i] !== null) {
            currentNode.left = new TreeNode(nodes[i]);
            queue.push(currentNode.left);
        }
        i++;
        if (i < nodes.length && nodes[i] !== null) {
            currentNode.right = new TreeNode(nodes[i]);
            queue.push(currentNode.right);
        }
        i++;
    }
    return root;
};
var areIdentical = function (root1, root2) {
    if (!root1 && !root2)
        return true;
    if (!root1 || !root2)
        return false;
    return (root1.value === root2.value &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right));
};
var isSubTree = function (tree1, tree2) {
    if (!tree2)
        return true;
    if (!tree1)
        return false;
    if (areIdentical(tree1, tree2))
        return true;
    return isSubTree(tree1.left, tree2) || isSubTree(tree1.right, tree2);
};
// main program
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the nodes of first binary tree: ", function (input) {
        var nodesArr1 = input
            .trim()
            .split(" ")
            .map(function (element) {
            return element === "null" ? null : parseInt(element);
        });
        var tree1 = buildTree(nodesArr1);
        rl.question("Enter the nodes of the second binary tree: ", function (input) {
            var nodesArr2 = input
                .trim()
                .split(" ")
                .map(function (element) {
                return element === "null" ? null : parseInt(element);
            });
            var tree2 = buildTree(nodesArr2);
            var result = isSubTree(tree1, tree2);
            console.log("The second tree is".concat(result ? "" : " not", " a subtree of the first tree."));
            rl.close();
        });
    });
};
main();
