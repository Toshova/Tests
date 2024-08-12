const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter number: ', (num) => {
    let x=0;
   for (let i=1; i<=num; i++){
    if (num%i==0){
        x+=1
    }
   }
   x>2? console.log('Not simple number') : console.log('Simple number')
    rd.close()
  });
  

