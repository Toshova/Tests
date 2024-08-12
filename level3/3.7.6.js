let arr=[1, 23, -4, 5, 66, 200];

function addNum(x){
    let y=[];
   for (let i in x){
    if (x[i].toString().length == 1){
        y.push(x[i])
    }
    y.push(x[i])
   } 
   return y
}

console.log(addNum(arr))