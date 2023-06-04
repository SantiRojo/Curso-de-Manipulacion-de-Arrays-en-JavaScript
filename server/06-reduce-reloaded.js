const items = [1, 3, 2, 3, 3, 1, 10];

// 'obj' -> acumulador
const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log('rta: ', rta);

////////

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'high',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Lucia',
    level: 'high',
  }
];

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta2);