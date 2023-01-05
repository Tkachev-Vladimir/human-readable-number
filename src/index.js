module.exports = function toReadable (number) {
    let ones = [
        "",
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
    let tens = [
        "",
        "",
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

    if (number < 0) {
        return Math.abs(number);
    
    }
    if (number === 0) {
        return "zero";
    }
    if (numString.length === 2) {
        return tens[numString[0]] + " " + ones[numString[1]];
        // return tens[numString[0]]
    }
    if (numString.length === 3) {
        return (
            ones[numString[0]] +
            " hundred " +
            tens[numString[1]] +
            " " +
            ones[numString[2]]
        );
    }
}