const repeatString = function(string, amount) {

    let i = 0;
    let stringtotal = "";
    while (i < amount){
        stringtotal+=string;
        i++;
    }
    return stringtotal;
};

console.log(repeatString("hi", 3))

// Do not edit below this line
module.exports = repeatString;
