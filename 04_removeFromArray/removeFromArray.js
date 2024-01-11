const removeFromArray = function(array, thing, thing1, thing2, thing3) {
    let rmv = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i] === thing) || (array[i] === thing1) || (array[i] === thing2) || (array[i] === thing3)) {
           continue;
        } else {
            rmv.push(array[i]);
        }
    }
    return rmv;
};

// Do not edit below this line
module.exports = removeFromArray;
