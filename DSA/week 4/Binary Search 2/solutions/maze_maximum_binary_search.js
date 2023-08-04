function getMaxCoins(n, maze) {
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = maze[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + maze[i][0];
  }

  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + maze[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1] + maze[i][j])
    }
  }

  return dp[n - 1][n - 1];
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n;
  let maze = [];

  readline.question(
    "Enter the size of the maze grid: ",
    (input) => {
      n = parseInt(input);
      console.log("Enter the maze grid:");

      readline.on('line', line => {
        const row = line.trim().split(" ").map(Number);
        maze.push(row);

        if (maze.length === n) {
          readline.close();
        }
      })
    }
  );

  readline.on("close", () => {
    const result = getMaxCoins(n, maze);
    console.log("Maximum number of coins:", result);
  })
}

main();
