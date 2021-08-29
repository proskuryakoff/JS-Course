console.log ('Your own loop');

function loop(n, test, update, body){
    let current = n;
    do {
        body(current);
        current = update(current);
    }
    while (test(current))
}

loop(3, n => n > 0, n => n - 1, console.log);