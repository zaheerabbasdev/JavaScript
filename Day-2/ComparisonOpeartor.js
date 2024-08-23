let age = 20;
console.log(age > 20);

console.log(age >= 20);

console.log(age < 20);

console.log(age <= 20);

console.log(age == 20);

console.log(age != 20);

// Examples of (==)
let n = 5;
undefined;
n;
5;
typeof n;
("number");

let str = "5";
undefined;
str;
("5");
typeof str;
("string");

n == str;
true;

null == undefined;
true;

n === str; // (===) also check the value and check the type.
false;

// Comparison for Non-Numbers

"a" < "b";
true;

"a" > "A";
true;

"a" < "A";
false;

"&" > "%";
true;

"B" < "A";
false;
