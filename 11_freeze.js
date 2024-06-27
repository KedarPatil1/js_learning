const person={
    firstName:"Kedar",
    lastName: "Patil"
}

console.log(`${person.firstName}`);
//Object.freeze(person)
person.firstName="HELLO"

console.log(`${person.firstName}`);