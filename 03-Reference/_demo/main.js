

// Copied By Value 
// Primitive
let message = 'Hello'

// ****
let word = message 
console.log(message); //hello
console.log(word); //hello

message = 'hi'  //ลอกค่าที่เก็บเอาไปเลย 
console.log(message); //hi
console.log(word); //hello

//Object
let user = {
    name : 'john'

}

//*copied by Reference
//จัดการโครงสร้างข้อมูลขนาดใหญ่ 
let employee = user;
console.log(employee);

employee.name = 'Joe'
console.log(user);
console.log(user.name);