const reverseString = function (string) {
  return string.split("").reverse().join("");
};
//split takes the string characters, and split into seperate elements. 
//reverse is an easy method to switch the order of the list
//join("") joins the split up elements together and also removes commas because of "".

console.log(reverseString("hello"));
module.exports = reverseString;
