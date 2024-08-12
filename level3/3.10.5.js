function deleteNums(arr){
    arr=arr.map(item => item.toString());
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++){
            if(arr[i].indexOf(arr[i][j], j+1)!= -1){
                arr[i]=false
            break
        } 
    }   
}
return arr.filter(item => item).map(item => +item)
}

console.log(deleteNums([9474, 3747, 5746, 44666, 28, 0]))