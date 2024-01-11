const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR"
    }
    else {
        if (int1 > int2) {
            let buffer = int2
            int2 = int1
            int1 = buffer 
        }

        let sum = int1;
        for (i=int1; i<int2; i++) {
            sum = sum + (int1 + i);
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
