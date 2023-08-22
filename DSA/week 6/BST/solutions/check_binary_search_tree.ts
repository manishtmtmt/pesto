import * as readline from "readline";

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(data: T): void {
    const newNode: TreeNode<T> | null = new TreeNode<T>(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.data <= node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("", () => {});
}
