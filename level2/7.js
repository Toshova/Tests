let str='a bc def ghij'.split(' ');
for (let i in str){
    if(str[i].length<=3){
        str[i]=str[i].toUpperCase()
    }
}
console.log(str.join(' '))

let sim='L';
if (sim.match(/^[A-Z]*$/)) {
    console.log('в верхнем')
} else if (sim.match(/^[a-z]*$/)){
    console.log('в нижнем')
}

let num=123789;
num=num.toString().split('').filter(i => +i%2==0).join('')*1;

console.log(num)