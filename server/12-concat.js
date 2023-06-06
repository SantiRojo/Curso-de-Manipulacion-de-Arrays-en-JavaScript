const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
};

console.log('Con for:', newArray);

const otherNewArray = elements.concat(othersElements);
const otherNewArray2 = [...elements,...othersElements];
const otherNewArray3 = [...elements,...'random'];
console.log('Con concat:', otherNewArray);
console.log('...:', otherNewArray2);
console.log('...:', otherNewArray3);

let prueba = [...'hola'];

console.log(prueba);


