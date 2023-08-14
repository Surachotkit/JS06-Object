//mini-lab
//สร้าง Oject ของตัวเอง
//ระบุคุณสมับติของตัวเอง 2 ข้อ
//ระบุความสามารถตัวเอง 4 อย่าง (cover ทุก syntax)
// key : nameFunction
// key : anonymous FN
// key : arrowFN
// key : shortHand

function playSport(sport){ 
    console.log(`I'm Playing ${sport}`);
}

const profile = {
    name: "Non",
    age: 20,
    hair: 'black',
    eye: 'Brown',
    sport : playSport, //nameFunction  => ต้องไปดูใน function ข้างนอก
    sleepAllday: function(){ //anonymous FN
        console.log("I'm dead");
    },
    eatAllNight : (menu) => console.log(`I'm eating ${menu} all the time`), //arrowFN  **สามารถกำหนด parameter // ส่งค่าไป
    focus(task){ //shortHand
        console.log(`I'm working on ${task} in Focus mode`);
    }
    //focus : () => {..logic..}
    //focus : function focus () {..logic..}

}

profile.sport("basketball")
profile.sleepAllday()
profile.eatAllNight("TAX")
profile.focus('js lab')

// 3. Intro OOP
//OOP : Object Oriented Program
//มองทุกอย่างให้เป็น Object 

const car ={
    brand : "Tesla",
    model : "X",
    drive : () => console.log('Driving'),
    'auto pilot' : () => console.log('self driving'),
}

console.log(car.brand, car.model); //property

// Caller.Method
car.drive()
car['auto pilot']()

//---------------------------------------------------
const cal = {
    sum : (x,y) => x+y,
    minus: (x,y) => x-y,
}
let r1 = cal.sum(5,7) //ชื่อเหมือน object ใหญ่ แล้ว . ตามด้วย property หรือ method ก็ได้
let r2 = cal.minus(7,3)
console.log(r1 ,r2);

//เอา 2 object กำลังสื่อสารกัน // ตัวสื่อสาร เปิดให้เชื่อมต่อ => classfunction ไม่ให้คนอื่นใช้ 
//constructor  -- object = instance 
console.log(car.speed);
car.speed = cal.sum(car.speed,20)
console.log(car.speed);

