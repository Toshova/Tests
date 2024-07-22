let num=123456;
num=num.toString().split('').map((item, i, num) => num[i]+num[i+1]).filter(i => i%2==0);
let sum=0;
for (let i in num){
    sum+=num[i]*1
}

console.log(sum)

let arr=[1, 2, 3, 4, 5].reverse().join('');
for (let i in arr){
    console.log(+arr[i])
}

