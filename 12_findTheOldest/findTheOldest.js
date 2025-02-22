function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// const findTheOldest = function(people) {
//     let total = 0;
//     let oldestPerson = {};
//     people.reduce((prev, curr) => {
//         if(getAge(curr.yearOfBirth, curr.yearOfDeath) > total) {
//             total = (curr.yearOfBirth, curr.yearOfDeath);
//             oldestPerson = curr;
//         }
//         return prev;
//     });
//     return oldestPerson;
// };
// Do not edit below this line
module.exports = findTheOldest;
