const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter your camelCase string: ', (str) => {
    let res=str.replace(/([A-Z][a-z])/g, group => group.replace('', '_').toLowerCase())
    
    console.log((`Your snake_case string: ${res}`));
    rd.close()
  });
  