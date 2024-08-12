

function filterDivisers(arr, num){
    arr=arr.filter(item => num%item==0);
    return arr
}

console.log(filterDivisers([33, 1, 56, 97], 66))