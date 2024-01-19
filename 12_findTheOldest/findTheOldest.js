const findTheOldest = function(people) {
    //to check for the people still alive
    if (!people[0].yearOfDeath) {people[0].yearOfDeath = 2024;}

    let buffer = {
        name : people[0].name,
        age : people[0].yearOfDeath - people[0].yearOfBirth
    };

    for (i in people) {
        //to check for the people still alive
        if (!people[i].yearOfDeath) {people[i].yearOfDeath = 2024;}

        personAge = parseInt(people[i].yearOfDeath) - parseInt(people[i].yearOfBirth);
        if (personAge > buffer.age) {
            buffer.name = people[i].name;
            buffer.age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    return buffer;
};

// Do not edit below this line
module.exports = findTheOldest;
