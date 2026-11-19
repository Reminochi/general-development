'use strict';

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) result.push(item);
  }
  return result;
};

console.dir(difference([7, -2, 10, 5, 0], [0, 10]));
console.dir(difference(
  ['Tokyo', 'Osaka'],
  ['Osaka', 'Kyoto', 'Sapporo']
));
