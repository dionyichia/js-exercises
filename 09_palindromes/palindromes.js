const palindromes = function (string) {
    var lowerCase = string.toLowerCase();
    finalString = lowerCase.replace(/[^\p{L}\p{N}\s]/gu, '').replace(/ /g,'');

    let buffer = '';
    stringArray = Array.from(finalString);
    for (let i = (finalString.length - 1); i > -1; i--) {
        buffer = buffer.concat(stringArray[i]);
    }

    if (buffer == finalString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
