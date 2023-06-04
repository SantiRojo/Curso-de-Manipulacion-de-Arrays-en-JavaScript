const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

// Equivalente a Filter con ciclo for
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log('new Array', newArray);
console.log('original', words);

// Con Filter
const rta = words.filter(item => item.length >= 6);
console.log('rta', rta)


////////

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
  {
    customerName: 'Nicolas',
    total: 180,
    delivered: false,
  },
];

const deliveredOrders = orders.filter(item => item.delivered && item.total >= 100);

console.log('Delivered Orders', deliveredOrders);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
}

console.log(search('Nico'));
console.log(search('a'));
console.log(search('x'));