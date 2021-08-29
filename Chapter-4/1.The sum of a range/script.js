function range(start, end, step){
    if (start > end && !step) step = -1;
    if(!step) step = 1;
    if (start > end && step > 0) step = -step;
    if (start < end && step < 0) step = Math.abs(step); 
    let arr = [];
    if (start < end){
        for (let i = start; i <= end; i+=step){
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i+=step){
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr){
    let res = 0;
    for (let i = 0; i < arr.length; i++){
        res+= arr[i];
    }
    return res;
}

console.log(range(0, 10, 2));
console.log(sum(range(0, 10, 2)));