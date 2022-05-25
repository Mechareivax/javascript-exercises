const fibonacci = function(fib) {
    //this should take the previous result and the second to previous result
    //and add them together, assigning that to the new current result
    let currentResult = 1;
    let prevResult = 0;
    let oneBeforePrevResult = 0;
    
    if (fib < 0) { 
        return 'OOPS';
    } else if (fib == 0 ){
        return 0;
    } else {
        for (i=1; i < parseInt(fib); i++){
            oneBeforePrevResult = prevResult;
            prevResult = currentResult;
            currentResult = prevResult + oneBeforePrevResult;
        }
        return currentResult;
    }
};

// Do not edit below this line
module.exports = fibonacci;
