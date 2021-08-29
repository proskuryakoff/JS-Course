var size = prompt("Enter size of a grid");
var str = "";
for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
        if((i+j) % 2 == 0){
            str += " ";
        } else str += "#";
    }
    str += "\n";
}
console.log(str);
