const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => (
  `${name} is ${length} ${measurementUnit} long`
);

ships.forEach((ship) => console.log(shipLength(ship)));
// 'Titanic is 269.1 meters long'
// 'Queen Mary 2 is 1132 feet long'
// 'Yamato is 256 meters long'
