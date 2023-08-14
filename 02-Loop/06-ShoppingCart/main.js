const log = console.log;


// ตีโจทย์ ว่าอันไหนควรทำก่อน
// program 1 : input

// Hardcode
// let name = 'Hermes'
// let quantity = 20
// let price = 500_000
// let discount = 0.1

// เปลี่ยนเป็น promt
let name = prompt('Enter Product Name')
let quantity = prompt('Enter quantity')
let price = prompt('Enter price')
let discount = prompt('Enter discount') * 1



// program 2 : createObject
const products = {
    name, // name : value == variable : 'Hermes'
    quantity,  // quantity = 20
    price,
    discount
}
log(products)
// **เมื่อชื่อ key ตรงกับ ชื่อตัวแปรที่เก็บ value สามารถยุบการเขียน(syntax) ได้ (Property shorthand)



// program 3 : calculate Price
// **คิดตอนสร้างฟังชั่น 
// discount 10% -> paid 90%
// discount 0.1 -> paid 0.9
// price = 100 *10(1-0.1) => 1000(0.9) == 900

// price,quantity,discount => TotalPrice
// default = 0 เพื่อป้องกัน user ไม่พิมอะไรเข้ามา // ป้องกัน error
// function calcPrice(price,quantity,discount = 0){ 
//     let totalPrice = price * quantity * (1-discount)
//     return totalPrice
// }
// let result = calcPrice(products.price, products.quantity, products.discount)
// log(result)
//function calcPrice({name,quantity,discount}) ==> property ตัวเดียวเพราะมี { } ครอบไว้อยู่
function calcPrice(productsObj){

    let price = productsObj.price
    let quantity = productsObj.quantity
    let discount = productsObj.discount || 0 //ถ้าข้างหน้าเป็น false จะวิ่งมาเอา 0 false **รันค่าสุดท้าย
    return price*quantity*discount
}
let result = calcPrice(products)
// let result = calcPrice({name,quantity,discount}) ==> property ตัวเดียวเพราะมี { } ครอบไว้อยู่

log(result)
