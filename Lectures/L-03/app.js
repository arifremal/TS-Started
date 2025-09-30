// union literal type alias surtom
// UNION
// function combine(num1: number | string, num2: number | string) {
//     let result 
//     if( typeof num1  ===  "number"  && typeof num2 === "number" ){
//         result = num1 + num2
//     } else{
//         result = num1.toString() + num2.toString()
//     } return result
// }
// console.log(combine(12,39))
// Literal type
function combine(num1, num2, coversationType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || coversationType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum2 = combine("10", "30", 'as-number');
var s = combine("arif", " remal", "as-string");
console.log(sum2, s);
