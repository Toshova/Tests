let i=1;
let sum=0
do{
    sum+=i;
    i++;  
} while (i<=100);
console.log(sum)


let sumEven=0
for (let i=1; i<=100; i++) {
    if (i%2!=0) continue;
    sumEven+=i;
  }
  console.log(sumEven)

let sumOdd=0
for (let i=1; i<=100; i++) {
    if (i%2==0) continue;
    sumOdd+=i;
  }
  console.log(sumOdd)

let num1=15;
let num2=4;
console.log(num1-num2*(num1%num2))

let str= 'line';
for (let i=str.length-1; i>=0; i--){
    console.log(str[i])
}