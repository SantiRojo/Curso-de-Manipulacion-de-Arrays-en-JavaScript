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
];

console.log('original', orders);

const rta = orders.map(item => item.total);

console.log('new', rta);


/* const taxes = orders.map(item => {
  item.tax = .19;
  return item;
})

console.log('Taxes: ', taxes); // Modifica al objeto original */
console.log('original', orders);

const newTaxes = orders.map((item) => {
  return {
    ...item,
    tax: .19
  };
});

console.log('Orders with taxes', newTaxes); // No modifica al original