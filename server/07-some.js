const numbers = [1, 2, 3, 4];

let rta = false;

// Con for
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log('rta1', rta);

// Con Some
const rta2 = numbers.some(item => item %2 === 0);
console.log('rta2', rta2);


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

const isSomeDeliveredOrders = orders.some(order => order.delivered);

console.log('isSomeDeliveredOrders', isSomeDeliveredOrders);

const dates = [
  {
    startDate:new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    tittle: 'Cita de trabajo',
  },
  {
    startDate:new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    tittle: 'Cita con mi jefe',
  },
  {
    startDate:new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    tittle: 'Cena',
  },
];

const newAppointment1 = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
}
const newAppointment2 = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate},
    );
  });
};

console.log('isOverlap' ,isOverlap(newAppointment1));
console.log('isOverlap' ,isOverlap(newAppointment2));