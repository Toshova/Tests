const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter numbers: ', (num) => {
    let maxNum;
    num=num.split(',');
    maxNum=Math.max.apply(null, num);
    console.log((`Max number: ${maxNum}`));
    rd.close()
  });
  

