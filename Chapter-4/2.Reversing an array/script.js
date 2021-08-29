function reverseArray(arr){
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    for (let i = 0; i < Math.floor(arr.length / 2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10]));