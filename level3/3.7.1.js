const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter string: ', (str) => {
    str=str.split(' ').sort().join(' ');
    console.log((`Your sorted string: ${str}`));
    rd.close()
  });
  

