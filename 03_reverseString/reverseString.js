const reverseString = function(string) {
    const stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
