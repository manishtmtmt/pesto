import * as readline from "readline";

class MinHeapNode {
  constructor(
    public value: number,
    public arrayIndex: number,
    public elementIndex: number
  ) {}
}

class MinHeap {
  private heap: MinHeapNode[] = [];

  constructor() {}

  push(node: MinHeapNode) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): MinHeapNode | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return root;
  }

  private heapifyUp(index: number) {
    let parentIndex: number = Math.floor((index - 1) / 2);
    if (
      parentIndex >= 0 &&
      this.heap[index].value < this.heap[parentIndex].value
    ) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].value < this.heap[smallest].value
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].value < this.heap[smallest].value
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

function mergeSortedArrays(arr: number[][]): number[] {
  const result: number[] = [];
  const heap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      heap.push(new MinHeapNode(arr[i][0], i, 0));
    }
  }

  while (!heap.isEmpty()) {
    const minNode = heap.pop()!;
    result.push(minNode.value);

    const nextElementIndex = minNode.elementIndex + 1;
    if (nextElementIndex < arr[minNode.arrayIndex].length) {
      heap.push(
        new MinHeapNode(
          arr[minNode.arrayIndex][nextElementIndex],
          minNode.arrayIndex,
          nextElementIndex
        )
      );
    }
  }

  return result;
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const arr: number[][] = [];

  rl.question("Enter the number of sorted arrays k: ", (input: string) => {
    const k: number = parseInt(input, 10);

    console.log("Enter the elements separated by space:");
    rl.on("line", (input: string) => {
      arr.push(input.trim().split(" ").map(Number));

      if (arr.length === k) {
        rl.close();
      }
    });
  });

  rl.on("close", () => {
    const result: number[] = mergeSortedArrays(arr);
    console.log(`Merged sorted array: ${JSON.stringify(result)}`);
  });
};

main();
