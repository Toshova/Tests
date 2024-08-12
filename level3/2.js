for (let i=10; i<=1000; i++){
   if (i.toString()[i.toString().length-2]%2==0)
        console.log(i)   
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i=4; i<=arr.length; i+=5){
    delete arr[i];
}

console.log(arr.filter(item => item))

let num = 5;
let str=[];
for (let i=0; i<num; i++){
    str.push('0')
}
console.log(str.join(''))

let str2='aaa bbb ccc eee fff'.split(' ');

for (let i in str2){
    if (i%2!=0){
        delete str2[i]
    }
}

console.log(str2.filter(item => item))

let arr2=[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

let sum=0;
for (let i in arr2){
    for (let j in arr2[i])
    sum+=arr2[i][j]
}

console.log(sum)