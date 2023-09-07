import * as readline from "readline";

class MinHeap<T> {
  heap: T[];
  capacity: number;

  constructor(capacity: number) {
    this.heap = [];
    this.capacity = capacity;
  }

  push(value: T) {
    if (this.heap.length === this.capacity) {
      this.heap.pop();
    }
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index: number) {
    let parentIndex: number = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  pop() {
    const item: T = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);

    return item;
  }

  heapifyDown(index: number) {
    const leftChildIndex: number = 2 * index + 1;
    const rightChildIndex: number = 2 * index + 2;

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
      smallest = index;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }

  peekMin(): T {
    return this.heap[0];
  }
}

function findMin(nums: number[]): number {
  const minHeap: MinHeap<number> = new MinHeap<number>(nums.length);

  for (let num of nums) {
    minHeap.push(num);
  }

  return minHeap.peekMin();
}

function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the space-separated elements of the array: ",
    (input: string) => {
      const nums: number[] = input.trim().split(" ").map(Number);

      const result: number = findMin(nums);
      console.log(`Minimum element: ${result}`);
      rl.close();
    }
  );
}

main();
