import * as readline from "readline";

function isMinHeap(arr: number[]): boolean {
  const n = arr.length;

  for (let i: number = Math.floor(n / 2) - 1; i >= 0; i--) {
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if (leftChild < n && arr[i] > arr[leftChild]) return false;

    if (rightChild < n && arr[i] > arr[rightChild]) return false;
  }

  return true;
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the space-separated elements of an array: ",
    (input: string) => {
      const nodes: number[] = input.trim().split(" ").map(Number);
      const result: boolean = isMinHeap(nodes);
      console.log(result);

      rl.close();
    }
  );
};

main();
