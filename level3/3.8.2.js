const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter your kebab-case string: ', (str) => {
    let res=str.replace(/-/g, '_')
    console.log((`Your snake_case string: ${res}`));
    rd.close()
  });
  

