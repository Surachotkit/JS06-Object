
// const fruits = {
    
// }


// let key = prompt('Enter fruit')
// let value = +prompt('Enter Quantity')


// //update fruits
// // fruits.key = value -> {key : 10} **ใช้กับชื่อตัวแปรไม่ได้ มันจะไปกำหนดค่าให้ใหม่ 

// // fruits['apple'] = value  -> {apple : 10} ** '' แบบนี้มัน hard code
// if(value == 1){
//     fruits[key] = value; // user จะพิมอะไรเข้ามาก็ได้
// } else if( value > 1){
//     fruits[`${key}s`] = value;
// }
// console.log(fruits);

const TEMINATE = 'stop'
const fruits = {}


let key;
let value;



do{
    key = prompt('Enter fruit')
    value = +prompt('Enter Quantity')

    if(value == 1){
        fruits[key] = value; // user จะพิมอะไรเข้ามาก็ได้
    } else if( value > 1){
        fruits[`${key}s`] = value;
    }

} while (key != TEMINATE && value != TEMINATE)
// 'stop' != 'stop' => false

console.log(fruits);