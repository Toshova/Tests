let str='fn9434hg8';
let arr=[];
for(let i in str){
    if (+str[i]>=0 && +str[i]<=9){
        arr.push(+i)
    }
}
let search = str.search(/\d/)
console.log(arr);

let arr2=[123, 456, 789];
for (let i in arr2){
    arr2[i]=arr2[i].toString().split('').reverse().join('')*1
}

console.log(arr2)

let str2='12345678980'.split('').reverse().join('');
arr=[];
for(let i=0; i<=str2.length; i+=3){
    arr.push(str2.slice(i, i+3).split('').reverse().join(''))
}

console.log(arr.reverse().join(' '))

let str3='AbCdE'.split('')
for (let i in str3){
    if (str3[i].match(/^[A-Z]*$/)) {
        str3[i]=str3[i].toLowerCase()
    } else if (str3[i].match(/^[a-z]*$/)){
        str3[i]=str3[i].toUpperCase()
    }
}
console.log(str3.join(''))

let arr4=[1, 2, 3, 4, 5, 6, ].join('');
let res=[];
for (let i=0; i<=arr4.length-1; i+=2){
    res.push(arr4.slice(i, i+2)*1)
}
console.log(res)

let str4='aaa bbb ccc eee fff'.split(' ');
for (let i in str4){
    if(i%2!=0){
        str4[i]=str4[i][0].toUpperCase()+str4[i].slice(1)
    }
}
console.log(str4.join(' '))