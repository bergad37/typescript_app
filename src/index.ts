const small=1;
const medium=2;
const large=3;


const enum Size {Small=4,Medium, Large};  // use const instead of enum only to generate the best understandable js file

let mySize: Size=Size.Medium;

console.log(mySize);