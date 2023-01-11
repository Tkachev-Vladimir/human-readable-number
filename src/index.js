 module.exports = 
 function toReadable(number) {

let ones = [
    " ",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
let tens = [
   "ten",
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
let twelve = [
    '',
    '',
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];


    let numString = number.toString();

    if (numString == 0) {
        return "zero";
    } else if (numString < 10) {
        return ones[numString];
    } else if (numString >= 10 && numString < 20) {
        return tens[numString[1]];
    } else if (numString >= 20 && numString < 100) {
        return twelve[numString[0]] + "" + ones[numString[1]];
    }
    //     else if(numString == 100){
    //  return ones[numString[0]] + 'hundred'
    //     }
    else if (numString >= 100 && numString[1] != 1 && numString[1] != 0) {
        return (
            ones[numString[0]] +
            " hundred " +
            twelve[numString[1]] +
            " " +
            ones[numString[2]]
        );
    } else if (numString >= 100 && numString[1] == 1 && numString[2] != 0) {
        return ones[numString[0]] + " hundred " + tens[numString[2]];
    } else if (numString >= 100 && numString[1] == 1 && numString[2] != 0) {
        return ones[numString[0]] + " hundred " + tens[numString[2]];
    } else if (numString >= 100 && numString[1] == 0) {
        return ones[numString[0]] + " hundred " + ones[numString[2]];
    } else if (numString >= 100 && numString[1] == 1 && numString[2] == 0) {
        return ones[numString[0]] + " hundred " + tens[numString[2]];
    }
 }
