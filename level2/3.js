let word1="anna";
let word2="anapa";
word1[word1.length-1] == word2[0] ? console.log(true) : console.log(false);

let str="0fj0fkf0ddm000";
let count=0;
let pos
 
while (pos !== -1){
    pos=str.indexOf('0', pos+1);
    count++;
    if(count===3){
        break
    }
}
console.log(pos) 

let str2='12,34,56';
let arr=str2.split(',');
let sum=0;
for (let i in arr){
    sum+=(+arr[i])
}
console.log(sum)

let data='2025-12-31';
let arr2=data.split('-');
let arr3=["year", "month", "day"];
let obj={}
for (let i in arr2){
    obj[arr3[i]]=arr2[i]
}
console.log(obj)