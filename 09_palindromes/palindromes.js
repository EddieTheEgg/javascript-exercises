const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[\W_]/g, ''); //replace all weird characters with a ''
    const reversedString = processedString.split("").reverse().join("");

    return processedString === reversedString;
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
