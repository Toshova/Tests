function doubleArr(arr){
    for(let i=0; i<arr.length; i++){
        arr.splice(i+1, 0, arr[i]);
        i++;
    }
    return arr
}
 console.log(doubleArr([3, [1,2,3], 'hello', true, 88]))