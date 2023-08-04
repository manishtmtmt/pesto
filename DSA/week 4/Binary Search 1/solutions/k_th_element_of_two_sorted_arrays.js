function findKthSmallestElement(arr1, arr2, K) {
  let left = Math.min(arr1[0], arr2[0]);
  let right = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let count1 = countLessThanOrEqual(arr1, mid);
    let count2 = countLessThanOrEqual(arr2, mid);
    let totalCount = count1 + count2;
    if (totalCount < K) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

function countLessThanOrEqual(arr, target) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] <= target) {
      count = mid + 1;
      left = mid + 1;
    } else right = mid - 1;
  }

  return count;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter array as comma-separated and K as space separated: (e.g. 1,2,3 1,3,5 5): ",
    (input) => {
      input = input.trim().split(" ");
      const arr1 = input[0].trim().split(",").map(Number);
      const arr2 = input[1].trim().split(",").map(Number);
      const k = +input[2];

      const output = findKthSmallestElement(arr1, arr2, k);
      console.log("output: ", output);
      readline.close();
    }
  );
}

main();
