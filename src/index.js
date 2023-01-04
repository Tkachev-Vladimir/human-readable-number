module.exports = function toReadable (number) {
    var ones = [
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
    var tens = [
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

    var numberString = number.toString();

    if (number < 0) throw new Error("Negative numberbers are not supported.");

    if (number === 0) return "zero";

    //the case of 1 - 20
    if (number < 20) {
        return ones[number];
    }

    if (numberString.length === 2) {
        return tens[numberString[0]] + " " + ones[numberString[1]];
    }

    //100 and more
    if (numberString.length == 3) {
        if (numberString[1] === "0" && numberString[2] === "0")
            return ones[numberString[0]] + " hundred";
        else
            return (
                ones[numberString[0]] +
                " hundred " +
                (tens[numberString[1]] + " " + ones[numberString[1]])
            );
    }

    if (numberString.length === 4) {
        var end = +(numberString[1] + numberString[2] + numberString[3]);
        if (end === 0) return ones[numberString[0]] + " thousand";
        if (end < 100)
            return ones[numberString[0]] + " thousand and " + convert(end);
        return ones[numberString[0]] + " thousand " + convert(end);
    }
}