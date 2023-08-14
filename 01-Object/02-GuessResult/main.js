const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * isActive: false
  user = {};
  console.log(user); // ** error เพราะว่า reassign ใหม่เป็น object ค่าว่าง