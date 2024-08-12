function allEven(str){
    str=str.split('');
    let msg='';
    for (let i in str){
        if (+str[i]%2!=0){
            msg='Not all even numbers';
            break
        } else {
            msg='All even numbers';
        }
    }
    return msg
}

console.log( allEven('24568'))