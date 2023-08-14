/*
1.รับชื่อพนักงาน
2.ชื่อตรง key object ให้แสดงข้อความ 
 - ถ้าไม่ตรง แสดง Not Found
*/

const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

let keyName;
for(let key in employees){
    keyName = prompt("Enter Name");
 
    if(keyName === 'john'){
        console.log(employees.john);
    }else if(keyName === 'peter'){
        console.log(employees.peter);
    }else if(keyName === 'mike'){
        console.log(employees.mike);
    }else if(keyName === 'sarah'){
        console.log(employees.sarah);
    }
    else {
        console.log("Not Found");
    }
}
