'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.dir(random(10, 20));
console.dir(random(5));