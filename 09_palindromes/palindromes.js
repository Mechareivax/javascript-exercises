const palindromes = function (str) {

    let original = str.replace(/[^a-z]/gi,'');
    original = original.toLowerCase();

    let reversed = original.split('');
    reversed.reverse();
    reversed = reversed.join('');

    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
