// LEVEL--1

let challenge = "30 Days Of JavaScript";
//on browser
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());

// challenge.substr(0, challenge.indexOf(" "));
// challenge.substr(challenge.indexOf("D"),challenge.indexOf("t"))

// 8.console.log(challenge.includes('Script'))
// true

// 9
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"] (REFERENCE)
// console.log(challenge.split(" "));

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(str.split(","));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt("J"));

let coz =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(coz.search("because"));

//match() is used for finding occurences,we can give parameters as strings as well as regular expressions
//gi means global and case insensitive
// g-means to search in the whole text, i - case insensitive
// console.log(challenge.match(/a/gi));

//LEVEL--2
// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );
// console.log(
//   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// );

// console.log(typeof 10);
//4
// let num = "9.8";
// let numfloat = parseFloat(num);
// console.log(numfloat === 10);
// let numint = Math.ceil(numfloat);
// console.log(numint == 10);

//5
// let a = " python";
// console.log(a.includes("on"));
// let b = " jargon";
// console.log(b.includes("on"));

//8
let number = 100 - 50;
let no1 = Math.random() * number;

console.log(Math.floor(no1 + 50));

//9
// let no = Math.random();

// let random_num = no * 256;
// console.log(Math.floor(random_num));

//LEVEL--3
new_str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(new_str.match(/love/gi).length);
