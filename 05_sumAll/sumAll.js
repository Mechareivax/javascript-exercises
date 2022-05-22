const sumAll = function(int1, int2) {
    let smaller = int1;
    let larger = int2;

    // validate the input to be a positive number
    if (typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR";
    } else if (int1 < 0 || int2 < 0) {
        return "ERROR";
    };
    
    // by default the smaller num is int1, but if int1 ends up being bigger, switch that
    if (int1 > int2) {
        smaller = int2;
        larger = int1;  
    };

    let result = smaller;
    let i = smaller+1;
    while (i <= larger) {
        result += i;
        i++
    };

    return result;
};

// Do not edit below this line
module.exports = sumAll;
