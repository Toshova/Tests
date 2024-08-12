
const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter number: ', (x) => {
   x.toString().includes('0') ? console.log('0 is here!') : console.log (msg= 'No 0!');
    
    rd.close()
  });
  

