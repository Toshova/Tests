let arr=[123, 456, 789];

function splitArr(x){
    return x.join('').split('').map(item => +item)
}
console.log(splitArr(arr))