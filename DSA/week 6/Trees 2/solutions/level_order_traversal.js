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
var printLevels = function (root) {
    var result = [];
    var queue = [root];
    while (queue.length > 0) {
        var currentLevel = [];
        var levelSize = queue.length;
        for (var i = 0; i < levelSize; i++) {
            var node = queue.shift();
            if (node !== null) {
                currentLevel.push(node.value);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (currentLevel.length > 0)
            result.push(currentLevel);
    }
    result.forEach(function (element, index) {
        return console.log("Level ".concat(index + 1, ": ").concat(element.join(" ")));
    });
};
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the nodes of binary tree (space-separated): ", function (input) {
        var nodes = input
            .trim()
            .split(" ")
            .map(function (element) {
            return element === "-1" ? null : parseInt(element);
        });
        var tree = buildTree(nodes);
        printLevels(tree);
        rl.close();
    });
};
main();
