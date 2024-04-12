const repeatString = function(word, times) {
    let retString = '';
    for (let i = 0; i < times; i++) {
        retString += word;
    }
    return (times < 0) ? "ERROR" : retString;
};

// Do not edit below this line
module.exports = repeatString;
