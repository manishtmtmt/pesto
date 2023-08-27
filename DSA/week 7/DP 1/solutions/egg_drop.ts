import * as readline from "readline";

const eggDrop = (eggs: number, floors: number): number => {
  // create a dynamic programming matrix dp to store the result
  let dp: number[][] = new Array(eggs + 1)
    .fill(null)
    .map(() => new Array(floors + 1).fill(0));

  // initialize the base case:
  for (let i: number = 1; i <= eggs; i++) {
    dp[i][0] = 0;
    dp[i][1] = 1;
  }

  for (let j: number = 1; j <= floors; j++) {
    dp[1][j] = j;
  }

  // fill the rest of the matrix using dynamic programming
  for (let i: number = 2; i <= eggs; i++) {
    for (let j: number = 2; j <= floors; j++) {
      dp[i][j] = Infinity;
      // iterate through all possible floors k to drop the egg, from 1 to j
      for (let k: number = 1; k <= j; k++) {
        const breaks: number = dp[i - 1][k - 1];
        const doesNotBreak: number = dp[i][j - k];
        const attempts: number = 1 + Math.max(breaks, doesNotBreak);
        dp[i][j] = Math.min(dp[i][j], attempts)
      }
    }
  }
  return dp[eggs][floors]
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the number of eggs and number of floor as integer in space-separated format: ",
    (input: string) => {
      const [eggs, floors] = input.trim().split(" ").map(Number);

      const result: number = eggDrop(eggs, floors);
      console.log(`Minimum number of attempts: ${result}`);

      rl.close();
    }
  );
};

main();
