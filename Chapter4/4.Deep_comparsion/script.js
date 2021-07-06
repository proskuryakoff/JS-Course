function deepEqual(x,y){
    if (typeof x == "object" && x!= null && typeof y == "object" && y!= null){
        keyX = Object.keys(x);
        keyY = Object.keys(y);
        if (keyX.length !== keyY.length) return false;
        for(let i of keyX){
            if (!keyX.includes (i)) return false;
            if (!deepEqual(x[i], y[i])) return false;
            else return true
            }
        }
    if (x === y) return true;
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 4}));
