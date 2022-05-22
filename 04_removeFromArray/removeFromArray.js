const removeFromArray = function(inputArray, ...args) {
    let result = inputArray;
    let indexToRemove;

    args.forEach(element => {
        indexToRemove = result.indexOf(element);
        if (indexToRemove >= 0) {
            result.splice(indexToRemove, 1);
        };
    });
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
