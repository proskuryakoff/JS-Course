var num = 0;
for (var i = 1; i < 101; i++){
    num = i;
    if (num % 3 == 0 && num % 5 == 0){
        num = "FizzBuzz";
    };
    if (num % 3 == 0){
        num = "Fizz";
    };
    if (num % 5 == 0){
        num = "Buzz";
    };
    console.log(num);
}