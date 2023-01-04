// var th = ["", "thousand", "million", "billion", "trillion"];
// var dg = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
// ];
// var tn = [
//     "ten",
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
// ];
// var tw = [
//     "twenty",
//     "thirty",
//     "forty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninety",
// ];

// function toWords(s) {
//     s = s.toString();
//     s = s.replace(/[\, ]/g, "");
//     if (s != parseFloat(s)) return "not a numberber";
//     var x = s.indexOf(".");
//     if (x == -1) x = s.length;
//     if (x > 15) return "too big";
//     var n = s.split("");
//     var str = "";
//     var sk = 0;
//     for (var i = 0; i < x; i++) {
//         if ((x - i) % 3 == 2) {
//             if (n[i] == "1") {
//                 str += tn[numberber(n[i + 1])] + " ";
//                 i++;
//                 sk = 1;
//             } else if (n[i] != 0) {
//                 str += tw[n[i] - 2] + " ";
//                 sk = 1;
//             }
//         } else if (n[i] != 0) {
//             // 0235
//             str += dg[n[i]] + " ";
//             if ((x - i) % 3 == 0) str += "hundred ";
//             sk = 1;
//         }
//         if ((x - i) % 3 == 1) {
//             if (sk) str += th[(x - i - 1) / 3] + " ";
//             sk = 0;
//         }
//     }

//     if (x != s.length) {
//         var y = s.length;
//         str += "point ";
//         for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
//     }
//     return str.replace(/\s+/g, " ");
// }

// console.log(toWords(1000001));
// function toReadable(numberber) {
//     var th = ["", "thousand", "million", "billion", "trillion"];
//     var dg = [
//         "zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//     ];
//     var tn = [
//         "ten",
//         "eleven",
//         "twelve",
//         "thirteen",
//         "fourteen",
//         "fifteen",
//         "sixteen",
//         "seventeen",
//         "eighteen",
//         "nineteen",
//     ];
//     var tw = [
//         "twenty",
//         "thirty",
//         "forty",
//         "fifty",
//         "sixty",
//         "seventy",
//         "eighty",
//         "ninety",
//     ];

//     numberber = numberber.toString();
//     numberber = numberber.replace(/[\, ]/g, "");
//     if (numberber != parseFloat(numberber)) return "not a numberber";
//     var x = numberber.indexOf(".");
//     if (x == -1) x = numberber.length;
//     if (x > 15) return "too big";
//     var n = numberber.split("");
//     var str = "";
//     var sk = 0;
//     for (var i = 0; i < x; i++) {
//         if ((x - i) % 3 == 2) {
//             if (n[i] == "1") {
//                 str += tn[numberber(n[i + 1])] + " ";
//                 i++;
//                 sk = 1;
//             } else if (n[i] != 0) {
//                 str += tw[n[i] - 2] + " ";
//                 sk = 1;
//             }
//         } else if (n[i] != 0) {
//             // 0235
//             str += dg[n[i]] + " ";
//             if ((x - i) % 3 == 0) str += "hundred ";
//             sk = 1;
//         }
//         if ((x - i) % 3 == 1) {
//             if (sk) str += th[(x - i - 1) / 3] + " ";
//             sk = 0;
//         }
//     }

//     if (x != numberber.length) {
//         var y = numberber.length;
//         str += "point ";
//         for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
//     }
//     return str.replace(/\s+/g, " ");
// }

// console.log(toReadable(1));

function toReadable(number) {
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
console.log(toReadable(588));