'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElement(numbers, 5);
console.dir(numbers);

const cities = ['Tokyo', 'Osaka', 'Kyoto', 'Sapporo'];
removeElement(cities, 'Kyoto');
removeElement(cities, 'Osaka');
console.dir(cities);
