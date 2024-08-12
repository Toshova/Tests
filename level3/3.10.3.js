function searchCommonDigits(num1, num2){
let arr=[];
num1=num1.toString().split('');
num2=num2.toString();
for(let i in num1){
    if (num2.includes(num1[i]) && !arr.join('').includes(num1[i])){
        arr.push(+num1[i])
    }
}
return arr
}

console.log(searchCommonDigits(1239, 3439))
