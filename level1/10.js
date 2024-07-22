let arr = [];
while(arr.length < 10){
    let x = Math.floor(Math.random() * 100) + 1
    if(arr.indexOf(x) === -1) arr.push(x);
}
console.log(arr);

let num = 12345;
console.log(String(num).split('').reverse(num).join(','))

let array=[1, 2, 3, 4, 5, 6]

for (let i=0; i<array.length; i+=2){
    console.log(array.slice(i, i+2));
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2))