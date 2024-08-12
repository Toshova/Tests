let cars = ["Saab", "Volvo", "BMW", 'BYD'];

console.log(cars.filter(item => item.length<=3))

let num=13587
let str=num.toString();
let msg
for (let i in str){
    if (+str[i]%2==0){
        msg='Есть четные цифры';
        break
    } else {
        msg='Все цифры этого числа являются нечетными'
    }
}
console.log(msg)

let str2='abcba'.split('');
let rvs=str2.slice().reverse().join('')
str2.join('') == rvs ? console.log('Слово читается одинаково с любой стороны') : console.log('Слово не читается одинаково с любой стороны')

let arr=[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]

let sum=0;
for (let i in arr){
    for (let j in arr[i]){
        for (let k in arr[i][j]){
            sum+=arr[i][j][k]
        }
    }
}
console.log(sum)