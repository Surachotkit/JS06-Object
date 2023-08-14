// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
//   };
  
  

//   function multiplyNumeric(obj){
//     let num = 0
//     for(let key in obj){
//         //<obj>.<key>
//         //<obj>[key]
//         // console.log(object[key]); //object['age']
//         num += object[key]
//     }
//     return num;
//   }
//   let total = multiplyNumeric(menu)
// console.log(total);

const multiplyNumeric = (object,num) => {
    for( let key in object ){ // menu === key
        // console.log(key);

        let value = object[key];
        //ป้องกันไม่ให้ * string
        if(typeof value === 'number'){
            // console.log(value,num);
            //update value
            // object[key] = object[key] * num
            object[key] = value * num

            //menu['width'] = 200*3
            //menu['heigth'] = 300*3
        }

    }
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

multiplyNumeric(menu,3) 
console.log(menu);