import * as readline from "readline";

class Graph {
  private adjacencyList: Map<number, number[]>;
  private startNode: number | undefined;

  constructor() {
    this.adjacencyList = new Map();
  }

  addEdge(node: number, adjacentNodes: number[]) {
    this.adjacencyList.set(node, adjacentNodes);
  }

  bfsTraversal() {
    const nodes = Array.from(this.adjacencyList.keys());

    if (nodes.length === 0) {
      console.log("Graph is empty.");
      return;
    }

    this.startNode = nodes[0];

    const visited: boolean[] = Array.from(
      { length: this.adjacencyList.size },
      () => false
    );
    const queue: number[] = [];

    visited[this.startNode] = true;
    queue.push(this.startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      console.log(this.startNode);

      const neighbors = this.adjacencyList.get(currentNode) || [];

      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const graph = new Graph();

  rl.question(
    "Enter the adjacency list (semicolon-separated rows): ",
    (input: string) => {
      const rows: string[] = input.trim().split(";");
      console.log("🚀 ~ file: breadth_first_search.ts:62 ~ main ~ rows:", rows)

      for (let i = 0; i < rows.length; i++) {
        const values: number[] = rows[i].trim().split(" ").map(Number);
        console.log("🚀 ~ file: breadth_first_search.ts:66 ~ main ~ values:", values)
        const node = i;
        graph.addEdge(node, values);
      }

      console.log("BFS Traversal:");
      graph.bfsTraversal();

      rl.close();
    }
  );
};

main();