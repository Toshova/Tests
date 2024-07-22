let arr=[1, 3, 5, 1];
let sum=0;

for (let i in arr){
    sum+=(arr[i]*arr[i])
}
console.log(sum)

let arr2=[4, 9, 25];
let sum2=0;

for (let i in arr2){
    sum2+=Math.sqrt(arr2[i])
}
console.log(sum2)

let arr3=[-1, 6, 7, -10];
let sum3=0; 
for (let i in arr3){
    if(arr3[i]>0){
        sum3+=arr3[i]
    }
}
console.log(sum3)

let arr4=[-1, 6, 5, -10, 16];
let sum4=0; 
for (let i in arr3){
    if( arr4[i]>0 && arr4[i]<10){
        sum4+=arr4[i]
    }
}
console.log(sum4)