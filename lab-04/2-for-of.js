'use strict';

const sum = (...args) => {
  let total = 0;
  for (const number of args) total += number;
  return total;
};

console.log(sum(1, 2, 3));
console.log(sum(10, -1, -1, -1));
