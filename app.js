"use strict";
// Equality and Unequality test 1
console.log("Equality test with string: ", "Mango" === "Mango");
// Equality and Unequality test 2
console.log("Inequality test with string: ", "Mango" != "Orange");
// Test using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality 
console.log("Equality test with numbers: ", 29 === 29);
// Numerical tests involving Inequality
console.log("Inequality test with numbers: ", 29 != 20);
// Greater than test
console.log("Greater than test: ", 25 > 18);
// less than test
console.log("Less than test: ", 25 < 50);
// Greter than and equal to
console.log("Greater than and equal to test: ", 25 >= 20);
// Less than and equal to
console.log("Less than and equal to test: ", 6 <= 19);
// Tests using "and" operators
console.log("And operater test: ", 10 === 10 && 45 > 20);
// Tests using "or" operators
console.log("OR operater test: ", 10 === 10 || 45 > 20);
//  Test whether an item is in a array
const languages = ['HTML', 'CSS', 'Javascript'];
console.log('Test "CSS" is in the array:', languages.includes("CSS"));
// Test whether an item is not in a array
console.log('Test "Typescript" is not in the array:', !languages.includes("Typescript"));
