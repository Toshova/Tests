let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];


function findSum(arr){
    let sum=0;
    for (let i in arr){
        for (key in arr[i]){
            for (let y in arr[i][key]){
                sum+=arr[i][key][y]
            }
        }
    }
    return sum
}

console.log(findSum(data))