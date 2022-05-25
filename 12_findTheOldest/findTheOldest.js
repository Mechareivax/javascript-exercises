const findTheOldest = function(people) {
    //add a property yearsLived that is yearDeath - yearBirth
    //if yearDeath not a property make it currentYear - yearBirth
    //sort the objects by how high that number is
    let currentYear = new Date().getFullYear();
    let newPeopleArr = people.map(person => {
        if ('yearOfDeath' in person){
            person.yearsLived = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.yearsLived = currentYear - person.yearOfBirth;
        }
        return person;
    })
    
    newPeopleArr.sort((a,b) => b.yearsLived - a.yearsLived);
    return newPeopleArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
