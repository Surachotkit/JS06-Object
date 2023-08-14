// Object => Bool 
function isEmptyObj (obj){
    let isEmpty = true;

    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}

console.log(isEmptyObj({}));
console.log(isEmptyObj({age:12}));