for (let i=10; i<=1000; i++){
    if(i.toString()[0]%2==0){
        console.log(i)
    }
}

let arr=[1, 2, 3, 4, 5, 6];
let clone=[]
for (let i=0; i<=arr.length-1; i++){
    if (i%2==0){
        clone.push(arr[i+1])
    } else {
        clone.push(arr[i-1])
    }
}
console.log(clone)

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum=0;
for (key in obj) {
    for (key in obj[key]){
        sum+=obj[key][key]
    }   
  }
  console.log(sum)