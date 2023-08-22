import * as readline from 'readline';

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(data: T): void {
    const node: TreeNode<T> | null = new TreeNode<T>(data);
    if(this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.data <= node.data) {
      if(node.left === null) {
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

  inorderTraversal(node: TreeNode<T> | null = this.root, result: T[]): T[] {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }

    return result;
  }
}

// main program
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const bst: BST<number> = new BST<number>();

  rl.question("Enter the value of nodes separated by space: ", (input: string) => {
    const arr: number[] = input.trim().split(" ").map(Number);

    arr.forEach((element: number) => bst.insert(element));
    const sortedTree: number[] = bst.inorderTraversal(bst.root, []);
    console.log("Sorted binary search tree:");
    console.log(sortedTree);
    rl.close();
  })
}

main();