// function toReadable(number) {
//     let ones = [
//         "",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
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
//     let tens = [
//         "",
//         "",
//         "twenty",
//         "thirty",
//         "forty",
//         "fifty",
//         "sixty",
//         "seventy",
//         "eighty",
//         "ninety",
//     ];

// let numString = number.toString();

// if(number < 0) {
//     // return Math.abs(number)
// console.log('Negative number')
// }
//  if(number === 0) {
//     return 'zero'
//  }if (number < 20) {
//     return ones[number];
// }
// if (numString.length === 2){
//     return (tens[numString[0]] + ' ' + ones[numString[1]]);
//     // return tens[numString[0]]
// }
// if(numString.length === 3){
//     if(numString[1] === '' && numString[2]=== '0'){
//         return ones[numString[0]] + ' hundred'
//     }else {
//         return ones[numString[0]] + " hundred " + (tens[numString[1]] + ones[numString[2]]);
//     }
// // console.log(ones[numString[0]] + ' Hundred ' +( ones[number]))
// }



// }

// console.log('fa')
// console.log(toReadable(617));



var th = ["", "thousand", "million", "billion", "trillion"];
var dg = [
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
];
var tn = [
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
var tw = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];



function toWords(number) {
    number = number.toString();
    number = number.replace(/[\, ]/g, "");
    if (number != parseFloat(number)) return "not a number";
    var x = number.indexOf(".");
    if (x == -1) x = number.length;
    if (x > 15) return "too big";
    var n = number.split("");
    var str = "";
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == "1") {
                str += tn[Number(n[i + 1])] + " ";
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + " ";
                sk = 1;
            }
        } else if (n[i] != 0) {
            // 0235
            str += dg[n[i]] + " ";
            if ((x - i) % 3 == 0) str += "hundred ";
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk) str += th[(x - i - 1) / 3] + " ";
            sk = 0;
        }
    }

    if (x != number.length) {
        var y = number.length;
        str += "point ";
        for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
    }
    return str.replace(/\s+/g, " ");
}

console.log(toWords(617));