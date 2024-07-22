let str='023m0df0dfg0';
let pos=[]
for (let i in str){
    if (str[i]=='0'){
        pos.push(+i)
    }
}
console.log(pos)

let str2='abcdefghijk';
str2=str2.split('');
for (let i in str2){
    if((i+1)%3==0){
        delete str2[i]
    }
}
console.log(str2.join(''))

let arr=[1, 2, 3, 4, 5, 6];
let odd=0;
let even=0;
for (let i in arr){
    if(i%2==0){
        even+=arr[i]
    } else {
        odd+=arr[i]
    }
}

console.log(even/odd)