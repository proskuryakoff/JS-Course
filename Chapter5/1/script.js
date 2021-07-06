console.log ('Flattening');

let arrays = [[1, 2, 3], [4, 5], [6], [7], [10, 9, 8, 1]];

console.log(arrays.reduce((a, b) => a.concat(b)));