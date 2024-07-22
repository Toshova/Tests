let str = 'smdk0hhh'
console.log(str.indexOf('0'))

for(let i=0; i<=1000; i++){
    if(i.toString().length>=1 && +i.toString()[0]+ +i.toString()[1]==5)
    {
        console.log(i)
    }   
}

let arr=[2,3,5,7,7,8]
console.log(arr.filter(item => item!=7))

let arr2=[1, 2, 3, 4, 5, 6]
let sum=0

for (let i=0; i<=arr2.length/2; i++){
    sum+=i
}
console.log(sum)