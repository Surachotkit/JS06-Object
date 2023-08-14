const state1 = { username: 'john', point: 100, loading: true };

const state2 = Object.assign({},state1,{loading:false,point:75},{success:true})
console.log(state2);

//แต่ loading ให้มีค่าเป็น false => merge ขวา -> ซ้าย