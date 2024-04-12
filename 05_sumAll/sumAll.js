const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" ||
        a < 0 || b < 0) return("ERROR");

    let first = (a < b) ? a : b;
    let last = (first === a) ? b : a;
    let sum = 0;
    while (first <= last) {
        sum += first;
        first++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
