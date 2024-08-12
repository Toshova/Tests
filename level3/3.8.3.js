const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter your snake_case string: ', (str) => {
    let res=str.replace(/([_][a-z])/g, group => group.toUpperCase().replace('_', ''))
    
    console.log((`Your camelCase string: ${res}`));
    rd.close()
  });
  