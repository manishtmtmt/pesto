"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addEdge = function (node, adjacentNodes) {
        this.adjacencyList.set(node, adjacentNodes);
    };
    Graph.prototype.bfsTraversal = function () {
        var nodes = Array.from(this.adjacencyList.keys());
        if (nodes.length === 0) {
            console.log("Graph is empty.");
            return;
        }
        this.startNode = nodes[0];
        var visited = Array.from({ length: this.adjacencyList.size }, function () { return false; });
        var queue = [];
        visited[this.startNode] = true;
        queue.push(this.startNode);
        while (queue.length > 0) {
            var currentNode = queue.shift();
            console.log(this.startNode);
            var neighbors = this.adjacencyList.get(currentNode) || [];
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    };
    return Graph;
}());
var main = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    var graph = new Graph();
    rl.question("Enter the adjacency list (semicolon-separated rows): ", function (input) {
        var rows = input.trim().split(";");
        console.log("🚀 ~ file: breadth_first_search.ts:62 ~ main ~ rows:", rows);
        for (var i = 0; i < rows.length; i++) {
            var values = rows[i].trim().split(" ").map(Number);
            console.log("🚀 ~ file: breadth_first_search.ts:66 ~ main ~ values:", values);
            var node = i;
            graph.addEdge(node, values);
        }
        console.log("BFS Traversal:");
        graph.bfsTraversal();
        rl.close();
    });
};
main();
