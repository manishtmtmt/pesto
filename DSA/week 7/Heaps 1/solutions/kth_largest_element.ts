import * as readline from "readline";

class MinHeap<T> {
  heap: T[];
  capacity: number;

  constructor(capacity: number) {
    this.heap = [];
    this.capacity = capacity;
  }

  push(item: T) {
    if (this.heap.length === this.capacity) {
      this.heap.pop();
    }
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    const item: T = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);

    return item;
  }

  peek() {
    return this.heap[0];
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
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
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap: MinHeap<number> = new MinHeap<number>(k);

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.extractMin();
      minHeap.push(nums[i]);
    }
  }

  return minHeap.peek();
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

      rl.question("Enter the value of K: ", (input: string) => {
        const k: number = parseInt(input, 10);

        const result = findKthLargest(nums, k);
        console.log(`The ${k}th largest element is: ${result}`);
        rl.close();
      });
    }
  );
}

main();
