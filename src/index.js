module.exports = function toReadable (number) {
   const firstNumber = [
       "zero",
       "one",
       "two",
       "three",
       "four",
       "five",
       "six",
       "seven",
       "eight",
       "nine",
       "ten",
   ];
   const teenNumber = [
       "eleven",
       "twelve",
       "thirteen",
       "fourteen",
       "fifteen",
       "sixteen",
       "seventeen",
       "eighteen",
       "nineteen",
   ];
   const tenthNumber = [
       "ten",
       "twenty",
       "thirty",
       "forty",
       "fifty",
       "sixty",
       "seventy",
       "eighty",
       "ninety",
   ];
   if (number === undefined) return;
   if (number <= 10) {
       return firstNumber[number];
   } else if (number < 20) {
       number = number.toString();
       return teenNumber[number[1] - 1];
   } else if (number % 10 === 0 && number < 100) {
       number = number.toString();
       return tenthNumber[number[0] - 1];
   } else if (number < 100) {
       number = number.toString();
       return `${tenthNumber[number[0] - 1]} ${firstNumber[number[1]]}`;
   } else if (number < 1000 && number % 100 === 0) {
       number = number.toString();
       return `${firstNumber[number[0]]} hundred`;
   } else if (number % 10 === 0) {
       number = number.toString();
       return `${firstNumber[number[0]]} hundred ${tenthNumber[number[1] - 1]}`;
   } else if (number % 100 <= 10 && number !== 100) {
       number = number.toString();
       return `${firstNumber[number[0]]} hundred ${firstNumber[number[2]]}`;
   } else if (number % 100 < 20) {
       number = number.toString();
       return `${firstNumber[number[0]]} hundred ${teenNumber[number[2] - 1]}`;
   } else if (number < 1000) {
       number = number.toString();
       return `${firstNumber[number[0]]} hundred ${tenthNumber[number[1] - 1]} ${
           firstNumber[number[2]]
       }`;
   }
}
