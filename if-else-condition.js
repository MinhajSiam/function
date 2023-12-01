var num1 = 10;
var num2 = 95;
var num3 = 43;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('The largest number is:' + num1);
    } else {
        console.log('The largest number is: ' + num3);
    }
} else if (num2 > num3) {
    console.log('The largest number is:' + num3);
} else {
    console.log('The largest number is:' + num2);
}