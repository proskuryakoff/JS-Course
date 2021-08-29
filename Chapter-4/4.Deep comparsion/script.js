function deepEqual(x,y){
    if (x === y) return true;
    if (typeof x == "object" && x != null && typeof y == "object" && y != null){
        let keyX = Object.keys(x),
            keyY = Object.keys(y);
        if (keyX.length != keyY.length) return false;
        for(let i of keyX){
            if (!keyY.includes(i) || !deepEqual(x[i], y[i])) return false;
        }
        return true;
    } 
    return false;
}

let obj = {here: {is: "an"}, object: 2};

// TEST
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, "here"));
console.log(deepEqual("here", "here"));
console.log(deepEqual("123", "here"));
console.log(deepEqual(123, 12));
console.log(deepEqual(123, "12"));
console.log(deepEqual(123, 123));