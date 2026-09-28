'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const typeCounts = {};

for (const item of arr) {
  const type = typeof item;
  
  if (typeCounts[type]) {
    typeCounts[type] += 1;
  } else {
    typeCounts[type] = 1;
  }
}
console.dir(typeCounts);