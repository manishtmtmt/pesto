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
var findLowestCommonAncestor = function (root, firstNode, secondNode) {
    if (root === null)
        return null;
    if (root.value === firstNode || root.value === secondNode)
        return root.value;
    var left = findLowestCommonAncestor(root.left, firstNode, secondNode);
    var right = findLowestCommonAncestor(root.right, firstNode, secondNode);
    return left !== null && right !== null
        ? root.value
        : left !== null
            ? left
            : right;
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the value of each node space-separated in level order: ", function (input) {
        var nodes = input
            .trim()
            .split(" ")
            .map(function (element) {
            return element === "null" ? null : parseInt(element);
        });
        var tree = buildTree(nodes);
        rl.question("Enter the first and second node space-separated: ", function (input) {
            var _a = input.trim().split(" ").map(Number), firstNode = _a[0], secondNode = _a[1];
            var lowestCommonAncestor = findLowestCommonAncestor(tree, firstNode, secondNode);
            console.log("The lowest common ancestor of nodes ".concat(firstNode, " and ").concat(secondNode, " is ").concat(lowestCommonAncestor, "."));
            rl.close();
        });
    });
};
main();
