const fibonacci = function(num) {
    num = parseInt(num);
    let lastnumber = 0;
    let sec_lastnumber = 0;
    let newnumber = 1;
    if (num == 0) {
        return 0;
    }
    else if (num == 1 || num == 2) {
        return 1;
    }
    else if (num < 0) {
        return 'OOPS';
    }
    else {
        for (let i = 0; i < num-1; i ++) {
            lastnumber = newnumber;
            newnumber = lastnumber + sec_lastnumber;
            sec_lastnumber = lastnumber;
        }
        return newnumber;
    }
};

// Do not edit below this line
module.exports = fibonacci;
