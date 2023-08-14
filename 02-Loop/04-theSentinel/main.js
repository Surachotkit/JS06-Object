/*
1.user เก็บค่า -> {}
2.stop -> end
3.log -> {}
*/
let key;
let value;
let newUser = {}
let start = true
do{
    key = prompt('Enter key')
    value = +prompt('Enter value')
    if(key === "stop" || value === "stop"){
        start = false
    }else{
        newUser[key] = value;
    }
}while(start)
console.log(newUser);




  
