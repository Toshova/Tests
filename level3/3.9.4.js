
function searchSum(num, sum){
    let arr=[];
    for (let i=1; i<=num; i++){
        let result = i.toString().split('').map(item => +item).reduce((sum, current) => +sum + current, 0);
        if (result==sum){
            arr.push(i)
        }
    }
    return arr
}
console.log(searchSum(1000, 13))