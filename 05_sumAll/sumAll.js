const sumAll = function(min,max) {

    if (min > max){ //checking parameters
        let temp = min;
        min = max;
        max = temp;
        //Another option would be [min, max] = [max, min] which is called array deconstructing. Can easily swap array positions, and more properties with array:
      
        //Let's say we had const numbers = [1,2,3,4,5];
        //we can do let [a,b,c,...rest] = numbers;
        //this would make a,b,c = 1,2,3. The ...rest would become 4,5 together because it's the rest of the list. 
        //we could now even do [a = 20, b = 2] = []; to set certain values in the list a number. But if anything was in those brackets, it would override a or/and b depending how much you fill.
        //we can also swap positions easily like [a,b,c] = [c,b,a]; (this results in 3,2,1). 
        //More Info/Documentation: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    }
    let sum = 0;  //actually getting the sum loop
    for (let i = min; i<max+1; i++){
        sum+=i;
    }
    return sum;

};

console.log(sumAll(4,2));

// Do not edit below this line
module.exports = sumAll;
