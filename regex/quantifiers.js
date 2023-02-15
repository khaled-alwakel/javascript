/*
  * Regular Expression

  * Quantifiers
 * n+    => One Or More
 * n*    => zero or more
 *  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));
console.log("========== Quantifiers=========")
//*==--==--==--==--==--==
/*
  Regular Expression

  * Quantifiers
  * n{x}   => Number of
  * n{x,y} => Range
  * n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
//************************************************************* */
/*
  Regular Expression

  Quantifiers
  * $  => End With Something 
  * ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));