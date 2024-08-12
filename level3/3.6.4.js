let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

function findSum(x){
    let sum=0;
    for (let i in x){
        for (key in x[i]){
            sum+=x[i][key]
        }
    }
    return sum
}

console.log(findSum(data))