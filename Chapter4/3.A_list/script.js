function arrayToList(arr)    {
    let temp = 0;
    let list = {rest: null};
    for (let i = arr.length - 1; i >= 0; i--){
        temp = arr[i];
        list = {
            value: temp,
            rest: list
        };
    }
    return list;
}

function listToArray(list)  {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend (value, list){
    let temp = 0;
    let newList = {};
    for (let node = newList; node; node = node.rest) {
        temp = value;
        newList = {
            value: temp,
            rest: list
        };
    }
    return newList;
}

function nth(list, index) {
    if (!list) return undefined;
    else if (index == 0) return list.value;
    else {
        index--;
        return nth(list.rest, index);
    }
}

console.log(arrayToList([10, 20, 30, 40]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 40]), 3));