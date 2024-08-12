let arr=[1000, 67, 45, 9];
 
function arrFilter(x){
    return x.filter(item => item<1000)
}

console.log(arrFilter(arr))