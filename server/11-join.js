const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log('Con for:', rtaFinal);

const rta2 = elements.join(separator, elements);
console.log('Con join:', rta2);



const title = 'Curso de manipulación de Arrays';

const url = title.split(' ').join('-').toLowerCase();

console.log(url)