let num = 1239
console.log(+num.toString()[0])
console.log(+num.toString()[num.toString().length-1])
console.log(+num.toString()[0] + +num.toString()[num.toString().length-1])
console.log(num.toString().length)
+num.toString()[0] == +num.toString()[num.toString().length-1] ? console.log('Совпадают') : console.log('Не совпадают')