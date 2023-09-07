import * as readline from "readline";

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (nodes.length === 0) return null;

  const root: TreeNode = new TreeNode(nodes[0]!);
  const queue: TreeNode[] = [root];
  let index = 1;

  while (index < nodes.length) {
    const currentNode: TreeNode = queue.shift()!;
    if (nodes[index] !== null) {
      currentNode.left = new TreeNode(nodes[index]!);
      queue.push(currentNode.left);
    }
    index++;

    if (index < nodes.length && nodes[index] !== null) {
      currentNode.right = new TreeNode(nodes[index]!);
      queue.push(currentNode.right);
    }
    index++;
  }

  return root;
}

function inOrderTraversal(root: TreeNode, result: number[] = []): number[] {
  if (root !== null) {
    inOrderTraversal(root.left!, result);
    result.push(root!.value);
    inOrderTraversal(root.right!, result);
  }

  return result;
}

function constructMinHeap(
  arr: number[],
  start: number,
  end: number
): TreeNode | null {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new TreeNode(arr[mid]);

  root.left = constructMinHeap(arr, start, mid - 1);
  root.right = constructMinHeap(arr, mid + 1, end);

  return root;
}

function printInOrder(root: TreeNode): void {
  if (root) {
    printInOrder(root.left!);
    process.stdout.write(root.value + " ");
    printInOrder(root.right!);
  }
}

function convertToMinHeap(root: TreeNode): TreeNode | null {
  const values: number[] = inOrderTraversal(root);
  values.sort((a, b) => a - b);
  return constructMinHeap(values, 0, values.length - 1);
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the elements of the binary tree in in-order traversal, separated by spaces: ",
    (input: string) => {
      const nums: (number | null)[] = input
        .trim()
        .split(" ")
        .map((element: string) =>
          element === "-1" ? null : parseInt(element, 10)
        );

      const tree: TreeNode = buildTree(nums)!;
      const minHeap: TreeNode = convertToMinHeap(tree)!;

      process.stdout.write("Converted Min Heap (In-Order Traversal): ");
      printInOrder(minHeap);
      process.stdout.write("\n");

      rl.close();
    }
  );
};

main();
