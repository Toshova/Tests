
function findDivisors(x, y){
    let arr=[];
    for (let i=1; i<=x; i++){
        if(x%i==0 && y%i==0){
            arr.push(i)
        }
    }
   return arr
}

console.log(findDivisors(300,100))