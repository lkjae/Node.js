function getPerson() {
    return{
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "New York",
        country: "USA"
    };
}

var {firstName, lastName, age, city} = getPerson();
console.log(age);
console.log(city);
