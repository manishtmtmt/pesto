// function findKthSmallest(matrix: number[][], k: number): number {
//   // Create an empty min heap.
//   const minHeap = new PriorityQueue<{
//     row: number;
//     col: number;
//     val: number;
//   }>();

//   // Iterate over each row of the matrix and insert the first element from each row into the heap.
//   for (let row = 0; row < matrix.length; row++) {
//     minHeap.push({ row, col: 0, val: matrix[row][0] });
//   }

//   // Extract the kth smallest element from the heap.
//   for (let i = 0; i < k; i++) {
//     // Get the smallest element from the heap.
//     const { row, col, val } = minHeap.pop();

//     // If there are more elements in the same row, insert the next element into the heap.
//     if (col + 1 < matrix[row].length) {
//       minHeap.push({ row, col: col + 1, val: matrix[row][col + 1] });
//     }
//   }

//   // The kth smallest element will be the top element of the heap.
//   return minHeap.peek().val;
// }

// function main() {
//   // Take input from the user for the number of rows, number of columns, matrix elements, and the value of k.
//   const numRows = prompt("Enter the number of rows: ");
//   const numCols = prompt("Enter the number of columns: ");
//   const matrix = [];
//   for (let i = 0; i < numRows; i++) {
//     const row = prompt(
//       `Enter the elements of row ${i + 1} separated by commas: `
//     );
//     matrix.push(row.split(",").map(Number));
//   }
//   const k = prompt("Enter the value of k: ");

//   // Find the kth smallest element in the matrix.
//   const kthSmallest = findKthSmallest(matrix, k);

//   // Print the kth smallest element.
//   console.log(`The kth smallest element is ${kthSmallest}`);
// }

// main();
