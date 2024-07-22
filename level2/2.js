let arr=[1, -2, 3, 4, -5, 6];
let sum=0;
for (let i in arr){
    if(arr[i]<0){
        sum+=1;
    }
}
console.log(sum);
console.log(arr.filter(item => item>=0));

let str='stringify';
console.log(str.slice(0, str.length-2)+str[str.length-1]);

let arr2=[1, 2, 3, 4, 5, 6];
let sum1=0;
let sum2=0;
for (let i in arr2){
    if (i<=arr2.length/2){
        sum1+=i;
    } else {
        sum2+=i;
    }
}
console.log(sum1/sum2)