const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter string: ', (str) => {
    str= str.split(' ').map(x=>x.replace( /[aeiou]/g, '' )).join(' ');
    console.log((`No vowel string: ${str}`));
    rd.close()
  });
  

