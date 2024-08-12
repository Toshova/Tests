function allNums(str){
   let msg=''
    str=str.split('');
    for (let i in str){
      if(+str[i]>=0 || +str[i]<=9){
        msg='All numbers';
      } else{
        msg='Not all numbers';
        break
      }
    }
   return msg
   
}

console.log(allNums('858585'))