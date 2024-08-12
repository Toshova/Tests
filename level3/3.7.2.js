const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rd.question('Enter number: ', (num) => {
    let arr=[];
    for (let i=1; i<=num; i++){
        if(num%i==0){
            arr.push(i)
        }
    }
    console.log((`Number divisors: ${arr}`));
    rd.close()
  });
  

