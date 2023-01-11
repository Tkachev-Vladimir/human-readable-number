// var th = ["", "thousand", "million", "billion", "trillion"];
var ones = [
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
var tens = [
    
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
var twelve = [
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

toReadable =(number) => {
    let numString = number.toString();
if(numString.length ===1){
    return ones[numString];
}
//  else if(number <20){
//     return tens[numString[1]];
// }
else if (numString.length ===2){
    if(number<20){
        return tens[numString[1]]
    }
    return twelve[numString[0]] + ' ' + ones[numString[1]]
}else if(numString.length===3 ||   tens[numString[1]===1] ){
    return ones[numString[0]]+ ' hundred ' + tens[numString[2]]
}else {
    
    return  ones[numString[0]]+ ' hundred ' + twelve[numString[1] + ones[numString[2]]]
} 

 
// else if(numString.length ===3){
//     return ones[numString[0]] + ' hundred ' + tens[numString[2]]
// }
}

// console.log(toReadable(200));


const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred';

function toReadable (number) {
  str = number.toString();
  if (str == 0){
    result = 'zero';
    return result;}

 
  if (str >= 100 && str[1] == 1 && str[1] != 0) {
    result = `${single[str[0]]} ${hundred} ${teens[str[2]]}`;
    return result.trim();
  } 
 
  }
  console.log(toReadable(520))