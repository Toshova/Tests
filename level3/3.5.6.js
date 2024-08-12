const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter number: ', (num) => {
    num=num.toString().split('').map((item, i) => i==0 ? '-'+ item + '-': item+'-').join('');
    console.log((`Your dashed number: ${num}`));
    rd.close()
  });
  



