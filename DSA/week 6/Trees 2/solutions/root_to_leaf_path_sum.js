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
var hasPathSum = function (root, targetSum) {
    if (!root || !targetSum)
        return false;
    targetSum -= root.value;
    if (root.left === null && root.right === null)
        return targetSum === 0;
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the nodes of the tree in a space-separated format: ", function (input) {
        var nodes = input
            .trim()
            .split(" ")
            .map(function (element) {
            return element === "null" ? null : parseInt(element);
        });
        var tree = buildTree(nodes);
        rl.question('Enter the target sum: ', function (input) {
            var target = +input;
            var result = hasPathSum(tree, target);
            console.log(result);
            rl.close();
        });
    });
};
main();
