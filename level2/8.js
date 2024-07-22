let str='GrjjKnh'.split('');
let sum=0;
for (let i in str){
    if (str[i].match(/^[A-Z]*$/)) {
        sum+=1;
    } 
}
sum<=2 ? console.log('Не более двух заглавных букв'): console.log('Более двух заглавных букв')


let str2='1 22 333 4444 22 5555 1'.split(' ').filter(i => i.length<=3).join(' ');

console.log(str2)

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
console.log(arr1.slice(0,2).concat(arr2, arr1.slice(2)))
