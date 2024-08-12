let num=2385385577389538;

function searchPos(num, dig){
    num=num.toString().split('').map((item, index) => {if(+item===dig){return index}}).filter(item => item);
    num.pop();
    num.shift();
    return num
}


console.log(searchPos(2385385577389538, 3))