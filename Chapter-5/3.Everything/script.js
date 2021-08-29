console.log ('Everything');

function every(array,test){
    for (let n of array){
        if(!test(n)) return false;
    }
    return true;
}

function everySome(array,test){
    if(array.some(n => !test(n))) return false;
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));