let str='kiwi apricot mango pear apple';
console.log(str.split(' ').filter(item => item[0]=='a'))

let arr= [2, 12, 15, 0, 4, 80, 1];
console.log(arr.filter(item => item%5==0));

console.log(arr.filter(item => item.toString().includes('0')));

arr.join('').includes('3') ? console.log('есть 3') : console.log('нет 3')

let num=35142;
console.log(num.toString().split('').sort().join('')*1)