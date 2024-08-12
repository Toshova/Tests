
function findAllThree(arr){
    let res=false;
    for (let i in arr){
    
        if (arr[i].toString().indexOf('3')== -1){
            res=false;
            break
        } else {
            res=true
        }
    }
    return res
}

console.log(findAllThree([33,53,513,436]))