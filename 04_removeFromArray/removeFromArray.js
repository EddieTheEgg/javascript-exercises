
let removeFromArray = function(array, target) {
    return array.filter(element => element !== target); //Filter passes each element from the array to another function which has no name. But the value passed ino the function is 
    //called element and is compared to target. If the element is equal to the target, the filter() method will remove the value.
};

let newList = ["hi", "bye", "yogatti", "bruh"];

console.log(removeFromArray(newList, "bye"));

// Do not edit below this line
module.exports = removeFromArray;
