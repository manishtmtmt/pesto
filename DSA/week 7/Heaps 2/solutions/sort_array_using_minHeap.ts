import * as readline from "readline";

class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  push(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): number {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp(index: number) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index: number) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
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
}

function buildMinHeap(nums: number[]): MinHeap | null {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
  }

  return minHeap;
}

function sortArray(nums: number[]): number[] {
  const result: number[] = [];
  const minHeap = buildMinHeap(nums)!;

  while (!minHeap.isEmpty()) {
    const minElement: number = minHeap.pop();
    result.push(minElement);
  }
  return result;
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the elements of the array, separated by spaces: ",
    (input: string) => {
      const nums: number[] = input.trim().split(" ").map(Number);

      const result: number[] = sortArray(nums);
      console.log(result);
      rl.close();
    }
  );
};

main();
