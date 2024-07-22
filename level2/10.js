let str='dLn488K4'
let sum=0;
for (let i in str){
    if (str[i].match(/^[A-Za-z]*$/)){
        sum+=1
    }
}
sum<=3 ? console.log('Не более трех букв'):console.log('Более трех букв')

let num=185763
num=num.toString().split('').reverse()
for (let i in num){
    if (+num[i]%2==0){
        console.log(+num[i]);
        break
    }
}

let str2='abcde abcde abcde'.split(' ')
for(let i in str2){
    str2[i]='!'+str2[i].slice(1)
}
console.log(str2)

let arr=[1, 2, 3, 3, 4, 5];
let msg
for (let i=0; i<=arr.length-1; i++){
    if (arr[i]===arr[i+1]){
        msg='Eсть два одинаковых элемента подряд';
        break
    } else {
        msg='Нет двух одинаковых элементов подряд';
       
    }
}
console.log(msg)