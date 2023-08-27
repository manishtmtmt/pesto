import * as readline from 'readline';

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let costMatrix: number[][];
  let i = 0;
  
  rl.question('Enter the number of rows and columns in space-separated format: ', (input: string) => {
    const [rows, cols] = input.trim().split(" ").map(Number);
    costMatrix = new Array(rows).fill(0);

    console.log('Enter the rows in space-separated format:')

    rl.on('line', (input: string) => {
      costMatrix[i++] = input.trim().split(" ").map(Number);

      if (i === rows) rl.close();
    })
  })

  rl.on('close', () => {
    console.log(costMatrix)
  })
}

main();