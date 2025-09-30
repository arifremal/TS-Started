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
// function combine(num1: number | string, num2: number | string , coversationType: "as-number"| "as-string") {
//     let result
//     if( typeof num1  ===  "number"  && typeof num2 === "number" || coversationType === "as-number"  ){
//         result = +num1 + +num2
//     } else{
//         result = num1.toString() + num2.toString()
//     } return result
// }
// const sum2 = combine("10","30",'as-number')
// const s = combine("arif", " remal","as-string")
// console.log(sum2,s)

// type aliss
type c = number | string;
function combine(num1: c, num2: c, coversationType: "as-number" | "as-string") {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    coversationType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}
const sum2 = combine("10", "30", "as-number");
const s = combine("arif", " remal", "as-string");
console.log(sum2, s);

type user = {
  name: string;
  age: number;
};
const user = {
  name: "arif",
  age: 34,
};
