const fibonacci = function(count) {


    const array = [1,1];
    //Checking if the parameter is ok

    if (count == 1 || count == 2 ) {
        return array[count-1];
    }
    else if (count >2){
        for (let i = 2; i < count; i++){
            array[i] = array[i-1] + array[i-2];
        }
    }
    else{
        return `the input is kinda cringe, try reinputting an integer please. Your input was "${count}"`;
    }

    return array[count-1];

};


console.log(fibonacci("fifteen"));
// Do not edit below this line
module.exports = fibonacci;
