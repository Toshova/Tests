let list=["https://chat-gpt.org.html","https://yandex.ru","http://www.youtube.com","http://edu.html", "www.google.com"]

console.log(list.filter(item => item.indexOf('http://')==0))

console.log(list.filter(item => item.endsWith('.html')))

let arr = [ 120, 30, 45, 99, 100]
console.log(arr.map(item => item+item*0.1))