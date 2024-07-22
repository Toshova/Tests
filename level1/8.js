let arr=[]
for (let i=1; i<=10; i++){
    arr.push(i);
}
console.log(arr)

let arrEven=[]
for (let i=1; i<=10; i++){
    if(i%2==0){
        arrEven.push(i);
    }
}
console.log(arrEven)

let arrFrac=[1.456, 2.125, 3.32, 4.1, 5.34];
for(let i in arrFrac){
    arrFrac[i]=+arrFrac[i].toFixed(1)
}
console.log(arrFrac)