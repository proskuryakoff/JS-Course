function countBs(str){
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == "B") counter++; 
    }
    return counter;
}

function countChar(str, sym){
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == sym) counter++; 
    }
    return counter; 
}

console.log(countBs("bBbBbB_12345qwerty"));
console.log(countChar("kkkrtyuiok", "k"));