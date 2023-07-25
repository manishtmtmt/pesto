function floodFill() {

}

// main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Please enter 2D array (e.g. 1 1 1, 1 1 0, 1 0 1): ', input => {
    input = input.trim().split(',');
    input = input.map(element => element.trim().split(" ").map(Number));
    console.log(input);
    readline.close();
  })
}

main();