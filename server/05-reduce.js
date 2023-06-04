const totals = [1, 2, 3, 4];

// Reduce con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

console.log('Con for', sum);

// Reduce
const reducedArray = totals.reduce((sum, element) => sum + element, 0);
console.log('Con Reduce', reducedArray);