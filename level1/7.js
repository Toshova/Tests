let str='abcde';
console.log(str.split(''))

let num=12345;
console.log(String(num).split('').map((num) => {
    return Number(num)
}))

console.log(+String(num).split('').reverse(num).join(''))

str =String(num);
let sum=0;
for (let i in str ){
    sum+=+str[i]
}
console.log(sum)
