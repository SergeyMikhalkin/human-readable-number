const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

module.exports = function toReadable (number) {
  if(number <= 20) return numbers[number];

  if(number > 20 && number < 100) {
    let word1 = numbers[Math.floor(number / 10) * 10];
    if(Math.floor(number / 10) * 10 == number) return word1;
    let word2 = numbers[number - Math.floor(number / 10) * 10];
    return `${word1} ${word2}`;
  }

  if(number >= 100) {
    let word1 = numbers[Math.floor(number / 100)];
    if(Math.floor(number / 100) * 100 == number) return `${word1} hundred`;
    number = number - Math.floor(number / 100) * 100;

    return `${word1} hundred ${toReadable(number)}`;
  }
}
