const reverseString = function(str) {
    let rev = [];
    let i = 0;
    let j = 0;
    for (i = (str.length - 1), j = 0; i>-1; i--, j++) {
        rev[j] = str[i];
    }
    return rev.join("");
};

// Do not edit below this line
module.exports = reverseString;