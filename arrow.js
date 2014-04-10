var users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];
var ages = users.map(user => user.age);
var sum = ages.reduce((a, b) => a + b);
console.log('Age sum', sum);
