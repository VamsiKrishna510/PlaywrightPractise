let student4: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
}
 = 
{
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: () => "" // temporary placeholder
};

// Now assign the actual arrow function
student4.getSummary = () => {
    return `${student4.name} is ${student4.age} years old and scored grade ${student4.grade}`;
};

console.log(student4.getSummary()); // Scott is 15 years old and scored grade A