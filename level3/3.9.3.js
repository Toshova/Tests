function deleteDoubleZero(arr){
    arr=arr.filter(item => item.toString().match(/0/g)==null || item.toString().match(/0/g).length<2);
    return arr
}

console.log(deleteDoubleZero([1023, 100, 2020, 34, 56]))
