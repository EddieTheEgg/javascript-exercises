const getTheTitles = function(array) {

    const bookList = [];

    for (let i = 0; i<array.length; i++){
        bookList[i] = array[i]["title"];
    }

    return bookList;

};

const books = [
    {
      title: 'Book',
      author: 'Name',
    },
    {
      title: 'Book2',
      author: 'Name2',
    },
  ]

  console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
