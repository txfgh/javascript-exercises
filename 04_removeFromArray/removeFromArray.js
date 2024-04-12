const removeFromArray = function() {
    const args = Array.from(arguments);
    const argsArray = args.shift();
    const retArray = [];
    for (let i = 0; i < argsArray.length; i++) {
        if (args.includes(argsArray[i])) {
            continue;
        } else {
            retArray.push(argsArray[i]);
        }
    }
    

    return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
