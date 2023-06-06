// Every -> todos los elementos deben cumplir la condición

const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}

console.log('Con for', rta);

const rta2 = numbers.every(item => item <= 40);

console.log('Con every', rta2);

/////////

const team = [
  {
    name: 'Nicolás',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

let isAllowedTeam = team.every(item => item.age < 18);
console.log(isAllowedTeam);