
const findTheOldest = function(array) {
    let age = 0;
    let personOldest;
    for (let i = 0; i<array.length; i++){
        if (array[i]["yearOfDeath"]-array[i]["yearOfBirth"] > age){
            personOldest = array[i]["name"];
            age = array[i]["yearOfDeath"]-array[i]["yearOfBirth"]; 
        }
    }
    return personOldest;
};

  const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
