const repeatString = function(string, num) {
    if (num<0) {
        return "ERROR";
    }
    else {
        let str = "";
    for (let i = 0 ; i < num; i++) {
        str = str +`${string}`;
    }
    return str;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
