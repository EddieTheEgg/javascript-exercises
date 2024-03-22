const sumAll = function(min,max) {

    if (min > max){ //checking parameters
        let temp = min;
        min = max;
        max = temp;
        //Another option would be [min, max] = [max, min] which is called array deconstructing. The parameters passed in can be
  
    let sum = 0;  //actually getting the sum loop
    for (let i = min; i<max+1; i++){
        sum+=i;
    }
    return sum;

};

console.log(sumAll(4,2));

// Do not edit below this line
module.exports = sumAll;
}