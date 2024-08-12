const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter string: ', (str) => {
    str=str.split(' ').map (item => item.toString().slice(0, item.length-1)+item.toString()[item.length-1].toUpperCase()).join(' ');
    console.log((`Your modified string: ${str}`));
    rd.close()
  });
  

