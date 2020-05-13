const persons = [
    {name: "martin", age: 20},
    {name: "lina", age: 12},
    {name: "nancy", age: 62},
    {name: "lisa", age: 53},
    {name: "oter", age: 42},
    {name: "tjird", age: 24}
]

const olderThanFifty = persons.filter((person) => person.age >= 50);
console.log(olderThanFifty);

const names = persons.map((person) => person.name);
console.log(names);

const lisa = persons.find((person) => person.name == 'lisa');
console.log(lisa);

persons.forEach((person) => console.log(person.age));

const anyYoungerThanTwenty = persons.some((person) => person.age < 20);
console.log(anyYoungerThanTwenty);

const everyoneOlderThanTen = persons.every((person) => person.age >= 10);
console.log(everyoneOlderThanTen);

const totalAge = persons.reduce((totalAge, person) => {
    return person.age + totalAge;
}, 0);
console.log(totalAge);

const includeslisa = names.includes('lisa');
console.log(includeslisa);