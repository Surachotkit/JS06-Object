var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); //window --> solve 
console.log(user.ref.name); // * Joe 

//ref = this
//user.ref --> คนเรียก  **window
//maskeUser -->ถูกเรียกใน window
//this == window เก็บไปให้ user d