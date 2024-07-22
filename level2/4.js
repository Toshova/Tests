let str= 'gg49h58g';
let search = str.search(/\d/)
console.log(search);

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
let keys=[];
let values=[];
for (let key in user){
    keys.push(key);
    values.push(user[key])
}
console.log(keys);
console.log(values);

let num=30948575;
let sum=0;
let arr=num.toString().split('');
for (let i in arr){
    if(+arr[i]%2==0){
        sum+=1;
    }
}
console.log(sum)

let str2='abcde';
str2=str2.split('')
for(let i in str2){
    if(i%2==0){
        str2[i]=str2[i].toUpperCase()
    }
}
console.log(str2.join(''))


let str3='aaa bbb ccc';
str3=str3.split('')
for (let i in str3){
    if(i==0 || str3[i-1]==' ' ){
        str3[i]=str3[i].toUpperCase()
    } 
}
console.log(str3.join(''))