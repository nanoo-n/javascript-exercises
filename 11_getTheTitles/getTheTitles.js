//REMOVE BELOW

//REMOVE ABOVE

const getTheTitles = function(input) {
    let bookTitles = [];
    for (let i = 0; i < input.length; i++) {
        bookTitles.push(input[i].title);
        //console.log(bookTitles);
    }
    return(bookTitles);
};

//REMOVE BELOW
//getTheTitles();
//REMOVE ABOVE

// Do not edit below this line
module.exports = getTheTitles;
