let num=1234567;
num=num.toString().split('').map(item => item*1);
let arr = num.slice().sort((a,b) => a-b)
num.join('') == arr.join('') ? console.log('yes'): console.log('no')

let arr2=[1, '', 2, 3, '', 5].filter( item => item)

console.log(arr2)

let arr3=[
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

for (let i in arr3){
    arr3[i]=arr3[i].sort((a,b)=> a-b)
}
console.log(arr3)

let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3, 4, 5];

arr4.length<arr5.length ? arr5=arr5.slice(0, arr4.length) : arr4=arr4.slice(0, arr5.length)
console.log(arr4, arr5)